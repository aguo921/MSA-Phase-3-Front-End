# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Next.js](https://nextjs.org/) as a framework.

Run `npm install` to install the required dependencies.

## Acquiring API key

Open the [Credentials page](https://console.developers.google.com/apis/credentials) in the API Console and create an API key in the Console by clicking Create credentials  > API key.

Create a `.env.local` file in the project directory and add your API key.

```
# .env
API_KEY=yourapikey
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run start`

Runs the deployed app.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run storybook`

Runs the storybook.

The storybook should automatically load in the browser at [http://localhost:6006/].

### `npm run test-storybook`

Performs tests on the storybook.

### `npm run lint`

Check for lint errors.

### `npm run chromatic`

Runs snapshot tests on the storybook stories.

# Advanced Features
- [x] UI Scalability with window size
- [x] Mobile first development (using media query breakpoints, etc)
- [x] Storybook w/ both actions and interactions (play)
- [ ] Progressive Web App (PWA) functionality w/ clear use of the service worker
- [x] API connection to your own API that is cloud hosted
- [x] Comprehensive unit testing
- [ ] OAuth2 with PKCE login w/ at least ONE third party provider
- [ ] Clear usage of Websockets
- [x] At least one fluid animation
- [ ] Redux state management
- [ ] Demonstration of complex FE logic

# Expert Features
- [ ] A YAML CI/CD pipeline which builds and deploys a containerised application to either Azure or AWS, which is configured to use environment variables correctly.
- [x] Usage of SSR / SSG with at least three of the advanced features
- [ ] Usage of Terraform to structure and provision a cloud environment, which is incorporated into a CI/CD pipeline

# Deployment on Vercel

See the deployed site on Vercel at [https://frontend-submission-aguo921.vercel.app/](https://frontend-submission-aguo921.vercel.app/).