import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesDirective, MessageConfigService } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidationMessagesDirective
  ],
  exports: [
    ValidationMessagesDirective
  ],
  providers: [
    MessageConfigService
  ]
})
export class ValidationMessagesModule { }
