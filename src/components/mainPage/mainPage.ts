import { Component } from "@tripod311/splash"
import Template from "./mainPage.html?raw"

import ProjectsCollection from "../../projects/collection.js"
import ProjectCard from "../projectCard/projectCard.js"

export default class MainPage extends Component {
	protected static componentName = "MainPage";
	protected static template = Template;

	mounted () {
		super.mounted();

		let index = 1;

		for (const project of ProjectsCollection) {
			const card = new ProjectCard({
				title: `${index} · ${project.short.title}`,
				heading: project.short.heading,
				description: project.short.description,
				tags: project.short.tags.join(' · ')
			});
			this.slots.projects.push(card);
			const ref = `/${index-1}`;
			card.on("selected", () => {
				window.router.navigate(ref);
			});
			index++;
		}
	}
}