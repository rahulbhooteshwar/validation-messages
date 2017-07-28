import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesDirective} from './lib.directive';
import { MessageConfigService } from './lib.service';

// Export module's public API
export { ValidationMessagesDirective} from './lib.directive';
export { MessageConfigService } from './lib.service';

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


