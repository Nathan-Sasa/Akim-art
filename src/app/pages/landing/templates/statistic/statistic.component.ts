import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-statistic',
    imports: [

	],
    templateUrl: './statistic.component.html',
    styleUrl: './statistic.component.css',
})
export class StatisticComponent implements AfterViewInit, OnDestroy {

	@ViewChild('statSection') statSection!: ElementRef
	projectCount: number = 0
	userCount = 0
	partnerCount: number = 0
	satisfaction: number = 0

	private hasAnimated: boolean = false
	private observer!: IntersectionObserver

	ngAfterViewInit(): void {
		this.observer = new IntersectionObserver ((entries) => {
			entries.forEach(entry => {
				if(entry.isIntersecting && !this.hasAnimated) {
					this.startCounters()
					this.hasAnimated = true

					this.observer.disconnect()
				}
			})
		},{
			threshold: 0.5
		})
		this.observer.observe(this.statSection.nativeElement)
	}

	ngOnDestroy(): void {
		if(this.observer) {
			this.observer.disconnect()
		}
	}

	startCounters(){
		this.animateValue(0, 170, 1500, (val) => this.projectCount = val)

		setTimeout(() => {
			this.animateValue(0, 1500, 1500, (val) => this.userCount = val)
		}, 200);

		setTimeout(() => {
			this.animateValue(0, 50, 1500, (val) => this.partnerCount = val)
		}, 400)

		setTimeout(() => {
			this.animateValue(0, 98, 1500, (val) => this.satisfaction = val)
		}, 600)
	}

	animateValue(start: number, end: number, duration: number, callback: (val: number) => void) {
		const startTime = performance.now()
		const step = (currentTime: number) => {
			const progress = Math.min((currentTime - startTime) / duration, 1)
			const value = Math.floor(progress * (end - start) + start)
			callback(value)

			if (progress < 1){
				requestAnimationFrame(step)
			}
		}
		requestAnimationFrame(step)
	}
	

}
