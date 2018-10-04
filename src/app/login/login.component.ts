import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  autenticar() {
    console.log(this.usuario) ;
    this.autenticacaoService.logar(this.usuario)
            .subscribe(response => this.usuario);
            console.log(this.usuario);
            if(this.usuario)
                this.router.navigate(['/dashboard']);        
            else{
                console.log("Usuário ou senha inválido!")
            }
  }

}
