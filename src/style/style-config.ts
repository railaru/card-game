export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXl: "520px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  mobileXl: `(min-width: ${sizes.mobileXl})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const colors = {
  light: "#fff",
  dark: "#3A3845",
  primary: "#C69B7B",
  accent: "#826F66",
};

export const transitions = {
  fast: "100ms",
  medium: "200ms",
};

export const boxShadows = {
  softWide: "0px 4px 40px rgba(0, 0, 0, 0.05)",
  softWideElevated: "0px 4px 20px 10px rgba(0, 0, 0, 0.05)",
};
