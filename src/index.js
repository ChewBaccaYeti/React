import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import './index.css';

export const theme = {
  black: 'black',
  white: 'white',
  accent: 'aqua',
};

const element = React.createElement('div', {
  class: 'container',
  b: 6,
  children: ['Hello', ' ', 'world!'],
});

console.log(element);

const elem1 = <span>Hello</span>;
const elem2 = <span>worl!</span>;

const jsxElement = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(jsxElement);

const data = {
  id: 'id-1',
  url: 'https://th.bing.com/th/id/OIP.Cjyp9AlTcUBchCGGUfiAEQAAAA?pid=ImgDet&rs=1',
  title: 'Me and the boys',
  price: 'worthless',
  author: {
    tag: 'gotyou',
    url: 'https://nhentai.net/g/461199/3/',
  },
  quantity: 10,
};

const painting = (
  <div>
    <img src={data.url} alt={data.title} />
    <h2>{data.title}</h2>
    <p>
      Author: <a href={'data.author.url'}>{data.author.tag}</a>
    </p>
    <p>Price: {data.price} credits</p>
    <p>Quantity: {data.quantity}</p>
    <button></button>
  </div>
);

console.log(painting);

function Painting() {
  return (
    <div>
      <img src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>
        Author: <a href={'data.author.url'}>{data.author.tag}</a>
      </p>
      <p>Price: {data.price} credits</p>
      <p>Quantity: {data.quantity}</p>
      <button></button>
    </div>
  );
}

ReactDOM.render(painting, document.querySelector('#root'));

ReactDOM.render(
  <Painting a="x+2=5" b="y-3=2" c="z-(1+1)=3" hint="This is props." />,
  document.querySelector('#root')
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
