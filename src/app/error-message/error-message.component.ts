import { Component, Input } from '@angular/core';
import { error } from '../interfaces/data';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {

  @Input () error!: error;

}
