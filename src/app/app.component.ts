import { Component } from '@angular/core';
import { SidebarToggle } from './template/shared/interfaces/sidebar-toggle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSidebarCollapsed = false;
  screenWidth = 0;

  onToggleSidebar(data: SidebarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSidebarCollapsed = data.collapsed;
  }
}
