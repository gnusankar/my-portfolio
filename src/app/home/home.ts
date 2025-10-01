import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  name = 'SIVASANKARAN K';
  tagline = 'Front-End Developer | Angular & Node Enthusiast';
  summary = `Senior Front-End Developer with 6+ years of experience in designing and implementing user interfaces for web applications. Passionate about Angular, React, Material UI, and modern web technologies. Experienced in collaborating with cross-functional teams to deliver high-quality solutions.`;
  animatedTitles = [
    'Angular Specialist',
    'UI/UX Enthusiast',
    'Open Source Contributor',
    'Tech Blogger',
    'Problem Solver'
  ];
}
