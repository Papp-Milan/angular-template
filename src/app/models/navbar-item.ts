export class NavbarItem {
    routerLink: string;
    icon: string;
    title: string;

    constructor(routerLink: string, icon: string, title: string) {
        this.routerLink = routerLink;
        this.icon = icon;
        this.title = title;
      }
  }