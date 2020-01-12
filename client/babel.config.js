const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: "4"
      }
    }
  ]
];

module.exports = {
  extends: "../babel.config.js",
  presets
};