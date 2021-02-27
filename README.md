[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/celsopalmeiraneto/my-iot-home.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/celsopalmeiraneto/my-iot-home/context:javascript)

# my-iot-home

This project is an effort to make some home-made automation by using old pieces of IoT hardware I have laying around.

Currently, all it does is read data from the sensors. It should, in the future:

- Send data using MQTT - The Yocto Linux used in the Intel Edison comes with Eclipse Mosquitto pre-installed, so leveraging it would be great.
- Get all data and store somewhere locally.
- Display the data and use actuators.
