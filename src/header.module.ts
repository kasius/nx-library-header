import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'header',
  template: '<h1>Hola soy Header</h1>'
})
export class HeaderComponent { }

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}