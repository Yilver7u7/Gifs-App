import { Component,ElementRef, ViewChild } from '@angular/core';
import { GifsServicesService } from '../../services/gifs.services.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent {

  constructor( private GifsServicesService: GifsServicesService ) {

   }


@ViewChild('textoInput')
public tagInput!: ElementRef<HTMLInputElement>;

  tagSearch(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log( newTag );
    //Add the new Input to the list
    this.GifsServicesService.searchTag(newTag);
    // reset the input field
    this.tagInput.nativeElement.value = '';
  }


}
