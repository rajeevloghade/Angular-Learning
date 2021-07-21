import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this._employeeService.getAllEmployees().subscribe(
      (employeeData) => {
        (this.employees = employeeData), console.log(employeeData);
      },
      (error) => console.log(error)
    );
  }

  deleteEmployee(employeeId: number) {
    this._employeeService.deleteEmployee(employeeId).subscribe(
      (response) => {
        console.log(response);
        this.getEmployee();
      },
      (error) => console.log(error)
    );
  }
}
