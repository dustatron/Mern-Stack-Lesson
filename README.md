# DevConnect!

## This project is based on a MERN stack udemy corse.

_Course Link_
_[MERN Stack Front To Back: Full Stack React, Redux & Node.js](https://www.udemy.com/course/mern-stack-front-to-back)_

#### By Dusty McCord

[Demo Site](https://devconnect-react.herokuapp.com/)

## Breif

This project is a simple social network for developers. It uses express to create an API backend and MongoDB altas as the noSQL provider.

React and Redux are used along with Json web tokens for authentication.

## Install This Poject

### To Clone and Run this project:

Clone the project by typing this command into your terminal.

```sh
git clone https://github.com/dustatron/Mern-Stack-Lesson.git
```

Navigate to the new project folder by typing:

```sh
cd Mern-Stack-Lesson
```

Install needed Moduals
Navigate to the client folder:

```sh
cd client
```

Run NPM install then back out of the folder:

```sh
npm install
cd ..
```

_Create mongoDB database connection._
create a default.js file in /config

```sh
touch config/default.js
```

Past these details in the folder and update the details to point to your mongoDB database

```sh
{
  "mongoURI": "<link provided by mongoDB Atlas>",
  "jwtSecret": "mysecrettoken",
  "githubClientId": "<github client Id>",
  "githubSecret": "<github secret>"
}

```

You should be good to run the development server by typing this command:

```sh
npm run dev
```

also create an app in your github account and include the id and secret

## Support and Contact Details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/PRKille/ReactAnimalShelter/issues) here on GitHub._

## Technologies Used

Node.js
MongoDB
Github API
React
React Router
React Redux
React
express
jsonwebtoken
axios
mongoose
bcryptjs
gravatar

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Dusty McCord, Steph Podolak, Geoff Goetz, Patrick Kille_**
