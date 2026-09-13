import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cadastro',
    component: Cadastro
  }
];