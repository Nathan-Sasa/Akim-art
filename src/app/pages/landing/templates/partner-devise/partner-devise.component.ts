import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../../../shared/directives/scroll-anim.directive';

@Component({
	selector: 'app-partner-devise',
	imports: [
		ScrollAnimDirective
	],
	templateUrl: './partner-devise.component.html',
	styleUrl: './partner-devise.component.css',
})
export class PartnerDeviseComponent {

	partners = [
		{
			icon: '',
			name: 'Les Institutions et l\'État ',
			text: 'Pour le développement des infrastructures publiques et l\'accès à l\'eau des populations.'
		},
		{
			icon: '',
			name: 'Les Entreprises Privées',
			text: 'Pour la construction de leurs sièges, entrepôts ou aménagements spécifiques.'
		},
		{
			icon: '',
			name: 'Les Particuliers',
			text: 'Pour la concrétisation de leurs projets immobiliers résidentiels (villas, complexes) avec une approche sur-mesure.'
		},
	]
}
