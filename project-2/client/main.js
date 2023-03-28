import {Header} from "./components/header/header"
import {Main} from "./components/main/"
import {Footer} from "./components/footer"
import {Input} from "./components/input"
import {Navigation} from "./components/navigation/navigation"
import {Link} from "./components/link/link"
import { fetchData } from "./hooks/fetchData";


import {render} from "./core/render"

import "./public/styles/style.css"


const main = new Main ({
  tagName: "main",
  className: "main"
}).toHTML()

const footer = new Footer({
  tagName: "footer",
  className: "footer",
}).toHTML()

// //decorator:
// function wrapper(call) {
//   function getSomething(dec) {
//       return call() + dec
//   }
//   return getSomething 
// }
// function hello () {
//   return "Hello "
// }
// const resultWrapper = wrapper( hello)("world")
// console.log("result is: ", resultWrapper)


const links = [
  new Link({
    text: "Users",
    className: "nav-link",
    event: {
      click: ()=> fetchData(main, "/users")
    }
  }).toHTML(),
  
  new Link({
    text: "Products",
    className: "nav-link",
    event: {
      click: ()=> fetchData(main, "/products")
    }
  }).toHTML()
]

const nav = new Navigation({}).toHTML()
nav.append(...links)

const header = new Header({}).toHTML()
header.append(new Input({className: "input"}).toHTML()) // toHTML to convert object to HTML 

header.append(nav)






render("#app", [header, main, footer])
