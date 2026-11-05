import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { FaixaInferior } from '../../components/faixa-inferior/faixa-inferior';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Sidebar, FaixaInferior],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}