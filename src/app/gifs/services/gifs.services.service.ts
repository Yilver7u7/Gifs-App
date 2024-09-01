import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {

  private _tagsHistory: string[] = [];


  constructor() { }

  public get tagsHistory(): string[]{
    return [...this._tagsHistory];
   }

   searchTag( tag: string ):void{
    this._tagsHistory.unshift( tag );
   }

}
