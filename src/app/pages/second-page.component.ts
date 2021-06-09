import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
})
export class SecondPageComponent {
  constructor(private router: Router) {}

  public back() {
    this.router.navigate(['first']);
  }
}
