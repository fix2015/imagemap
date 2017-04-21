import {Component, OnInit} from '@angular/core';
import {PubNubAngular} from "pubnub-angular2";
import {EmitterService} from "../services/emitter.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'map',
  templateUrl: 'map.component.html'

})
export class MapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;
  private map: any;
  private shownOnMapSubscription: Subscription;
  private selectOnMapSubscription: Subscription;
  private markers = [];

  constructor(private emitterService: EmitterService) {
    this.shownOnMapSubscription = this.emitterService.get('add_on_map')
      .subscribe((event) => {
        this.setMarker(event.message.lat, event.message.lng);
      });
    this.selectOnMapSubscription = this.emitterService.get('select_on_map')
      .subscribe((event) => {
        let marker = this.getMarker(event.message.lat, event.message.lng);
        if (marker) this.setMarkerAnimation(marker);
      });
  }

  ngOnInit() {
    this.zoom = 2;
    this.setCurrentPosition();
  }

  private initialize() {
    this.map = new google.maps.Map(document.getElementById('map-canvas'), {center: {lat: this.latitude, lng: this.longitude}, zoom: this.zoom});
    // this.setMarker(this.latitude, this.longitude);
  };

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.initialize();
      });
    }
  }

  private setMarker(lat: number, lng: number) {
    let marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: this.map});
    this.setMarkerAnimation(marker);
    this.markers.push(marker);
  }

  private getMarker(lat, lng) {
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i].position.lat() === lat && this.markers[i].position.lng() === lng) {
        return this.markers[i];
      }
    }
    return null;
  }

  private setMarkerAnimation(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => {
      marker.setAnimation(null)
    }, 2000);
  }

}
