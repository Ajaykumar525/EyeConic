import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //  latitude = 51.678418;
  //  longitude = 7.809007;
  private map: google.maps.Map

  ngOnInit():void {
    let loader = new Loader({
      apiKey: 'AIzaSyDdBpiZzXUFWdQo93XDdjf2hk52qmuJXGM'
    })
    loader.load().then(() => {
      console.log('loaded gmaps');

      const location = { lat: 51.233334, lng: 	6.783333 }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
