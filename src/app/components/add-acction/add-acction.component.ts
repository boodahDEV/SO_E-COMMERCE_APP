import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService, NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from 'src/app/sidebar-menu';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-acction',
  templateUrl: './add-acction.component.html',
  styleUrls: ['./add-acction.component.css']
})
export class AddAcctionComponent implements OnInit {
  selectedItem: any
  count = localStorage.length + 1;
  type_add_item:string
  items = MENU_ITEMS;

  constructor(
    protected dialogRef: NbDialogRef<any>,
    private dialogService: NbDialogService,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
  }

  getAdd(valor: any) {
    switch (valor) {
      case 0:
        this.createItem('Inventario')
        break;
      case 1:
        this.createItem('Productos')
        break;
      case 2:
        this.createItem('Categorias')
        break;
      case 3:
        this.createItem('Proveedores')
        break;
      default:
        break;
    }
  }

  redirectToRegister() {
    this.dialogRef.close();
    // this.dialogService.open(SignupComponent, { hasBackdrop: true }); // este es prueba con datos desde el ts
  }

  async createItem(item: string) {
    const { value: name_service } = await Swal.fire({
      title: `Ingrese un nombre o descripcion para ${item}`,
      input: "text",
      icon: "info",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value ) {
          return "Para crearlo, debe por lo menos especificar el nombre correctamente.";
        }else if(value.length > 20){
          return `El nombre de ${item} no debe ser mayor a 20 caracteres, favor corregir.`;
        }
      },
    });

    if (name_service) {
      var data: NbMenuItem = {
        title: "" + name_service,
        icon: "file-outline",
        selected: false,
        link: '',
      };

      localStorage.setItem(
        `new-${item}-` + this.count++,
        JSON.stringify(data)
      );
      // this.local$.next(basic_chest);

      this.items.forEach((res) => {
        if (res.title === item) {
          switch (item) {
            case "Inventario":
              this.router.navigate([`/inventory`]);
              res.children.push(data);
            break;
            case "Productos":
              this.router.navigate([`/product`]);
              res.children.push(data);
              break;
            case "Categorias":
              this.router.navigate([`/category`]);
              res.children.push(data);
              break;
            case "Proveedores":
              this.router.navigate([`/supplier`]);
              res.children.push(data);
              break;
            default:
              break;
          }
        }
      });
      this.dialogRef.close();
      Swal.fire({
        title: `${item} creado!`,
        text: `El ${item} fue creado con exito, click en el para configurar.`,
        timer: 2500,
        icon: "success",
        showConfirmButton: false,
      });
    }
  }
}
