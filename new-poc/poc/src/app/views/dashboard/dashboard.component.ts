import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../_services/common/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public applications: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.applications = this.configService.applications;
  }

}
