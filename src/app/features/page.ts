import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DemoStore,articles,Role } from '../core/demo.store';
interface Professional {name:string;specialty:string;location:string;initials:string;tone:string;mode:string;}
@Component({selector:'acolhe-page',imports:[RouterLink,FormsModule,DatePipe],templateUrl:'./page.html'})
export class Page {
 readonly store=inject(DemoStore);private route=inject(ActivatedRoute);private router=inject(Router);
 readonly articles=articles;private pageData=toSignal(this.route.data.pipe(map(d=>d['page'] as string)),{initialValue:this.route.snapshot.data['page'] as string});readonly page=computed(()=>this.pageData());
 readonly professionals:Professional[]=[{name:'Dra. Sofia Martins',specialty:'Psicologia clínica',location:'Luanda, Angola',initials:'SM',tone:'peach',mode:'Presencial / Online'},{name:'Dr. Miguel Costa',specialty:'Psicologia',location:'Talatona, Luanda',initials:'MC',tone:'mint',mode:'Presencial'},{name:'Dra. Clara Afonso',specialty:'Psiquiatria',location:'Luanda, Angola',initials:'CA',tone:'lilac',mode:'Presencial / Online'}];
 readonly feelings=[{name:'Muito bem',icon:'☀',tone:'sun'},{name:'Bem',icon:'✿',tone:'mint'},{name:'Assim assim',icon:'◌',tone:'sand'},{name:'Ansioso(a)',icon:'〰',tone:'lilac'},{name:'Triste',icon:'☾',tone:'blue'}];
 readonly categories=['Todos','Ansiedade','Depressão','Autocuidado','Família'];
 readonly faq=[{q:'A plataforma faz diagnósticos?',a:'Não. O ACOLHE oferece informação e experiências demonstrativas de rastreio; diagnósticos devem ser realizados por profissionais qualificados.'},{q:'Os meus dados são partilhados?',a:'Nesta demonstração, os registos são guardados apenas em memória e não enviados a um servidor. Numa versão real serão necessárias políticas de privacidade e segurança apropriadas.'},{q:'Existe atendimento de emergência?',a:'Não. Este protótipo não possui equipa de atendimento ou contacto automático com serviços de emergência.'}];
 mood='';moodNote='';journalText='';search='';category='Todos';selectedArticle=articles[0];selectedProfessional=this.professionals[0];selectedSlot='09:00';appointmentDate='';query='';assistantReply='';faqOpen=-1;
 assessmentConsent=false;assessmentIndex=0;assessmentAnswers:number[]=[];assessmentDone=false;
 readonly demoQuestions=['Nos últimos dias, tem sido difícil reservar momentos de descanso?','Sentiu dificuldade em concentrar-se nas suas atividades habituais?','Tem sentido preocupação com frequência?','Sentiu menos interesse em algumas atividades?','Teve dificuldade em relaxar?'];
 readonly answerOptions=['Nunca','Poucas vezes','Algumas vezes','Muitas vezes'];
 exerciseRunning=false;exerciseStep=0;exerciseCompleted=false;
 readonly breathingSteps=['Inspire suavemente','Expire devagar','Descanse por um momento'];
 readonly navTitles:Record<string,{eyebrow:string,title:string,description:string}>={
 'inicio':{eyebrow:'O SEU ESPAÇO',title:'Bom dia,',description:'Como está a sentir-se hoje? Pode começar por aqui, no seu próprio ritmo.'},
 'como-estou':{eyebrow:'ACOMPANHAMENTO',title:'Como está a sentir-se?',description:'Um pequeno momento para reconhecer o que sente, sem julgamentos.'},
 'diario':{eyebrow:'O MEU ESPAÇO',title:'Diário pessoal',description:'Um lugar privado para organizar pensamentos, no seu tempo.'},
 'autoavaliacao':{eyebrow:'CONHECER-ME MELHOR',title:'Autoavaliação',description:'Explore como se tem sentido com perguntas ilustrativas de demonstração.'},
 'resultado':{eyebrow:'AUTOAVALIAÇÃO',title:'Os seus resultados',description:'Informações de demonstração, sem diagnóstico ou interpretação clínica.'},
 'explorar':{eyebrow:'APRENDER E COMPREENDER',title:'Biblioteca de bem-estar',description:'Informação acessível para compreender mais e cuidar de si.'},
 'artigo':{eyebrow:'BIBLIOTECA',title:'Uma leitura para si',description:'Artigos informativos de demonstração.'},
 'exercicios':{eyebrow:'UM MOMENTO DE PAUSA',title:'Exercícios de autocuidado',description:'Práticas simples para experimentar quando desejar.'},
 'respirar':{eyebrow:'EXERCÍCIO GUIADO',title:'Um momento para respirar',description:'Siga este exercício ao seu ritmo. Pode interromper quando quiser.'},
 'profissionais':{eyebrow:'ENCONTRAR APOIO',title:'Profissionais',description:'Explore perfis demonstrativos e saiba como funciona a procura de apoio.'},
 'profissional':{eyebrow:'ENCONTRAR APOIO',title:'Perfil profissional',description:'Conheça as informações e opções de marcação.'},
 'consultas':{eyebrow:'A MINHA AGENDA',title:'Consultas e marcações',description:'Organize os seus pedidos de consulta num só lugar.'},
 'familia':{eyebrow:'CUIDAR DE QUEM AMAMOS',title:'Para familiares',description:'Apoiar começa por escutar, compreender e respeitar.'},
 'apoio-imediato':{eyebrow:'ESTAMOS AQUI PARA ORIENTAR',title:'Precisa de ajuda agora?',description:'Conheça recursos e passos de orientação para momentos difíceis.'},
 'comunidade':{eyebrow:'EM CONSTRUÇÃO',title:'Comunidade de apoio',description:'Um futuro espaço de partilha com moderação e regras de segurança.'},
 'assistente':{eyebrow:'ORIENTAÇÃO',title:'Assistente de recursos',description:'Encontre caminhos e informações. Não é um terapeuta.'},
 'videos':{eyebrow:'APRENDER AO SEU RITMO',title:'Vídeos e áudios',description:'Recursos educativos e orientações para momentos de pausa.'},
 'perfil':{eyebrow:'A MINHA CONTA',title:'O meu perfil',description:'Personalize o seu espaço de forma simples.'},
 'notificacoes':{eyebrow:'ATUALIZAÇÕES',title:'Notificações',description:'Mensagens operacionais respeitando a sua privacidade.'},
 'definicoes':{eyebrow:'PRIVACIDADE PRIMEIRO',title:'Definições',description:'Controlo, transparência e segurança.'},
 'admin':{eyebrow:'PAINEL INTERNO',title:'Administração',description:'Gestão demonstrativa de conteúdos, utilizadores e serviços.'},
 'admin-conteudos':{eyebrow:'ADMINISTRAÇÃO',title:'Gestão de conteúdos',description:'Pré-visualização do futuro sistema editorial.'},
 'admin-profissionais':{eyebrow:'ADMINISTRAÇÃO',title:'Gestão de profissionais',description:'Fluxo de validação e credenciais para uma futura API.'},
 'admin-utilizadores':{eyebrow:'ADMINISTRAÇÃO',title:'Gestão de utilizadores',description:'Acesso administrativo restrito e sem leitura de diários privados.'},
 'admin-agendamentos':{eyebrow:'ADMINISTRAÇÃO',title:'Gestão de agendamentos',description:'Estados e indicadores operacionais demonstrativos.'},
 'admin-auditoria':{eyebrow:'ADMINISTRAÇÃO',title:'Auditoria e segurança',description:'Operações sensíveis e eventos auditáveis na API futura.'},
 'profissional-painel':{eyebrow:'ÁREA PROFISSIONAL',title:'Painel profissional',description:'Agenda e gestão de disponibilidade demonstrativas.'},
 'profissional-agenda':{eyebrow:'ÁREA PROFISSIONAL',title:'Agenda profissional',description:'Organize solicitações e horários de atendimento.'},
 'clinica':{eyebrow:'INSTITUIÇÕES',title:'Espaço de clínicas',description:'Gestão institucional reservada à segunda fase.'},
 'sobre':{eyebrow:'A NOSSA MISSÃO',title:'Sobre o ACOLHE',description:'Um projeto académico para informação, autocuidado e orientação.'}
 };
 get current(){return this.navTitles[this.page()]||this.navTitles['inicio'];}
 get filteredArticles(){return this.articles.filter(a=>(this.category==='Todos'||a.category===this.category)&&(!this.search||`${a.title} ${a.description} ${a.category}`.toLowerCase().includes(this.search.toLowerCase())));}
 get filteredProfessionals(){return this.professionals.filter(p=>`${p.name} ${p.specialty} ${p.location}`.toLowerCase().includes(this.search.toLowerCase()));}
 saveMood(){if(!this.mood){this.store.flash('Escolha como se sente, se desejar.');return;}this.store.addMood(this.mood,this.moodNote);this.mood='';this.moodNote='';}
 saveJournal(){this.store.addJournal(this.journalText);this.journalText='';}
 openArticle(id:number){this.selectedArticle=this.articles.find(x=>x.id===id)||this.articles[0];this.router.navigateByUrl('/app/artigo');}
 openProfessional(index:number){this.selectedProfessional=this.professionals[index];this.router.navigateByUrl('/app/profissional');}
 book(){if(this.store.requestAppointment(this.selectedProfessional.name,this.selectedProfessional.specialty,this.appointmentDate,this.selectedSlot))this.router.navigateByUrl('/app/consultas');}
 resetAssessment(){this.assessmentConsent=false;this.assessmentIndex=0;this.assessmentAnswers=[];this.assessmentDone=false;}
 answer(value:number){this.assessmentAnswers=[...this.assessmentAnswers,value];if(this.assessmentIndex<this.demoQuestions.length-1){this.assessmentIndex++;}else{this.assessmentDone=true;this.store.saveAssessment(this.assessmentAnswers.reduce((a,b)=>a+b,0),15,'Questionário ilustrativo');}}
 nextBreath(){if(this.exerciseStep<5){this.exerciseStep++;}else{this.exerciseRunning=false;this.exerciseCompleted=true;this.store.completedExercises.update(n=>n+1);this.store.flash('Exercício concluído. Obrigado por reservar este momento.');}}
 askAssistant(choice:string){this.query=choice;const responses:Record<string,string>={'ansiedade':'A ansiedade pode ter diferentes manifestações. Pode encontrar informação na Biblioteca, na categoria Ansiedade.','depressão':'A depressão requer compreensão e, quando necessário, avaliação profissional. Explore os conteúdos informativos da Biblioteca.','profissional':'Pode explorar os perfis demonstrativos na página Profissionais.','exercícios':'Na área Exercícios encontra práticas guiadas que pode interromper quando quiser.','ajuda':'Se existe perigo imediato, procure serviços de emergência locais ou dirija-se à unidade de saúde mais próxima. O ACOLHE não disponibiliza atendimento de emergência.'};this.assistantReply=responses[choice]||'Pode explorar a Biblioteca, Exercícios ou Profissionais. Este assistente usa respostas predefinidas.';}
 changeRole(v:string){this.store.role.set(v as Role);this.store.flash('Perfil de demonstração alterado.');}
}
