import React from "react";
import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react-dom';


const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector("#root");

console.log(divRoot);


const root = createRoot(document.getElementById("root"));
root.render(saludo);


/*
const root = createRoot(document.getElementById("root"));
root.render(<App />);
*/