import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

// import { HeaderComponent} from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { MapsComponent } from './maps/maps.component';

// const routes:Routes=[
//   {path:'', redirectTo:'/header', pathMatch:'full'},
//   {path:'header', component:HeaderComponent},
//   {path:'map', component:MapsComponent},
//   {path:'home', component:HomeComponent},
  
// ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes)
  ],
  exports:[ 
    // RouterModule
  ]
})
export class AppRoutingModule { }
