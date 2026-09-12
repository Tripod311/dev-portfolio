import { Component } from "@tripod311/splash"
import Template from "./projectCard.html?raw"

export default class ProjectCard extends Component {
	protected static componentName = "ProjectCard";
	protected static template = Template;

	mounted () {
		super.mounted();

		this.refs.wrapper.onclick = this.emit.bind(this, "selected");
	}
}