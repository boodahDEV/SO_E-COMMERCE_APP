import { Component, OnInit } from "@angular/core";
import { MENU_ITEMS } from './sidebar-menu';
import Swal from 'sweetalert2';
import { NbMenuService, NbSidebarService, NbDialogService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AddAcctionComponent } from './components/add-acction/add-acction.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent implements OnInit {
  items = MENU_ITEMS;
  count = localStorage.length + 1;
  user: {
    email: string,
    username: string,
    id: string,
    role: string
  };
  submitted: boolean;
  status_login: Boolean; //ESTE CAMPO CONTROLA LAS OPCIONES DE SESION
  private local$ = new Subject<any>();

  opciones = [
    { title: 'Configurar', icon: 'settings-2-outline' },
    { title: 'Salir', icon: 'log-out-outline' },
  ]; //este campo mantiene las opciones basicas de configuracion del usuario


  constructor(
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService,
    private router: Router,
    private auth: AuthService,
    private nbMenuService: NbMenuService,
    private dialogService: NbDialogService,
  ) {
    this.user = { email: '', username: '', id: '', role: 'none' };
    if (localStorage || this.user == null) {
      setTimeout(() => {
        for (const key in localStorage) {
          if (localStorage.hasOwnProperty(key) && key === "session-data") {
            this.user = JSON.parse(localStorage.getItem("session-data"));
            this.status_login = true
            console.log(this.user)
          }
        }
      }, 320)
    }
    //ESTO BUSCA EN EL MENUITEMS EL TITULO EN ESPECIFICO Y CARGA LO QUE ESTA EN EL LOCAL HOST
    //CON UNA LLAVE EN ESPECIFICO, A DICHO MENUITEMS
    this.items.forEach((res) => {
      for (const key in localStorage) {
        if (res.title === key.split("-")[1]) {
          if (res.children) {
            if (
              localStorage.hasOwnProperty(key)
            ) {
              if (res.children) {
                res.children.push(JSON.parse(localStorage[key]));
              }
            }
          }
        }
      }
    });
  }
  ngOnInit(): void {

  }


  public toggle() {
    this.sidebarService.toggle(true);
    return false;
  }// simplemente controla el sidebar, lo abre y lo cierra

  public open() {
    const dialogRef = this.dialogService.open(SigninComponent, { hasBackdrop: true, closeOnBackdropClick: true }); // este es prueba con datos desde el ts
  } // este metodo controla el patron de inicio de sesion

  public async addMenuItem() {
    this.dialogService.open(AddAcctionComponent, { hasBackdrop: true, closeOnBackdropClick: true }); // este es prueba con datos desde el ts
  }

  redirect(to: string) {
    this.router.navigate(["/" + to]);
  }

  getData$(): Observable<any> {
    return this.local$.asObservable();
  }

  logout() {
    this.auth.logout();
  }
}
