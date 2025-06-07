import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {

  name:string="Aman Tiwari"
  count:number=0;

  increment()
  {
    this.count++;
  }



}
