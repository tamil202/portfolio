import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ParticlesComponent } from '../../particles/particles.component';


@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [RouterLink, ParticlesComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
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
    gsap.set('.left-screen, .right-screen', { zIndex: 10 });

    gsap.to('.left-screen', {
      x: '-100%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        const leftScreen = document.querySelector('.left-screen');
        if (leftScreen) {
          leftScreen.remove();
        }
      },
    });

    gsap.to('.right-screen', {
      x: '100%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        const rightScreen = document.querySelector('.right-screen');
        if (rightScreen) {
          rightScreen.remove();
        }
      },
    });
    this.typeWriter();
    this.typeWriter1();
    this.para11();
    this.para22();
    this.para33();
    this.para44();
    this.para55();
    this.para66();
    this.para77();
  }

  // forentend --------------------------------
  text: string = '';
  fullText: string = `frontend development`;
  index: number = 0;
  speed: number = 100;

  typeWriter = (): void => {
    if (this.index < this.fullText.length) {
      this.text += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  };
  // para-01
  para1: string = '';
  para1fullText: string = `I enjoy writing clean code in following libaries and frame work.`;
  para1index: number = 0;
  para1speed: number = 10;

  para11 = (): void => {
    if (this.para1index < this.para1fullText.length) {
      this.para1 += this.para1fullText.charAt(this.para1index);
      this.para1index++;
      setTimeout(() => this.para11(), this.para1speed);
    }
  };
  // para-02
  para2: string = '';
  para2fullText: string = `||| Angular: The angular v17 and v18 to development a clean code and known of Ts, NGRX, RXJS, SIGNAL, ZONE. to reuse component and code in angular.`;
  para2index: number = 0;
  para2speed: number = 20;

  para22 = (): void => {
    if (this.para2index < this.para2fullText.length) {
      this.para2 += this.para2fullText.charAt(this.para2index);
      this.para2index++;
      setTimeout(() => this.para22(), this.para2speed);
    }
  };
  // para-03
  para3: string = '';
  para3fullText: string = `||| reactjs: to know the reactjs basic to intermmediate level state management, hooks, router, redux and develop a  code and resue a componet.`;
  para3index: number = 0;
  para3speed: number = 30;

  para33 = (): void => {
    if (this.para3index < this.para3fullText.length) {
      this.para3 += this.para3fullText.charAt(this.para3index);
      this.para3index++;
      setTimeout(() => this.para33(), this.para3speed);
    }
  };
  // para-04
  para4: string = '';
  para4fullText: string = `||| And using HTML, CSS, JS, TS creating a static and dynamic website. the css framework know of tailwindcss and js animation  libary (GSAP)- GreenSock Animation Platform. `;
  para4index: number = 0;
  para4speed: number = 30;

  para44 = (): void => {
    if (this.para4index < this.para4fullText.length) {
      this.para4 += this.para4fullText.charAt(this.para4index);
      this.para4index++;
      setTimeout(() => this.para44(), this.para4speed);
    }
  };

  // backend -------------------------
  text1: string = '';
  fullText1: string = `backend development`;
  index1: number = 0;
  speed1: number = 100;
  typeWriter1 = (): void => {
    if (this.index1 < this.fullText1.length) {
      this.text1 += this.fullText1.charAt(this.index1);
      this.index1++;
      setTimeout(() => this.typeWriter1(), this.speed);
    }
  };

  // para-05
  para5: string = '';
  para5fullText: string = `Build the backend for integrating Products and Public RESTful APIs `;
  para5index: number = 0;
  para5speed: number = 30;

  para55 = (): void => {
    if (this.para5index < this.para5fullText.length) {
      this.para5 += this.para5fullText.charAt(this.para5index);
      this.para5index++;
      setTimeout(() => this.para55(), this.para5speed);
    }
  };

  // para-06
  para6: string = '';
  para6fullText: string = `> >  to using nodejs, and framework of Nestjs, expressjs creating  a RESTful API's and to using JWT Token authcate a website.   `;
  para6index: number = 0;
  para6speed: number = 30;

  para66 = (): void => {
    if (this.para6index < this.para6fullText.length) {
      this.para6 += this.para6fullText.charAt(this.para6index);
      this.para6index++;
      setTimeout(() => this.para66(), this.para6speed);
    }
  };

  // para-07
  para7: string = '';
  para7fullText: string = `> >  database mySql and mongoDB  and to using TypeORM, Sequelize connecting and managing queries. `;
  para7index: number = 0;
  para7speed: number = 40;

  para77 = (): void => {
    if (this.para7index < this.para7fullText.length) {
      this.para7 += this.para7fullText.charAt(this.para7index);
      this.para7index++;
      setTimeout(() => this.para77(), this.para7speed);
    }
    ``;
  };
}
