import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-categoia-por-producto',
  templateUrl: './categoia-por-producto.component.html',
  styleUrls: ['./categoia-por-producto.component.css']
})
export class CategoiaPorProductoComponent implements OnInit {
  count = localStorage.length + 1;
  array_products = new Array();
  status_edit: Boolean
  tipo_producto: string
  id_tipo_producto: string

  constructor(private auth: AuthService, private _Activatedroute: ActivatedRoute) {
    this.id_tipo_producto = this._Activatedroute.snapshot.paramMap.get("id");
    this.tipo_producto = this._Activatedroute.snapshot.paramMap.get("id2");
    if (sessionStorage) {
      for (const key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key) && key === "session-data" && JSON.parse(sessionStorage[key]).role === 'Administrador') {
          this.status_edit = true
        }
      }
    }
  }

  ngOnInit(): void {
    this.compareStorage();
  }


  compareStorage(){ //JSON.parse(localStorage.getItem(key))
    this.auth.getProdutsByCategory(this.id_tipo_producto).subscribe(resp => {
      resp.forEach(element => {
        element.link = "/category";
        for (const keys in localStorage) {
          if (Object.prototype.hasOwnProperty.call(localStorage, keys)) {
            const r = localStorage[keys];
            // if (JSON.parse(r).id === element.id) {
            //   localStorage.removeItem(keys);
            // }

          }
        }
        this.array_products.push(element)
        
      });
      console.log(localStorage.length)
    })
  }
}
