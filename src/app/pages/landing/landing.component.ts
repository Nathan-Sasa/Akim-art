import { Component } from '@angular/core';
import { HeroSectionComponent } from './templates/hero-section/hero-section.component';
import { ServicesSectionComponent } from './templates/services-section/services-section.component';
import { RealisationSectionComponent } from './templates/realisation-section/realisation-section.component';
import { CtaSectionComponent } from './templates/cta-section/cta-section.component';

@Component({
	selector: 'app-landing',
	imports: [
		HeroSectionComponent,
		ServicesSectionComponent,
		RealisationSectionComponent,
		CtaSectionComponent
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

}
