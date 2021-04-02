import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content: 'content 1'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content: 'Content 2'
  },
  {
    id: 3,
    title: 'Javascript',
    content: 'Content 3'
  }
];

ReactDOM.render(
  <Accordion topics={topics} />,
  document.getElementById('root')
);
