import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-panel.html'
})
export class SearchPanel implements OnInit {
  searchForm: any;

  @Output() search = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  onSearch() {
    const query = this.searchForm.value.query || '';
    this.search.emit(query);
  }
}
