import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {
  private formData: any = {};

  saveData(moduleName: string, data: any): void {
    this.formData[moduleName] = data;
  }

  getData(moduleName: string): any {
    return this.formData[moduleName] || null;
  }

  getAllData(): any {
    return this.formData;
  }
}
