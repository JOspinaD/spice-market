import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styles: [
    `
      .p-avatar {
        width: 70px;
        height: 70px;
      }

      :host {
        position: sticky; /* Clave para el efecto sticky */
        top: 0; /* Se pega en la parte superior */
        z-index: 1000; /* Asegura que esté por encima del contenido */
        width: 100%;
        background: var(--surface-card); /* Fondo sólido (ajusta según tu tema) */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra opcional */
      }

      /* Opcional: Efecto de transición al hacer scroll */
      :host(.scrolled) {
        background: rgba(255, 255, 255, 0.95); /* Fondo semi-transparente */
        backdrop-filter: blur(5px); /* Efecto de vidrio */
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Plataformas',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Play Station',
            icon: 'pi pi-desktop',
          },
          {
            label: 'XBox',
            icon: 'pi pi-desktop',
          },
          {
            label: 'Nintendo',
            icon: 'pi pi-desktop',
          },
          {
            label: 'PC',
            icon: 'pi pi-desktop',
          },
        ],
      },
      {
        label: 'Juegos',
        icon: 'pi pi-search',
        items: [
          {
            label: 'RPG',
            icon: 'pi pi-book',
            shortcut: '⌘+R',
          },
          {
            label: 'Arcade',
            icon: 'pi pi-gamepad',
            shortcut: '⌘+A',
          },
          {
            label: 'Shooter',
            icon: 'pi pi-crosshairs',
            shortcut: '⌘+S',
          },
          {
            label: 'Estrategia',
            icon: 'pi pi-cog',
            shortcut: '⌘+E',
          },
          {
            label: 'Deportes',
            icon: 'pi pi-football',
            shortcut: '⌘+D',
          },
          {
            label: 'Aventura',
            icon: 'pi pi-map',
            shortcut: '⌘+V',
          },
        ],
      },
    ];
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }
}
