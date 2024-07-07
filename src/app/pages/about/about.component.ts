import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap/gsap-core';
import { RouterLink } from '@angular/router';
import { ParticlesComponent } from '../../particles/particles.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticlesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
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
  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';
  fullText1: string = `I'm a Self-Driven FullStack Developer. I adore designing user-friendly websites that are both simple and elegant. I consider myself to be a lifelong learner. I'm proficient in data structures and algorithms.`;
  fullText2: string = `I like to create a animated user interactive websites and mobile apps. I Challenge my self to build a complex UI designs to improve my skills in building user interfaces.`;
  fullText3: string = `I'm also interested in ComputerScince, and I adore experimenting with new ideas and putting together fantastic projects. I've always been interested in Automation and improve my skills.`;
  fullText4: string = `I am Tamilvanan, a dedicated and experienced full-stack developer with a deep passion for web technologies. With a robust skill set that spans both front-end and back-end development, I have successfully built and deployed numerous dynamic and scalable web applications.`;
  index1: number = 0;
  index2: number = 0;
  index3: number = 0;
  index4: number = 0;
  speed: number = 20;
  speed1: number = 30;
  speed2: number = 40;
  speed3: number = 10;

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
    this.typeWriter();
    this.typeWriter1();
    this.typeWriter2();
    this.typeWriter3();
  }

  typeWriter3 = (): void => {
    if (this.index4 < this.fullText4.length) {
      this.text4 += this.fullText4.charAt(this.index4);
      this.index4++;
      setTimeout(() => this.typeWriter3(), this.speed3);
    }
  };
  typeWriter = (): void => {
    if (this.index1 < this.fullText1.length) {
      this.text1 += this.fullText1.charAt(this.index1);
      this.index1++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  };
  typeWriter1 = (): void => {
    if (this.index2 < this.fullText2.length) {
      this.text2 += this.fullText2.charAt(this.index2);
      this.index2++;
      setTimeout(() => this.typeWriter1(), this.speed1);
    }
  };
  typeWriter2 = (): void => {
    if (this.index3 < this.fullText3.length) {
      this.text3 += this.fullText3.charAt(this.index3);
      this.index3++;
      setTimeout(() => this.typeWriter2(), this.speed2);
    }
  };
}
