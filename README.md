# Strapi Starter Gatsby Catalog [WIP]

This starter allows you to create a Catalog using Gatsby with a Strapi backend.  The example uses musical instruments, but it could be used with any product and could be customized for many different use cases.  This is an open source project open to contributions.  Feel free to add features and report bugs.

## Features
- 2 Components (Specifications, Related Products)
- 2 Collection types: Product, Catgory
- Local Search using [gatsby-plugin-local-search](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/)
- Responsive design using Tailwind CSS

## Getting started

The easiest way to try this starter is to run it locally on your computer.

First, you'll need to create your own copy of this starter. You can do so by clicking [the "Use this template" button](https://github.com/strapi/strapi-starter-gatsby-catalog/generate) on GitHub, and filling the [form](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

### Backend

Create a Strapi project named `backend` using the [catalog template](https://github.com/strapi/strapi-template-catalog):

```
# Using Yarn
yarn create strapi-app backend --template https://github.com/strapi/strapi-template-catalog

# Or using NPM
npx create-strapi-app backend --template https://github.com/strapi/strapi-template-catalog
```

The Strapi server will automatically start and import sample seed data.

### Frontend

Leave the Strapi backend running in the background. Open another terminal tab, and make sure you're in the `frontend` directory:

```bash
cd frontend
```

Then install dependencies and start the server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

The Gatsby server will run here => [http://localhost:8000](http://localhost:8000)