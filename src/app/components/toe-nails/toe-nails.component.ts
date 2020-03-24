import { Component, OnInit } from '@angular/core';
import { Image, ToeNailsService } from "../../services/toe-nails.service";
import { Lightbox } from 'ngx-lightbox';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-toe-nails',
  templateUrl: './toe-nails.component.html',
  styles: []
})
export class ToeNailsComponent implements OnInit {

  images : Image[] = [];
  _albums :any = [];
  constructor(private _toeNailsService : ToeNailsService,
              private _lightbox: Lightbox) { }

  ngOnInit() {
    this.images = this._toeNailsService.getImages();

    for (let img of this.images){
      const src = img.url;
      const caption = 'Image ' + img.id;
      const thumb = '';
      const id = img.id;
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
