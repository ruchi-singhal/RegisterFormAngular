import { Component, OnInit } from '@angular/core';
import {store} from '../../store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
 message:string;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(store);
    if(!store.state && !store.annualSpend){
      this.router.navigate(['/home']);
    }
    else if(store.annualSpend > 1000 && store.state === 'Vic'){
      this.message = 'Hi ' + store.name + '! Thanks for signing up. A representative will be in touch via phone shortly';

    }
    else{
      this.message = 'Hi ' + store.name + '! Thanks for signing up. A representative will be in touch via email shortly';
    }
  }

}
