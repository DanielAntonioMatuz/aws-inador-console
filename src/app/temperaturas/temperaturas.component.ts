import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Label } from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Observable} from 'rxjs';
import {Rfid} from '../rfid';
import {CustomerService} from '../customer.service';
import {Temp} from '../temp';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css']
})
export class TemperaturasComponent implements OnInit {
  temperaturas;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['36°c', '37°c', '38°c', '+39°c'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperaturas registradas' },
  ];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getTemp()

    this.reloadData();

  }

  public tempA = [];

  reloadData() {
    this.temperaturas = this.customerService.getTemperaturasList();

  }


  public status: string;
  getTemp(){
    this.customerService.getTemperaturasList().subscribe(
      response => {

        this.tempA = response;
        console.log(response[0].temperatura)

        let data = [];
        let A = 0;
        let B = 0;
        let C = 0;
        let D = 0;

        for(let i=0; i<this.tempA.length; i++){
          console.log(this.tempA[i].temperatura)
          var tm = this.tempA[i].temperatura;

          if(parseInt(tm) < 36){
            console.log(tm)
            A = A+1;
            console.log(data[i])
          }

          if(parseInt(tm) >= 36 && parseInt(tm) < 37){
            console.log(tm)
            B = B+1;
            console.log(data[i])
          }

          if(parseInt(tm) >= 38 && parseInt(tm) < 39){
            console.log()
            C = C+1;
            console.log(data[i])
          }

          if(parseInt(tm) >= 39){
            console.log(tm)
            D = D+1;
            console.log(data[i])
          }

        }
        data[0] = A;
        data[1] = B;
        data[2] = C;
        data[3] = D;
        this.barChartData[0].data = data;


      }, error => {
        var errorMessage = <any>error;
        console.log(errorMessage);

        if(errorMessage != null){
          this.status = 'error';
        }
      }
    )
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40];
    this.barChartData[0].data = data;
  }
}
