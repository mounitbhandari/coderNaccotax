import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
