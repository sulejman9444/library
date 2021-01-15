import { NgModule } from '@angular/core';
import { ComponentsLibComponent } from './components-lib.component';
import { FooComponent } from '../foundations/foo.component';



@NgModule({
  declarations: [ComponentsLibComponent, FooComponent],
  imports: [
  ],
  exports: [ComponentsLibComponent, FooComponent]
})
export class ComponentsLibModule { }
