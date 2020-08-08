# News Article Evaluation with Natural Language Processing
![Landing Page](./image/image.JPG?raw=true "Landing Page")

## Project Overview

In this project, I have built a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## What did I do?
I have implemented the followings on top of the starter code provided by [Udacity](https://www.udacity.com/).
- Setting up Webpack
- Webpack Loaders and Plugins
- Creating layouts and page design with Sass
- Service workers
- Using APIs and creating requests to external urls

## Tech stack
- Programming Languages - JavaScript, SCSS, HTML
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. 
- External script - Service Worker
- External API - [meaning cloud: sentiment analysis](https://www.meaningcloud.com/products/sentiment-analysis)

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
- Fill the ```.env```file with your API keys like this.
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
- Compile the code.
```bash
npm run build-prod
```
- Start the server.
```bash
npm start
```

### Step 7: Accessing to localhost
- Access ```localhost: 8000```, and try the app!