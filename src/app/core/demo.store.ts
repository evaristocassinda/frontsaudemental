import { Injectable, computed, signal } from '@angular/core';
export type Role = 'user' | 'family' | 'professional' | 'admin';
export interface MoodEntry { id: number; feeling: string; note: string; date: Date; }
export interface Appointment { id:number; professional:string; specialty:string; date:string; time:string; status:'solicitada'|'confirmada'|'cancelada'; }
export interface Article { id:number; category:string; title:string; description:string; minutes:number; icon:string; }
export const articles:Article[] = [
 {id:1,category:'Ansiedade',title:'Compreender a ansiedade',description:'O que é, como se manifesta e quando procurar orientação.',minutes:6,icon:'◌'},
 {id:2,category:'Depressão',title:'Entender a depressão',description:'Conheça os sinais, sem julgamentos ou rótulos.',minutes:7,icon:'✳'},
 {id:3,category:'Autocuidado',title:'Pequenas pausas no dia a dia',description:'Práticas simples de atenção e descanso.',minutes:4,icon:'❋'},
 {id:4,category:'Família',title:'Como apoiar alguém próximo',description:'Escutar, acolher e conhecer os limites do apoio.',minutes:8,icon:'♡'},
 {id:5,category:'Ansiedade',title:'Quando procurar um profissional?',description:'Reconheça quando pode ser importante pedir ajuda.',minutes:5,icon:'✧'},
 {id:6,category:'Autocuidado',title:'Sono, rotina e bem-estar',description:'Hábitos úteis sem metas rígidas.',minutes:6,icon:'☾'},
];
@Injectable({providedIn:'root'})
export class DemoStore {
 readonly role=signal<Role>('user'); readonly name=signal('Ana'); readonly signedIn=signal(false);
 readonly moods=signal<MoodEntry[]>([]); readonly appointments=signal<Appointment[]>([]);
 readonly favorites=signal<number[]>([]); readonly journal=signal<{id:number,text:string,date:Date}[]>([]);
 readonly assessmentResults=signal<{date:Date,score:number,max:number,title:string}[]>([]);
 readonly notification=signal(''); readonly completedExercises=signal(0);
 readonly moodCount=computed(()=>this.moods().length);
 login(role:Role='user',name='Ana'){this.role.set(role);this.name.set(name||'Ana');this.signedIn.set(true);this.flash('Bem-vindo ao seu espaço.');}
 logout(){this.signedIn.set(false);this.flash('Sessão de demonstração terminada.');}
 flash(msg:string){this.notification.set(msg);}
 dismiss(){this.notification.set('');}
 addMood(feeling:string,note:string){this.moods.update(xs=>[{id:Date.now(),feeling,note,date:new Date()},...xs]);this.flash('Registo adicionado nesta sessão de demonstração.');}
 addJournal(text:string){if(!text.trim())return;this.journal.update(xs=>[{id:Date.now(),text:text.trim(),date:new Date()},...xs]);this.flash('Nota guardada apenas nesta sessão.');}
 removeJournal(id:number){this.journal.update(xs=>xs.filter(x=>x.id!==id));}
 requestAppointment(professional:string,specialty:string,date:string,time:string){if(!date||!time){this.flash('Escolha uma data e um horário.');return false;}this.appointments.update(xs=>[{id:Date.now(),professional,specialty,date,time,status:'solicitada'},...xs]);this.flash('Pedido simulado criado. Nenhuma clínica foi contactada.');return true;}
 cancelAppointment(id:number){this.appointments.update(xs=>xs.map(a=>a.id===id?{...a,status:'cancelada' as const}:a));this.flash('Marcação de demonstração cancelada.');}
 toggleFavorite(id:number){this.favorites.update(xs=>xs.includes(id)?xs.filter(x=>x!==id):[...xs,id]);}
 saveAssessment(score:number,max:number,title:string){this.assessmentResults.update(xs=>[{date:new Date(),score,max,title},...xs]);this.flash('Resultado ilustrativo disponível apenas nesta sessão.');}
}
