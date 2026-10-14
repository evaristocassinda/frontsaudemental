# ACOLHE — revisão de legibilidade v2

## Auditoria do ficheiro original
- Base 15px e muitos textos entre 9 e 13px.
- Navegação 12.5px, botões 12–13px, descrições 12px e tabelas 10–12px.
- Texto secundário de contraste insuficiente em determinadas combinações (ainda necessita teste automatizado).
- Aumento por zoom e personalização de espaçamento sem validação.

## Alterações
- Família tipográfica única: Inter.
- Escala mínima de 14px para rótulos; 15–18px para texto pequeno/corrido; 17px como base.
- Contrastes de texto secundário reforçados, tipografia dos menus, botões e formulários ampliada.
- Controlo A− / A+ no topo (100% a 130%) no protótipo, sem persistência de preferência.
- Suporte de redução de movimento e destaque visual do foco.

## Testes obrigatórios pendentes
- npm install && npm run build (dependências não instaladas neste ambiente).
- Testes com zoom de 100, 150 e 200% e largura 320px.
- Verificação WCAG AA de contraste em cada contexto real.
- Navegação por teclado e leitores de ecrã; labels e semântica das telas.
- Comparação de legibilidade com participantes adultos em cenários reais.

## Nota
Este trabalho altera estilos e controlos de leitura, não certifica conformidade WCAG. Textos fixos em px ainda exigem refatoração sistemática futura para dimensionamento rem escalável, e verificação de todos os fluxos.
