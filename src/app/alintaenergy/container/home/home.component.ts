import { Component, OnInit } from '@angular/core';
import { IRegistrationForm } from '../../models/registrationForm.model';
import {store} from '../../store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  states: Array<string> = ['Vic', 'NSW', 'Queensland', 'WA', 'SA', 'TA'];
  selectionOptions: Array<string> = ['Power only', 'Power & Gas'];
  selectedStateError: boolean = false;
  selectedProductError:boolean=false;
  formDetails = new IRegistrationForm('', '', '', '', 0) ;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // To get the product selected by user

  selectedProduct(event){
    this.selectedProductError=false;
    console.log('event is : ', event);
    this.formDetails.customerProductSelection = event.value;
  }
  // To get the selected state

  selectedState(event){
    this.selectedStateError=false;
    console.log('event is : ', event);
    this.formDetails.customerState = event.value;
  }

  // Submit form if everything is okay
  submitUserDetails() {
// tslint:disable-next-line: curly
    if (!this.formDetails.customerState)
    this.selectedStateError = true;
    else if ( !this.formDetails.customerProductSelection){
      this.selectedProductError = true;
    }
    else{
    store.state = this.formDetails.customerState;
    store.annualSpend = this.formDetails.customerAnnualSpend;
    store.name = this.formDetails.customerName;
    this.router.navigate(['/results']);
    }
    
  }
}
