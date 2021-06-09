import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent {
  constructor(private router: Router) {}

  public next() {
    this.router.navigate(['second']);
  }
}
