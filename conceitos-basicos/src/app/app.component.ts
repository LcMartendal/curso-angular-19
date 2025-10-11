import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
