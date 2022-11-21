import type { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Player } from "@lottiefiles/react-lottie-player";
// import useWindowDimensions from "../hooks/useWindowDimensions";
import { isIOS, deviceDetect, osVersion } from "react-device-detect";
import { Experience, UserInfo, Project, Skill, Social, SiteInfo } from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchUserInfo } from "../utils/fetchUserInfo";
import { fetchSiteInfo } from "../utils/fetchSiteInfo";
import { urlFor } from "../sanity";

type Props = {
  siteInfo: SiteInfo;
  userInfo: UserInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ siteInfo, userInfo, experience, projects, skills, socials }: Props) => {
  const [toggle, setToggle] = useState(false);


  const Loading = function () {
    return (
      <div className={`flex flex-col bg-[#282C34] justify-center items-center  overscroll-none ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}>
        <Head>
          <title>
            Loading...
          </title>
          <link rel="icon" href={urlFor(siteInfo?.favicon).url()} />
          <meta name="theme-color" content="#282C34"></meta>
        </Head>

        <Player
          autoplay
          loop={true}
          renderer="svg"
          src="https://assets1.lottiefiles.com/packages/lf20_u38thn1f.json"
          style={{
            height: "100px",
            width: "100px",
          }}
        />
        <h1 className="uppercase tracking-[16px] text-white text-2xl">Loading...</h1>
      </div>
    );
  };

  const Site = function () {
    return (
      <div
        className={`bg-[#282C34] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-[#303640] scrollbar-thumb-rounded-full scrollbar-thin ${
          osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"
        }`}
      >
        <Head>
          <title>
            {userInfo?.firstName} {userInfo?.lastName} | Portfolio
          </title>
          <link rel="icon" href={urlFor(siteInfo?.favicon).url()} />
          <meta name="theme-color" content="#282C34"></meta>
        </Head>

        <Header socials={socials} />

        <section id="hero" className="snap-start snap-always">
          <Hero userInfo={userInfo} />
        </section>

        <section id="about" className="snap-start snap-always">
          <About userInfo={userInfo} />
        </section>

        <section id="experience" className="snap-start snap-always">
          <WorkExperience experience={experience} />
        </section>

        <section id="skills" className="snap-start snap-always">
        <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start snap-always">
        <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start snap-always overflow-none">
        <Contact />
        </section>
      </div>
    );
  };

  function HandleLoading() {
    setTimeout(() => {
      setToggle(true);
    }, 3000);

    if (toggle) {
      return <Site />;
    } else {
      return <Loading />;
    }
  }

  return (
    <>
      <HandleLoading />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const siteInfo: SiteInfo = await fetchSiteInfo();
  const userInfo: UserInfo = await fetchUserInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return { props: { siteInfo, userInfo, experience, projects, skills, socials }, revalidate: 30 };
};
