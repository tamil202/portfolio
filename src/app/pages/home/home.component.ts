import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';
import { ParticlesComponent } from '../../particles/particles.component';
@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponet {
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
  

  isShow: boolean = true;
  isShowtext: boolean = false;
  isClick = (): void => {
    this.isShow = false;
    this.isShowtext = true;
    this.typeWriter();
  };
  isBack = (): void => {
    this.text = '';
    this.index = 0;
    this.isShow = true;
    this.isShowtext = false;
  };

  text: string = '';
  fullText: string = `Hi \n \n I am Tamilvanan, a seasoned full-stack developer with a comprehensive background in web technologies. My expertise spans both front-end and back-end development, enabling me to create robust, scalable, and dynamic web applications.  \n Front-End Skills: \n\n
  ReactJS: Proficient in building interactive user interfaces and single-page applications using ReactJS, leveraging hooks, context API, and Redux for state management.Angular: Experienced in developing dynamic web applications with Angular, utilizing its powerful features like two-way data binding, dependency injection, and component-based architecture.TailwindCSS: Skilled in using TailwindCSS to create responsive and visually appealing designs with utility-first CSS.GSAP (GreenSock Animation Platform): Adept at creating high-performance animations and interactive experiences using GSAP.NodeJS: Experienced in building scalable server-side applications using NodeJS.
ExpressJS: Proficient in developing RESTful APIs and middleware with ExpressJS.
NestJS: Knowledgeable in building efficient, reliable, and scalable server-side applications with NestJS.MongoDB: Skilled in using MongoDB for NoSQL database solutions, including schema design and aggregation framework.
MySQL: Proficient in relational database management with MySQL, including complex query writing and database optimization.`;
  index: number = 0;
  speed: number = 10;

  typeWriter = (): void => {
    if (this.index < this.fullText.length) {
      this.text += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  };
}
