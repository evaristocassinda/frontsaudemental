# Especificação de implementação — ACOLHE

## Escopo entregue

| Área | Rotas | Estado |
|---|---|---|
| Landing e onboarding | `/` | Layout funcional |
| Dashboard | `/app/inicio` | Funcional com dados em memória |
| Check-in / diário | `/app/como-estou`, `/app/diario` | Gravar, ver, eliminar nota |
| Autoavaliação | `/app/autoavaliacao`, `/app/resultado` | Questionário ilustrativo, sem interpretação clínica |
| Conteúdos | `/app/explorar`, `/app/artigo` | Pesquisa, categorias, favoritos, leitura |
| Exercícios | `/app/exercicios`, `/app/respirar` | Exercício guiado por passos |
| Profissionais | `/app/profissionais`, `/app/profissional` | Perfis fictícios e pesquisa |
| Agendamento | `/app/consultas` | Solicitar e cancelar pedidos simulados |
| Familiares | `/app/familia` | Guias e FAQ |
| Apoio imediato | `/app/apoio-imediato` | Orientação, sem contactos não verificados |
| Assistente | `/app/assistente` | Respostas fixas; não é terapia |
| Perfil/configuração | `/app/perfil`, `/app/definicoes` | Alternar perfil de demo; limpar sessão |
| Administração | `/app/admin*` | Páginas de demonstração, sem segurança real |
| Profissionais | `/app/profissional-painel`, `/app/profissional-agenda` | Interfaces demonstrativas |
| Comunidade, vídeos, clínicas | rotas correspondentes | Planeado; ainda não implementado |

## Arquitetura

Angular standalone, router e estado local Signal. A API futura será Spring Boot MVC + Spring Security + Spring Data JPA + PostgreSQL. O código anterior do Caixa Report foi removido, mantendo apenas o scaffold do build Angular.

## Requisitos pendentes para produção

1. Avaliação ética e clínica, políticas de retenção e privacidade.
2. PHQ-9 e GAD-7: verificar versões, autorizações, traduções e protocolos de resposta. Não usar os exemplos como instrumentos clínicos.
3. Verificação real de profissionais e clínicas; agenda concorrente transacional.
4. Mecanismo de autenticação e autorização robusto, recuperação de conta e auditoria.
5. Editor CMS completo, gestão de revisão científica e versões.
6. Contactos de emergência de Angola confirmados, resposta de crise validada.
7. Comunidade com moderadores e políticas específicas; chatbot com avaliação de segurança.
8. Testes automatizados E2E, integração, acessibilidade, dispositivos e performance.
9. Substituir estado em memória por contratos DTO/API HTTP e tratamento de estados remotos.

## Endpoints propostos para implementação futura

`POST /api/v1/auth/login`, `GET /api/v1/me`, `GET /api/v1/content`, `GET /api/v1/professionals`, `POST /api/v1/moods`, `GET /api/v1/moods`, `POST /api/v1/journal`, `GET /api/v1/journal`, `POST /api/v1/assessments`, `GET /api/v1/assessments`, `GET /api/v1/appointments`, `POST /api/v1/appointments`, `PATCH /api/v1/appointments/{id}/cancel`.

Nenhuma API real está implementada nesta entrega.
