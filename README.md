# News Article Evaluation with Natural Language Processing
![News Article Evaluation](./src/client/image/app-design.JPG?raw=true "News Article Evaluation")

## Project Overview

In this project, I have built a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## What did I do?
I have implemented the followings on top of the starter code provided by [Udacity](https://www.udacity.com/).
- Setting up Webpack for development and production.
- Setting up Webpack Loaders and Plugins.
- Developing front end and back end JavaScript to handle the requests to external API on form submission.
- Developing functionalities to validate the form input.
- Creating layouts and page design with Sass.
- Setting up Service workers.
- Writing Unit tests for the functions defined in the src/client/js directory using Jest Framework.


## Tech stack
- Programming Languages - JavaScript, SCSS, HTML
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. 
- External script - Service Worker
- External API - [meaning cloud](https://www.meaningcloud.com/products/sentiment-analysis) (sentiment analysis)

## Getting started
### Step 1: Install Dependencies
- Fork and clone the master branch.
- `cd` into your new folder and run:
```bash
npm install
```

### Step 2: Signup for an API key
Go to [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an API key.


### Step 3: Declare your API key as an Environment Variables
- Create a new `.env` file in the root of your project.
- Fill the `.env` file with your API keys like this.
```
API_ID="**************************"
```
- Go to your `.gitignore` file, in the project root, and add `.env`.

### Step 4: Running the Development Server
- Complile and start the server.
```bash
npm run build-dev
```

### Step 5: Testing (Optional)
- Run test scripts to test JavaScript funcitons (formHandler.js, urlChecker.js)
```bash
npm run test
```

### Step 6: Running the Production Server
- Open a new terminal window.
- Compile the code.
```bash
npm run build-prod
```
- Start the server.
```bash
npm start
```

### Step 7: Accessing to localhost
- Access `localhost:8080`, and try the app!