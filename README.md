# Com2Kube

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![BCH compliance](https://bettercodehub.com/edge/badge/CB-GJ/Com2Kube?branch=master)](https://bettercodehub.com/)
![Azure DevOps build](https://img.shields.io/azure-devops/build/com2kube/com2kube/5)
![Azure DevOps tests](https://img.shields.io/azure-devops/tests/com2kube/com2kube/5)
![Azure DevOps Deploy](https://img.shields.io/azure-devops/release/com2kube/334cc7b8-c59a-4422-a037-9972f9f8a55f/2/5)

This project aims to provide an easy way for docker-compose users to convert their deployment files for Kubernetes

## Getting started

```text
git clone https://github.com/Com2Kube/Com2Kube.git
cd Com2Kube
npm install
```

### Start the project locally

We are using Docker as our development environment so that anyone can simply clone the repository and get to work in minutes.
The only requirements is to have Docker and docker-compose installed on your computer.

```text
docker-compose up
```

To force docker to rebuild the images : `docker-compose up --build`

## Build with

### Frontend

- React
- React Material UI
- [React Syntaxe Highlighter](https://github.com/conorhastings/react-syntax-highlighter/tree/f7e4774b9cbc76fb42ee97e8861349aa1d50e532)
- [React i18next](https://github.com/i18next/react-i18next)

### Backend

- ExpressJS
- Multer
- Kompose

## Roadmap

- [ ] File drop
- [ ] Helm Chart
- [ ] Download the file with preview option
- [ ] Dark theme
- [ ] Save file to Github repo

## Contribute

Thank your for contributing to our project. Please follow our [Contributing documentation](CONTRIBUTING.md) and the [Code of Conduct](CODE-OF-CONDUCT.md)

## Contributors

- [Gabriel Jean](https://github.com/GabrielJean)
- [Claire Bun](https://github.com/cbun097)

## Licence

[Apache License](LICENCE.md)
