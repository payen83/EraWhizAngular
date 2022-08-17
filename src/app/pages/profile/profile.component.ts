import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public icNo: any;
  public studentData: any;
  constructor(public activatedRoute: ActivatedRoute, public dataService: DataService) { 
    this.icNo = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID for this route: ', this.icNo);
  }

  ngOnInit(): void {
    this.studentData = this.dataService.getDataByICNo(this.icNo);
    console.log(this.studentData);
  }

}
