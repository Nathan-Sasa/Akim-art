import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { IService } from '../../../core/interfaces/data.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-service-list',
    imports: [

	],
    templateUrl: './service-list.component.html',
    styleUrl: './service-list.component.css',
})
export class ServiceListComponent implements OnInit {

	private readonly destroyRef = inject(DestroyRef)
	private readonly dataService = inject(DataService)

	protected serviceList = signal<IService[]>([])


	ngOnInit(): void {
		this.loadServicesList()
	}

	loadServicesList(): void {
		this.dataService.getServiceAll()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (services) => {
					this.serviceList.set(services)
					console.log('service list ok : ', services)
				},
				error: (err) => {
					console.log('services error : ', err)
				}
			})
	}


}
