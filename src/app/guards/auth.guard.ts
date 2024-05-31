import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioLogado = inject(AuthService).usuarioEstaAutenticado();
  if (!usuarioLogado) {
    inject(Router).navigate(['login']);
    return false;
  }
  return true;
};
