import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedPlant;
  plantMaster: any[];
  selectedMachine;
  machineMaster: any[];
  qualityTransaction: any[];

  constructor(public service: AppServiceService) {
    let observable: Observable<any> = this.service.fetchPlantMaster();
    observable.subscribe(res => {
      this.plantMaster = res.body;
    });
  }

  ngOnInit(): void {
    
  }  

  onPlantSelect() {
    
    if(!this.selectedPlant.id || this.selectedPlant.id == null) {
      return;
    }
    let observable: Observable<any> = this.service.fetchMachineMasterForPlantId(this.selectedPlant.id);
    observable.subscribe(res => {
      this.machineMaster = res.body.map(obj => {
        return obj.machine;
      });
    });
  }

  onMachineSelect() {
    if(!this.selectedMachine.id || this.selectedMachine.id == null) {
      return;
    }
    let observable: Observable<any> = this.service.fetchQualityTransactions(this.selectedPlant.id, this.selectedMachine.id);
    observable.subscribe(res => {
      this.qualityTransaction = res.body;
    });
  }


}
