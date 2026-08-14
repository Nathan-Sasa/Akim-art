import { Component, signal } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

interface IContactForm {
	name?: FormControl<string | null>
	service: FormControl<string>
	message: FormControl<string>
}

@Component({
	selector: 'app-cta-section',
	imports: [
		EntryAnimDirective,
		ReactiveFormsModule
	],
	templateUrl: './cta-section.component.html',
	styleUrl: './cta-section.component.css',
})
export class CtaSectionComponent {

	name = signal<string>('')
	service = signal<string>('')
	message = signal<string>('')

	contactForm: FormGroup<IContactForm>

	constructor() {
		this.contactForm = new FormGroup<IContactForm>({
			name: new FormControl('', {
				validators: [
					Validators.required,
					// Validators.pattern(/^[a-zA-Z0-9]$/)
				],
				nonNullable: true
			}),
			service: new FormControl('',{
				validators: [
					Validators.required,
					// Validators.pattern(/^[a-zA-Z0-9]$/)
				],
				nonNullable: true
			}),
			message: new FormControl('',{
				validators: [
					Validators.required,
				],
				nonNullable: true
			})
		})
	}

	media = [
		{name:'name', icon: 'pi pi-facebook', link: ''},
		{name:'twitter', icon: 'pi pi-twitter', link: ''},
		{name:'tiktok', icon: 'pi pi-tiktok', link: ''}
	]

	submitForm(): void {
		if (this.contactForm.invalid) {
			this.contactForm.markAllAsTouched()
			return
		}

		const  {name, service, message} = this.contactForm.value
		const onsubmitMessage = `${name?.trim()} \n${service?.trim()} \n \n${message}`
		const messageEncoder = encodeURIComponent(onsubmitMessage)

		window.location.href = `https://wa.me/+243853432565?text=${messageEncoder}`
	}
}
