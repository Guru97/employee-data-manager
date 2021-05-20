import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ListdetailsComponent } from './component/listdetails/listdetails.component';
import { CreateupdateComponent } from './component/createupdate/createupdate.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {FormsModule} from '@angular/forms';

const approutes:Routes=[
    {path:'',component:ListdetailsComponent},
    {path:'create',component:CreateupdateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListdetailsComponent,
    CreateupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(approutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
