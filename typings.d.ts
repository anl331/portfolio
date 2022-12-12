interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface UserInfo extends SanityBody {
  _type: "userInfo";
  backgroundInformation: string;
  backgroundInformation2: string;
  email: string;
  heroImage: Image;
  firstName: string;
  lastName: string;
  profilePic: Image;
  role: string;
}

export interface SiteInfo extends SanityBody {
    _type: "siteInfo";
    favicon: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  image: Image;
  progress: number;
  title: string;
  _type: "skill";
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  highlights: string[];
  technology: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
