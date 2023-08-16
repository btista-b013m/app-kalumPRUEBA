//import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
//import { FormRegisterComponent } from './form-register.component';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Usuario } from '../../usuario/models/usuario';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  implements OnInit {
   public loginForm: FormGroup;
   usuario: Usuario = new Usuario();
   dialogRef: any;


  ngOnInit(): void {
    
  }

  constructor(private formBuilder: FormBuilder, private dialoRef: MatDialogRef<FormLoginComponent>,
    private authService: AuthService){
    this.loginForm = formBuilder.group({
      username: ['FernandaTista',Validators.required],
      password: ['Inicio.2023',Validators.required]
    });

  }

onCancel(){
  this.dialogRef.close(2);
}

onLogin(){
  this.usuario.username = this.loginForm.get('username')?.value;
  this.usuario.password = this.loginForm.get('password')?.value;
  this.authService.login(this.usuario).subscribe(response => {
    console.log(response);
  });
}

}
