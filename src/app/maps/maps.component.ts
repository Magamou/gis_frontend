import { Component, OnInit } from '@angular/core';
import 'bingmaps';
import { initialize, whenLoaded } from 'bing-maps-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  constructor() {
    const API_KEY =
      'Ams581aR0adsR3ZshnyTnH9n9-Ua68q_WetLVX483Icc3j-d6n_QSfHDVYzitfGB';
    initialize(API_KEY);
  }
  addPinToNewMap() {
    // whenLoaded will resolve when the Map library is loaded
    whenLoaded.then(() => {
      const map=new Microsoft.Maps.Map('#map', {
        center: new Microsoft.Maps.Location(
          14.818551984704184, -17.252053256597538
        ),
      }); // <-- can also use references e.g. Vue $refs, React.createRef()
      this.addElement(map);
    });
  }
  addElement(_map:Microsoft.Maps.Map):void{
        var center=_map.getCenter();
        console.log("center:", center);
      //create custom Pushpin
      var pin=new Microsoft.Maps.Pushpin(center, {
          title:'mg',
          subTitle:'',
          text:''
      });
      _map.entities.push(pin); 
  }
  ngOnInit(): void {
    this.addPinToNewMap();
    // this.addElement();
  }

}
