const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: "8"
      }
    }
  ]
];

module.exports = {
  extends: "../babel.config.js",
  presets
};