import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section about-section">
      <div class="bg-orb orb-violet" style="width:400px;height:400px;bottom:-50px;right:-80px;opacity:0.2"></div>
      <div class="container">
        <div class="about-grid">
          <!-- Left: Portrait -->
          <div class="about-portrait reveal">
            <div class="about-img-wrap">
              <img
                src="assets/images/profile.png"
                alt="Selvaraj T — Full Stack Developer based in Chennai"
                class="about-img"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="about-placeholder" style="display:none">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>profile.jpg</span>
              </div>
            </div>
            <div class="about-stats">
              <div class="stat">
                <span class="stat-value text-gradient">3.5+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat">
                <span class="stat-value text-gradient">2</span>
                <span class="stat-label">Companies</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat">
                <span class="stat-value text-gradient">5+</span>
                <span class="stat-label">Major Projects</span>
              </div>
            </div>
          </div>

          <!-- Right: Bio -->
          <div class="about-bio">
            <span class="section-label reveal">About Me</span>
            <h2 class="section-title reveal reveal-delay-1">
              Crafting Software That<br>
              <span class="text-gradient">Actually Works</span>
            </h2>
            <div class="section-divider reveal reveal-delay-2"></div>

            <p class="about-text reveal reveal-delay-2">
              I'm a Computer Science graduate and Full Stack Developer with 3.5+ years of
              professional experience building enterprise web applications. I specialize in
              <strong>Angular</strong> for rich, responsive frontends and <strong>Node.js</strong>
              for scalable, maintainable backend services.
            </p>
            <p class="about-text reveal reveal-delay-3">
              My work spans education management platforms serving thousands of student records,
              e-commerce systems with complex product and checkout workflows, and REST API
              ecosystems integrated with Stripe, SendGrid, and messaging services. I care deeply
              about code quality, engineering trade-offs, and delivering systems that are not just
              functional — but maintainable and production-grade.
            </p>

            <!-- Highlight cards -->
            <div class="highlight-grid reveal reveal-delay-4">
              @for (h of highlights; track h.title) {
                <div class="highlight-card">
                  <span class="highlight-icon" [innerHTML]="h.icon"></span>
                  <div>
                    <h4 class="highlight-title">{{ h.title }}</h4>
                    <p class="highlight-desc">{{ h.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <!-- Technologies -->
            <div class="about-tech reveal reveal-delay-5">
              <p class="tech-label">Core Technologies</p>
              <div class="tech-chips">
                @for (tech of coreTech; track tech) {
                  <span class="badge">{{ tech }}</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  info = PERSONAL_INFO;

  highlights = [
    {
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      title: 'Angular Frontend',
      desc: 'Standalone components, Signals, RxJS, Reactive Forms, Material',
    },
    {
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      title: 'Node.js Backend',
      desc: 'Express.js APIs, JWT auth, RabbitMQ queues, webhook handlers',
    },
    {
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      title: 'PostgreSQL & SQL',
      desc: 'Schema design, Sequelize ORM, JSONB, query optimization',
    },
    {
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      title: 'Integrations',
      desc: 'Stripe payments, SendGrid, Facebook Lead Ads, WhatsApp API',
    },
  ];

  coreTech = [
    'Angular 18', 'TypeScript', 'Node.js', 'Express.js',
    'PostgreSQL', 'Sequelize', 'RxJS', 'JWT', 'Stripe', 'SendGrid', 'Git',
  ];

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    setTimeout(() => {
      document.querySelectorAll('#about .reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
