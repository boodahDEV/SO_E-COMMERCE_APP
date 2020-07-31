import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  array_all_category = new Array();
  data$: Observable<NbMenuItem>;


  constructor() { }

  ngOnInit(): void {
    // this.data$ = this.app.getData$();
    // this.data$.subscribe((res) => {
    //   this.array_all_category.push(res);
    // });
  }

}
