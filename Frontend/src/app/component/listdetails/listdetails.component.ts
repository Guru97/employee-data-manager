import { Component, OnInit,ViewChild } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import { Countryschema } from '../../model/countryschema';
import {Router} from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listdetails',
  templateUrl: './listdetails.component.html',
  styleUrls: ['./listdetails.component.css']
})
export class ListdetailsComponent implements OnInit
{
  displayedColumns: string[] = ['name', 'capital','operations'];
  private countries:Countryschema[];

  dataSource:MatTableDataSource<Countryschema>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private countryservice:CountryService,private router:Router)
  {

  }

  ngOnInit(): void
  {
      this.readcountries();
  }



  readcountries()
  {

    this.countryservice.readcountry().subscribe(
              data=>
              {
                this.countries=data['msg'];
                this.dataSource= new MatTableDataSource<Countryschema>(data['msg']);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              error=>
                console.log(error)
      );
  }

  doupdate(country)
  {
    this.countryservice.setter(country);
    this.router.navigate(['/create']);
  }

  dodelete(country)
  {
    this.countryservice.deletecountry(country._id).subscribe(
      data=>{
        console.log(this.countries);
        this.ngOnInit();
      },
      error=>
      {
        console.log(error)
      }
    )
  }
}
