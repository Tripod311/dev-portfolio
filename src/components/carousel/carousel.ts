import { TemplateCache, Component } from "@tripod311/splash"
import Template from "./carousel.html?raw"
import Slide from "./slide.html?raw"

TemplateCache.registerDrop("carousel_slide", Slide);

export default class Carousel extends Component {
	protected static componentName = "Carousel";
	protected static template = Template;

	private current: number = 0;

	mounted () {
		super.mounted();

		const images = this.state.getProp("images");
		for (const image of images) {
			const drop = TemplateCache.createDrop("carousel_slide", image);
			const component = Component.generic({}, drop.node);
			this.slots.images.push(component);
			drop.node.onclick = () => {
				window.open(image.src);
			}
		}

		this.refs.previous.onclick = this.back.bind(this);
		this.refs.next.onclick = this.next.bind(this);
		this.refs.counter.innerText = `1/${images.length}`
	}

	setCurrent (index: number) {
		const images = this.state.getProp("images");
		this.current = index;

		this.refs.track.style.transform = `translateX(-${index * 100}%)`;
		this.refs.counter.innerText = `${index + 1}/${images.length}`;
	}

	back () {
		const images = this.state.getProp("images");

		if (this.current > 0) {
			this.setCurrent(this.current - 1);
		} else {
			this.setCurrent(images.length-1);
		}
	}

	next () {
		const images = this.state.getProp("images");

		if (this.current < images.length-1) {
			this.setCurrent(this.current + 1);
		} else {
			this.setCurrent(0);
		}
	}
}