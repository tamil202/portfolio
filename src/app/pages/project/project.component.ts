import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../particles/particles.component';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule, ParticlesComponent, RouterLink],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor() {}
  @ViewChild('cursor', { static: true })
  cursorPointer!: ElementRef<HTMLDivElement>;

  @HostListener('mousemove', ['$event'])
  mousemoveon(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
    (this.cursorPointer.nativeElement as HTMLDivElement).style.cssText =
      'left:' + x + 'px; top:' + y + 'px;';
  }

  github: string[] = [
    'https://github.com/tamil202/ans',
    'https://github.com/tamil202/RL---CURD',
    'https://github.com/tamil202/view_detail',
    'https://github.com/tamil202/API',
    'https://github.com/tamil202/mern_machine_test',
    'https://github.com/tamil202/sharewheel',
    'https://github.com/tamil202/chatbot',
    'https://github.com/tamil202/quiz_app',
  ];

  ngOnInit(): void {
    gsap.set('.top-screen, .bottom-screen', { zIndex: 10 });
    gsap.to('.top-screen', {
      y: '-100%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        const topScreen = document.querySelector('.top-screen');
        if (topScreen) {
          topScreen.remove();
        }
      },
    });

    gsap.to('.bottom-screen', {
      y: '100%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        const bottomScreen = document.querySelector('.bottom-screen');
        if (bottomScreen) {
          bottomScreen.remove();
        }
      },
    });
  }
}
