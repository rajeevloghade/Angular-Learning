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

  constructor(private _employeeService: EmployeeService, private _getEmployee:EmployeeListComponent) {}

  ngOnInit(): void {
    this.addEmployee();
  }

  addEmployee() {
    this._employeeService.addEmployee(this.employee).subscribe(
      (response) => {console.log(response),
      this._getEmployee.getEmployee();},
      (error) => console.log(error)
    );
  }
}
