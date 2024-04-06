# [LinkedIn clone React App](https://linkedin-clone-react-app.netlify.app/)

This project is a clone of the linkedin platform with the React Js framework

## Description

This project presents the construction of a linkedin clone built from scratch using React Js (this project contains the main functions such as login and registration with Google, access to the main page, create posts, etc.), the site is fully responsive and contains animations that improve the user experience. Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Installation

Step 1:

Get code using

```
git clone https://github.com/bryanAguilar001/linkedin-react-app.git
```

Step 2:

Install the necessary libraries (make sure you have node)

```
npm i
```

Step 3:

If you use a platform like Netlify to host your project:

In /public folder added a new \_redirects file with this content:

```
/* /index.html 200
```

I added the following after the “build” script within package.json – "react-scripts build && echo '/\* /index.html 200' | cat >build/\_redirects ". This insured that future builds did not receive a .txt format \_redirects file.

This configuration is necessary for the correct operation of the router.

Step 4:

Runs the app in the development mode

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (styled components)
- React JS
- Redux
- Firebase Services

## What I learned

- React Router
- Add styled components
- vscode-styled-components (vscode extension to styled components)
- Create a responsive navbar with styled componets
- Use redux
- Firebase Login

## Author

- Website - [www.bryan-aguilar.com](https://www.bryan-aguilar.com/)
- Medium - [baguilar6174](https://baguilar6174.medium.com/)
- LinkeIn - [baguilar6174](https://www.linkedin.com/in/baguilar6174)
- Email - [bryan.aguilar6174@gmail.com](mailto:bryan.aguilar6174@gmail.com)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Project status

Currently, the project contains the login page and the main page of the site. The design is responsive although details are still needed on mobile devices. It is expected to integrate a login with Google and create posts using Firebase.

## LinkedIn Clone React App

![Login desktop](https://github.com/bryanAguilar001/linkedin-react-app/blob/main/media/login-desktop.PNG?raw=true)

> Login desktop

<br>
<table>
  <tr>
    <td>Login mobile</td>
    <td>Header mobile</td>
  </tr>
  <tr>
    <td align="center" valign="center"><img src="https://github.com/bryanAguilar001/linkedin-react-app/blob/main/media/login-mobile.PNG?raw=true" width="70%"></td>
    <td align="center" valign="center"><img src="https://github.com/bryanAguilar001/linkedin-react-app/blob/main/media/header-mobile.PNG?raw=true" width="70%"></td>
  </tr>
 </table>
<br>

![Header desktop](https://github.com/bryanAguilar001/linkedin-react-app/blob/main/media/header-desktop.PNG?raw=true)

> Header desktop

![Home desktop](https://github.com/bryanAguilar001/linkedin-react-app/blob/main/media/home-desktop.PNG?raw=true)

> Home desktop
