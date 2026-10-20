import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/profile.data';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section projects-section">
      <div class="bg-orb orb-blue" style="width:500px;height:500px;top:100px;right:-150px;opacity:0.15"></div>
      <div class="container">
        <div class="projects-header reveal">
          <span class="section-label">Featured Work</span>
          <h2 class="section-title">
            Projects That<br><span class="text-gradient">Define My Work</span>
          </h2>
          <p class="section-subtitle">
            Real enterprise applications built with Angular, Node.js, and PostgreSQL.
            Each tells an authentic engineering story.
          </p>
        </div>

        <!-- Project Cards -->
        <div class="projects-list">
          @for (project of projects; track project.id; let i = $index) {
            <article class="project-card reveal" [class]="'reveal-delay-' + (i + 1)"
                     [class.expanded]="expandedId() === project.id">

              <!-- Card Header with gradient banner -->
              <div class="project-banner" [style.background]="project.gradient">
                <div class="project-category">{{ project.category }}</div>
                <div class="project-number">{{ (i + 1).toString().padStart(2,'0') }}</div>
              </div>

              <!-- Card Body -->
              <div class="project-body">
                <div class="project-main">
                  <div class="project-info">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-context">{{ project.context }}</p>
                  </div>

                  <!-- Stack badges -->
                  <div class="project-stack">
                    @for (tech of project.stack.slice(0,6); track tech.name) {
                      <span class="tech-badge" [style.--badge-color]="tech.color">
                        {{ tech.name }}
                      </span>
                    }
                    @if (project.stack.length > 6) {
                      <span class="badge">+{{ project.stack.length - 6 }}</span>
                    }
                  </div>
                </div>

                <!-- Actions -->
                <div class="project-actions">
                  <button class="btn btn-outline"
                          (click)="toggleExpand(project.id)">
                    {{ expandedId() === project.id ? 'Close Case Study' : 'View Case Study' }}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.5"
                         [class.rotated]="expandedId() === project.id">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  @if (project.liveUrl) {
                    <a [href]="project.liveUrl" target="_blank" rel="noopener" class="btn btn-ghost">
                      Live Demo
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  }
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" rel="noopener" class="btn btn-ghost">
                      GitHub
                    </a>
                  }
                </div>

                <!-- Expandable Case Study -->
                <div class="case-study" [class.open]="expandedId() === project.id">
                  <div class="case-study-inner">
                    <div class="case-columns">
                      <!-- Overview + Contribution -->
                      <div class="case-col">
                        <h4 class="case-title">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          Overview
                        </h4>
                        <p class="case-text">{{ project.overview }}</p>

                        <h4 class="case-title" style="margin-top:1.5rem">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>
                          </svg>
                          My Contribution
                        </h4>
                        <p class="case-text">{{ project.contribution }}</p>
                      </div>

                      <!-- Challenges + Outcomes -->
                      <div class="case-col">
                        <h4 class="case-title">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                          </svg>
                          Technical Challenges
                        </h4>
                        <ul class="case-list challenges">
                          @for (c of project.challenges; track c) {
                            <li>{{ c }}</li>
                          }
                        </ul>

                        <h4 class="case-title" style="margin-top:1.5rem">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Outcomes
                        </h4>
                        <ul class="case-list outcomes">
                          @for (o of project.outcomes; track o) {
                            <li>{{ o }}</li>
                          }
                        </ul>

                        <!-- Full stack -->
                        <h4 class="case-title" style="margin-top:1.5rem">Full Stack</h4>
                        <div class="case-stack">
                          @for (t of project.stack; track t.name) {
                            <span class="tech-badge" [style.--badge-color]="t.color">{{ t.name }}</span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;
  expandedId = signal<string | null>(null);

  toggleExpand(id: string): void {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    setTimeout(() => {
      document.querySelectorAll('#projects .reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
