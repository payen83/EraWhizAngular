import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public displayedColumns: string[] = ["no", "name", "icNo", "height", "gender", "action"];
  public dataSource = new MatTableDataSource;
  public myForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public dataService: DataService) { 
    this.myForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      icNo: ['', Validators.compose([Validators.required, Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')])],
      height: ['', Validators.compose([Validators.maxLength(3), Validators.pattern('^[0-9]{2,3}$')])],
      gender: ['', Validators.compose([Validators.required])]
    });
    
    this.dataSource.data = this.dataService.getData();;
  }

  ngOnInit(): void {
    // console.log(this.students);
  }

  submitForm(){
    this.dataService.setData(this.myForm.value);
    this.dataSource.data = this.dataService.getData();
  }

}
