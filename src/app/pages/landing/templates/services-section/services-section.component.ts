import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-services-section',
	imports: [
		EntryAnimDirective
	],
	templateUrl: './services-section.component.html',
	styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {


	services = [
		{
			name: 'Services 1',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias esse natus vero, nemo doloremque animi sequi. Eum minus aperiam deleniti deserunt!',
			image: 'assets/images/IMG_2768.JPG'
		},
		{
			name: ' Services 2',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias esse natus vero, nemo doloremque animi sequi. Eum minus aperiam deleniti deserunt!',
			image: 'assets/images/IMG_2769.JPG'
		},
		{
			name: 'Services 3',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias esse natus vero, nemo doloremque animi sequi. Eum minus aperiam deleniti deserunt!',
			image: 'assets/images/IMG_2770.JPG'
		},
		{
			name: 'Services 4',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias esse natus vero, nemo doloremque animi sequi. Eum minus aperiam deleniti deserunt!',
			image: 'assets/images/IMG_2771 2.JPG'
		}
	]

	clauses = [
		{
			title: 'clause 1',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
			icon: 'pi pi-print'
		},
		{
			title: 'clause 2',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius!',
			icon: 'pi pi-qrcode'
		},
		{
			title: 'clause 3',
			description: 'Lorem ipsum dolor sit amet elit. Quaerat porro nihil nemo incidunt! Lorem ipsum dolor sit amet.',
			icon: 'pi pi-receipt'
		},
	]
}
