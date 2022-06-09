import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NotificationsService} from "../global/services/notifications.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import { Location, PopStateEvent } from '@angular/common';
import {webSocket} from "rxjs/webSocket";
import {Subscription} from "rxjs";
import {NavItem, NavItemType} from "../md/md.module";

@Component({
  selector: 'app-music-information',
  templateUrl: './music-information.component.html',
  styleUrls: ['./music-information.component.scss'],
})
export class MusicInformationComponent implements OnInit, AfterViewInit, OnDestroy {
  subject = webSocket('wss://notificaciones.dgboss.net/notifaciones/ratesrv/dgboss-9156609');
  public navItems!: NavItem[] ;
  private _router!: Subscription ;
  private lastPoppedUrl!: string ;
  private yScrollStack: number[] = [];
  url!: string ;
  location: Location;
  notificacionesPush = [];

  @ViewChild('sidebar', { static: false }) sidebar: any;
  subscription1$!: Subscription;
  subscription2$!: Subscription;
  subscription3$!: Subscription ;
  subscription4$!: Subscription ;
  subscription5$!: Subscription ;
  subscription6$!: Subscription ;
  subscription7$!: Subscription ;
  constructor(
    private router: Router,
    location: Location,
    private _notificationsService: NotificationsService,
  ) {
    this.location = location;
  }
  ngOnDestroy(): void {
    this.subscription1$ ? this.subscription1$.unsubscribe() : '';
    this.subscription2$ ? this.subscription2$.unsubscribe() : '';
    this.subscription3$ ? this.subscription3$.unsubscribe() : '';
    this.subscription4$ ? this.subscription4$.unsubscribe() : '';
    this.subscription5$ ? this.subscription5$.unsubscribe() : '';
    this.subscription6$ ? this.subscription6$.unsubscribe() : '';
    this.subscription7$ ? this.subscription7$.unsubscribe() : '';
    this._router ? this._router.unsubscribe() : '';
  }
  ngOnInit() {
    const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url ? ev.url : '';
    });
    this.subscription2$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl) this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = '';
          // @ts-ignore
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    const html = document.getElementsByTagName('html')[0];
    this.navItems = [
      { type: NavItemType.NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },

      {
        type: NavItemType.NavbarRight,
        title: '',
        iconClass: 'fa fa-bell-o',
        numNotifications: 5,
        dropdownItems: [
          { title: 'Notification 1' },
          { title: 'Notification 2' },
          { title: 'Notification 3' },
          { title: 'Notification 4' },
          { title: 'Another Notification' },
        ],
      },
      {
        type: NavItemType.NavbarRight,
        title: '',
        iconClass: 'fa fa-list',

        dropdownItems: [
          { iconClass: 'pe-7s-mail', title: 'Messages' },
          { iconClass: 'pe-7s-help1', title: 'Help Center' },
          { iconClass: 'pe-7s-tools', title: 'Settings' },
          'separator',
          { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
          { iconClass: 'pe-7s-close-circle', title: 'Log Out' },
        ],
      },
      { type: NavItemType.NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },

      { type: NavItemType.NavbarLeft, title: 'Account' },
      {
        type: NavItemType.NavbarLeft,
        title: 'Dropdown',
        dropdownItems: [
          { title: 'Action' },
          { title: 'Another action' },
          { title: 'Something' },
          { title: 'Another action' },
          { title: 'Something' },
          'separator',
          { title: 'Separated link' },
        ],
      },
      { type: NavItemType.NavbarLeft, title: 'Log out' },
    ];
    //this.conectar();
  }


  ngAfterViewInit() {
    this.runOnRouteChange();
  }
  public isMap() {
    if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
      return true;
    } else {
      return false;
    }
  }
  runOnRouteChange(): void {
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
