import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatAutocompleteModule, MatButtonModule, MatInputModule, MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, MatAutocompleteModule,
    MatButtonModule,
    MatInputModule, MatMenuModule,
  ],
  exports: [
    MatCardModule, MatAutocompleteModule,
    MatButtonModule,
    MatInputModule, MatMenuModule,
  ]
})
export class ComponentsModule { }
