import {Component} from "../../core/component"

export class Main extends Component {
  constructor(options) {
    super(options);
    this.tagName = "main";
    this.className = [].concat("main")
  }
}