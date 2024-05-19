import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const USERS=gql`
    query Users{
      users{
        id
        username
        city
        post{
          id
          title
        }
      }
    }
  `

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private apollo:Apollo) { }
  getUsers():Observable<any>{
    return this.apollo.watchQuery<any>({
      query:USERS,
    }).valueChanges;
  }
  
}
