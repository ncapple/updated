
import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product: Product = (null);
  product_id: string;

  constructor( private dataservice: DataService, private _router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.product_id = params.get('id');
      console.log(this.product_id);

      this.dataservice.getProduct(this.product_id).subscribe( productReturned => {
        this.product = productReturned;
      });
    });
  }


  onUpdate(event: Event) {
    event.preventDefault();
    this.dataservice.updateProduct(this.product_id, this.product).subscribe();
    this.product = new Product();
    this._router.navigateByUrl('/');
  }

  onReset() {
    window.location.reload();
  }
}