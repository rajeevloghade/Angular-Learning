import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  public employee = new Employee();

  constructor(
    private _employeeService: EmployeeService,
    private _employeeListComponent: EmployeeListComponent
  ) {}

  ngOnInit(): void {
    this.addEmployee();
  }

  addEmployee() {
    this._employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        console.log(response),
          this.reset(),
          this._employeeListComponent.getEmployee();
      },
      (error) => console.log(error)
    );
  }
  private reset() {
    console.log('Resetting');
    (this.employee.name = ''),
      (this.employee.department = ''),
      (this.employee.address = '');
  }
  onSubmit() {
    this.addEmployee();
  }
}
