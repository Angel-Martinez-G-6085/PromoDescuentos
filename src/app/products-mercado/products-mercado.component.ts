import { Component } from '@angular/core';
import {ApiMercadoService} from '../services/api-mercado.service'

@Component({
  selector: 'app-products-mercado',
  templateUrl: './products-mercado.component.html',
  styleUrls: ['./products-mercado.component.css']
})
export class ProductsMercadoComponent {
  public Aproducts:Array<any>=[];

  constructor( private ApiMercadoService:ApiMercadoService){
   this.ApiMercadoService.getProducts().subscribe((resp:any)=>{
    console.log(resp)
    this.Aproducts=resp.results;

   })
  }
}
