module.exports = {
  importOrder: [
    "^react/(.*)$",
    "^@reduxjs/(.*)$",
    "^styled-components/(.*)$",
    "^models/(.*)$",
    "^store/(.*)$",
    "^components/(.*)$",
    "^utilities/(.*)$",
    "^style/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
