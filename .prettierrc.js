module.exports = {
  importOrder: [
    "^react/(.*)$",
    "^react-redux/(.*)$",
    "^@reduxjs/(.*)$",
    "^styled-components/(.*)$",
    "^models/(.*)$",
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
