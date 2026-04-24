import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SunatService } from '../../services/sunat';

@Component({
  selector: 'app-consulta-ruc',
  standalone: true,
  imports: [FormsModule, CommonModule], // 👈 en Angular 17+ van aquí
  templateUrl: './consulta-ruc.html',
  styleUrl: './consulta-ruc.css'
})
export class ConsultaRucComponent {

  ruc: string = '';
  resultado: any = null;
  error: string = '';

  constructor(private sunatService: SunatService) { }

  buscar() {
    this.error = '';
    this.resultado = null;

    this.sunatService.consultarRuc(this.ruc).subscribe({
        next: (data: Object) => {
          console.log(data);
          this.resultado = data;
        },
      error: (err) => {
        this.error = 'Error: ' + err.message;
      }
    });
  }
}
