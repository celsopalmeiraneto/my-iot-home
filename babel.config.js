const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: "12"
      },
      useBuiltIns: "usage",
      corejs: 3,
      modules: "commonjs"
    }
  ]
];

module.exports = {
  presets
};