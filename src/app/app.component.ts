import { Component, TemplateRef,  } from "@angular/core";
import { MENU_ITEMS } from './sidebar-menu';
import Swal from 'sweetalert2';
import { NbMenuItem, NbMenuService, NbSidebarService, NbDialogService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent {
  items = MENU_ITEMS;
  private local$ = new Subject<any>();
  count = localStorage.length + 1;
  user: any;
  submitted: boolean;
  status_login: Boolean; //ESTE CAMPO CONTROLA LAS OPCIONES DE SESION
  changeClose: boolean

  opciones = [
    { title: 'Configurar', icon: 'settings-2-outline' },
    { title: 'Salir',  icon: 'log-out-outline', },
  ]; //este campo mantiene las opciones basicas de configuracion del usuario


  constructor( 
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService,
    private router: Router,
    private dialogService: NbDialogService
   ) {
    this.status_login=false;

    //ESTO BUSCA EN EL MENUITEMS EL TITULO EN ESPECIFICO Y CARGA LO QUE ESTA EN EL LOCAL HOST
    //CON UNA LLAVE EN ESPECIFICO, A DICHO MENUITEMS
    this.items.forEach((res) => {
      if (res.title === "Baules") {
        if (res.children) {
          for (const key in localStorage) {
            if (
              localStorage.hasOwnProperty(key) &&
              key.split("-")[1] === "chest"
            ) {
              if (res.children) {
                res.children.push(JSON.parse(localStorage[key]));
                console.log("ok?");
              }
            }
          }
        }
      }
    });
  }


  public toggle() {
    this.sidebarService.toggle(true);
    return false;
  }// simplemente controla el sidebar, lo abre y lo cierra

  public open() {
    // this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog',hasBackdrop:true }); // este es prueba con datos desde el ts
    const dialogRef =  this.dialogService.open(SigninComponent, {hasBackdrop:true, closeOnBackdropClick:true}); // este es prueba con datos desde el ts
  } // este metodo controla el patron de inicio de sesion

  public async addMenuItem() {
    const { value: chestName } = await Swal.fire({
      title: "Nombre del baúl",
      input: "text",
      icon: "info",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Debe especificar un nombre por lo menos!";
        }
      },
    });

    if (chestName) {
      var basic_chest: NbMenuItem = {
        title: "" + chestName,
        icon: "archive-outline",
        selected:false,
        link: "/chestInfo",
      };

      localStorage.setItem(
        "new-chest-" + this.count++,
        JSON.stringify(basic_chest)
      );
      this.local$.next(basic_chest);

      this.items.forEach((res) => {
        if (res.title === "Baules") {
          this.router.navigate(["/chest"]);
          res.children.push(basic_chest);
        }
      });

      Swal.fire({
        title: "Baúl creado!",
        text: "El baúl fue creado con exito, click en el para configurar.",
        timer: 2000,
        icon: "success",
        showConfirmButton: false,
      });
    }
  }

  redirect(to:string){
    this.router.navigate(["/"+to]);
  }

  getData$(): Observable<any> {
    return this.local$.asObservable();
  }


}
