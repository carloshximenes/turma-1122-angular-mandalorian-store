import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(private _authService: AuthService, private _router: Router) {}

  public loginHandler(): void {
    const camposPreenchidos =
      this.username.trim().length > 0 && this.password.trim().length > 0;
    if (!camposPreenchidos) {
      alert('Todos os campos são obrigatórios');
      return;
    }
    const usuarioLogado = this._authService.login(this.username, this.password);
    if (usuarioLogado) {
      alert('Seja Bem-Vindo(a) a Mandalorian Store');
      this._router.navigate(['equipments']);
    } else {
      alert('Usuário ou senha inválido');
    }
  }
}
