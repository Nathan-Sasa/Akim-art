import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { IService } from '../../../core/interfaces/data.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-service-by-domaine',
	imports: [],
	templateUrl: './service-by-domaine.component.html',
	styleUrl: './service-by-domaine.component.css',
})
export class ServiceByDomaineComponent implements OnInit {

	private readonly routes = inject(ActivatedRoute)
	private readonly router = inject(Router)
	private readonly destroyRef = inject(DestroyRef)
	private readonly dataService = inject(DataService)

	protected services = signal<IService[] | null>([])


	ngOnInit(): void {
		const domaineSlugParam = this.routes.snapshot.paramMap.get("domaineSlug")
		const domainSlug = domaineSlugParam ? domaineSlugParam : 'slug-non-trouver'
		this.loadServiceByDomaine(domainSlug)
	}

	loadServiceByDomaine(domaineSlug: string): void {
		this.dataService.getServiceByDomaine(domaineSlug)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (services) => {
					this.services.set(services)
				},
				error: (err) => {
					console.log('services by domaine error : ', err)
				}
			})
	}

}
