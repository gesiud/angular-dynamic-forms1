import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynControl } from './dyn-control.model';

@Component({
  selector: 'app-dyn-form-container',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dyn-form-container.component.html',
  styleUrls: ['./dyn-form-container.component.css'],
})
export class DynFormContainerComponent implements OnInit {
  form: FormGroup;
  formData: DynControl[] = [
    {
      name: 'firstName',
      label: 'Imię',
    },
    {
      name: 'lastName',
      label: 'Nazwisko',
    },
    {
      name: 'email',
      label: 'E-mail',
    },
    {
      name: 'address',
      label: 'Adres',
    },    
  ];
  constructor() {}

  ngOnInit() {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    const form = new FormGroup({});

    this.formData.forEach((control) => {
      if (control.type === 'text') {
        form.addControl(control.name, new FormControl());
      }
      if (control.type === 'checkbox') {
        const formArr = new FormArray([]);

        formArr.push(control.name, '');
      }
    });

    return form;
  }
}
