import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div [attr.data-theme]="theme()" class="app-root">
      <app-nav
        [theme]="theme()"
        [activeSection]="activeSection()"
        (themeToggled)="toggleTheme()"
        (sectionClicked)="scrollToSection($event)"
      />
      <main>
        <app-hero (sectionClicked)="scrollToSection($event)" />
        <app-about />
        <app-skills />
        <app-projects />
        <app-experience />
        <app-contact />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .app-root {
      min-height: 100vh;
      background-color: var(--bg-primary);
      transition: background-color 0.4s ease;
    }
    main { position: relative; }
  `]
})
export class AppComponent implements OnInit {
  theme = signal<'dark' | 'light'>('dark');
  activeSection = signal<string>('home');

  private readonly SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  ngOnInit(): void {
    const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (saved) this.theme.set(saved);
    document.documentElement.setAttribute('data-theme', this.theme());
  }

  toggleTheme(): void {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  }

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY + 120;
    for (const id of this.SECTIONS) {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop) {
        this.activeSection.set(id);
      }
    }
  }
}
