import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConsultaRucComponent} from './components/consulta-ruc/consulta-ruc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsultaRucComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
