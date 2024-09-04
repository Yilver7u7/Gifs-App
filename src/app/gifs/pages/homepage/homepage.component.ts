import { Component } from '@angular/core';
import { GifsServices } from '../../services/gifs.services.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {

  constructor( private gifsService: GifsServices ){}

  get gifs(): Gif[]{
    return this.gifsService.gifsList;
  }

}
