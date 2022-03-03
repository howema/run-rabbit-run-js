# Apprentice Project Starter

Hey there! This repository is a template starter repository for apprentices who are looking to create their side projects. With support for Webpack, Sass, and Jest, what else could you ask for?

## Getting Started

1. Create Your Repo
Create a repository from this template. Not sure how to do that? Head over to [Creating a repository from a template][GitHub-RepoFromTemplate].
1. Install all required dependencies (`npm i`).
1. Get building!

## Running the Project

For the most part, you'll be running `npm run dev`. This command will run your project in development mode on your local machine at <http://localhost:8080>. Running in development mode will automatically update your project in the browser using [hot module replacement][Webpack-HotModule] without _actually_ reloading the project. This means you can make change to your code and see the results quickly.

Running your project in development mode is different than production mode. In production mode, the hot module replacement and live reloading are disabled. These production builds of the application are generally smaller and are focused on performance. While development mode is great for local development, the production builds are what you'll use if you choose to deploy your project to a platform like [Heroku][Heroku-About] or [Netlify][Netlify-About].

## Deploying

Want to take your project to the next level? You can deploy your project (for free!) to Netlify. To get started, update the URL for the `repository` query parameter in the markdown below (currently set to `http://github.com/sparkbox/apprentice-project-starter`) to the URL of your project. Then click, "Deploy to Netlify" to get the project setup. Once your project is setup in Netlify, it will automatically deploy when changes are merged into your production branch.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=http://github.com/sparkbox/apprentice-project-starter)

## All Available Commands

| Command  | Description |
| ------------- | ------------- |
| `npm run dev`  | Build and run the project in development mode  |
| `npm test`  | Run all Jest tests  |
| `npm test:coverage`  | Run all Jest tests, but with coverage collected  |
| `npm run lint`  | Lint all JavaScript and Sass/CSS  |
| `npm run lint:js`  | Lint only JavaScript  |
| `npm run lint:css`  | Lint all Sass/CSS  |
| `npm build`  | Build the project for production  |
| `npm build:dev`  | Build the project for development  |

[GitHub-RepoFromTemplate]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[Heroku-About]: https://www.heroku.com/about
[Netlify-About]: https://www.netlify.com/products/
[Webpack-HotModule]: https://webpack.js.org/concepts/hot-module-replacement/
