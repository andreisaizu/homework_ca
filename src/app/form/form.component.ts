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
  fee = new FormControl('');
  period = new FormControl('');
  response:String;

  ngOnInit() {
  }

  postPdfObject(){
    this.pdfObject.id = uuid();
    this.pdfObject.name = this.name.value;
    this.pdfObject.surname = this.surname.value;
    this.pdfObject.amount = this.amount.value;
    this.pdfObject.fee = this.fee.value;
    this.pdfObject.period = this.period.value;
    this.pdfService.postPdf(this.pdfObject).subscribe( response => {
      this.response = "PDF Printed";
    });
  }

}
