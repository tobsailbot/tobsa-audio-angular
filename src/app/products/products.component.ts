import { Component, OnInit } from '@angular/core';
import { StoreApiService } from '../services/store-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private storeApiService: StoreApiService) { }

  products:any = [];
  ngOnInit(): void {
    this.storeApiService.getProducts().subscribe(data => {
      
      console.log(data);
      this.products = data;
    })
  }

}
