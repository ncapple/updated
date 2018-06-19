import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

allProducts: Product[] = [];


  constructor( private readonly dataservice: DataService, private router: Router) {}


  ngOnInit() {
    this.findProducts();
  };

  findProducts(){
    this.dataservice.findProducts().subscribe(
      (response: any) => {
        this.allProducts = response;
      },
      (err) => {
        console.log('error in list.components.ts with findProducts', err);
      }
    );
  }

}