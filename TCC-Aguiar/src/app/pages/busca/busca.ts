import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { FaixaInferior } from '../../components/faixa-inferior/faixa-inferior';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [Sidebar, FaixaInferior],
  templateUrl: './busca.html',
  styleUrl: './busca.scss',
})
export class Busca {}
