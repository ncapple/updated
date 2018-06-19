import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
id: string; 
product : Product[] = [];

  constructor(private dataservice: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = String(params.get('id'));
    })
    this.dataservice.getProduct(this.id).subscribe(
      (response: any) => {
        this.product = response;
      },
      (err) => {
        console.log('error in list.components.ts with findProducts', err);
      }
    );

  }

  onDelete(id: String){
    this.dataservice.deleteProduct(this.id).subscribe();
    this.router.navigateByUrl('/') 
  }
}
