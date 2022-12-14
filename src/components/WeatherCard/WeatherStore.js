import { makeAutoObservable, observable } from "mobx"

export class Coordinates {
  longitude = 52.52;
  latitude = 13.42;

  constructor() {
    makeAutoObservable(this);

  }
  get coordinates() {
    return {longitude: this.longitude, latitude: this.latitude}
  }

  set set_longitude(longitude) {
    console.log(1)
    this.longitude = longitude;
  }
  set set_latitude(longitude) {
    console.log(2)
    this.longitude = longitude;
  }
}