import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  @Output() readonly logoutRequested = new EventEmitter<void>();

  readonly demoStudent = {
    program: 'Programa Académico de Demostración',
    curriculumId: '000',
    code: '000000000000',
    username: 'estudiante.demo',
    average: '4.2',
    previousAverage: '4.0',
    semester: '5',
    gratuity: 'Información de ejemplo',
    approvedPeriods: '4',
    fundedPeriods: '2',
    periodsToFund: '2',
    name: 'ESTUDIANTE DE PRUEBA',
    identification: '0000000000',
    identificationType: 'Documento de prueba',
    documentCity: 'POPAYÁN',
    birthDate: '2000-01-01',
    status: 'ACTIVO'
  };
}
