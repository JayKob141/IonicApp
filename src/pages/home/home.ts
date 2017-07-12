import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Lista: any
  @Input() done : any

  constructor(public navCtrl: NavController, private http: Http ) {
    this.Lista = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "http://placehold.it/600/24f355",
        "thumbnailUrl": "http://placehold.it/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "http://placehold.it/600/d32776",
        "thumbnailUrl": "http://placehold.it/150/d32776"
      },
    ]
    this.done = ''
    this.hacerPeticion()
  }

  hacerPeticion(){
    this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise().then( response => {this.Lista = response.json(); this.done = 'Done'} ) 
  }

}
