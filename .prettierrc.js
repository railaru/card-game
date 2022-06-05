module.exports = {
  importOrder: [
    "^react/(.*)$",
    "^@reduxjs/(.*)$",
    "^styled-components/(.*)$",
    "^store/(.*)$",
    "^components/(.*)$",
    "^utilities/(.*)$",
    "^style/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
