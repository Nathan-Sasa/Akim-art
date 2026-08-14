import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../../../shared/directives/scroll-anim.directive';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-about',
    imports: [
		ScrollAnimDirective,
		// EntryAnimDirective,
		// NgOptimizedImage
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
})
export class AboutComponent {


	icons = {

	}

	expertise = [
		{
			icons: '',
			name: 'Travaux Publics & Génie Civil ',
			text: 'Construction et réhabilitation d\'infrastructures routières, de bâtiments institutionnels, de réseaux d\'assainissement et d\'ouvrages d\'art.'
		},
		{
			icons: '',
			name: ' Conception & Réalisation de Projets',
			text: 'Études de faisabilité, modélisation architecturale, gestion rigoureuse des chantiers et pilotage complet des corps de métier.'
		},
		{
			icons: '',
			name: 'Aménagement d\'Habitats',
			text: 'Conception, construction et rénovation de logements résidentiels et d\'espaces de vie fonctionnels, esthétiques et adaptés au climat local.'
		},
		{
			icons: '',
			name: 'Hydro-alimentaire & Forages',
			text: 'Expertise spécialisée dans l\'accès à l\'eau potable, incluant le forage de puits profonds, l\'aménagement et la sécurisation des sources d\'eau, ainsi que l\'installation de réseaux de distribution.'
		},
	]
}
