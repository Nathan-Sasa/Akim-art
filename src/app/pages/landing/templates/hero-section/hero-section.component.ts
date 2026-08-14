import { Component, Output, EventEmitter } from '@angular/core';
import { EntryAnimDirective} from '../../../../shared/directives/entry-anim.directive'

@Component({
	selector: 'app-hero-section',
	imports: [
		EntryAnimDirective
	],
	templateUrl: './hero-section.component.html',
	styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {

	@Output() expertiseEvent = new EventEmitter<void>()

	getExpertise(){
		this.expertiseEvent.emit()
	}
}
