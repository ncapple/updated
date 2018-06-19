
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: Product = new Product();

  constructor( private readonly dataservice: DataService, private readonly router: Router ) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.product);

    this.dataservice.createProduct(this.product).subscribe(
      product => {
        this.router.navigateByUrl('products')
      },
      error => {
        console.log('error creating product', error);
      }
    );
  }


}
