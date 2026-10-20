import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PERSONAL_INFO } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section contact-section">
      <div class="bg-orb orb-violet" style="width:500px;height:500px;bottom:-100px;right:-100px;opacity:0.2"></div>
      <div class="bg-orb orb-blue" style="width:300px;height:300px;top:50px;left:-80px;opacity:0.1"></div>
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Info -->
          <div class="contact-info">
            <span class="section-label reveal">Get In Touch</span>
            <h2 class="section-title reveal reveal-delay-1">
              Let's Build<br>
              <span class="text-gradient">Something Together</span>
            </h2>
            <div class="section-divider reveal reveal-delay-2"></div>
            <p class="contact-intro reveal reveal-delay-2">
              I'm open to full-time roles, freelance projects, and technical collaborations.
              Whether you're building something new or scaling an existing system — let's talk.
            </p>

            <div class="contact-channels reveal reveal-delay-3">
              <!-- Email -->
              <a [href]="'mailto:' + info.email" class="contact-channel">
                <div class="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="channel-info">
                  <span class="channel-label">Email</span>
                  <span class="channel-value">{{ info.email }}</span>
                </div>
                <svg class="channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a [href]="info.linkedin" target="_blank" rel="noopener" class="contact-channel">
                <div class="channel-icon linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div class="channel-info">
                  <span class="channel-label">LinkedIn</span>
                  <span class="channel-value">selva-raj-t-001322241</span>
                </div>
                <svg class="channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <!-- GitHub -->
              <a [href]="info.github" target="_blank" rel="noopener" class="contact-channel">
                <div class="channel-icon github">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div class="channel-info">
                  <span class="channel-label">GitHub</span>
                  <span class="channel-value">T-selva-raj</span>
                </div>
                <svg class="channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-form-wrap reveal reveal-delay-2">
            <div class="form-card">
              <h3 class="form-title">Send a Message</h3>
              <p class="form-note">
                This form opens your email client with your message pre-filled.
                No backend required.
              </p>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form" novalidate>
                <div class="form-row">
                  <div class="form-group" [class.has-error]="isFieldInvalid('name')">
                    <label for="name" class="form-label">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      class="form-input"
                      formControlName="name"
                      placeholder="Your name"
                      autocomplete="name">
                    @if (isFieldInvalid('name')) {
                      <span class="form-error">Please enter your name</span>
                    }
                  </div>

                  <div class="form-group" [class.has-error]="isFieldInvalid('email')">
                    <label for="email" class="form-label">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      class="form-input"
                      formControlName="email"
                      placeholder="your@example.com"
                      autocomplete="email">
                    @if (isFieldInvalid('email')) {
                      <span class="form-error">Please enter a valid email address</span>
                    }
                  </div>
                </div>

                <div class="form-group" [class.has-error]="isFieldInvalid('subject')">
                  <label for="subject" class="form-label">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    class="form-input"
                    formControlName="subject"
                    placeholder="Project opportunity / Collaboration / General enquiry">
                  @if (isFieldInvalid('subject')) {
                    <span class="form-error">Please enter a subject</span>
                  }
                </div>

                <div class="form-group" [class.has-error]="isFieldInvalid('message')">
                  <label for="message" class="form-label">Message *</label>
                  <textarea
                    id="message"
                    class="form-input form-textarea"
                    formControlName="message"
                    rows="5"
                    placeholder="Tell me about the project, role, or opportunity..."></textarea>
                  <div class="char-count">
                    {{ contactForm.get('message')?.value?.length || 0 }} / 1000
                  </div>
                  @if (isFieldInvalid('message')) {
                    <span class="form-error">Message must be at least 20 characters</span>
                  }
                </div>

                <button type="submit" class="btn btn-primary form-submit"
                        [class.loading]="submitting()">
                  @if (submitting()) {
                    <span class="spinner"></span>
                    Opening email client...
                  } @else {
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  }
                </button>

                @if (submitted()) {
                  <div class="form-success">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Email client opened! Your message is ready to send.
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  info = PERSONAL_INFO;
  submitting = signal(false);
  submitted = signal(false);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const { name, email, subject, message } = this.contactForm.value;
    const mailtoUrl = `mailto:${this.info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Selvaraj,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`)}`;

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      this.submitting.set(false);
      this.submitted.set(true);
      this.contactForm.reset();
      setTimeout(() => this.submitted.set(false), 6000);
    }, 600);
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
      document.querySelectorAll('#contact .reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
