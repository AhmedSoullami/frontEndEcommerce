import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProduitsComponent } from './components/produits/produits.component';
import { RegisterComponent } from './components/register/register.component';
import { CategorieComponent } from './components/categorie/categorie.component';
const routes: Routes = [
{path:'index',component:NavbarComponent},
{path:'login',component:LoginComponent},
{path:'produits',component:ProduitsComponent},
{path:'register',component:RegisterComponent},
{path:'categories',component:CategorieComponent},
{
  path:'',
  redirectTo:'/index',
  pathMatch:'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProduitsComponent,
    RegisterComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
