import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './forms/template-form.component';
import { ValidationMessagesModule} from 'validation-messages';
import { ValidateEqualDirective } from './directives/validate-equal.directive';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ValidateEqualDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ValidationMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
