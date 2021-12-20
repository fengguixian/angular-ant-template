import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   console.log('params: ', params);
    // });
    this.route.params.subscribe(params => {
      console.log('params: ', params);
    });
  }

}
