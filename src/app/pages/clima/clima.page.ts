import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApisTime } from '../../interfaces/apis';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  public time: ApisTime;
  public timeType: string;
  public img: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTime().subscribe(data => {
      this.time = data;
      //console.log(data.weathercode);
      if(data.current_weather.weathercode <= 48 || data.current_weather.weathercode === 0){
        this.timeType = 'No esta lloviendo';
        this.img = 'https://i.ibb.co/fYgPCL9/pngwing-com.png';
      }else if(data.current_weather.weathercode >= 51){
        this.timeType = 'Esta lloviendo';
        this.img = 'https://i.ibb.co/mqhcdJW/kisspng-rain-weather-cloud-clip-art-chain-lock-5ad7cbaea41559-7822706615240918226721.png';
      }else{
        this.timeType = 'Algo esta mal';
      }
    });
  }
}
