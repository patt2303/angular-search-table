import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './data-table.html'
})
export class DataTable {
  @Input() employees: any[] = [];
}
