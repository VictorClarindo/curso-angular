import { Component } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ListaComprasComponent } from '../../lista-compras/lista-compras.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculatorComponent, ListaComprasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
