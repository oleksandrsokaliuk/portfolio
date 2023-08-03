import DataI, { Language } from "./dataTypes";
import { programmingSkills } from "./generalData";
import englishCV from "./../assets/CV_Sokaliuk.docx";

const englishData: DataI = {
  cv: englishCV,
  cvName: "CV_Sokaliuk",
  language: Language.ENGLISH,
  introduction: {
    header: "full-stack",
    subHeader: "web developer",
    scrollButton: ["scroll"],
  },
  aboutMe: {
    whoAmI: "who am i?",
    name: {
      title: "Name",
      description: "Oleksandr Sokaliuk",
    },
    birthDate: {
      title: "Date of birth",
      description: "18.08.1997",
    },
    county: {
      title: "Country",
      description: "Germany",
    },
    city: {
      title: "City",
      description: "Stuttgart",
    },
    nationality: {
      title: "Nationality",
      description: "ukrainian",
    },
    cvButton: "CV",
  },
  interests: {
    football: {
      header: "Footballer",
      description:
        "I've been playing soccer since I was 7 years old. It's my passion",
      team: "SV Oberjesingen",
      league: "Kreisliga B6",
      position: "Central Defender",
    },
    music: {
      header: "Melomaniac",
      description:
        "I'm a music enthusiast who finds inspiration and focus while coding through various genres",
      genres: "Hip-Hop, Country, Rock, Classical Music",
    },
    videoGames: {
      header: "Gamer",
      description:
        "I'm a passionate video gamer who embraces gaming's problem-solving and strategic aspects",
      genres: "RPG, Strategy, Simulation",
      favGames: "FIFA, Civilization VI",
    },
    languages: {
      header: "Language Enthusiast",
      description:
        "I am an avid language learner, always eager to explore and master new foreign languages",
    },
  },
  edAndExp: {
    runningLine: "education and experience",
    header: {
      newComer: "a newcomer but",
      motivated: "highly motivated",
      lawyer: "... and yes, I was a lawyer before",
    },
    experience: {
      wildCode: {
        name: "WildCodeSchool Bootcamp",
        nameDescr: "Full-Stack Web Development Bootcamp",
        where: "Where: Berlin, Germany",
        duration: "Duration: July 2022 - December 2022",
      },
      attAssist: {
        name: "Attorney’s Assistant",
        where: "Where: Odesa, Ukraine",
        duration: "Duration: November 2021 - March 2023",
      },
      senAssist: {
        name: "Senior Assistant at TCM Group Ukraine",
        where: "Where: Kyiv, Ukraine",
        duration: "Duration: December 2018 - August 2021",
      },
      intern: {
        name: "Intern / Junior Assistant at Legrannt Law Firm",
        where: "Where: Odesa, Ukraine",
        duration: "Duration: April 2018 - September 2018",
      },
    },
  },
  skills: {
    title: "skills",
    programmingSkills,
    languagesSkills: {
      english: {
        title: "english",
        level: 83.4,
        langLevel: "C1",
      },
      german: {
        title: "german",
        level: 50,
        langLevel: "B1",
      },
      ukrainian: {
        title: "ukrainian",
        level: 100,
      },
      russian: {
        title: "russian",
        level: 100,
      },
    },
  },
  myWorks: {
    header: "my works",
    filterItems: [
      "all",
      "javascript",
      "typescript",
      "react",
      "react native",
      "next",
      "redux",
      "nest",
    ],
  },
  feedBack: {
    header: "let's talk!",
    callToAction: {
      ask: "ask me anything or just say",
      hi: "hi...",
    },
    form: {
      name: "name",
      email: "email",
      message: "message",
      messagePH: "hi there...",
      button: "send",
    },
  },
};

export default englishData;
