import { Component, Input, Output, EventEmitter, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="nav-header" [class.scrolled]="isScrolled()" [class.menu-open]="menuOpen()">
      <nav class="nav-inner container">
        <!-- Logo / Brand -->
        <a class="nav-logo" (click)="handleSection('home')" tabindex="0" role="button"
           (keydown.enter)="handleSection('home')">
          <span class="logo-mark">ST</span>
          <span class="logo-text">Selvaraj T</span>
        </a>

        <!-- Desktop Links -->
        <ul class="nav-links" role="navigation" aria-label="Main navigation">
          @for (link of navLinks; track link.id) {
            <li>
              <button
                class="nav-link"
                [class.active]="activeSection === link.id"
                (click)="handleSection(link.id)"
                [attr.aria-current]="activeSection === link.id ? 'page' : null">
                {{ link.label }}
              </button>
            </li>
          }
        </ul>

        <!-- Right Controls -->
        <div class="nav-controls">
          <!-- Theme Toggle -->
          <button
            class="theme-toggle"
            (click)="themeToggled.emit()"
            [attr.aria-label]="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            title="Toggle theme">
            @if (theme === 'dark') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            } @else {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            }
          </button>

          <!-- Resume CTA -->
          <a href="assets/resume/Selvaraj_T_Full_Stack_Developer_Resume.pdf" target="_blank" rel="noopener"
             class="btn btn-outline btn-sm" download>
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

          <!-- Mobile hamburger -->
          <button class="hamburger" (click)="menuOpen.set(!menuOpen())"
                  [attr.aria-expanded]="menuOpen()"
                  aria-label="Toggle mobile menu">
            <span [class.open]="menuOpen()"></span>
            <span [class.open]="menuOpen()"></span>
            <span [class.open]="menuOpen()"></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="menuOpen()" role="dialog" aria-label="Mobile navigation">
        <ul>
          @for (link of navLinks; track link.id) {
            <li>
              <button class="mobile-nav-link" [class.active]="activeSection === link.id"
                      (click)="handleSection(link.id)">
                {{ link.label }}
              </button>
            </li>
          }
        </ul>
        <div class="mobile-menu-footer">
          <a href="assets/resume/Selvaraj_T_Full_Stack_Developer_Resume.pdf" target="_blank" rel="noopener"
             class="btn btn-primary" download style="width:100%;justify-content:center">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  `,
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() activeSection: string = 'home';
  @Output() themeToggled = new EventEmitter<void>();
  @Output() sectionClicked = new EventEmitter<string>();

  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 30);
  }

  handleSection(id: string): void {
    this.sectionClicked.emit(id);
    this.menuOpen.set(false);
  }
}
