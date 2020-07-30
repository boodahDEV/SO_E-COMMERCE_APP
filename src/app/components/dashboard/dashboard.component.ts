import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private taskservice: TasksService) { }

  ngOnInit(): void {
  }

  onClick(){
    // this.taskservice.connect_database_oracle();
  }

}
