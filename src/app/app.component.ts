import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDYt6xuIFCPPfytT5X0ANEcJntg65bTGLE",
      authDomain: "ng-recipe-book-5f784.firebaseapp.com"
    });
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
