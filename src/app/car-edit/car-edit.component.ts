import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: any = '';
  name: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.id = params['id'];
      }
    })

    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        this.name = params['name'];
      }
    })
  }

}
