import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DuneBackgroundComponent } from "../../../layouts/dune-background/dune-background.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterLink,
    ToastModule,
    DuneBackgroundComponent
],
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent {
  // Estado reactivo con Signals (Angular 18+)
  loading = signal(false);
  formData = signal({
    email: '',
    password: ''
  });

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  onSubmit() {
    this.loading.set(true);

    // Simulación de autenticación (reemplaza con tu API real)
    setTimeout(() => {
      if (this.formData().email === 'gamer@spicemarket.com' && this.formData().password === '123456') {
        this.messageService.add({
          severity: 'success',
          summary: '¡Bienvenido!',
          detail: 'Inicio de sesión exitoso'
        });
        this.router.navigate(['/']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email o contraseña incorrectos'
        });
      }
      this.loading.set(false);
    }, 1500);
  }
}
