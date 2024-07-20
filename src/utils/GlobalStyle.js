import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
  color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input {
  padding: 6px;
  border: 4px solid black;
  border-radius: 8px;
}

button {
  width: auto;
  height: auto;
  margin: 5px;
  padding: 10px;
  border: 4px solid black;
  border-radius: 6px;
}

button:hover {
  background-color: #0b4e4e;
}

@font-face {
  font-family: 'Ubuntu', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
}
`;
