import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { FaixaInferior } from '../../components/faixa-inferior/faixa-inferior';

@Component({
  selector: 'app-opcoes',
  standalone: true,
  imports: [Sidebar, FaixaInferior],
  templateUrl: './opcoes.html',
  styleUrl: './opcoes.scss',
})
export class Opcoes {}