import { Component } from '@angular/core';
import { GifsServicesService } from '../../../gifs/services/gifs.services.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsServicesService){

  }

  get tags(){
    return this.gifsService.tagsHistory;
  }


}
