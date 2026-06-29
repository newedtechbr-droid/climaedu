# Nova arquitetura CLIMAEDU — site multi-página

Transformação do site one-page atual em um site institucional/comercial com páginas separadas por jornada, mantendo a identidade visual (calcário, verde oliva, terracota, tipografia editorial) já consolidada.

## Arquitetura de rotas

Estrutura final em `src/routes/`:

```text
/                        Homepage (tese central + cards de jornada)
/orgaos-publicos         Órgãos públicos (governança climática)
/empresas                Empresas (ESG / SSMA / RH)
/escolas                 Escolas e redes de ensino
/plataforma              Plataforma (como funciona)
/cursos                  Cursos e trilhas (já existe — reformular)
/diferenciais            Diferenciais + tabela comparativa
/sobre                   Sobre (já existe — reformular)
/demonstracao            Demonstração (formulário expandido)
```

Rotas antigas (`/como-funciona`, `/para-quem`, `/contato`) serão substituídas pelas novas equivalentes (`/plataforma`, cards de jornada na home, `/demonstracao`).

## Header e navegação

Novo menu principal (desktop):
`Soluções ▾` (dropdown: Órgãos públicos, Empresas, Escolas) · `Plataforma` · `Cursos` · `Diferenciais` · `Sobre` · CTA `Agendar demonstração`

Mobile: accordion equivalente.

## Homepage (`/`)

Reduzida e direcionadora. Seções:
1. **Hero** — "Da reação à prevenção" + dois CTAs (Agendar / Conhecer soluções).
2. **Contexto** — "A emergência climática não é responsabilidade de uma área só" + texto institucional.
3. **Cards de jornada** (4): Órgãos públicos, Empresas, Escolas, Parceiros institucionais — cada um linka para a página correspondente.
4. **Método** — Aprender → Aplicar → Medir → Evidenciar (visual horizontal de 4 etapas).
5. **Frase de fechamento** + CTA para demonstração.

Removidas da home: Problem detalhado, Solution longa, Tracks completo, Audience, Demo showcase, Differentials, AI, Classroom, Ecosystem, SDG, About, Contact — todos migram para suas páginas específicas.

## Página: Órgãos públicos (`/orgaos-publicos`)

- Hero + subtítulo institucional.
- Bloco "O problema" — 6 itens (fragmentação, falta de base comum, compras lentas, dificuldade de evidência, população despreparada, pressão de controle).
- Bloco "A solução CLIMAEDU" — 7 itens (white-label, trilhas, cursos aplicados, checklists, certificados, dashboards, relatórios).
- **Trilhas por área** — 6 cards: Defesa Civil, Compras públicas, Meio ambiente, Educação, Comunicação, Controle interno e gestão.
- CTA final: "Agendar demonstração para órgão público".

## Página: Empresas (`/empresas`)

Hero ESG/SSMA + lista de trilhas (onboarding, reciclagens, ESG, resíduos, SSMA, relatórios, certificados) em grid. CTA específico.

## Página: Escolas (`/escolas`)

Tom pedagógico/inspirador. Reaproveita assets de `ClassroomSection`. Seções pedagógicas (PBL, gamificação, imersivos, formação continuada, temas, escola-família-comunidade). CTA "Levar a CLIMAEDU para minha escola ou rede".

## Página: Plataforma (`/plataforma`)

Reaproveita `PlatformFeaturesSection` + `DemoShowcaseSection` + `AISection`. Seções: white-label, gestão de usuários, trilhas por perfil, certificados, dashboards, relatórios, IA com revisão humana.

## Página: Cursos e Trilhas (`/cursos`)

Reformula a rota existente. 10 categorias listadas; cards de curso com: nome, carga horária, público, aplicação prática, evidência, certificado. CTA "Solicitar catálogo de trilhas".

## Página: Diferenciais (`/diferenciais`)

Hero "O mercado entrega partes. A CLIMAEDU estrutura a jornada." + **tabela comparativa** (CLIMAEDU × Cursos avulsos × LMS genéricos × Consultorias) cruzando 10 recursos com check/x. CTA final.

## Página: Sobre (`/sobre`)

Reformula a rota existente. Reaproveita `AboutSection` + `EcosystemSection` + `SDGSection`. Blocos: Quem somos, Ecossistema, ODS, Propósito, Autoridade técnica, Visão de impacto.

## Página: Demonstração (`/demonstracao`)

Substitui `/contato`. Formulário expandido (nome, instituição, cargo, e-mail, WhatsApp, tipo de instituição, principal desafio, número de pessoas). Texto lateral com SLA de 48h úteis.

## Detalhes técnicos

- Cada rota recebe `head()` próprio com title, description e og:title/og:description únicos (SEO).
- Componentes de seção existentes serão reaproveitados como blocos das novas páginas (sem reescrita de copy principal — usa-se o conteúdo já aprovado quando aplicável e adiciona-se o copy novo do briefing).
- Novos componentes a criar:
  - `src/components/sections/JourneyCardsSection.tsx` (home — 4 cards)
  - `src/components/sections/MethodStepsSection.tsx` (home — Aprender→Aplicar→Medir→Evidenciar)
  - `src/components/sections/ContextSection.tsx` (home — "não é responsabilidade de uma área só")
  - `src/components/sections/TrilhasPorAreaSection.tsx` (órgãos públicos — 6 cards)
  - `src/components/sections/ComparisonTableSection.tsx` (diferenciais)
  - `src/components/sections/DemoFormSection.tsx` (formulário expandido)
- Header atualizado com novos itens + dropdown "Soluções".
- Sticky CTA mobile mantido apontando para `/demonstracao`.
- Footer atualizado com novos links de navegação por seção.
- Rotas antigas (`/como-funciona`, `/para-quem`, `/contato`) removidas; redireciono via `Navigate` para os novos equivalentes para preservar links externos.
- Paleta, tipografia e componentes shadcn permanecem inalterados.

## Não inclui

- Backend / envio real do formulário (mantém comportamento atual de coleta visual; integração com Cloud pode entrar depois se você pedir).
- Reescrita do copy já aprovado nas seções reaproveitadas.
- Mudanças de paleta ou tipografia.

Posso seguir e implementar?
