import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'token_usuario';

  private rootUser = 'turma1122';
  private rootPassword = 'turma1122';

  constructor() {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  public login(username: string, password: string): boolean {
    if (username === this.rootUser && password === this.rootPassword) {
      const authToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA';
      localStorage.setItem(this.authSecretKey, authToken);
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  public usuarioEstaAutenticado(): boolean {
    return this.isAuthenticated;
  }

  public logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
