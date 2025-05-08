import { Injectable } from '@angular/core';

/**
 * Service for managing animations throughout the application
 */
@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  /**
   * Play animation for slide transition
   * @param slideIndex The index of the slide to animate
   */
  playSlideAnimation(slideIndex: number): void {
    // Reset any active animations first
    this.resetAnimations();

    // Add animation classes to elements in the current slide
    const currentSlide = document.querySelector(`.testimonial-swiper .swiper-slide:nth-child(${slideIndex + 1})`);

    if (currentSlide) {
      // Animate various elements within the slide with staggered timing
      const elements = [
        { selector: 'h3', animation: 'animate-fade-in', delay: 0 },
        { selector: '.short-quote', animation: 'animate-fade-up', delay: 100 },
        { selector: '.main-quote', animation: 'animate-fade-up', delay: 200 },
        { selector: 'button', animation: 'animate-fade-up', delay: 300 }
      ];

      elements.forEach(({ selector, animation, delay }) => {
        const element = currentSlide.querySelector(selector);
        if (element) {
          setTimeout(() => {
            element.classList.add(animation);
          }, delay);
        }
      });
    }
  }

  /**
   * Play animation for modal opening
   */
  playModalAnimation(): void {
    const modal = document.querySelector('.testimonial-modal');
    if (modal) {
      modal.classList.add('animate-fade-in');

      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.classList.add('animate-fade-up');
      }
    }
  }

  /**
   * Reset all active animations
   */
  resetAnimations(): void {
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in, .animate-fade-up, .animate-fade-up-delay, .animate-title, .animate-title-delay'
    );

    animatedElements.forEach(element => {
      element.classList.remove(
        'animate-fade-in',
        'animate-fade-up',
        'animate-fade-up-delay',
        'animate-title',
        'animate-title-delay'
      );

      // Trigger reflow to restart animations
      // void element.offsetWidth;
    });
  }

  /**
   * Animate elements when they enter the viewport
   * @param element The element to animate
   * @param animation The animation class to apply
   */
  animateOnScroll(element: HTMLElement, animation: string): void {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animation);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
    } else {
      // Fallback for browsers without IntersectionObserver
      element.classList.add(animation);
    }
  }

  /**
   * Apply staggered animations to a group of elements
   * @param elements Array of elements to animate
   * @param animation Base animation class
   * @param delayStep Milliseconds between each animation
   */
  animateStaggered(elements: HTMLElement[], animation: string, delayStep: number = 100): void {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add(animation);
      }, index * delayStep);
    });
  }
}
