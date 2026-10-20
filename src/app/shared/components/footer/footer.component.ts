import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../../data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="footer-top">
        <div class="container footer-inner">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="logo-mark">ST</span>
              <span class="logo-text">Selvaraj T</span>
            </div>
            <p class="footer-tagline">
              Full Stack Developer · Angular & Node.js<br>
              Building scalable digital experiences from Chennai, India.
            </p>
            <div class="footer-socials">
              <a [href]="info.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a [href]="info.github" target="_blank" rel="noopener" aria-label="GitHub" class="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a [href]="'mailto:' + info.email" aria-label="Email" class="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              
            </div>
          </div>

          <nav class="footer-nav" aria-label="Footer navigation">
            <div class="footer-nav-col">
              <h4 class="footer-nav-title">Sections</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer-nav-col">
              <h4 class="footer-nav-title">Connect</h4>
              <ul>
                <li><a [href]="info.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a [href]="info.github" target="_blank" rel="noopener">GitHub</a></li>
                <li><a [href]="'mailto:' + info.email">Email</a></li>
                <li><a [href]="info.resumeUrl" download>Resume</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p class="copyright">
            © {{ year }} Selvaraj T. Built with Angular 18.
          </p>
          <p class="built-with">
            Designed & developed in Chennai, India
            <span class="heart">♥</span>
          </p>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  info = PERSONAL_INFO;
  year = new Date().getFullYear();
}
