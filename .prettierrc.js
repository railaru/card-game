module.exports = {
  importOrder: [
    "^react/(.*)$",
    "^styled-components/(.*)$",
    "^api/(.*)$",
    "^store/(.*)$",
    "^components/(.*)$",
    "^utilities/(.*)$",
    "^style/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
