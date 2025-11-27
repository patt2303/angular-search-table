import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { SearchPanel } from './search-panel/search-panel';
import { DataTable } from './data-table/data-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchPanel, DataTable],
  templateUrl: './app.html'
})
export class App {
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  onSearch(query: string) {
    this.http.get<any[]>('http://localhost:3000/employees').subscribe({
      next: (data) => {
        console.log('API response:', data);
        const lowerQuery = query.toLowerCase().trim();
        this.employees = data.filter(emp =>
          !lowerQuery || (emp.name && emp.name.toLowerCase().includes(lowerQuery))
        );
      },
      error: (err) => console.error('API error:', err)
    });
  }
}
