import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private http:HttpClient){ }

  api_url = 'https://tobsa.com.ar/wp/wp-json/wc/store/v1/products/';

  // GET para obtener los datos de la API
  getProducts():Observable<any>{
    return this.http.get(this.api_url);
  }

}
