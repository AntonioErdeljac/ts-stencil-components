import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component({
	tag: 'app-body',
	shadow: true,
})

export class AppBody {
	@Prop() value: string;
	
	@State() isHidden: boolean = false;

	@State() buttonValue: string = 'Hide body';

	@Listen('click')
	toggleHide(event) {
		event.preventDefault();

		this.isHidden = !this.isHidden;
		this.buttonValue = this.isHidden ? 'Show body' : 'Hide body';
	}
	
	render() {
		return (
			<div>
				{this.isHidden ? null : <p>{this.value}</p>}
				<button onClick={this.toggleHide}>{this.buttonValue}</button>
			</div>
		);
	}

}
