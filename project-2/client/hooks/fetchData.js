// import {state, setState} from "../core/state";
import { Button } from "../components/button/button";
export async function fetchData(main, path) {
  const data = await fetch(`http://127.0.0.1:4444/${path}`)
  const parsedData = await data.json();
  // console.log("[state]", state) //to udnerstand setState
  // console.log("[path]", path) // to udnerstand setState
  // setState(path.slice(1));
  // console.log(state);

  [...document.querySelector(".main").children].forEach(el => { // [...]converting into array by spreading
    el.remove()
    
  });

  const domArr = await  parsedData.map((el) => {
    const entries = Object.entries(el);

    return `
        <div class="card">
          ${entries.map((el)=> {
            if (el[0] !== "_id"){
              return `
              <div class="card__field">
                  ${
                    el[0] === "img"
                      ? `
                      <div class="img__wrapper">
                          <img class="card__image" src="${el[1]}"/> 
                     </div>
                     `
                     : ""
                  }

                  ${
                    el[0] != "img"
                      ? `
                      <h2>
                        ${el[0]}: ${el[1]}
                      </h2>
                      `
                      : ""
                  }
              </div>
              `;
            }
          })}

          // ${
          //   path === "/products"
          //     ? new Button ({
          //       tagName: "button",
          //       className: ["button"],
          //       text: "Buy",
          //       event: () => alert("Hello")
          //     }).toInlineHTML()
          //     :""
          // }
      </div>
      `;
      
  })

  main.insertAdjacentHTML("afterbegin", domArr.toString().replaceAll(",", " "))

}