import { Component, OnInit } from '@angular/core';
import { Image } from "../../services/toe-nails.service";
import { Lightbox } from "ngx-lightbox";
import { FingerNailsService } from "../../services/finger-nails.service";

@Component({
  selector: 'app-finger-nails',
  templateUrl: './finger-nails.component.html',
  styles: []
})
export class FingerNailsComponent implements OnInit {

  images : Image[] = [];
  _albums :any = [];
  constructor(private _fingerNailService : FingerNailsService,
              private _lightbox: Lightbox) { }

  ngOnInit() {
    this.images = this._fingerNailService.getImages();

    for (let img of this.images){
      const src = img.url;
      const caption = 'Image ' + img.id;
      const thumb = '';
      const id =  img.id;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
        id : id
      };

      this._albums.push(album);
    }
  }

  open(index: number) {
    console.log(index)
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
