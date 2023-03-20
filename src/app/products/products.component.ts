import { Component, OnInit } from '@angular/core';
import { StoreApiService } from '../services/store-api.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations';
import { products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    fadeInOnEnterAnimation({ duration: 600 }),
    fadeOutOnLeaveAnimation({ duration: 600 }),
  ]
})
export class ProductsComponent implements OnInit {
  constructor(private storeApiService: StoreApiService) { }

  loader_div:any = [1,2,3]; // cantidad de divs de carga
  is_loading:any = true;
  img_loading = true;
  //products:any = products;
  products:any = [];

  ngOnInit(): void {

    this.is_loading = true;
    this.img_loading = true;

    this.storeApiService.getProducts().subscribe(data => {  
      this.products = data;
      this.is_loading = false;
      console.log(data);
      
    })

  }
  
  onImageLoad(event:any){
    this.img_loading = false;
  }
}
