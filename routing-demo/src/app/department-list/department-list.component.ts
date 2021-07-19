import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }} </span>{{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];
  public selectedId: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') as string);
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    //relative navigation
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: any) {
    return department.id == this.selectedId;
  }
}
