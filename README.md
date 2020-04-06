# OpenAPI-Link-Generator Demo

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rwth-acis/openapi-link-generator-demo/CI)
![License](https://img.shields.io/github/license/rwth-acis/openapi-link-generator-demo)
![Heroku](https://heroku-badge.herokuapp.com/?app=openapi-link-generator)

A live demo is available [here](https://openapi-link-generator.herokuapp.com).

This repository contains a demo webservice for [OpenAPI-Link-Generator](https://github.com/rwth-acis/openapi-link-generator).
It allows to input an OpenAPI document via file upload or by pasting the text directly.
The document is then processed by the link generator and the result is displayed.

## Development

This project consists of an Angular frontend and a Node backend using express.
Frontend files are located in [src/](src/), backend files are located in [api/](api/).

## Development Server

Run `npm run watch` to start the backend and frontend simultaneously in watch mode.
The application will automatically watch for code changes.

Open the webpage at [localhost:4200](http://localhost:4200).

## Build

You can build the production version by running `npm run build`.
The output files are located in [dist/](dist/).
You can then start the application running `npm start`.
