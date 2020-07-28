import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { NbSidebarService, NbMenuItem, NbMenuService } from "@nebular/theme";
import { MENU_ITEMS } from "./sidebar-menu";
import Swal from "sweetalert2";
import Notiflix from "notiflix";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = MENU_ITEMS;
  private local$ = new Subject<any>();
  count = localStorage.length + 1;
  it = [
    { title: 'Configurar', icon: 'settings-2-outline' },
    { title: 'Salir',  icon: 'log-out-outline', },
  ];

  constructor(
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService,
    private router: Router
  ) {
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

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  async addMenuItem() {
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
