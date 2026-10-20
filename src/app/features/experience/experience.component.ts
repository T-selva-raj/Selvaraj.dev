import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE, ACHIEVEMENTS } from '../../data/profile.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section experience-section">
      <div class="bg-grid" style="opacity:0.4"></div>
      <div class="container">
        <div class="exp-layout">
          <!-- Left: Timeline -->
          <div class="exp-main">
            <span class="section-label reveal">Career Timeline</span>
            <h2 class="section-title reveal reveal-delay-1">
              Professional<br><span class="text-gradient">Experience</span>
            </h2>
            <div class="section-divider reveal reveal-delay-2"></div>

            <div class="timeline">
              @for (exp of experience; track exp.id; let i = $index) {
                <div class="timeline-item reveal" [class]="'reveal-delay-' + (i + 1)">
                  <div class="timeline-marker">
                    <div class="dot-glow" [class.current]="exp.current"></div>
                    @if (!$last) {
                      <div class="timeline-line"></div>
                    }
                  </div>

                  <div class="timeline-content">
                    <div class="exp-header">
                      <div>
                        <h3 class="exp-role">{{ exp.role }}</h3>
                        <div class="exp-company-row">
                          <span class="exp-company">{{ exp.company }}</span>
                          @if (exp.current) {
                            <span class="current-badge">Current</span>
                          }
                        </div>
                        <div class="exp-meta">
                          <span class="exp-period">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                              <line x1="16" y1="2" x2="16" y2="6"/>
                              <line x1="8" y1="2" x2="8" y2="6"/>
                              <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            {{ exp.period }}
                          </span>
                          <span class="exp-location">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                              <circle cx="12" cy="10" r="3"/>
                            </svg>
                            {{ exp.location }}
                          </span>
                          <span class="exp-type">{{ exp.type }}</span>
                        </div>
                      </div>
                    </div>

                    <p class="exp-description">{{ exp.description }}</p>

                    <div class="responsibilities">
                      <h4 class="resp-heading">Key Responsibilities</h4>
                      <ul class="resp-list">
                        @for (r of exp.responsibilities; track r) {
                          <li>{{ r }}</li>
                        }
                      </ul>
                    </div>

                    <div class="exp-tech">
                      @for (t of exp.technologies; track t) {
                        <span class="badge">{{ t }}</span>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Right: Achievements -->
          <!-- <aside class="exp-aside">
            <span class="section-label reveal">Achievements</span>
            <h3 class="aside-title reveal reveal-delay-1">Engineering<br>Milestones</h3>

            <div class="achievements-list">
              @for (ach of achievements; track ach.id; let i = $index) {
                <div class="achievement-card reveal" [class]="'reveal-delay-' + (i + 1)">
                  <div class="ach-icon" [innerHTML]="getAchIcon(ach.icon)"></div>
                  <div class="ach-info">
                    <h4 class="ach-title">{{ ach.title }}</h4>
                    <p class="ach-desc">{{ ach.description }}</p>
                    @if (ach.year) {
                      <span class="ach-year">{{ ach.year }}</span>
                    }
                  </div>
                </div>
              }
            </div>
          </aside> -->
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experience = EXPERIENCE;
  achievements = ACHIEVEMENTS;

  getAchIcon(name: string): string {
    const icons: Record<string, string> = {
      award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
      'credit-card': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    };
    return icons[name] || icons['award'];
  }

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('#experience .reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
