import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../../../../shared/pipes/safe.pipe';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [SafePipe, CommonModule],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class QuranComponent implements OnInit, AfterViewInit, OnDestroy {
  activeTestimonial = 0;
  selectedImage = 1;

  // ViewChild references for swiper containers
  @ViewChild('testimonialsContainer')
  testimonialsContainer!: ElementRef<SwiperContainer>;

  @ViewChild('galleryContainer')
  galleryContainer!: ElementRef<SwiperContainer>;

  @ViewChild('galleryThumbsContainer')
  galleryThumbsContainer!: ElementRef<SwiperContainer>;

  // Manage component lifecycle with RxJS
  private destroy$ = new Subject<void>();
  videoUrl: SafeResourceUrl;



  constructor() {
    // Replace 'VIDEO_ID' with your actual YouTube video ID
    const youtubeVideoId = 'VIDEO_ID';
    this.videoUrl = `https://www.youtube.com/embed/XsxKbezdjwA?autoplay=0&mute=1&controls=1&rel=0`;
  }




  galleryImages = [
    {
      id: 1,
      url: '/4.jpg',
      alt: 'Student reciting Quran',
      caption: 'Tajweed Practice Session'
    },
    {
      id: 2,
      url: '/5.jpg',
      alt: 'Group Quran study',
      caption: 'Collaborative Learning'
    },
    {
      id: 3,
      url: '/1.jpg',
      alt: 'Online Quran lesson',
      caption: 'Virtual Classroom Experience'
    },
    {
      id: 4,
      url: '/2.jpg',
      alt: 'Quran memorization techniques',
      caption: 'Memorization Techniques'
    },
    {
      id: 5,
      url: '/4.jpg',
      alt: 'Quran teacher with students',
      caption: 'Expert Guidance'
    },
    {
      id: 6,
      url: '/5.jpg',
      alt: 'Quran calligraphy art',
      caption: 'Quranic Arts & Calligraphy'
    }
  ];

  // Course modules
  courseModules = [
    {
      id: 1,
      title: 'Foundations of Tajweed',
      description: 'Master the essential rules for proper Quranic pronunciation.',
      icon: 'book-open',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Memorization Techniques',
      description: 'Learn effective strategies for memorizing Quranic verses.',
      icon: 'brain',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Understanding Tafsir',
      description: 'Explore the meanings and interpretations of Quranic verses.',
      icon: 'search',
      color: 'teal'
    },
    {
      id: 4,
      title: 'Recitation Mastery',
      description: 'Perfect your recitation with proper rhythm and intonation.',
      icon: 'mic',
      color: 'amber'
    }
  ];

  // Testimonials
  testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      location: 'United States',
      quote: 'The Quran course at Tabiiyn has transformed my recitation. The teachers are incredibly patient and knowledgeable. I never thought I could learn so much in such a short time.',
      avatar: '/assets/testimonials/avatar-1.jpg',
      rating: '5.0',
      course: 'Quran Memorization'
    },
    {
      id: 2,
      name: 'Aisha Mahmoud',
      location: 'United Kingdom',
      quote: 'I\'ve tried many online Quran courses, but nothing compares to the personalized attention I received at Tabiiyn Institute. The flexible scheduling and expert teachers make it perfect for busy professionals.',
      avatar: '/assets/testimonials/avatar-2.jpg',
      rating: '4.9',
      course: 'Tajweed Mastery'
    },
    {
      id: 3,
      name: 'Omar Farooq',
      location: 'Canada',
      quote: 'The combination of traditional teaching methods with modern technology makes learning the Quran both effective and enjoyable. My children are making progress I never thought possible.',
      avatar: '/assets/testimonials/avatar-3.jpg',
      rating: '5.0',
      course: 'Family Quran Learning'
    },
    {
      id: 4,
      name: 'Fatima Zahra',
      location: 'Australia',
      quote: 'As an adult beginner, I was worried about starting my Quranic journey, but the teachers at Tabiiyn made me feel comfortable and supported from day one. Their patience and expertise are unmatched.',
      avatar: '/assets/testimonials/avatar-4.jpg',
      rating: '5.0',
      course: 'Arabic & Quran for Beginners'
    }
  ];

  ngOnInit(): void {
    // Listen for window resize events to reinitialize swiper if needed
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateSwiperOnResize();
      });
  }

  ngAfterViewInit(): void {
    // Initialize all swipers
    this.initializeSwipers();
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Updates swiper instances on window resize
   */
  private updateSwiperOnResize(): void {
    if (this.testimonialsContainer?.nativeElement?.swiper) {
      this.testimonialsContainer.nativeElement.swiper.update();
    }

    if (this.galleryContainer?.nativeElement?.swiper &&
        this.galleryThumbsContainer?.nativeElement?.swiper) {
      this.galleryContainer.nativeElement.swiper.update();
      this.galleryThumbsContainer.nativeElement.swiper.update();
    }
  }

  /**
   * Initialize all swiper instances
   */
  private initializeSwipers(): void {
    this.initializeTestimonialSwiper();
    this.initializeGallerySwiper();
  }

  /**
   * Initialize testimonial swiper with optimized configuration
   */
  private initializeTestimonialSwiper(): void {
    const testimonialSwiperParams = {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: false,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      speed: 700,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      grabCursor: true,
      loop: true,
      on: {
        slideChange: (swiper: any) => {
          this.activeTestimonial = swiper.realIndex;
        }
      }
    };

    if (this.testimonialsContainer?.nativeElement) {
      const testimonialsSwiper = this.testimonialsContainer.nativeElement;
      Object.assign(testimonialsSwiper, testimonialSwiperParams);
      testimonialsSwiper.initialize();

      // Add event listeners for better UX
      testimonialsSwiper.addEventListener('mouseenter', () => {
        if (testimonialsSwiper.swiper.autoplay.running) {
          testimonialsSwiper.swiper.autoplay.stop();
        }
      });

      testimonialsSwiper.addEventListener('mouseleave', () => {
        if (!testimonialsSwiper.swiper.autoplay.running) {
          testimonialsSwiper.swiper.autoplay.start();
        }
      });
    }
  }

  /**
   * Initialize gallery swiper with thumbs
   */
  private initializeGallerySwiper(): void {
    if (!this.galleryContainer?.nativeElement || !this.galleryThumbsContainer?.nativeElement) {
      return;
    }

    const mainGallery = this.galleryContainer.nativeElement;
    const thumbsGallery = this.galleryThumbsContainer.nativeElement;

    // Configure thumbs swiper
    const thumbsParams = {
      slidesPerView: 3.5,
      spaceBetween: 10,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      },
    };

    // Configure main gallery swiper
    const mainParams = {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: false,
      thumbs: {
        swiper: thumbsGallery
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      speed: 800,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      on: {
        slideChange: (swiper: any) => {
          this.selectedImage = swiper.realIndex + 1;
        }
      }
    };

    // Apply configurations
    Object.assign(thumbsGallery, thumbsParams);
    Object.assign(mainGallery, mainParams);

    // Initialize in proper order: thumbs first, then main
    thumbsGallery.initialize();
    mainGallery.initialize();
  }

  /**
   * Select a specific image in the gallery
   */
  selectImage(id: number): void {
    this.selectedImage = id;
    if (this.galleryContainer?.nativeElement?.swiper) {
      // Adjust for zero-based index
      this.galleryContainer.nativeElement.swiper.slideToLoop(id - 1);
    }
  }

  /**
   * Navigate to next testimonial
   */
  nextTestimonial(): void {
    if (this.testimonialsContainer?.nativeElement?.swiper) {
      this.testimonialsContainer.nativeElement.swiper.slideNext();
    } else {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }
  }

  /**
   * Navigate to previous testimonial
   */
  prevTestimonial(): void {
    if (this.testimonialsContainer?.nativeElement?.swiper) {
      this.testimonialsContainer.nativeElement.swiper.slidePrev();
    } else {
      this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    }
  }
}
