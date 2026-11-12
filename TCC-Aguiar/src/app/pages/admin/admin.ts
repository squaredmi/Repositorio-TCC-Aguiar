import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { FaixaInferior } from '../../components/faixa-inferior/faixa-inferior';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Sidebar, FaixaInferior],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {}