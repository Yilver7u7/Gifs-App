import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServices {

  public gifsList: Gif[] = [];
 
  private _tagsHistory: string[] = [];
  apiKey:string = 'FgZpYuCHKARLYEFK2kmStaorkSViNnzP';
  private serviceURL:String = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient) { }

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

  async searchTag( tag: string ):Promise<void>{
    if( tag.length === 0 )return
    this.organizeHistory( tag )
    // this._tagsHistory.unshift( tag );
    console.log(this._tagsHistory)

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', tag)


    this.http.get<SearchResponse>(`${this.serviceURL}/search`, {params})
    .subscribe( resp => {

      this.gifsList = resp.data;
      console.log( this.gifsList );

      // Aqui se puede manejar la respuesta como deseamos.
      //  Por ejemplo, mostrar los resultados en pantalla.
    })


    // Ejemplo sencillo de una peticion get
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=DlsMJIpEvQ59r0WYR0096eHblFin85rY&q=valorant')
    // .then( resp => resp.json() )
    // .then( data => console.log(data.data));



   }

}
