import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-etape',
  templateUrl: './home-etape.component.html',
  styleUrls: ['./home-etape.component.css']
})
export class HomeEtapeComponent implements OnInit {

  constructor() { }
  showsWebIcon = false;
  showsPublicIcon = false;
  ngOnInit(): void {
  }
  @ViewChild('three') divThree!: ElementRef;
  @ViewChild('nine') divEight!: ElementRef;
  // ⤵️ method called by other methods, to hide all icons
  private hideAllIcons() {
    this.showsWebIcon = false;
    this.showsPublicIcon = false;
  }
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    // ⤵️ Captures / defines current window height when called
    const windowHeight = window.innerHeight;
    // ⤵️ Captures bounding rectangle of 5th element
    const boundingRectThree = this.divThree.nativeElement.getBoundingClientRect();
    // ⤵️ Captures bounding rectangle of 8th element
    const boundingRectEight = this.divEight.nativeElement.getBoundingClientRect();

    // ⤵️ IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
    // AND IF the bottom of the element is less than or = to viewport height
    // show the corresponding icon after half a second
    // else hide all icons
    if (boundingRectThree.bottom <= windowHeight - 150) {
      setTimeout(() => { this.showsWebIcon = true; }, 100);
    } else {
      this.showsWebIcon = false;
    }
    if (boundingRectEight.bottom <= windowHeight + 200) {
      setTimeout(() => { this.showsPublicIcon = true; }, 100);
    } else {
      this.showsPublicIcon = false;
    }
  }
}
