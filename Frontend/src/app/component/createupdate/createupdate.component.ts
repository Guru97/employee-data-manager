import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Countryschema} from '../../model/countryschema';
import {CountryService} from '../../shared/country.service';


@Component({
  selector: 'app-createupdate',
  templateUrl: './createupdate.component.html',
  styleUrls: ['./createupdate.component.css']
})
export class CreateupdateComponent implements OnInit
{
  constructor(private countryservice:CountryService,private router:Router) { }

  country:Countryschema;
  ngOnInit(): void
  {
    this.country=this.countryservice.getter();
  }
  create_update()
  {
    if(this.country._id==undefined)
    {
          this.countryservice.createcountry(this.country).subscribe(
            data=>{
              console.log(data);
              this.router.navigate(['/']);
            },
            error=>{
              console.log(error);
            }
          );
    }
    else
    {
      this.countryservice.updatecountry(this.country).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }
      );

    }
  }


}
