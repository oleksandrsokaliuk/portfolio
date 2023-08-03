import DataI, { Language } from "./dataTypes";
import { programmingSkills } from "./generalData";
import germanCV from "./../assets/Lebenslauf_Sokaliuk.docx";

const germanData: DataI = {
  cv: germanCV,
  cvName: "Lebenslauf_Sokaliuk",
  language: Language.GERMAN,
  introduction: {
    header: "full-stack",
    subHeader: "webentwickler",
    scrollButton: ["scrollen"],
  },
  aboutMe: {
    whoAmI: "wer bin ich?",
    name: {
      title: "Name",
      description: "Oleksandr Sokaliuk",
    },
    birthDate: {
      title: "Geburtsdatum",
      description: "18.08.1997",
    },
    county: {
      title: "Land",
      description: "Deutschland",
    },
    city: {
      title: "Stadt",
      description: "Stuttgart",
    },
    nationality: {
      title: "Nationalität",
      description: "ukrainisch",
    },
    cvButton: "Lebenslauf",
  },
  interests: {
    football: {
      header: "Fußballer",
      description:
        "Ich spiele seit meinem 7. Lebensjahr Fußball. Es ist meine Leidenschaft.",
      team: "SV Oberjesingen",
      league: "Kreisliga B6",
      position: "Zentraler Verteidiger",
    },
    music: {
      header: "Melomane",
      description:
        "Ich bin ein Musikliebhaber und finde beim Programmieren Inspiration und Fokus in verschiedenen Genres.",
      genres: "Hip-Hop, Country, Rock, Klassische Musik",
    },
    videoGames: {
      header: "Gamer",
      description:
        "Ich bin ein leidenschaftlicher Videospieler, der die problemlösenden und strategischen Aspekte des Spielens schätzt.",
      genres: "RPG, Strategie, Simulation",
      favGames: "FIFA, Civilization VI",
    },
    languages: {
      header: "Sprachen-Enthusiast",
      description:
        "Ich bin ein begeisterter Sprachlerner und immer bereit, neue Fremdsprachen zu erkunden und zu beherrschen.",
    },
  },
  edAndExp: {
    runningLine: "bildung und erfahrung",
    header: {
      newComer: "ein Neuling, aber",
      motivated: "hochmotiviert",
      lawyer: "... und ja, ich war zuvor Jurist",
    },
    experience: {
      wildCode: {
        name: "WildCodeSchool Bootcamp",
        nameDescr: "Full-Stack Webentwicklungs-Bootcamp",
        where: "Ort: Berlin, Deutschland",
        duration: "Dauer: Juli 2022 - Dezember 2022",
      },
      attAssist: {
        name: "Rechtsanwaltsassistent",
        where: "Ort: Odesa, Ukraine",
        duration: "Dauer: November 2021 - März 2023",
      },
      senAssist: {
        name: "Senior Assistent bei TCM Group Ukraine",
        where: "Ort: Kyiv, Ukraine",
        duration: "Dauer: Dezember 2018 - August 2021",
      },
      intern: {
        name: "Praktikant / Junior Assistent bei der Kanzlei 	&#8220; Legrannt &#8221; ",
        where: "Ort: Odesa, Ukraine",
        duration: "Dauer: April 2018 - September 2018",
      },
    },
  },
  skills: {
    title: "Fähigkeiten",
    programmingSkills,
    languagesSkills: {
      english: {
        title: "Englisch",
        level: 83.4,
        langLevel: "C1",
      },
      german: {
        title: "Deutsch",
        level: 50,
        langLevel: "B1",
      },
      ukrainian: {
        title: "Ukrainisch",
        level: 100,
      },
      russian: {
        title: "Russisch",
        level: 100,
      },
    },
  },
  myWorks: {
    header: "Meine Arbeiten",
    filterItems: [
      "alle",
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
    header: "lass uns reden!",
    callToAction: {
      ask: "frag mich alles oder sag einfach",
      hi: "hallo...",
    },
    form: {
      name: "name",
      email: "e-mail",
      message: "nachricht",
      messagePH: "hallo...",
      button: "senden",
    },
  },
};

export default germanData;
