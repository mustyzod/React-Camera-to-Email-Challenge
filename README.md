# camera coding challenge

Welcome to the camera coding challenge! Your mission, should
you accept it, is to build a page that our customers can use
to take a picture of a page with their mobile phone and send the picture
to us via email.
For the frontend part of this work please use React, every other decision
about which frameworks you use is up to you. The choice will only
matter for the evaluation insofar as e. g. adding buggy external
dependencies will also affect the stability of your code.

## The fronted
The frontend was made with react js.
The frontend allows users to use their camera to take a picture.

## The backend
The backend was made with node js / express js.
The backend should send an email with the picture attached as a PDF to `an email`.

## Configuration

* __Install the dependencies using:__
`npm install`
`npm run client-install`
* __set the configuration parameters:__
Navigate to the config directory
and input your sendgrid parameters
for production,
also you can change between production environment and development in the ./config/index.js
* __Tests:__ 
`npm run test`
* __Run the application:__ 
`npm run dev`