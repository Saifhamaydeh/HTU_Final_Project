import { center } from './../cardinterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cards } from '../home/card';
@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent implements OnInit {
  center : center = {
    id: 0, name: "", location: "", dose: "", vaccine: ""
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number(this.route.snapshot.queryParams['id']);
    this.center = cards.filter((value, index)=> {
        return value.id == id;
    })[0];
  }

}
