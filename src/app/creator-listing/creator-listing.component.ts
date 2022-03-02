import { Component, OnInit } from '@angular/core';
import {CreatorListingService} from './Services/creator-listing.service'

@Component({
  selector: 'app-creator-listing',
  templateUrl: './creator-listing.component.html',
  styleUrls: ['./creator-listing.component.css']
})
export class CreatorListingComponent implements OnInit {
  creators:any
  constructor(private user:CreatorListingService) {}

  ngOnInit(): void {
    this.user.creatorListing().subscribe((result:any)=>{
      console.log(result)
      for(let [key,value] of Object.entries(result)){
        if(key == 'data'){
          this.creators = value
        }
      }
    })
  }

}
