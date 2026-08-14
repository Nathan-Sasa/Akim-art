import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-header',
	imports: [
		NgOptimizedImage,
		EntryAnimDirective
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {

	@Output() aboutEvent = new EventEmitter<void>()
	@Output() serviceEvent = new EventEmitter<void>()
	@Output() realizationEvent = new EventEmitter<void>()
	@Output() ctaEvent = new EventEmitter<void>()

	app = {
		name: '',
		logo: 'assets/'
	}


	@HostListener('window:scroll', [])
	onScroll(){
		const header = document.querySelector('header')

		if (window.scrollY > 80) {
			header?.classList.add('bg-clr-bg-page', 'border-b', 'border-clr-border-color/50')
			header?.classList.remove('bg-transparent', 'border-transparent')
		} else {
			header?.classList.remove('bg-clr-bg-page', 'border-b', 'border-clr-border-color/50')
			header?.classList.add('bg-transparent', 'border-transparent')
		}
	}

	scrollToAboutTag(){
		this.aboutEvent.emit()
	}
	scrollToServiceTag(){
		this.serviceEvent.emit()
	}
	scrollToRealizationTag(){
		this.realizationEvent.emit()
	}
	scrollToCtaTag(){
		this.ctaEvent.emit()
	}

}
