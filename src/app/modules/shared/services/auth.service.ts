import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario/models/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


const BASE_URL_AUTH = environment.base_url_auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;
  private _usuario: Usuario;

  constructor(private http: HttpClient) {}

  public get token(): any{
    if(this._token != null){
      return this._token;
    } else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = JSON.stringify(sessionStorage.getItem('token') as string);
      return this._token;
    }
    return null;
  }

  public get usuario(): Usuario{
    if(this._usuario != null) {
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario') as string) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  login(usuario: Usuario) : Observable<any> {
  const httHeaders = new HttpHeaders({'Content-Type':'application/json'});
  return this.http.post(`${BASE_URL_AUTH}/cuentas/Login`,usuario, {headers: httHeaders});
  }

}