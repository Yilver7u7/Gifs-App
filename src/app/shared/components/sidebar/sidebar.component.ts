import { Component } from '@angular/core';
import { GifsServices } from '../../../gifs/services/gifs.services.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsServices){

  }

  get tags(){
    return this.gifsService.tagsHistory;
  }


}
