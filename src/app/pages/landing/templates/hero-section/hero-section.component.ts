import { Component } from '@angular/core';
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

}
