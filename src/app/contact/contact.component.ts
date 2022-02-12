import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: any;
  query(contactform: NgForm): void{
    var fullname= contactform.controls['fullname'].value;
    var email= contactform.controls['email'].value;
    var phone= contactform.controls['phone'].value;
    var query= contactform.controls['query'].value;
    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(query);
  }
  

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
