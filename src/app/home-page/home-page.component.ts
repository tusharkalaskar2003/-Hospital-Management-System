import { Component, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {

  nav!: HTMLElement | null;
  navLinks!: NodeListOf<Element>;
  navCollapse!: HTMLElement | null;

  ngOnInit(): void {
    // Initialize the elements when the component loads
    this.nav = document.querySelector(".navbar");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.navCollapse = document.querySelector(".navbar-collapse.collapse");

    // Add event listeners to the nav links
    this.navLinks.forEach((a: Element) => {
      a.addEventListener("click", () => {
        if (this.navCollapse) {
          this.navCollapse.classList.remove("show");
        }
      });
    });
  }

  // Handle the scroll event with HostListener decorator
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.nav) {
      if (document.documentElement.scrollTop > 100) {
        this.nav.classList.add("header-scrolled");
      } else {
        this.nav.classList.remove("header-scrolled");
      }
    }
  }

}
