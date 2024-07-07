import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  standalone:true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements OnInit {
  ngOnInit(): void {
    this.loadParticles();
  }

  loadParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 2,
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: '#fff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
          push: {
            particles_nb: 10,
          },
        },
      },
      retina_detect: true,
    });
  }
}
