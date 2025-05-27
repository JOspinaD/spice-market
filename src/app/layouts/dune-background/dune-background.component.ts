import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-dune-background',
  imports: [],
  templateUrl: './dune-background.component.html',
  styleUrl: './dune-background.component.scss'
})
export class DuneBackgroundComponent implements AfterViewInit{
@ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private width!: number;
  private height!: number;
  private particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = this.width;
    canvas.height = this.height;
  }

  initParticles() {
    this.particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.5 + 0.5,
    }));
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.ctx.fillStyle = '#0d0d0d';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = 'rgba(255, 153, 0, 0.6)';
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;
    }

    // Duna estilizada
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height - 100);
    this.ctx.quadraticCurveTo(this.width / 2, this.height - 180, this.width, this.height - 100);
    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.fillStyle = '#ff990033';
    this.ctx.fill();

    // Luna/planeta
    this.ctx.beginPath();
    this.ctx.arc(this.width - 80, 80, 30, 0, Math.PI * 2);
    this.ctx.fillStyle = '#ff9900';
    this.ctx.shadowColor = '#ff9900';
    this.ctx.shadowBlur = 20;
    this.ctx.fill();
    this.ctx.shadowBlur = 0;
  };
}
