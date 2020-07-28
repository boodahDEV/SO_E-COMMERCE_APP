import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AppComponent } from "../../app.component";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-chest",
  templateUrl: "./chest.component.html",
  styleUrls: ["./chest.component.css"],
})
export class ChestComponent implements OnInit {
  color: string;
  array_new_chest = new Array();
  data$: Observable<NbMenuItem>;

  constructor(public app: AppComponent) {
    if (localStorage) {
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.split("-")[1] === "chest") {

          if (this.array_new_chest){
            this.array_new_chest.push(JSON.parse(localStorage[key]));
          }
        }else{
          console.log("no localstorage")
          break;
        }
      }
    }
  }//constructor

  ngOnInit(): void {
    this.data$ = this.app.getData$();
    this.data$.subscribe((res) => {
      this.array_new_chest.push(res);
    });
  }
}
