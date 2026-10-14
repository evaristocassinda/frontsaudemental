# ACOLHE — Frontend Angular

Plataforma digital de apoio e orientação em saúde mental. **Protótipo académico, não é um dispositivo médico e não fornece apoio de emergência.**

## Iniciar

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## Funcionalidades demonstráveis

- Landing page, dashboard, check-in emocional, diário e histórico em memória.
- Questionário ilustrativo **não validado e sem resultado clínico** (não implementa PHQ-9/GAD-7).
- Biblioteca com pesquisa e favoritos, exercícios de respiração guiados.
- Perfis profissionais **fictícios**, pedidos de consulta simulados e cancelamento.
- Área para familiares, informação para situações de perigo, perfil e configurações.
- Backoffice visual, painel profissional, assistente orientado por respostas fixas.
- Rotas para comunidade, vídeos e clínicas como módulos de fase 2.

## Segurança e limites

Nenhum registo pessoal é persistido; o estado do protótipo é guardado apenas em memória e desaparece após atualizar a página. Não existe autenticação real, autorização no servidor, serviços externos ou chamadas de emergência. Não insira dados reais de saúde neste protótipo.

Os perfis de utilizador são alternáveis em `/app/perfil` **apenas para demonstração de interface**. As permissões reais terão de ser aplicadas no Spring Boot.

## Integração posterior

- `src/environments/` define `apiUrl` e `demoMode`.
- `src/app/core/demo.store.ts` concentra estado e operações simuladas. Substituir por serviços REST separados por funcionalidades.
- Requisitos antes de uso real: aprovação de conteúdo por especialistas, validação de questionários, plano de resposta a crises, contactos locais verificados, autenticação e políticas de privacidade.

Ver `DOCUMENTACAO-ACOLHE.md` para rotas, limites e plano de integração.
