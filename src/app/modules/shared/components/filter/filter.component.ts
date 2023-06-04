import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterModel } from '../../models/filter.class';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() onFilter = new EventEmitter<{}>();
  filterForm!: FormGroup;
  registerError = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filter: ['price', [Validators.required]],
      minValue: ['0', [Validators.required]],
      maxValue: ['', [Validators.required]]
    })
  }

  get filter(): string {
    return this.filterForm.get('filter')?.value;
  }

  get minValue(): string {
    return this.filterForm.get('minValue')?.value;
  }

  get maxValue(): string {
    return this.filterForm.get('maxValue')?.value;
  }

  onSubmit() {
    const filterValue = new FilterModel(
      this.filter,
      this.minValue,
      this.maxValue
    )
    this.onFilter.emit(filterValue);
  }

  submitValidationRequired(field: string, validation: string) {
    return this.filterForm.get(field)?.errors?.[validation] && this.submitted;
  }
}
