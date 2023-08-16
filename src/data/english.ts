import DataI, { Language, StackI } from "./dataTypes";
import { programmingSkills } from "./generalData";
import englishCV from "./../assets/CV_Sokaliuk.pdf";
import TranslatorPNG from "./../assets/translator.png";
import StoriesPNG from "./../assets/stories.png";
import RemondisPNG from "./../assets/remondis.png";
import WildPostPNG from "./../assets/wild-post.png";
import ChuckagatorPNG from "./../assets/chuckagator.png";
import FighterPNG from "./../assets/fighter.png";

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
      StackI.HTML,
      StackI.CSS,
      StackI.JAVASCRIPT,
      StackI.TYPESCRIPT,
      StackI.REACT,
      StackI.STYLEDCOMPONENTS,
      StackI.REDUX,
      StackI.REACTNATIVE,
      StackI.NEXT,
      StackI.NEST,
      StackI.EXPRESS,
      StackI.MONGOOSE,
      StackI.WEBSOCKET,
    ],
    isFinished: {
      finished: "finished",
      notFinished: "not finished",
    },
    works: [
      {
        name: "translator",
        stack: [
          StackI.HTML,
          StackI.STYLEDCOMPONENTS,
          StackI.TYPESCRIPT,
          StackI.REACT,
          StackI.REDUX,
        ],
        description: "Web app to learn english words",
        finished: true,
        picture: TranslatorPNG,
        githubFront: "https://github.com/oleksandrsokaliuk/the-translator",
        link: "https://oleksandrsokaliuk.github.io/the-translator/",
      },
      {
        name: "decluttering app",
        stack: [
          StackI.HTML,
          StackI.STYLEDCOMPONENTS,
          StackI.TYPESCRIPT,
          StackI.REACT,
          StackI.REDUX,
          StackI.EXPRESS,
        ],
        description:
          "A full-stack web-app. Last project in the bootcamp. Real client - decluttering company",
        finished: true,
        githubFront: "https://github.com/DevDependency/remondis-frontend",
        githubBack: "https://github.com/arkadiyshin/remondis-backend",
        picture: RemondisPNG,
      },
      {
        name: "fighter",
        stack: [
          StackI.HTML,
          StackI.JAVASCRIPT,
          StackI.REACT,
          StackI.STYLEDCOMPONENTS,
          StackI.REDUX,
          StackI.EXPRESS,
        ],
        description:
          "A third project in the bootcamp. The gamer fights against enemies making random choices",
        finished: true,
        githubFront: "https://github.com/arkadiyshin/fighter",
        picture: FighterPNG,
      },
      {
        name: "chuckagator",
        stack: [
          StackI.HTML,
          StackI.CSS,
          StackI.REACT,
          StackI.JAVASCRIPT,
          StackI.EXPRESS,
          StackI.WEBSOCKET,
        ],
        description:
          "A second project in the bootcamp. You have to guess the words, which your friend does not see",
        finished: true,
        githubFront:
          "https://github.com/WildCodeSchool/2022-07-EN-Berlin-Remote1-Project2Team2",
        picture: ChuckagatorPNG,
      },
      {
        name: "the wild post",
        stack: [StackI.HTML, StackI.CSS],
        description:
          "A first project in the bootcamp. A simple newspaper about my group",
        finished: true,
        githubFront:
          "https://github.com/WildCodeSchool/2022-07-EN-Berlin-Remote1-Project1Team2",
        picture: WildPostPNG,
      },
      {
        name: "s.tories",
        stack: [
          StackI.HTML,
          StackI.TYPESCRIPT,
          StackI.STYLEDCOMPONENTS,
          StackI.REACT,
          StackI.REDUX,
          StackI.EXPRESS,
          StackI.MONGOOSE,
        ],
        description: "Own project. Web app for sharing dreams",
        finished: false,
        picture: StoriesPNG,
        githubFront: "https://github.com/oleksandrsokaliuk/S.Tories",
        githubBack: "https://github.com/oleksandrsokaliuk/S.toriesBACK",
      },
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
