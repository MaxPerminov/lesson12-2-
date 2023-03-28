import {Component} from "../../core/component"

export class Link extends Component {
  constructor(options) {
    super(options);
    this.tagName = "button"
  }
}