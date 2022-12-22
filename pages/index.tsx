import type { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";

// Dynamic Imports
const About = dynamic(() => import("../components/About"));
const Contact = dynamic(() => import("../components/Contact"));
const WorkExperience = dynamic(() => import("../components/WorkExperience"));
const Projects = dynamic(() => import("../components/Projects"));
const Skills = dynamic(() => import("../components/Skills"));

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
  return (
    <div
      className={`text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0  scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-white scrollbar-thumb-rounded-full scrollbar-thin ${
        osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"
      }`}
    >
      <Head>
        <title>Alfredo Natal | Portfolio</title>
        <link rel="icon" href={urlFor(siteInfo?.favicon).url()} />
        <meta name="theme-color" content="#020202"></meta>
        <meta name="description" content="A personal portfolio for Alfredo Natal to illustrate his work and experience."></meta>
      </Head>

      <main className="max-w-screen-2xl mx-auto bg-[#020202] bg-[url('https://cdn.sanity.io/images/6j55bdp8/production/9f1ce3168c14a192160707553ebcb120bb2eab3c-466x349.png')] bg-blend-lighten bg-[length:800px_800px]">
        <Header socials={socials} />

        <section id="hero" className="snap-start snap-always">
          <Hero userInfo={userInfo}  siteInfo={siteInfo}/>
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
      </main>
    </div>
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

  return { props: { siteInfo, userInfo, experience, projects, skills, socials }, revalidate: 5 };
};
