import { Injectable } from '@angular/core';
import {Countryschema} from '../model/countryschema';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  private country:Countryschema;
  private baseuri:string="http://localhost:3000";
  private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient)
  {
  }

  createcountry(country:Countryschema)
  {
    return this.http.post(this.baseuri+'/create',country,{headers:this.headers});
  }

  readcountry()
  {
    return this.http.get(this.baseuri+'/read',{headers:this.headers});
  }

  updatecountry(country:Countryschema)
  {
    return this.http.put(this.baseuri+'/update',country,{headers:this.headers});
  }

  deletecountry(id:string)
  {
    return this.http.delete(this.baseuri+'/delete/'+id,{headers:this.headers});
  }
  setter(country:Countryschema)
  {
    this.country=country;
  }
  getter(){
    return this.country;
  }
}

