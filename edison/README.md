# Edison Module

This module is meant to run in a Intel Edison single board computer.

It contains the code already built to avoid having to install dev dependencies in the device.

To run it on Edison, clone the repo and run:

```
> npm i --prod
> npm start
```

When installing the dependencies for the first time, the compilation may fail because this project depends on both `jsupm_*` and `mraa`, however, there `mraa` must be compiled before `jsupm_*` is compiled. Some googling is needed in order to orchestrate the order of deps compilation.

## Development Environment

As I wanted to leverage from modern coding tools and techniques the development is done in TS and compiled into ES6 to run in Edison's Node 8. To set up the development environment install the dependencies with the following command:

```
> npm i --only=dev
```
