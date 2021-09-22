import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'app-divider',
})

export class AppDivider {
	@Prop() color: string;

	render() {
		return (
			<hr style={{ borderColor: this.color }}></hr>
		);
	}
}