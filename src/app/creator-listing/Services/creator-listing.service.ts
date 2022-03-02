import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreatorListingService {
  url = "https://admin.creatorclasses.co/api/v1/creator/creator-list/"
  constructor(private user:HttpClient) {}
  creatorListing(){
    return this.user.get(this.url)
  }
}
