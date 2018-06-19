import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sla-metric',
  templateUrl: './sla-metric.component.html',
  styleUrls: ['./sla-metric.component.scss']
})
export class SlaMetricComponent implements OnInit {

  public metricBlocks: any;
  public departures: any;
  public chartData: any;

  constructor() { }

  ngOnInit() {
    this.metricBlocks = [
      { title: 'SLA\'s', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#324D5C', color: '#fff', count: (Math.floor(Math.random() * 100000)) },
      { title: 'SLA\s Met', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#F8C302', color: '#fff', count: (Math.floor(Math.random() * 100000)) },
      { title: 'SLA\s Pending', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#DE5B49', color: '#fff', count: (Math.floor(Math.random() * 100000)) },
      { title: 'SLA Misses', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#46B29D', color: '#fff', count: (Math.floor(Math.random() * 100000)) },
      { title: 'Active Delays', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#E37B40', color: '#fff', count: (Math.floor(Math.random() * 100000)) },
      { title: 'In Progress', link: 'http://google.com', icon: '', helptext: 'Some Info', background: '#A6D00E', color: '#fff', count: (Math.floor(Math.random() * 100000)) }
    ];

    this.departures = [
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' },
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' },
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' },
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' },
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' },
      { client: 'XXX-XX-XXXXX', destination: 'XX XXXX XX', fileName: 'xxx-xxx.xxx', package: '2', estimatedDeparture: '4 June, 10:38AM', slaCutoff: '4 June, 12:00PM', slaDeliveryTime: '5 June 10:00AM', status: 'PENDING' }
    ];

    this.chartData = {
      completed: [
        {
          x: Date.UTC(2017, 12, 26, 12, 20),
          y: 0,
          doc_count: 4,
          marker: { radius: 4}
        },
        {
          x: Date.UTC(2017, 12, 26, 12, 30),
          y: 0,
          doc_count: 10,
          marker: { radius: 10}
        }, {
          x: Date.UTC(2017, 12, 26, 13, 22),
          y: 0,
          doc_count: 7,
          marker: { radius: 7}
        },
        {
          x: Date.UTC(2017, 12, 26, 13, 27),
          y: 0,
          doc_count: 14,
          marker: { radius: 14}
        },
        {
          x: Date.UTC(2017, 12, 26, 14, 25),
          y: 0,
          doc_count: 7,
          marker: { radius: 7}
        },
        {
          x: Date.UTC(2017, 12, 26, 14, 32),
          y: 0,
          doc_count: 10,
          marker: { radius: 10}
        },
        {
          x: Date.UTC(2017, 12, 26, 14, 43),
          y: 0,
          doc_count: 6,
          marker: { radius: 6}
        },
        {
          x: Date.UTC(2017, 12, 26, 14, 55),
          y: 0,
          doc_count: 6,
          marker: { radius: 6}
        },
        {
          x: Date.UTC(2017, 12, 26, 15, 0),
          y: 0,
          doc_count: 3,
          marker: { radius: 3}
      }],
      pending: [
        {
          x: Date.UTC(2017, 12, 26, 15, 30),
          y: 0,
          doc_count: 8,
          marker: { radius: 8}
        },
        {
          x: Date.UTC(2017, 12, 26, 15, 34),
          y: 0,
          doc_count: 12,
          marker: { radius: 12}
        },
        {
          x: Date.UTC(2017, 12, 26, 16, 43),
          y: 0,
          doc_count: 12,
          marker: { radius: 12}
        },
        {
          x: Date.UTC(2017, 12, 26, 16, 50),
          y: 0,
          doc_count: 4,
          marker: { radius: 4}
        },
        {
          x: Date.UTC(2017, 12, 26, 17, 0),
          y: 0,
          doc_count: 7,
          marker: { radius: 7}
        },
        {
          x: Date.UTC(2017, 12, 26, 17, 30),
          y: 0,
          doc_count: 3,
          marker: { radius: 3}
        },
        {
          x: Date.UTC(2017, 12, 26, 18, 0),
          y: 0,
          doc_count: 4,
          marker: { radius: 4}
      }]
    };
  }

}
