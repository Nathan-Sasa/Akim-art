import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environment/environment";
import {map, Observable, tap } from 'rxjs'
import { IDomaine, IService } from "../interfaces/data.interfaces";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private readonly http = inject(HttpClient)
    private readonly serviceApi = environment.apisUrl.servicesApi
    private readonly domaineApi = environment.apisUrl.domaineExpApi

    getDomaineAll(): Observable<IDomaine[] | null> {
        return this.http.get<IDomaine[]>(this.domaineApi)
        .pipe(
            tap((domaines) => {
                const allDomaines = domaines
                if (allDomaines.length < 0) {
                    return allDomaines
                }
                return null
            })
        )
    }

    getDomainBySlug(slug: string): Observable<IDomaine | null> {
        return this.getDomaineAll().pipe(
            map((domaines) => {
                const domaine = domaines?.find(d => d.slug === slug)
                if (domaine) {
                    return domaine
                }
                return null
            })
        )
    }

    getServiceAll(): Observable<IService[]>{
        return this.http.get<IService[]>(this.serviceApi)
    }

    getServiceBySlug(slug: string): Observable<IService | null>{
        return this.getServiceAll().pipe(
            map((services) => {
                const service =  services.find(s => s.slug === slug)
                if (service) {
                    return service
                }
                return null
            })
        )
    }

    getServiceByDomaine(domaineSlug: string): Observable<IService[] | null> {
        return this.getServiceAll().pipe(
            map((services) => {
                const serviceByDomaine = services.filter(s => s.domaine === domaineSlug)

                if (serviceByDomaine) {
                    return serviceByDomaine
                }
                return null
            })
        )
    }
}