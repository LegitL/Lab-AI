import { Component, OnInit } from '@angular/core';
import * as mi from '@magenta/image';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  model: any;

  constructor() {}

  ngOnInit(): void {
    this.model = new mi.ArbitraryStyleTransferNetwork();
    console.log(this.model);
    this.model.initialize().then(() => this.stylize());
  }

  private stylize(): void {
    console.log('here')
    const contentImg = document.getElementById('content') as HTMLImageElement;
    const styleImg = document.getElementById('style') as HTMLImageElement;
    const stylizedCanvas = document.getElementById('stylized') as HTMLCanvasElement;
    this.model.stylize(contentImg, styleImg).then((imageData) => {
      stylizedCanvas.getContext('2d').putImageData(imageData, 0, 0);
    });
  }
}
