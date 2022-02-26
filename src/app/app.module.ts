import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './post/index/index.component';



@NgModule({
  declarations: [
    // AppComponent,
    IndexComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [ IndexComponent]
})
export class AppModule { }
