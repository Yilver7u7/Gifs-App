import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent {


@ViewChild('textoInput')
public tagInput!: ElementRef<HTMLInputElement>;

  tagSearch(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log( {newTag} );
  }


}
