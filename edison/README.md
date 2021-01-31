# Edison Module
This module is meant to run in a Intel Edison single board computer.

It contains the code already built to avoid having to install dev dependencies in the device.

To run it on Edison, clone the repo and run:
```
> npm i --prod
> npm start
```

When installing the dependencies for the first time, the compilation may fail because this project depends on both `jsupm_*` and `mraa`, however, there `mraa` must be compiled before `jsupm_*` is compiled. Some googling is needed in order to orchestrate the order of deps compilation.
