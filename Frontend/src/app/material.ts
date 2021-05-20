import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  exports:[
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,MatInputModule

  ],
})

export class MaterialModule
{

}
