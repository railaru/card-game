module.exports = {
  importOrder: [
    "^react/(.*)$",
    "^api/(.*)$",
    "^store/(.*)$",
    "^components/(.*)$",
    "^utilities/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
