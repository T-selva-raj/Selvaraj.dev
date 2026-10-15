import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../data/profile.data';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="section skills-section">
      <div class="bg-grid" style="opacity:0.5"></div>
      <div class="container">
        <div class="skills-header reveal">
          <span class="section-label">Technical Skills</span>
          <h2 class="section-title">
            My Technology<br><span class="text-gradient">Stack</span>
          </h2>
          <p class="section-subtitle">
            Technologies I work with every day to build scalable full-stack applications.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="skills-filter reveal reveal-delay-2">
          <button
            class="filter-btn"
            [class.active]="activeCategory() === 'all'"
            (click)="setCategory('all')">
            All
          </button>
          @for (cat of categories; track cat.id) {
            <button
              class="filter-btn"
              [class.active]="activeCategory() === cat.id"
              (click)="setCategory(cat.id)">
              {{ cat.label }}
            </button>
          }
        </div>


        <div class="skills-grid">
          @for (cat of filteredCategories(); track cat.id) {
            <div class="skill-card reveal" [class]="'reveal-delay-' + ($index + 1)">
              <div class="skill-card-header">
                <h3 class="skill-cat-title">{{ cat.label }}</h3>
                <span class="skill-count">{{ cat.skills.length }} skills</span>
              </div>
              <div class="skill-list">
                @for (skill of cat.skills; track skill.name) {
                  <div class="skill-item">
                    <div class="skill-item-left">
                      <span class="skill-dot" [class]="'level-' + (skill.level || 'proficient')"></span>
                      <span class="skill-name">{{ skill.name }}</span>
                    </div>
                    <span class="skill-level-badge" [class]="'level-badge-' + (skill.level || 'proficient')">
                      {{ skill.level || 'proficient' }}
                    </span>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <!-- Legend -->
        <div class="skills-legend reveal">
          <span class="legend-item"><span class="skill-dot level-expert"></span> Expert</span>
          <span class="legend-item"><span class="skill-dot level-proficient"></span> Proficient</span>
          <span class="legend-item"><span class="skill-dot level-familiar"></span> Familiar</span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = SKILL_CATEGORIES;
  activeCategory = signal<string>('all');
  filteredCategories = signal<SkillCategory[]>(SKILL_CATEGORIES);
  private observer?: IntersectionObserver;

  setCategory(id: string): void {
    this.activeCategory.set(id);
    this.filteredCategories.set(
      id === 'all' ? this.categories : this.categories.filter((c) => c.id === id)
    );
    setTimeout(() => {
      this.initScrollReveal1();
    });

  }

  getIcon(name: string): string {
    const icons: Record<string, string> = {
      monitor: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      tool: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    };

    return icons[name] || icons['tool'];
  }

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('#skills .reveal').forEach((el) => observer.observe(el));
    }, 100);
  }


  private initScrollReveal1(): void {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('#skills .reveal:not(.visible)')
      .forEach(element => this.observer?.observe(element));
  }
}
