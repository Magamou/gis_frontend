import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import "bingmaps";
import { initialize, whenLoaded } from "bing-maps-loader";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild("map") map!:ElementRef
  constructor() {
    const API_KEY = "Ams581aR0adsR3ZshnyTnH9n9-Ua68q_WetLVX483Icc3j-d6n_QSfHDVYzitfGB";
    initialize(API_KEY);
  }
   addPinToNewMap() {
    // whenLoaded will resolve when the Map library is loaded
    whenLoaded.then(() => {
      const map =  new Microsoft.Maps.Map("#map",{
      center: new Microsoft.Maps.Location(
        14.819170607370777,
        -17.252734443890954
      ),
      }
      ); // <-- can also use references e.g. Vue $refs, React.createRef()
      //
      var center=map.getCenter();
  //create custom Pushpin
  var pin=new Microsoft.Maps.Pushpin(center, {
      title:'mg',
      subTitle:'',
      text:''
  });
  map.entities.push(pin);
    });
  }
  ngOnInit(): void {
    this.addPinToNewMap();
  }
}



