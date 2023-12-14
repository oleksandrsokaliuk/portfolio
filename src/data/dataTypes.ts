export enum Language {
  ENGLISH = "eng",
  GERMAN = "deu",
  UKRAINIAN = "ukr",
}

export interface SkillsI {
  title: string;
  level?: number;
  langLevel?: string;
  langProgress?: number;
}

export interface ProgrammingSkillsI {
  html: SkillsI;
  css: SkillsI;
  js: SkillsI;
  ts: SkillsI;
  react: SkillsI;
  reactNative: SkillsI;
  next: SkillsI;
  nest: SkillsI;
}

export interface FamousNamesEmailsI {
  name: string;
  email: string;
}

export interface ExperienceI {
  name: string;
  nameDescr?: string;
  where: string;
  duration: string;
  index?: number;
}

export interface WorksI {
  name: string;
  stack: StackI[];
  description: string;
  finished: boolean;
  picture: string;
  githubFront: string;
  githubBack?: string;
  link?: string;
}

export enum StackI {
  HTML = "html",
  CSS = "css",
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  REACT = "react",
  STYLEDCOMPONENTS = "styled-components",
  REACTNATIVE = "react native",
  REDUX = "redux",
  NEXT = "next",
  NEST = "nest",
  EXPRESS = "express",
  MONGOOSE = "mongoose",
  WEBSOCKET = "websocket",
}

interface DataI {
  cv: string;
  cvName: string;
  language: Language;
  introduction: {
    header: string;
    subHeader: string;
    scrollButton: string[];
  };
  aboutMe: {
    whoAmI: string;
    name: {
      title: string;
      description: string;
    };
    birthDate: {
      title: string;
      description: string;
    };
    county: {
      title: string;
      description: string;
    };
    city: {
      title: string;
      description: string;
    };
    nationality: {
      title: string;
      description: string;
    };
    cvButton: string;
  };
  interests: {
    football: {
      header: string;
      description: string;
      team: string;
      league: string;
      position: string;
    };
    music: {
      header: string;
      description: string;
      genres: string;
    };
    videoGames: {
      header: string;
      description: string;
      genres: string;
      favGames: string;
    };
    languages: {
      header: string;
      description: string;
    };
  };
  edAndExp: {
    runningLine: string;
    header: {
      newComer: string;
      motivated: string;
      lawyer: string;
    };
    experience: {
      wildCode: ExperienceI;
      attAssist: ExperienceI;
      senAssist: ExperienceI;
      intern: ExperienceI;
    };
  };
  skills: {
    title: string;
    programmingSkills: ProgrammingSkillsI;
    languagesSkills: {
      english: SkillsI;
      german: SkillsI;
      ukrainian: SkillsI;
      russian: SkillsI;
    };
  };
  myWorks: {
    header: string;
    filterItems: (string | StackI)[];
    isFinished: {
      finished: string;
      notFinished: string;
    };
    works: WorksI[];
  };
  feedBack: {
    header: string;
    callToAction: {
      ask: string;
      hi: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      messagePH: string;
      button: string;
    };
  };
}

export default DataI;
