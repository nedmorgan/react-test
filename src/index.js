import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [{
  title: "First Post",
  author: "Ned",
  body: "This is my first post in React",
  comments: [
    "This is great",
    "I like pie"
  ]
},
{
  title: "Second Post",
  author: "Walter",
  body: "This is my second post in React",
  comments: [
    "This is really great",
    "I like pizza"
  ]
},
{
  title: "Third Post",
  author: "Betsy",
  body: "This is my third post in React",
  comments: [
    "This is really awesome",
    "I like leaves"
  ]
}
]

ReactDOM.render(< App posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();