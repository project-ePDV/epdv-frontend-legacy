import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<number>();
  @Input() totalRecords!:number;
  @Input() items:number = 6;
  page:number = 1;

  nextPage() {
    this.page < this.returnTotalPages() ? this.page += 1 : null;
    this.pageChange.emit(this.page);
  }

  previousPage() {
    this.page <= 1 ? this.page = 1 : this.page -= 1;
    this.pageChange.emit(this.page);
  }

  disableNextButton() {
    return this.page >= this.returnTotalPages() || !this.totalRecords;
  }

  disablePreviousButton() {
    return this.page == 1 || !this.totalRecords;
  }

  returnTotalPages() {
    return Math.ceil(this.totalRecords/this.items);
  }
}
