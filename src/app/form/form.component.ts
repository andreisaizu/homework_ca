import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PdfObject } from '../dtos/pdfObject';
import { v4 as uuid } from 'uuid';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private pdfService: PdfService) { }

  pdfObject = new PdfObject();
  name = new FormControl('');
  surname = new FormControl('');
  amount = new FormControl('');
  salary = new FormControl('');
  tax = new FormControl('');
  extraSalary = new FormControl('');
  response:String;
  taxError:String ="" ;

  ngOnInit() {
  }

  postPdfObject(){
    this.pdfObject.id = uuid();
    this.pdfObject.name = this.name.value;
    this.pdfObject.surname = this.surname.value;
    this.pdfObject.salary = this.salary.value;
    this.pdfObject.extraSalary = this.extraSalary.value;
    if(this.tax.value>100){
      this.taxError= "Valoarea taxelor nu poate fi mai mare de 100%";
    }
    else {
      this.pdfObject.tax = this.tax.value;
      this.pdfService.postPdf(this.pdfObject).subscribe( response => {
        this.response = "Employee inserted.";
      });
    }
    
  }

}
