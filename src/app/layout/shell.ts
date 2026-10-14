import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DemoStore } from '../core/demo.store';
@Component({selector:'acolhe-shell',imports:[RouterLink,RouterLinkActive,RouterOutlet],template:`
<div class="app-layout">
<aside class="sidebar" [class.open]="menuOpen">
 <a routerLink="/" class="brand"><span class="brand-icon">✳</span><span>acolhe<span class="brand-dot">.</span></span></a>
 <div class="sidebar-subtitle">O seu espaço de cuidado</div>
 <div class="nav-section-title">O MEU ESPAÇO</div>
 <nav aria-label="Navegação principal">
 @for(link of mainLinks;track link.path){<a [routerLink]="link.path" routerLinkActive="active" (click)="menuOpen=false"><span class="nav-icon">{{link.icon}}</span>{{link.label}}</a>}
 </nav>
 <div class="nav-section-title">EXPLORAR E CUIDAR</div>
 <nav aria-label="Recursos de apoio">
 @for(link of supportLinks;track link.path){<a [routerLink]="link.path" routerLinkActive="active" (click)="menuOpen=false"><span class="nav-icon">{{link.icon}}</span>{{link.label}}</a>}
 </nav>
 @if(store.role()==='admin'){<div class="nav-section-title">ADMINISTRAÇÃO</div><nav><a routerLink="/app/admin" routerLinkActive="active"><span class="nav-icon">▦</span>Painel administrativo</a></nav>}
 @if(store.role()==='professional'){<div class="nav-section-title">PROFISSIONAIS</div><nav><a routerLink="/app/profissional-painel" routerLinkActive="active"><span class="nav-icon">♧</span>Painel profissional</a></nav>}
 <div class="sidebar-bottom"><div class="support-teaser"><div class="support-leaf">✺</div><strong>Um passo de cada vez.</strong><p>Está tudo bem fazer uma pausa.</p><a routerLink="/app/apoio-imediato">Encontrar apoio ↗</a></div><small>ACOLHE · Protótipo académico</small></div>
</aside>
@if(menuOpen){<button class="mobile-backdrop" aria-label="Fechar menu" (click)="menuOpen=false"></button>}
<div class="app-main"><header class="topbar"><button class="menu-toggle" aria-label="Abrir menu" (click)="menuOpen=!menuOpen">☰</button><span class="topbar-label">Um espaço para cuidar de si, no seu tempo.</span><div class="topbar-actions"><div class="reading-controls" aria-label="Tamanho de letra"><button type="button" aria-label="Diminuir tamanho do texto" [disabled]="fontScale <= 1" (click)="changeFontSize(-0.1)">A−</button><button type="button" aria-label="Aumentar tamanho do texto" [disabled]="fontScale >= 1.3" (click)="changeFontSize(0.1)">A+</button></div><a routerLink="/app/apoio-imediato" class="help-shortcut">♡ <span>Preciso de apoio</span></a><a routerLink="/app/notificacoes" class="round-action" aria-label="Notificações">♧</a><a routerLink="/app/perfil" class="account"><span class="avatar">{{store.name().charAt(0)}}</span><span>{{store.name()}}</span></a></div></header>
@if(store.notification()){<div class="toast" role="status"><span>{{store.notification()}}</span><button aria-label="Dispensar mensagem" (click)="store.dismiss()">×</button></div>}
<main class="page-container"><router-outlet /></main>
<footer class="app-footer">ACOLHE · Protótipo académico. Não substitui diagnóstico, acompanhamento profissional ou serviços de emergência.</footer>
</div></div>
`,styleUrl:'./shell.scss'})
export class Shell {readonly store=inject(DemoStore);private readonly document=inject(DOCUMENT);fontScale=1;changeFontSize(delta:number){this.fontScale=Math.min(1.3,Math.max(1,Math.round((this.fontScale+delta)*10)/10));this.document.documentElement.style.setProperty('--font-scale',String(this.fontScale));}menuOpen=false;mainLinks=[{path:'/app/inicio',icon:'⌂',label:'Início'},{path:'/app/como-estou',icon:'♡',label:'Como estou'},{path:'/app/autoavaliacao',icon:'◈',label:'Autoavaliação'},{path:'/app/diario',icon:'▤',label:'O meu diário'}];supportLinks=[{path:'/app/explorar',icon:'▧',label:'Conteúdos'},{path:'/app/exercicios',icon:'☼',label:'Exercícios'},{path:'/app/profissionais',icon:'♧',label:'Profissionais'},{path:'/app/consultas',icon:'▦',label:'Consultas'},{path:'/app/familia',icon:'♙',label:'Para familiares'},{path:'/app/apoio-imediato',icon:'✧',label:'Ajuda imediata'}];}
