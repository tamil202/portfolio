import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  constructor(private router: Router) {
    
  }

  ngOnInit(): void{
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 500);
  }
}
