import { Component, OnInit } from '@angular/core';
declare var Swiper: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit() {

    const mySwiper = new Swiper('.mySwiper', {

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

  }

}
