import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { Navdata } from "../../shared/interfaces/navdata.interface";

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrls: ['../sidebar.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export default class SublevelMenuComponent {

  @Input() data: Navdata = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;

  handleClick(item: Navdata): void {
    if (!this.multiple && this.data.items && this.data.items.length > 0) {
      for (let modelItem of this.data.items) modelItem.expanded = false;
    }

    item.expanded = !item.expanded
  }
}
