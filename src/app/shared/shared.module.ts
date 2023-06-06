import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SelectComponent } from './Components/select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ProgressSpinnerModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule
  ]
})
export class SharedModule { }