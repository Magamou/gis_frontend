import { Injectable } from '@angular/core';

const url = 'http://www.bing.com/api/maps/mapcontrol?branch=release';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private static promise:any;
  public static load(): any {
    // First time 'load' is called?
    if (!MapService.promise) {

        // Make promise to load
        MapService.promise = new Promise( resolve => {

            // Set callback for when bing maps is loaded.
            // window['__onBingLoaded'] = (ev: any) => {
            //     resolve('Bing Maps API loaded');
            // };
            window.addEventListener('load', (e)=>{
              this.load();
            })
           
            const node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.async = true;
            node.defer = true;
            document.getElementsByTagName('head')[0].appendChild(node);
        });
    }

    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return MapService.promise;
}
}
