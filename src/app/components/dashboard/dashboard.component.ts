import { Component, Input, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { TasksService } from 'src/app/services/tasks.service';
import { TrafficBar, TrafficBarData } from './traffic-bar';
import { TrafficList, TrafficListData } from './traffic-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

     }

  ngOnInit(): void {
  }

  onClick(){
    // this.taskservice.connect_database_oracle();
  }

}
