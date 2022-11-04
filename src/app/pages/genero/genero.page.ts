import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  public genero: string;
  public printGender: string;
  public img: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public getGenero(): void {
    this.api.getGender(this.genero).subscribe((data) => {
      if(data.gender === 'male'){
        this.printGender = 'Masculino';
        this.img = 'https://cdn.pixabay.com/photo/2014/04/03/00/32/plane-308584_960_720.png';
      } else if(data.gender === 'female'){
        this.printGender = 'Feminino';
        // eslint-disable-next-line max-len
        this.img = 'https://images.vexels.com/media/users/3/157323/isolated/preview/c0c7d38dbe55213723ffbcea3a0dd5ac-vector-de-mariposa-rosa-detallada.png';
      } else{
        this.printGender = 'Data invalida en la API';
      }
      console.log(this.printGender);
    });
  }

}
