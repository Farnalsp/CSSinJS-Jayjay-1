// import React from "react";
// import styled from "styled-components";
// import "./App.css";

// const Button = styled.button`
//   border: 2px solid;
//   border-color: red;
//   color: black;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   ${(props) => props.primary && "border-color: blue;"}
// `;

// const Heading = styled.h1`
//   color: red;
//   font-size: 3rem;
// `;

// const App = () => {
//   return (
//     <div className="App">
//       <Heading>Selamat datang di pelajaran CSS-in-Js</Heading>
//       <Button primary>Lanjut belajar!</Button>
//       <Button>Kembali</Button>
//     </div>
//   );
// };
// export default App;

// import React from "react";
// import { css } from "@emotion/react";
// import "./App.css";

// const buttonStyles = css`
//   border: 2px solid;
//   border-color: red;
//   color: black;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   ${(props) => props.primary && css `border-color: blue;`}
// `;

// const headingStyles = css`
//   color: red;
//   font-size: 3rem;
// `;

// const App = () => {
//   return (
//     <div className="App">
//       <h1 css={headingStyles}>Selamat datang di pelajaran CSS-in-Js</h1>
//       <button css={[buttonStyles, { primary: true }]}>Lanjut belajar!</button>
//       <button css={buttonStyles}>Kembali</button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { css } from "linaria";
import "./App.css";

const buttonStyles = css`
  border: 2px solid;
  border-color: red;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  ${(props) => props.primary && css `border-color: blue;`}
`;

const headingStyles = css`
  color: red;
  font-size: 3rem;
`;

const App = () => {
  return (
    <div className="App">
      <h1 className={headingStyles}>Selamat datang di pelajaran CSS-in-Js</h1>
      <button className={buttonStyles} primary>
        Lanjut belajar!
      </button>
      <button className={buttonStyles}>Kembali</button>
    </div>
  );
};

export default App;
