import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiMercadoService {

url:string='https://api.mercadolibre.com/sites/MLM/search?q=Ofertas';
  
  
  constructor( private http:HttpClient) {
   
   }

   getProducts(){
    let heades=new HttpHeaders().set('Type-content','application/json')
      return this.http.get(this.url,{
        headers:heades
      });
   }

   loadScript(archivos:String){
   
        let script=document.createElement("script");
        script.src="../js/"+archivos+".js";
        let body=document.getElementsByTagName("body")[0];
        body.appendChild(script);
  
   }
}
