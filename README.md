# Recreate National Park Service Website using Angular

## By Hannah Lee

# Description

### Recreating National Park Service website: https://www.nps.gov

## Epicodus Week 3 and 4 Independent Project 03/30/18 and 04/06/18

## Deployed here:

## Features

1. As a user, enter a state and return a list of National Parks by state and a description for each.

2. As a user, see a navigation bar with a hamburger icon that toggles and lists items to search on the site, for example: Plan Your Visit, Learn and Explore, and Get Involved.

3. As a user, see a hero image on the homepage displaying current theme for the organization.

4. As a user, see blog entries and click on each for additional information.

5. As a user, see a footer with informational and social media links.


## Technologies Used

```
Application: Angular CLI, TypeScript, Bootstrap, HTML
Environment: ng, npm, webpack, tslint
Database: Firebase
```

## Installation

```
$ git clone https://github.com/RunHannah/nps
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js

Install required npm packages and dependencies:

```
$ npm install
```

_Requires AngularFire; instructions to install and add credentials:_
https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup

Once AngularFire is installed, create a database in Firebase by importing blog-posts.json.

Under the path src/app, create a file: api-keys.ts and place Firebase credentials:

```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

Obtain a National Park Service API key from: https://www.nps.gov/subjects/developer/get-started.htm
and place it in the api-keys.ts file:

```
export const npsApiKey = "apiKey"
```

In the command line run:

```
$ ng serve --open
```
