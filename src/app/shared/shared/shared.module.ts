import { NgModule } from '@angular/core';
import { CustomSideNavComponent } from '../components/custom-side-nav/custom-side-nav.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const MaterialModules = [
  MatListModule,
  MatIconModule
]

const components = [
  CustomSideNavComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...MaterialModules,
    BrowserAnimationsModule
],
exports: [
  ...components
]
})
export class SharedModule { }
