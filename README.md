# Compose2Kube

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![BCH compliance](https://bettercodehub.com/edge/badge/CB-GJ/Compose2Kube?branch=master)](https://bettercodehub.com/) ![](https://github.com/CB-GJ/Compose2kube/workflows/Build%20Frontend/badge.svg) ![](https://github.com/CB-GJ/Compose2kube/workflows/Build%20Backend/badge.svg)

This project aims to provide an easy way for docker-compose users to convert their deployment files for Kubernetes

## Getting started

```text
git clone https://github.com/CB-GJ/Compose2Kube
cd Compose2Kube
npm install
```

### Start the project locally

```text
cd frontend
npm run start
```

### Run the project with Docker

If you decide to run the project with Docker. Make sure to have Docker installed to your machine.

```text
docker-compose up
```

To build a new image: `docker-compose up --build`

## Technology Stack

### Frontend

- React
- React Material UI
- [React Syntaxe Highlighter](https://github.com/conorhastings/react-syntax-highlighter/tree/f7e4774b9cbc76fb42ee97e8861349aa1d50e532)

### Backend

- ExpressJS

## For the future

We would like to add these items:

- File drop
- Helm Chart
- Download the file with preview option
- Dark theme
- Save file to Github repo

## Contribute

Thank your for contributing to our project. Please follow our [Contributing documentation](CONTRIBUTING.md) and the [Code of Conduct](CODE-OF-CONDUCT.md)

## Contributors

- [Gabriel Jean](https://github.com/GabrielJean)
- [Claire Bun](https://github.com/cbun097)

## Licence

[Apache License](LICENCE.md)
