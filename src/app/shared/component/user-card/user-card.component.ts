import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
@Input()userobj!:Iuser
  constructor() { }

  ngOnInit(): void {
  }

}
