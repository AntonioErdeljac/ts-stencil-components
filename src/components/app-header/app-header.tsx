import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'app-header'
})

export class AppHeader {
	@Prop() value: string;

	render() {
		return (
			<h1>{this.value}</h1>
		)	
	}
}