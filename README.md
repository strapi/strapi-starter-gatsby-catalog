# Strapi Starter Gatsby Catalog

![screenshot image](/screenshot.png)

This starter allows you to create a Catalog using Gatsby with a Strapi backend. The starter, and its associated template, uses musical instruments as sample seed data, but it could be customized for any product.

This is an open source project. Feel free to contribute by adding features and reporting bugs.

## Features

- 2 Collection types: Product, Category
- Specifications component for products
- Related products
- Local Search using [gatsby-plugin-local-search](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/)
- Responsive design using Tailwind CSS

## Getting started

Use our `create-strapi-starter` CLI to create your project.

```sh
# Using Yarn
yarn create strapi-starter my-project gatsby-catalog

# Or using NPM
npx create-strapi-starter my-project gatsby-catalog
```

The CLI will create a monorepo, install dependencies, and run your project automatically.

The Gatsby frontend server will run here => [http://localhost:8000](http://localhost:8000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Gatsby](https://www.gatsbyjs.com/docs/deploying-and-hosting/)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required: 
- `API_URL`: URL of your Strapi backend, without trailing slash


Enjoy this starter!