import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { ScrollAnimDirective } from '../../../../shared/directives/scroll-anim.directive';
import { IDomaine } from '../../../../core/interfaces/data.interfaces';
import { DataService } from '../../../../core/services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-services-section',
	imports: [
		EntryAnimDirective,
		ScrollAnimDirective,
		RouterLink
	],
	templateUrl: './services-section.component.html',
	styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent implements OnInit {

	private readonly dataService = inject(DataService)
	private readonly destroyRef = inject(DestroyRef)

	protected expertise = signal<IDomaine[] | null>([]) 

	ngOnInit(): void {
		this.loadExpertiseDomaine()
	}
	
	loadExpertiseDomaine(): void {
		this.dataService.getDomaineAll()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (res) => {
					this.expertise.set(res)
				},
				error: (err) => {
					console.log('expertise error : ', err)
				}
			})
	}

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
