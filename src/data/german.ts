import DataI, { Language, StackI } from "./dataTypes";
import { programmingSkills } from "./generalData";
import germanCV from "./../assets/Lebenslauf_Sokaliuk.pdf";
import TranslatorPNG from "./../assets/translator.png";
import StoriesPNG from "./../assets/stories.png";
import RemondisPNG from "./../assets/remondis.png";
import WildPostPNG from "./../assets/wild-post.png";
import ChuckagatorPNG from "./../assets/chuckagator.png";
import FighterPNG from "./../assets/fighter.png";

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
      description: "Herrenberg (Stuttgart)",
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
      team: "Mannschaft: SV Oberjesingen II",
      league: "Liga: Kreisliga B6",
    },
    learning: {
      header: "Lernbegeisterter",
    },
    coding: {
      header: "Coder",
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
        name: "Praktikant / Junior Assistent bei der Kanzlei 	'Legrannt' ",
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
        level: 66,
        langLevel: "B2",
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
      finished: "fertig",
      notFinished: "nicht fertig",
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
        description: "Web-App zum Erlernen von englischen Wörtern",
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
          "Eine Full-Stack-Web-App. Letztes Projekt im Bootcamp. Echter Kunde - Aufräum-Unternehmen",
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
          "Ein drittes Projekt im Bootcamp. Der Spieler kämpft gegen Feinde, die zufällige Entscheidungen treffen",
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
          "Ein zweites Projekt im Bootcamp. Du musst die Wörter erraten, die dein Freund nicht sieht",
        finished: true,
        githubFront:
          "https://github.com/WildCodeSchool/2022-07-EN-Berlin-Remote1-Project2Team2",
        picture: ChuckagatorPNG,
      },
      {
        name: "the wild post",
        stack: [StackI.HTML, StackI.CSS],
        description:
          "Ein erstes Projekt im Bootcamp. Eine einfache Zeitung über meine Gruppe",
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
        description: "Eigenes Projekt. Web-App zum Teilen von Träumen",
        finished: false,
        picture: StoriesPNG,
        githubFront: "https://github.com/oleksandrsokaliuk/S.Tories",
        githubBack: "https://github.com/oleksandrsokaliuk/S.toriesBACK",
      },
    ],
  },
  feedBack: {
    header: "lass uns reden",
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
    errors: {
      name: {
        required: "Der Name ist ein Pflichtfeld",
        condition: "Der Name muss zwischen 2 und 50 Zeichen lang sein",
      },
      email: {
        required: "Die E-Mail ist ein Pflichtfeld",
        condition: "Die E-Mail muss eine gültige E-Mail-Adresse sein",
      },
      message: {
        required: "Die Nachricht ist ein Pflichtfeld",
        condition: "Die Nachricht muss mindestens 5 Zeichen lang sein",
      },
    },
  },
};

export default germanData;
