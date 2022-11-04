import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApisUniversidades } from '../../interfaces/apis';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  public pais: string;
  public universidades: ApisUniversidades[];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getUniversidades(){
    this.api.getUNI(this.pais).subscribe((data) => {
      this.universidades = data;
    });
  }
}
