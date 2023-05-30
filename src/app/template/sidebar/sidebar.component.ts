import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { fadeInOut } from '../shared/helper';
import { SidebarToggle } from '../shared/interfaces/sidebar-toggle.interface';
import { Navdata } from '../shared/interfaces/navdata.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ fadeInOut ]
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSidebar: EventEmitter<SidebarToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
    }
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.onResize();
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidebar(): void {
    this.collapsed = false;
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: Navdata): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: Navdata): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: Navdata): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
