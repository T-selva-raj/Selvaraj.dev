import { Component, Output, EventEmitter, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO, ROLES } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="home" class="hero-section" (mousemove)="onMouseMove($event)">
      <!-- Background -->
      <div class="bg-grid"></div>
      <div class="bg-orb orb-blue" style="width:600px;height:600px;top:-200px;right:-100px"></div>
      <div class="bg-orb orb-violet" style="width:500px;height:500px;bottom:-100px;left:-100px"></div>

      <div class="hero-inner container">
        <!-- Left: Text Content -->
        <div class="hero-content">
          <!-- Eyebrow -->
          <p class="hero-eyebrow animate-in" style="--delay:0.1s">
            <span class="eyebrow-dot"></span>
            FULL STACK DEVELOPER · CHENNAI, INDIA
          </p>

          <!-- Headline -->
          <h1 class="hero-headline animate-in" style="--delay:0.25s">
            Building Digital<br>
            <span class="text-gradient">Experiences</span><br>
            That Scale.
          </h1>

          <!-- Role cycler -->
          <div class="role-cycler animate-in" style="--delay:0.4s">
            <span class="role-prefix">I'm a</span>
            <span class="role-text" [class.fade-out]="fadeOut()">{{ currentRole() }}</span>
          </div>

          <!-- Bio -->
          <p class="hero-bio animate-in" style="--delay:0.55s">
            I'm Selvaraj, a Full Stack Developer specializing in Angular and Node.js.
            I build responsive interfaces, reliable backend services, and data-driven applications.
          </p>

          <!-- CTAs -->
          <div class="hero-actions animate-in" style="--delay:0.7s">
            <button class="btn btn-primary" (click)="sectionClicked.emit('projects')">
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="assets/resume/Selvaraj_T_Full_Stack_Developer_Resume.pdf" target="_blank" rel="noopener"
               class="btn btn-outline" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <button class="btn btn-ghost" (click)="sectionClicked.emit('contact')">
              Contact Me
            </button>
          </div>

          <!-- Social Links -->
          <div class="hero-socials animate-in" style="--delay:0.85s">
            <a [href]="info.linkedin" target="_blank" rel="noopener"
               class="social-link" aria-label="LinkedIn profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <span class="social-sep">·</span>
            <a [href]="info.github" target="_blank" rel="noopener"
               class="social-link" aria-label="GitHub profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Right: Portrait -->
        <div class="hero-portrait-wrap animate-in" style="--delay:0.3s"
             [style.transform]="portraitTransform()">
          <div class="portrait-frame">
            <div class="portrait-ring ring-1"></div>
            <div class="portrait-ring ring-2"></div>
            <div class="portrait-inner">
              <img
                src="assets/images/profile-1.png"
                alt="Selvaraj T — Full Stack Developer"
                class="portrait-img"
                loading="eager"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              
            </div>
            <!-- Floating badges -->
            <div class="float-badge badge-1">
              <span class="badge-dot"></span>
              3.5+ Years
            </div>
            <div class="float-badge badge-2">
              <span class="badge-icon">⚡</span>
              Angular Expert
            </div>
            <div class="float-badge badge-3">
              <span class="badge-icon">🔧</span>
              Node.js
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" (click)="sectionClicked.emit('about')">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() sectionClicked = new EventEmitter<string>();

  info = PERSONAL_INFO;
  currentRole = signal(ROLES[0]);
  fadeOut = signal(false);
  portraitTransform = signal('');

  private roleIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startRoleCycler();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private startRoleCycler(): void {
    this.intervalId = setInterval(() => {
      this.fadeOut.set(true);
      setTimeout(() => {
        this.roleIndex = (this.roleIndex + 1) % ROLES.length;
        this.currentRole.set(ROLES[this.roleIndex]);
        this.fadeOut.set(false);
      }, 350);
    }, 2800);
  }

  onMouseMove(event: MouseEvent): void {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = event;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (clientX - cx) / cx;
    const dy = (clientY - cy) / cy;
    this.portraitTransform.set(
      `translate(${dx * -8}px, ${dy * -8}px) rotate(${dx * 1.5}deg)`
    );
  }
}
