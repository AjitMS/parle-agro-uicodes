import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public API_URL = 'http://localhost:8080/api';

  constructor(public client: HttpClient) { }

  fetchPlantMaster() {
    return this.client.get(`${this.API_URL}/plants`, { observe: 'response' });
  }

  fetchMachineMasterForPlantId(id: number) {
    return this.client.get(`${this.API_URL}/plant-machine-mapping/${id}`, { observe: 'response' });
  }

  fetchQualityTransactions(plantId: number, machineId: number) {
    return this.client.get(`${this.API_URL}/quality-transaction/${plantId}/${machineId}`, { observe: 'response' });
  }
  
}
