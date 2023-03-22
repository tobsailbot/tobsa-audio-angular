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
  constructor(private storeApiService: StoreApiService,) {
    document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
   }

  loader_div:any = [1,2,3]; // cantidad de divs de carga
  is_loading:any = true;
  img_loading = true;
  //products:any = products;
  products:any = [];
  selected_product:number = 0;

  // product loading animation
  animationOpacity:any = 1; 

  ngOnInit(): void {

    this.is_loading = true;
    this.img_loading = true;

    this.storeApiService.getProducts().subscribe(data => {  
      this.products = data;
      this.is_loading = false;      
    })
  }
  
  onImageLoad(event:any){
    this.img_loading = false;
  }

  loadingProduct(event:any){
    const element = event.currentTarget.querySelector('.loading-product');
    this.selected_product = element.id;
    this.animationOpacity = 1;
  }

  handleVisibilityChange() {
    if (document.hidden) {
      // El usuario salió de la pestaña
      this.animationOpacity = 0;
    } else {
      // El usuario volvió a la pestaña
    }
  }

}
