import {Header} from "./components/header"
import {Main} from "./components/main/"
import {Footer} from "./components/footer"

import {render} from "./core/render"
import {getData} from "./utils/getData"

import "./public/styles/style.css"
import { Component } from "./core/component"

// let isLoading = true
const products = []

const greeting = new Component({
  tagName: "header",
  className: "header",
  children: "<h2>Hello Everyone!!!</h2>"
}).toHTML()

const header = new Header({
    tagName: "header",
    className: "header",
    children: "<h2>Logo</h2>",
  }).toHTML()

// const data = getData("http://127.0.0.1:3333/products", products);

const main = new Main ({
  tagName: "main",
  className: "main",
  // children: isLoading ? "...": products,
}).toHTML()
  


const footer = new Footer({
    tagName: "footer",
    className: "footer",
  }).toHTML()

render("#app", [header, main, footer])
render(".header", greeting)