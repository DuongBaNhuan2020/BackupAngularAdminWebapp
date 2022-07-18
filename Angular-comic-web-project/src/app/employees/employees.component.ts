import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ComicService} from "../comic.service";
import {Router} from "@angular/router";
import {Employee} from "../comic";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Observable<Employee[]> | undefined;

  constructor(private employeeService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getComicsList();
  }
}
