import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() options?: any;

  constructor() { }

  ngOnInit() {
    console.log('Options: ', this.options);
  }

}
