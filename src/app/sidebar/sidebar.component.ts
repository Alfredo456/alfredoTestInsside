import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SidebarService } from './sidebar.service';
import { Subscription } from 'rxjs';

declare const $: any;
const permisos: any = [];

// Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: boolean;
  disabled?: boolean;
  sombrear?: boolean;
  children?: ChildrenItems[];
  permiso?: boolean;
  hover?: boolean;
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  icontype?: string;
  collapse?: string;
  disabled?: boolean;
  sombrear?: boolean;
  children?: Array<ChildrenItems>;
  permiso?: boolean;
  hover?: boolean;
}

// Menu Items
export let ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public menuItems: any[] = [];
  ps: any;
  empresaNombre: any;
  usuario: any = {};
  usuarioNombre: any;
  usuarioLogo: any;
  listPageModules: any[] = [];

  constructor(
    public router: Router,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _sidebarService: SidebarService
  ) {}
  ngOnDestroy(): void {
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  prueba(item: any) {
    setTimeout(() => {
      item.hover = false;
    }, 200);
  }

  ngOnInit() {
    this.buildMenuAdmin();
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this._sidebarService.titleListChangeEvent();
  }
  updatePS(menuItem: any): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
    menuItem.collapse = !menuItem.collapse;
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  buildMenuAdmin() {
    ROUTES = [
      {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'incomplete_circle',
        permiso: true,
      },
      {
        path: '/configuracion',
        title: 'Configuraciones',
        type: 'sub',
        icontype: 'settings', //'campaign',
        hover: false,
        // collapse: 'configuracion',
        collapse: false,
        permiso: true,
        children: [
          { path: 'usuario', title: 'Usuarios', type: 'sub' },
        ],
      },
    ];
  }
}
