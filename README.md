# test-alert

{
  "name": "test-alert",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://bpliske.github.io/test-alert",
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  },
  "devDependencies": {
    "gh-pages": "^1.0.0",
    "react-scripts": "1.0.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
