 /// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
 import {Component, NgModule, VERSION} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';

import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps-new';
const useBing=true;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    useBing ? MapModule.forRootBing() : MapModule.forRootGoogle(),

  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], 
      useFactory: useBing ? BingMapServiceProviderFactory :  GoogleMapServiceProviderFactory
  }    
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
export function BingMapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j"; 
    // replace with your bing map key
    // the usage of this key outside this plunker is illegal. 
  bc.branch = "experimental"; 
    // to use the experimental bing brach. There are some bug fixes for
    // clustering in that branch you will need if you want to use 
    // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

export function GoogleMapServiceProviderFactory(){
  const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
  gc.apiKey = '';
    // replace with your google map key
    // the usage of this key outside this plunker is illegal. 
  gc.enableClustering = true;
  return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}