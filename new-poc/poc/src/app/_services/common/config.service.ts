import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private applicationsList: any;

  constructor() { }

  get applications() {
    this.applicationsList = [
      { name: 'InfraSctructure Dashboard', appcode: 'ama-infra', icon: 'fa-building', link: '/ama-infra', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'Nav Process', appcode: 'nav-process', icon: 'fa-cloud', link: '/nav-process', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'GSS - Nav Dashboard', appcode: 'gss-nav', icon: 'fa-meetup', link: '/gss-nav', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'EPW Metric Dashboard', appcode: 'epw-metric', icon: 'fa-bar-chart', link: '/epw-metric', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'MCH Metric Dashboard', appcode: 'mch-metric', icon: 'fa-medium', link: '/mch-metric', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'SLA Metric Dashboard', appcode: 'sla-metric', icon: 'fa-pie-chart', link: '/sla-metric', alerts: (Math.floor(Math.random() * 1000)) },
      { name: 'Self Service Dashboard', appcode: 'self-service', icon: 'fa-users', link: '/self-service', alerts: (Math.floor(Math.random() * 1000)) }
    ];
    return this.applicationsList;
  }
}
