import DataI, { Language } from "./dataTypes";
import { programmingSkills } from "./generalData";
import englishCV from "./../assets/CV_Sokaliuk.docx";

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
      description: "Штутгарт",
    },
    nationality: {
      title: "Національність",
      description: "українець",
    },
    cvButton: "Завантажити резюме",
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
        name: "Стажер / Молодший юрист в юридичній фірмі Legrannt",
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
        level: 50,
        langLevel: "B1",
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
