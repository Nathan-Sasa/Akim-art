import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { TabsModule } from 'primeng/tabs';

@Component({
	selector: 'app-realization-section',
	imports: [
		EntryAnimDirective,
		TabsModule,
		CommonModule
	],
	templateUrl: './realisation-section.component.html',
	styleUrl: './realisation-section.component.css',
})
export class RealisationSectionComponent implements AfterViewInit, OnDestroy {

	currentIndex = 0;
    intervalId: any;

	service_1_realizations = [
		{
			title: 'Service 1 realisation 1',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odio eaque sed omnis est nisi exercitationem animi ab.',
			text2: 'Lorem ipsum dolor sit amet, adipisicing elit. Vero quidem amet qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat  voluptates suscipit libero dignissimos veritatis!',
			Image: 'assets/images/IMG_2772.JPG',
			time: 'la durée du travail 3 mois.'
		},
		{
			title: 'Service 1 realisation 2',
			text1: 'Lorem ipsum amet consectetur adipisicing elit. Cupiditate impedit voluptatum ea vitae, itaque quod placeat numquam reiciendis. Distinctio, impedit!',
			text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea facilis atque aut quos corrupti placeat earum pariatur molestias vel facere quas eum fugiat eius minima, cumque voluptate officia doloribus ',
			Image: 'assets/images/IMG_2773.JPG',
			time: 'durée 1 mois'
		},
		{
			title: 'Service 1 realisation 3',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaque mollitia sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
		{
			title: 'Service 1 realisation 4',
			text1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos deleniti fugit quidem maiores ducimus iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit omnis rem ab excepturi!',
			text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt minus ducimus fugiat laboriosam animi ullam, quidem dolorem libero nobis voluptatum similique laudantium, rerum culpa illo  veritatis soluta? Mollitia, quo earum hic vel labore necessitatibus id maxime iste magni, corrupti nulla nobis.',
			Image: 'assets/images/IMG_2768.JPG',
			time: 'durée 5 mois'
		},
	]

	ngAfterViewInit(): void {
		this.startAutoSlideService1()
		this.startAutoSlideService2()
		this.startAutoSlideService3()
		this.startAutoSlideService4()
	}

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
		clearInterval(this.intervalId2);
		clearInterval(this.intervalId3);
		clearInterval(this.intervalId4);
	}

	// slider service 1 ==================================
	// ============================================
	startAutoSlideService1(): void {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.service_1_realizations.length;
        }, 5000);
    }

	goToSlideService1(index: number): void{
        this.currentIndex = index
		clearInterval(this.intervalId)

		setTimeout(() => {
			this.startAutoSlideService1()
		},5000)
    }

	// service 2 =======================================
	// =============================================
	currentIndex2 = 0;
    intervalId2: any;

	service_2_realizations = [
		{
			title: 'Service 2 realisation 1',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odio eaque sed omnis est nisi temporibus, asperiores exercitationem animi ab.',
			text2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quidem amet qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat animi t libero dignissimos veritatis!',
			Image: 'assets/images/IMG_2772.JPG',
			time: 'la durée du travail 3 mois.'
		},
		{
			title: 'Service 2 realisation 2',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate impedit voluptatum ea vitae, itaque quod placeat numquam reiciendis. Distinctio, impedit!',
			text2: 'Lorem ipsum dolor sit amet consectetur. Quisquam ea facilis atque aut quos corrupti placeat earum pariatur molestias vel facere quas eum fugiat eius minima, cumque voluptate officia doloribus natus ipsam.',
			Image: 'assets/images/IMG_2773.JPG',
			time: 'durée 1 mois'
		},
		{
			title: 'Service 2 realisation 3',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat  nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaque mollitia sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
	]

	startAutoSlideService2(): void {
        this.intervalId2 = setInterval(() => {
            this.currentIndex2 = (this.currentIndex2 + 1) % this.service_2_realizations.length;
        }, 5000);
    }

	goToSlideService2(index: number): void{
        this.currentIndex2 = index
		clearInterval(this.intervalId2)

		setTimeout(() => {
			this.startAutoSlideService2()
		},5000)
    }

	// service 3 =======================================
	// =============================================
	currentIndex3 = 0;
    intervalId3: any;

	service_3_realizations = [
		{
			title: 'Service 3 realisation 1',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odio eaque sed est nioribus, asperiores exercitationem animi ab.',
			text2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quidem amet qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat animi voluptates suscipit libero dignissimos veritatis!',
			Image: 'assets/images/IMG_2772.JPG',
			time: 'la durée du travail 3 mois.'
		},
		{
			title: 'Service 3 realisation 2',
			text1: 'Lorem ipsum doloronsectetur adipisicing elit. Cupiditate impedit voluptatum ea vitae, itaque quod placeat numquam reiciendis. Distinctio, impedit!',
			text2: 'Lorem ipsum dolor sit amet consectetur adipit. Quisquam ea facilis atque aut quos corrupti placeat earum pariatur molestias vel facere quas eum fugiat eius minima, cumque voluptate officia doloribus natus ipsam.',
			Image: 'assets/images/IMG_2773.JPG',
			time: 'durée 1 mois'
		},
		{
			title: 'Service 3 realisation 3',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaque mollitia sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
		{
			title: 'Service 3 realisation 4',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaque mollitia sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
		{
			title: 'Service 3 realisation 4',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque ! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaqu sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
	]

	startAutoSlideService3(): void {
        this.intervalId3 = setInterval(() => {
            this.currentIndex3 = (this.currentIndex3 + 1) % this.service_3_realizations.length;
        }, 5000);
    }

	goToSlideService3(index: number): void{
        this.currentIndex3 = index
		clearInterval(this.intervalId3)

		setTimeout(() => {
			this.startAutoSlideService3()
		},5000)
    }

	// service 4 =======================================
	// =============================================
	currentIndex4 = 0;
    intervalId4: any;

	service_4_realizations = [
		{
			title: 'Service 4 realisation 1',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odios est nisi temporibus, asperiores exercitationem animi ab.',
			text2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quidem amet qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat animi voluptates suscipit libero dignissimos veritatis!',
			Image: 'assets/images/IMG_2772.JPG',
			time: 'la durée du travail 3 mois.'
		},
		{
			title: 'Service 4 realisation 2',
			text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate impedit voluptatum ea vitae, itaque quod placeat numquam reiciendis. Distinctio, impedit!',
			text2: 'Lorem ipsum dolor sit amet consectetur ae aut quos corrupti placeat earum pariatur molestias vel facere quas eum fugiat eius minima, cumque voluptate officia doloribus natus ipsam.',
			Image: 'assets/images/IMG_2773.JPG',
			time: 'durée 1 mois'
		},
		{
			title: 'Service 4 realisation 3',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earuo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
		{
			title: 'Service 4 realisation 4',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaque mollitia sunt. Odio explicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
		{
			title: 'Service 4 realisation 4',
			text1: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque necessitatibus! Officiis et eius quaerat molestias nesciunt similique id quasi inventore eaque cumque! Debitis et ab nesciunt, officia provident magnam earum in eaqueexplicabo, quos ab voluptates, consequatur magni alias sed mollitia maxime ipsam dolorum fuga quisquam?',
			text2: '',
			Image: 'assets/images/IMG_2769.JPG',
			time: 'durée 2 semaine'
		},
	]

	startAutoSlideService4(): void {
        this.intervalId4 = setInterval(() => {
            this.currentIndex4 = (this.currentIndex4 + 1) % this.service_4_realizations.length;
        }, 5000);
    }

	goToSlideService4(index: number): void{
        this.currentIndex4 = index
		clearInterval(this.intervalId4)

		setTimeout(() => {
			this.startAutoSlideService4()
		},5000)
    }
}
