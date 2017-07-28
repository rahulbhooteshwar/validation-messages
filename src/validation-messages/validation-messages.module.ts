import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesDirective} from './validation-messages.directive';
import { MessageConfigService } from './message-config.service';

// Export module's public API
export { ValidationMessagesDirective} from './validation-messages.directive';
export { MessageConfigService } from './message-config.service';

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
export class ValidationMessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ValidationMessagesModule,
      providers: [MessageConfigService]
    };
  }
}


