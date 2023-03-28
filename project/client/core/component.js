export class Component {
  constructor(options){
    const {tagName, className, children, event, ...atrs} = options

    this.tagName = tagName
    this.className = className
    this.children = children
    this.event = event
    this.atrs = atrs
  }

  toHTML() {
    const element = document.createElement(this.tagName)

    element.className = this.className

    if (this.children) element.insertAdjacentHTML("beforeend", this.children)
    
    for(const key in this.event){
      const value = this.event[key]
      element.addEventListener(key, value)
    }
    
    for(const key in this.atrs){
      const value = this.atrs[key]
      element.setAttribute(key, value)
    }
    return element
  }

}