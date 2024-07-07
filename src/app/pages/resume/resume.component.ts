import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../particles/particles.component';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'resume',
  standalone: true,
  imports: [CommonModule, ParticlesComponent, RouterLink],
  templateUrl: './resume.compoent.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
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
    this.typeWriter2();
    this.typeWriter3();
    this.fullnamemethod();
    this.agemethod();
    this.languagemethod();
    this.permethod();
    this.permethod1();
    this.permethod2();
    this.projectinmethod();
  }
  text: string = '';
  fullText: string = `Details me`;
  index: number = 0;
  speed: number = 100;

  typeWriter = (): void => {
    if (this.index < this.fullText.length) {
      this.text += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  };

  text1: string = '';
  fullText1: string = `Education`;
  index1: number = 0;
  speed1: number = 200;

  typeWriter1 = (): void => {
    if (this.index1 < this.fullText1.length) {
      this.text1 += this.fullText1.charAt(this.index1);
      this.index1++;
      setTimeout(() => this.typeWriter1(), this.speed1);
    }
  };

  text2: string = '';
  fullText2: string = `techskills`;
  index2: number = 0;
  speed2: number = 300;

  typeWriter2 = (): void => {
    if (this.index2 < this.fullText2.length) {
      this.text2 += this.fullText2.charAt(this.index2);
      this.index2++;
      setTimeout(() => this.typeWriter2(), this.speed2);
    }
  };

  text3: string = '';
  fullText3: string = `projects`;
  index3: number = 0;
  speed3: number = 400;

  typeWriter3 = (): void => {
    if (this.index3 < this.fullText3.length) {
      this.text3 += this.fullText3.charAt(this.index3);
      this.index3++;
      setTimeout(() => this.typeWriter3(), this.speed3);
    }
  };

  firstname: string = '';
  fullnametext: string = `Tamilvanan`;
  firstnameindex: number = 0;
  fullnamesped: number = 100;

  fullnamemethod = (): void => {
    if (this.firstnameindex < this.fullnametext.length) {
      this.firstname += this.fullnametext.charAt(this.firstnameindex);
      this.firstnameindex++;
      setTimeout(() => this.fullnamemethod(), this.fullnamesped);
    }
  };
  age: number = 0;
  myage: number = 22;
  agespeed: number = 90;

  agemethod = (): void => {
    if (this.age < this.myage) {
      this.age++;
      setTimeout(() => this.agemethod(), this.agespeed);
    }
  };

  per: number = 0;
  myper: number = 74;
  perspeed: number = 60;

  permethod = (): void => {
    if (this.per < this.myper) {
      this.per += 2;
      setTimeout(() => this.permethod(), this.perspeed);
    }
  };
  per1: number = 0;
  myper1: number = 56;
  perspeed1: number = 70;

  permethod1 = (): void => {
    if (this.per1 < this.myper1) {
      this.per1 += 2;
      setTimeout(() => this.permethod1(), this.perspeed1);
    }
  };

  per2: number = 0;
  myper2: number = 8;
  perspeed2: number = 90;

  permethod2 = (): void => {
    if (this.per2 < this.myper2) {
      this.per2++;
      setTimeout(() => this.permethod2(), this.perspeed2);
    }
  };

  language: string = '';
  languagetext: string = `^ Tamil, ^ English, > kannadam`;
  languageindex: number = 0;
  languagesped: number = 100;

  languagemethod = (): void => {
    if (this.languageindex < this.languagetext.length) {
      this.language += this.languagetext.charAt(this.languageindex);
      this.languageindex++;
      setTimeout(() => this.languagemethod(), this.languagesped);
    }
  };

  skill: string[] = [
    'HTML',
    'css',
    'Tailwindcss',
    'Js',
    'Angular',
    'ReactJs',
    'JSON',
    'JWT',
    'NGRX',
    'RXJS',
    'MySql',
    'MongoDB',
    'AWS',
    'NodeJs',
    'NestJs',
    'ExpressJs',
  ];

  projectin: string = '';
  projectintext: string = `Created an application that helps user web access database Using to easy and manage a Data. Using flex and scalibilty, user-friendly to access a site ..........`;
  projectinindex: number = 0;
  projectinsped: number = 40;

  projectinmethod = (): void => {
    if (this.projectinindex < this.projectintext.length) {
      this.projectin += this.projectintext.charAt(this.projectinindex);
      this.projectinindex ++;
      setTimeout(() => this.projectinmethod(), this.projectinsped);
    }
  };
}
