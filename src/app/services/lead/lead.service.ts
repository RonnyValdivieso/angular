import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  LEADS_URI: string = environment.leadsUri;

  constructor(private http: HttpClient) { }

  getLeadsByPage(body) {
    return this.http.post(this.LEADS_URI + `/test`, body);
  }
}
