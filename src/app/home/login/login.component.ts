import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { connect, Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha ='';
  
  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      ()=> {
          this.router.navigate(['animais'])
      },
      (error) => {
        alert('Xiii deu erro!'),
        console.log(error);
    }
  );
  }

}
