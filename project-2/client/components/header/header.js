import {Component} from "../../core/component"

export class Header extends Component {
  constructor(options) {
    super(options);
    this.tagName = "header";
    if (!options.className) {
      this.className = "header"
    }
  }
}