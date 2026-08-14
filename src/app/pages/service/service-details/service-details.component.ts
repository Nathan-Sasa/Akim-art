import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IService } from '../../../core/interfaces/data.interfaces';

@Component({
	selector: 'app-service-details',
	imports: [

	],
	templateUrl: './service-details.component.html',
	styleUrl: './service-details.component.css',
})
export class ServiceDetailsComponent implements OnInit {

	private readonly routes = inject(ActivatedRoute)
	private readonly destroyRef = inject(DestroyRef)
	private readonly dataService = inject(DataService)

	protected service = signal<IService | null>(<IService>{})

	ngOnInit(): void {
		const serviceSlugParam = this.routes.snapshot.paramMap.get('slug')
		const serviceSlug = serviceSlugParam ? serviceSlugParam : 'service-non-trouver'
		this.loadServiceDetails(serviceSlug)
	}

	loadServiceDetails(slug: string): void {
		this.dataService.getServiceBySlug(slug)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (service) => {
					this.service.set(service)
				},
				error: (err) => {
					console.log('service details error : ', err)
				}
			})
	}
}
