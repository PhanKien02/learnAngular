import { ProductComponent } from './home/product/product.component';
import { BannerComponent } from './home/banner/banner.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    BannerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'login', component: LoginComponent },
      { path:'home', component: HomeComponent },
      { path:"", component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
