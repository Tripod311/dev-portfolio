import { Component } from "@tripod311/splash"
import Template from "./projectPage.html?raw"
import { parse } from "marked"
import ProjectsCollection from "../../projects/collection.js"
import Carousel from "../carousel/carousel.js"

export default class ProjectPage extends Component {
	protected static componentName = "ProjectPage";
	protected static template = Template;

	private toUnmount: Component[] = [];

	mounted () {
		super.mounted();

		this.fill();
	}

	unmounted () {
		for (const comp of this.toUnmount) {
			comp.unmount();
		}

		super.unmounted();
	}

	async fill () {
		const projectDesc = ProjectsCollection[this.state.getProp("id")];

		this.state.update({
			title: projectDesc.short.title,
			description: projectDesc.short.description,
			tags: projectDesc.short.tags.join(' · ')
		})

		const markdown = projectDesc.full;
		this.refs.content.innerHTML = await parse(markdown);

		const carousels =
		    this.refs.content.querySelectorAll<HTMLElement>("[data-carousel]");

		for (const carousel of carousels) {
		    const images = Array.from(
		        carousel.querySelectorAll<HTMLImageElement>("img")
		    );

		    const items = images.map(image => ({
		        src: image.src,
		        alt: image.alt
		    }));

		    this.createCarousel(carousel, items);
		}
	}

	createCarousel (source: HTMLElement, images: { src: string; alt: string; }) {
		const carousel = new Carousel({
			images
		});

		source.innerHTML = [];
		carousel.mount(source);
		this.toUnmount.push(carousel);
	}
}