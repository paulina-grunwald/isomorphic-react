# Isomorphic React

### About The Application
Application is part of the [Isomorphic React Course on](https://github.com/danielstern/isomorphic-react). 

This application is a basic API client which gathers data from an outside API (in this case, Stackoverflow) and generates an isomorphic, single-page application (SPA).

### Getting Started
1) Clone the repository 
`git clone https://github.com/paulina-grunwald/isomorphic-react`
2) install dependencies
`npm install && npm run postinstall`
3) Run the dev server
`npm run start-dev`
4) Navigate to the application's url
`http://localhost:3000/`


### Project workflow
1. Set up the project:

```npm install babel-cli@6.26.0 cross-env@5.0.5 webpack@3.6.0```
```npm init --yes```
```npm install g gitignore && gitignore node```

2. Configure Babel:

```npm  install --save babel-plugin-transform-object-rest-spread@6.26.0```            ```npm  install --save babel-preset-env@1.6.0 babel-preset-react@6.24.1``` 
```npm install --save babel-core@6.26.0 babel-loader@7.1.2 babel-regenerator-runtime@6.5.0```