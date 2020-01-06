# combo frontend
Consumes the GraphQL api and render the content using React.

## How to install
Just run `yarn install`.

## How to run a server in development mode
Run `yarn watch` and you should be able to see the content accessing `http://localhost:3000`.

## How to generate the production ready files
Running `yarn build` webpack will generate the production ready files in the `arvore/priv/static` folder.

## How to run the tests
Just run `yarn test`. This command will run the lint before the tests too.

You can also run `yarn test:watch` to run tests in watch mode.

## How to run the lint
Run `yarn lint`.

## Folder structure

What's in each one of the folders:

```bash
├── src # all the source files
│   ├── api # api related files, such as mutations and common queries
│   ├── components # all components that aren't pages
│   │   └── lib # reusable basic UI components, like buttons, inputs and such
│   ├── config # project configurations
│   ├── ducks # redux stuff, https://github.com/erikras/ducks-modular-redux
│   ├── routes # all the routes of the project
│   ├── screens # the pages of the project, will be loaded dynamically when needed
│   ├── styles # common and global styles
│   │   ├── common # styles used in multiple places
│   │   └── global # styles that should be global
│   └── utils # some utility functions
├── tests-setup # setup and polyfills for tests
└── webpack # the configurations of the project builder
```
