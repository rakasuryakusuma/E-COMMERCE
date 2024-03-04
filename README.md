# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Requirements
We need to set up our React project.
```bash
npm create vite@latest name-file -- --template react
```
Next, make sure that your terminal directory already change to your new file or do this:
```bash
cd name-file
```
then we need to install first before we run our code.
``` bash
npm install
```
After that you can run the code in local with
```bash
npm run dev
```
# Need to install
We need to install some add
```
npm install react-router-dom@lates
npm install react-icons --save
```
Don't forget to import the file that you already install. ex:
```bash
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
```

## Features
- Add to cart
- Change background
- Responsive
- Remove Cart
- Total price