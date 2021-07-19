import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id= {{ departmentId }}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>&nbsp;
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button> &nbsp;
    <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="goToDepartment()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //Snapshot Aprroach
    // let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    // this.departmentId = id;

    //ParamMap Observable Aprroach
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') as string);
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate([{ id: previousId }], { relativeTo: this.route });
  }
  goNext() {
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate([{ id: nextId }], { relativeTo: this.route });
  }
  goToDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
