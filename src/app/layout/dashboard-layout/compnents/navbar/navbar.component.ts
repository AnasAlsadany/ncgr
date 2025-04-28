import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  classToggled = false;
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // يعني لو سكرول أكتر من 50 بيكسل ضيف الكلاس
  }
  public toggleField() {
    this.classToggled = !this.classToggled;
  }

}
