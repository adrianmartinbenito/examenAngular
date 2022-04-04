import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      "name": "Palmerita1",
      "url": "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300"

    },
    {
      "name": "Palmerita2",
      "url": "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300"

    },
    {
      "name": "Palmerita3",
      "url": "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300"

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
