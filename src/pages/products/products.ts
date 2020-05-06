import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/produto.dto';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  
  items : ProductDTO[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.items = [
      {
        id : "1",
        name: 'mouse',
        price: 80.90
      },
      {
        id: "2",
        name: 'Teclado',
        price: 100.00
      }
    ]
  };
}
