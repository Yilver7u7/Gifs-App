import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {


  private _tagsHistory: string[] = [];

  apiKey:string = 'FgZpYuCHKARLYEFK2kmStaorkSViNnzP';

  constructor() { }

  public get tagsHistory(): string[]{
    return [...this._tagsHistory];
   }

   private organizeHistory( tag: string){
    tag = tag.toLocaleLowerCase();

    if( this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTad) => oldTad !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory.splice(10);
   }

   searchTag( tag: string ):void{
    if( tag.length === 0 )return
    this.organizeHistory( tag )
    // this._tagsHistory.unshift( tag );
    console.log(this._tagsHistory)
   }

}
