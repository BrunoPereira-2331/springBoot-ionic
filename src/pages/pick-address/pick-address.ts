import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressDTO } from '../../models/address.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {
  
  items : AddressDTO[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua quinze de novembro",
        number: "300",
        complement: "Apto 200",
        neighborhood: "Santa monica",
        postalCode: "48293822",
        city: {
          id: "1",
          name: "uberlandia",
          state: {
            id: "1",
            name: "Minas Gerais"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Alexandre toledo da silva",
        number: "405",
        complement: null,
        neighborhood: "Centro",
        postalCode: "88933822",
        city: {
          id: "3",
          name: "São Paulo",
          state: {
            id: "2",
            name: "São Paulo"
          }
        }
      }
      
    ];
  }
  
}
