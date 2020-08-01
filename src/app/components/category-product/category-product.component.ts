import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  array_all_category = new Array();
  data$: Observable<NbMenuItem>;
  count = localStorage.length + 1;
  status_edit: Boolean

  constructor(private auth: AuthService) {
    if (sessionStorage) {
      for (const key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key) && key === "session-data" && JSON.parse(sessionStorage[key]).role === 'Administrador') {
          this.status_edit = true
        }
      }
      console.log("edit active for admin")
    }

    if (localStorage) {
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.split("-")[1] === "Categorias") {

          if (this.array_all_category) {
            this.array_all_category.push(JSON.parse(localStorage[key]));
          }
        }
      }
    }

  }

  ngOnInit(): void {
    this.auth.getAllCategorys('NONE').subscribe(resp => {
      resp.forEach(element => {
        element.link = "/category";
        for (const keys in localStorage) {
          if (Object.prototype.hasOwnProperty.call(localStorage, keys)) {
            const r = localStorage[keys];
            if (JSON.parse(r).id === element.id) {
              localStorage.removeItem(keys);
            }

          }
        }
        localStorage.setItem(
          `data-Categorias-` + this.count++,
          JSON.stringify(element)
        );
      });
      console.log(localStorage.length)
    })
  }

  openCategoryByProducts(){
    
  }

}
