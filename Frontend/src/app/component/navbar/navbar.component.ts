import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Countryschema} from '../../model/countryschema';
import {CountryService} from '../../shared/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private countryservice:CountryService)
  { }

  ngOnInit(): void {
  }
  newcountry($event:any)
  {
    event.preventDefault();
    this.countryservice.setter(new Countryschema);
    this.router.navigate(['/create']);
  }
}
