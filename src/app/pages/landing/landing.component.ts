import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeroSectionComponent } from './templates/hero-section/hero-section.component';
import { ServicesSectionComponent } from './templates/services-section/services-section.component';
import { RealisationSectionComponent } from './templates/realisation-section/realisation-section.component';
import { CtaSectionComponent } from './templates/cta-section/cta-section.component';
import { StatisticComponent } from './templates/statistic/statistic.component';
import { HeaderComponent } from './templates/header/header.component';
import { AboutComponent } from './templates/about/about.component';
import { PartnerDeviseComponent } from './templates/partner-devise/partner-devise.component';

@Component({
	selector: 'app-landing',
	imports: [
		HeaderComponent,
		StatisticComponent,
		AboutComponent,
		HeroSectionComponent,
		ServicesSectionComponent,
		RealisationSectionComponent,
		PartnerDeviseComponent,
		CtaSectionComponent,
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

	@ViewChild('aboutTag', {static: false}) aboutTag!: ElementRef
	@ViewChild('serviceTag', {static: false}) serviceTag!: ElementRef
	@ViewChild('realizationTag', {static: false}) realizationTag!: ElementRef
	@ViewChild('ctaTag', {static: false}) ctaTag!: ElementRef


	scrollToAboutTag(){
		if (!this.aboutTag) return
		this.aboutTag.nativeElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		})
	}
	
	scrollToServiceTag(){
		if (!this.serviceTag) return
		this.serviceTag.nativeElement.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'start',
			inline: 'nearest' 
		});
	}
	scrollToRealizationTag(){
		if (!this.realizationTag) return
		this.realizationTag.nativeElement.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'start',
			inline: 'nearest' 
		});
	}
	scrollToCtaTag(){
		if (!this.ctaTag) return
		this.ctaTag.nativeElement.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'start',
			inline: 'nearest' 
		});
	}

}
