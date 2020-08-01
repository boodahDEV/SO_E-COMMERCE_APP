import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MENU_ITEMS } from 'src/app/sidebar-menu';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items = MENU_ITEMS;
  count = localStorage.length + 1;
  array_products = new Array();
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
        if (localStorage.hasOwnProperty(key) && key.split("-")[1] === "Productos") {

          if (this.array_products) {
            this.array_products.push(JSON.parse(localStorage[key]));
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.auth.getAllProducts('NONE').subscribe(resp => {
      resp.forEach(element => {
        for (const keys in localStorage) {
          if (Object.prototype.hasOwnProperty.call(localStorage, keys)) {
            const r = localStorage[keys];
            if (JSON.parse(r).id === element.id) {
              localStorage.removeItem(keys);
            }

          }
        }
        localStorage.setItem(
          `data-Productos-` + this.count++,
          JSON.stringify(element)
        );
      });
      console.log(localStorage.length)
    })
  }

  validaLocalStorage(data) {

  }
}