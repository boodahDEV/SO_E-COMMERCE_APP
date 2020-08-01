import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  connection: any
  private URL = "http://localhost:3300/api"; //aqui me conecto con el servidor de nodeJS en el cual en la ruta tal esta la conexion con la base de datos
  constructor(private http: HttpClient, private router: Router) {}

  signUp(user) {
    return this.http.post<any>(this.URL + `/signup`, user);
  }

  signIn(user) {
    return this.http.post<any>(this.URL + `/signin`, user);
  }

  logger(): Boolean {
    if(!!sessionStorage.getItem("session-data") && JSON.parse(sessionStorage.getItem('session-data')).role === 'Administrador'){
      return true
    }else{
      return false
    }
    return false;
  }

  getToken() {
    return setTimeout(() => {
      return localStorage.getItem("token");
    }, 800);
    // Errores para el manejo de token por el headers
  }

  logout() {
    sessionStorage.removeItem("session-data");
    window.location.reload()
  }
}
