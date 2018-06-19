import { Component, OnInit } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';
import { ConfigService } from '../../_services/common/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public collapsed = false;
  public menuList: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.menuList = this.configService.applications;
  }

  onCollapseClick() {
    this.collapsed = !this.collapsed;
  }

}
