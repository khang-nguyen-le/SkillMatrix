import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  :root {
    --color-primary--1: #f0f8ff;
    --color-primary--2: #c7e5ff;
    --color-primary--3: #9ecfff;
    --color-primary--4: #75b6ff;
    --color-primary--5: #4d9aff;
    --color-primary--6: #2277f4;
    --color-primary--7: #1358cf;
    --color-primary--8: #073da8;
    --color-primary--9: #002782;
    --color-primary--10: #00185c;

    /* Gray */
    --color-gray--1: #ffffff;
    --color-gray--2: #fafafa;
    --color-gray--3: #f5f5f5;
    --color-gray--4: #f0f0f0;
    --color-gray--5: #d9d9d9;
    --color-gray--6: #bfbfbf;
    --color-gray--7: #8c8c8c;
    --color-gray--8: #595959;
    --color-gray--9: #434343;
    --color-gray--10: #262626;
    --color-gray--11: #1f1f1f;
    --color-gray--12: #141414;
    --color-gray--13: #000000;

    /* Red */
    --color-red--1: rgb(254 242 242);
    --color-red--2: rgb(254 226 226);
    --color-red--3: rgb(254 202 202);
    --color-red--4: rgb(252 165 165);
    --color-red--5: rgb(248 113 113);
    --color-red--6: rgb(239 68 68);
    --color-red--7: rgb(220 38 38);
    --color-red--8: rgb(185 28 28);
    --color-red--9: rgb(153 27 27);
    --color-red--10: rgb(127 29 29);
    --color-red--11: rgb(69 10 10);

    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --shadow-none: 0 0 #0000;

    --image-grayscale: 0;
    --image-opacity: 100%;

    --border-radius-none: 0;
    --border-radius-sm: 0.2rem;
    --border-radius: 0.4rem;
    --border-radius-md: 0.6rem;
    --border-radius-lg: 0.8rem;
    --border-radius-xl: 1.2rem;
    --border-radius-2xl: 1.6rem;
    --border-radius-3xl: 2.4rem;
    --border-radius-full: 9999px;

    --font-sans: 'Roboto', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-gray--9);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    background-image: linear-gradient(
      var(--color-primary--3),
      var(--color-primary--5)
    );
    min-height: 100vh;
    transition:
      color 0.3s,
      background-color 0.3s;
  }

  input,
  button,
  textarea,
  select,
  label {
    font: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }

  /* Let's get this party started */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fafafa;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #cccccc;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
    width: 12px;
    height: 12px;
  }
`}`;

export default GlobalStyles;
