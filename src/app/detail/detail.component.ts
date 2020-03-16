import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: any;
  isLoading = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.detail = this.http.get(this.data).
    subscribe(
      (data: any) => {
      this.detail = data;
      this.isLoading = false;
    });
  }

}
