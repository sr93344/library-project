import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
<<<<<<< HEAD
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
=======
>>>>>>> lib1/branch01

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AdminComponent,
    SubcategoryComponent
=======
    AdminComponent
>>>>>>> lib1/branch01
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
