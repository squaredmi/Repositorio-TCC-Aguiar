
import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './pages/home/home';
import { Busca } from './pages/busca/busca';
import { Admin } from './pages/admin/admin';
import { Opcoes } from './pages/opcoes/opcoes';

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
  },
  {
    path: 'sidebar',
    component: Sidebar
  },
  { path: 'admin',
    component: Admin
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'busca',
    component: Busca
  },
  { path: 'opcoes',
    component: Opcoes
  }
];
