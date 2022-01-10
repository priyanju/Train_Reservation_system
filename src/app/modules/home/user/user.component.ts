import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'symbol'];

  dataSource = [
    {position: 1, name: 'Coimbatore (110276)',  symbol: 'Technicall Issue'},
    {position: 2, name: 'Trivendram (567804)', symbol: 'Due to COVID last 3 weeks train stop'},
   
  ];
  dataSource1 = [
    {position: 1, name: 'Kochi (562804)', symbol: '35 mins Delay'},
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
