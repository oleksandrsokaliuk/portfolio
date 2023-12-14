import DataI, { Language, StackI } from "./dataTypes";
import { programmingSkills } from "./generalData";
import englishCV from "./../assets/CV_Sokaliuk.pdf";
import TranslatorPNG from "./../assets/translator.png";
import StoriesPNG from "./../assets/stories.png";
import RemondisPNG from "./../assets/remondis.png";
import WildPostPNG from "./../assets/wild-post.png";
import ChuckagatorPNG from "./../assets/chuckagator.png";
import FighterPNG from "./../assets/fighter.png";

const ukrainianData: DataI = {
  cv: englishCV,
  cvName: "Резюме",
  language: Language.UKRAINIAN,
  introduction: {
    header: "Full-Stack",
    subHeader: "веб-розробник",
    scrollButton: ["прокрути"],
  },
  aboutMe: {
    whoAmI: "хто я?",
    name: {
      title: "ім'я",
      description: "Олександр Сокалюк",
    },
    birthDate: {
      title: "Дата народження",
      description: "18.08.1997",
    },
    county: {
      title: "Країна",
      description: "Німеччина",
    },
    city: {
      title: "Місто",
      description: "Херренберг (Штуттгарт)",
    },
    nationality: {
      title: "Національність",
      description: "українець",
    },
    cvButton: "Резюме",
  },
  interests: {
    football: {
      header: "Футболіст",
      description: "Я граю у футбол з 7 років. Це моя страсть",
      team: "SV Oberjesingen",
      league: "Kreisliga B6",
      position: "Центральний захисник",
    },
    music: {
      header: "Меломан",
      description:
        "Я люблю музику і знаходжу натхнення та фокус, працюючи над кодом, слухаючи різні жанри",
      genres: "Хіп-хоп, Кантрі, Рок, Класична музика",
    },
    videoGames: {
      header: "Геймер",
      description:
        "Я відданий гравець, який оцінює головоломки та стратегічні аспекти в іграх",
      genres: "RPG, Стратегія, Симуляція",
      favGames: "FIFA, Civilization VI",
    },
    languages: {
      header: "Ентузіаст мов",
      description: "Я завжди готовий вивчати і засвоювати нові іноземні мови",
    },
  },
  edAndExp: {
    runningLine: "Освіта та досвід",
    header: {
      newComer: "Новачок, але",
      motivated: "високомотивований",
      lawyer: "... і так, раніше я був юристом",
    },
    experience: {
      wildCode: {
        name: "WildCodeSchool Bootcamp",
        nameDescr: "Full-Stack Bootcamp з веб-розробки ",
        where: "Місце: Берлін, Німеччина",
        duration: "Тривалість: липень 2022 - грудень 2022",
      },
      attAssist: {
        name: "Помічник адвоката",
        where: "Місце: Одеса, Україна",
        duration: "Тривалість: листопад 2021 - березень 2023",
      },
      senAssist: {
        name: "Старший Юрист в TCM Group Ukraine",
        where: "Місце: Київ, Україна",
        duration: "Тривалість: грудень 2018 - серпень 2021",
      },
      intern: {
        name: "Стажер / Молодший юрист в юридичній фірмі 'Legrannt'",
        where: "Місце: Одеса, Україна",
        duration: "Тривалість: квітень 2018 - вересень 2018",
      },
    },
  },
  skills: {
    title: "Навички",
    programmingSkills,
    languagesSkills: {
      english: {
        title: "Англійська",
        level: 83.4,
        langLevel: "C1",
      },
      german: {
        title: "Німецька",
        level: 66,
        langLevel: "B2",
      },
      ukrainian: {
        title: "Українська",
        level: 100,
      },
      russian: {
        title: "Російська",
        level: 100,
      },
    },
  },
  myWorks: {
    header: "Мої роботи",
    filterItems: [
      "всі",
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
      finished: "завершений",
      notFinished: "не завершений",
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
        description: "Веб-додаток для вивчення англійських слів",
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
          "Повностековий веб-додаток. Останній проект у буткемпі. Реальний клієнт - компанія з прибирання",
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
          "Третій проект у буткемпі. Гравець бореться з ворогами, які приймають випадкові рішення",
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
          "Другий проект у буткемпі. Ви повинні вгадати слова, які не бачить ваш друг",
        finished: true,
        githubFront:
          "https://github.com/WildCodeSchool/2022-07-EN-Berlin-Remote1-Project2Team2",
        picture: ChuckagatorPNG,
      },
      {
        name: "the wild post",
        stack: [StackI.HTML, StackI.CSS],
        description: "Перший проект у буткемпі. Проста газета про нашу групу",
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
        description: "Власний проект. Веб-додаток для обміну мріями",
        finished: false,
        picture: StoriesPNG,
        githubFront: "https://github.com/oleksandrsokaliuk/S.Tories",
        githubBack: "https://github.com/oleksandrsokaliuk/S.toriesBACK",
      },
    ],
  },
  feedBack: {
    header: "давай поговоримо!",
    callToAction: {
      ask: "спитай мене будь-що або просто скажи",
      hi: "привіт...",
    },
    form: {
      name: "ім'я",
      email: "email",
      message: "повідомлення",
      messagePH: "привіт...",
      button: "відправити",
    },
  },
};

export default ukrainianData;
