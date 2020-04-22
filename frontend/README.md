# Com2kube - Frontend

This is the frontend architecture for Com2kube made in React and React Material UI.

## App Structure

    .
    ├── public                  # Compiled files (alternatively `dist`)
    |   └── locales             # translation files
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    |   ├── assets              # Icons, images and data files
    |   ├── components          # Components use in the app
    |   ├── pages               # Pages in the app
    |   └── themes              # Core component in the app (`footer` and `header`)
    ├── __tests__               # Automated tests (alternatively `spec` or `tests`)
    ├── __mocks__               #  Mock functions
    ├── Dockerfile              # Frontend dockerfile
    ├── package.json
    └── README.md

## Features

- Linting
- Prettier
- Unit testing with Jest
- React Material UI
- React Syntax Highlight
- Translations (French and English) with React i18next
