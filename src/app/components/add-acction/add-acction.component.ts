import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-acction',
  templateUrl: './add-acction.component.html',
  styleUrls: ['./add-acction.component.css']
})
export class AddAcctionComponent implements OnInit {
  selectedItem:any

  constructor() { }

  ngOnInit(): void {
  }

  getAdd(valor: any) {
    console.log(valor)
  }
}
