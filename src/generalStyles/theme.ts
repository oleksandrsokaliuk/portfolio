export interface ThemeI {
  mainBG: string;
  secondaryBG: string;
  thirdBG: string;
  header: string;
  paragraph: string;
  exceptionalColour: string;
  mainFont: string;
  secondaryFont: string;
}

interface AllThemesI {
  light: ThemeI;
}

const theme: AllThemesI = {
  light: {
    mainBG: "#00061B",
    secondaryBG: "#888787",
    thirdBG: "#E6E6E6",
    header: "#ffffff",
    paragraph: "#BEBEBE",
    exceptionalColour: "#0238ED",
    mainFont: "'Noto Serif', serif",
    secondaryFont: "'Montserrat', sans-serif",
  },
};

export default theme;
