import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  CityName: "";
  cityDetails: any;
  showResult: Boolean = false;
  hideDetails: Boolean = false;

  ngOnInit() {
    console.log(this.weatherData);
  }

  onChange(cityName2: string) {
    if (cityName2) {
      const foundCityDetails = this.weatherData.find(
        (x) => x.name === cityName2
      );
      if (foundCityDetails) {
        this.cityDetails = foundCityDetails;
        this.showResult = true;
        this.hideDetails = false;
      } else {
        this.showResult = false;
        this.hideDetails = true;
      }
    } else {
      this.showResult = false;
      this.hideDetails = false;
    }
  }
}

export interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
