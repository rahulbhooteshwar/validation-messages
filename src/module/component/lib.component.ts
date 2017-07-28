import { Component } from '@angular/core';

@Component({
  selector: 'vm-component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent {
  description = 'Angular 2 module for displaying validation messages on template driven forms';
}
