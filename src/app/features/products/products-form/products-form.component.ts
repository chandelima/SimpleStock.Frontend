import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {

  @Input() formVisible?: boolean;
  @Output() setFormVisible = new EventEmitter();
  @ViewChild('saveButton') saveButton?: ElementRef;

  form: FormGroup = this.formBuilder.group({
		name: [null, Validators.required],
		amount: [null, [Validators.min(1), Validators.required]],
		price: [null, [Validators.min(0.01), Validators.required]]
	});

  constructor(private formBuilder: FormBuilder) { }

  save() {
    this.setFormVisible.emit(false);
    this.form.reset();
  }

  cancel() {
    this.setFormVisible.emit(false);
		this.form.reset();
  }

  verifyValidTouched(control: string): boolean {
		return (
			!this.form.get(control)!.value &&
			this.form.get(control)!.touched
		);
	}

  setFormPrice(event: any) {
    const price = event.value;
    this.form.patchValue({ price });
  }

  setSaveButtonFocus() {
    console.log("sb", this.saveButton)
    this.saveButton!.nativeElement.focus();
  }

	applyControlInvalid(control: string): object {
		return {
			'ng-invalid': this.verifyValidTouched(control),
			'ng-dirty': this.verifyValidTouched(control),
		};
	}
}
