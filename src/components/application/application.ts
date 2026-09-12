import { Flow } from "@tripod311/flow"
import { Component } from "@tripod311/splash"
import Template from "./application.html?raw"

import MainPage from "../mainPage/mainPage.js"
import ProjectPage from "../projectPage/projectPage.js"

export default class Application extends Component {
	protected static componentName = "Application";
	protected static template = Template;

	private router: Flow = new Flow();
	private currentPage = "main";

	constructor (options: Record<string, any>) {
		super(options);

		this.router.add("/", this.renderMain.bind(this));
		this.router.add("/:projectId", this.renderProject.bind(this));

		window.router = this.router;
	}

	mounted () {
		super.mounted();

		this.router.init();
	}

	renderMain () {
		this.slots.content.setContent([
			new MainPage({})
		]);
	}

	renderProject ({ projectId }: Record<string, string>) {
		this.slots.content.setContent([
			new ProjectPage({
				id: projectId
			})
		]);
	}
}