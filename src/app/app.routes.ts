import { Routes } from '@angular/router';
import { Shell } from './layout/shell';
import { Page } from './features/page';
import { Landing } from './features/landing';
export const routes:Routes=[
 {path:'',component:Landing},
 {path:'app',component:Shell,children:[
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  ...['inicio','como-estou','diario','autoavaliacao','resultado','explorar','artigo','exercicios','respirar','profissionais','profissional','consultas','familia','apoio-imediato','comunidade','assistente','videos','perfil','notificacoes','definicoes','admin','admin-conteudos','admin-profissionais','admin-utilizadores','admin-agendamentos','admin-auditoria','profissional-painel','profissional-agenda','clinica','sobre'].map(path=>({path,component:Page,data:{page:path}}))
 ]},
 {path:'**',redirectTo:''}
];
