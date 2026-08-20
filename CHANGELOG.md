# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste arquivo.

Este projeto segue o padrão **Keep a Changelog** e utiliza **Versionamento Semântico (SemVer)**.

---

# [1.0.0] - 2026-08-20

## 🎉 Primeira versão concluída

Conclusão da primeira versão funcional da **Clínica Salus**, desenvolvida utilizando HTML5, CSS3 e JavaScript.

Esta versão representa o encerramento da etapa inicial de desenvolvimento Front-End do projeto, contemplando estrutura, identidade visual, navegação, responsividade e interações em JavaScript.

---

## ✨ Páginas concluídas

- 🏠 **Home**
- 📅 **Agendamento**
- 👨‍⚕️ **Corpo Clínico**
- 🏥 **Quem Somos**
- ❓ **Perguntas Frequentes**
- 📞 **Contato**

Todas as páginas foram estruturadas e integradas à navegação principal do site.

---

## 🏠 Home

- Desenvolvimento da Hero principal.
- CTA direcionando para o formulário de agendamento.
- Seção institucional de conquistas e diferenciais.
- Seção de convênios.
- Grid de operadoras de saúde.
- CTA final para agendamento.
- Navegação interna através de âncoras.
- Layout responsivo para desktop, tablets e dispositivos móveis.

---

## 📅 Agendamento

- Desenvolvimento da página completa de solicitação de agendamento.
- Formulário organizado por etapas e categorias.
- Dados pessoais do paciente.
- Seleção de especialidade.
- Seleção dinâmica de profissional.
- Escolha entre atendimento particular e convênio.
- Exibição condicional do campo de convênio.
- Seleção de data e período preferencial.
- Campo para observações.
- Termo de consentimento para utilização dos dados.
- Validação dos campos utilizando JavaScript.
- Máscara de telefone.
- Bloqueio de datas anteriores à data atual.
- Mensagens de validação e feedback ao usuário.
- CTA alternativo para atendimento via WhatsApp.
- Layout responsivo.

> Nesta versão, o formulário realiza validação no Front-End. A integração com backend e sistema real de agendamento poderá ser implementada em versões futuras.

---

## 👨‍⚕️ Corpo Clínico

- Desenvolvimento da seção **Nossa Equipe**.
- Cards individuais para os profissionais.
- Informações de especialidade e CRM.
- Descrição profissional.
- Botões individuais para agendamento.
- Integração dos botões com o formulário da página Agendamento.
- Desenvolvimento da seção **Especialidades**.
- Carrossel interativo utilizando **Swiper.js**.
- Cards personalizados para as especialidades médicas.
- Navegação e paginação do carrossel.
- Layout responsivo para diferentes tamanhos de tela.

---

## 🏥 Quem Somos

- Desenvolvimento da apresentação institucional da Clínica Salus.
- Seção resumida sobre a clínica.
- Construção da história institucional.
- Linha do tempo interativa.
- Organização da história em marcos cronológicos.
- Desenvolvimento das seções:
  - Missão
  - Visão
  - Valores
- Sistema de abas interativas utilizando JavaScript.
- Seção de depoimentos.
- Carrossel automático de avaliações.
- Apresentação da avaliação geral da clínica.
- Layout responsivo.

---

## ❓ Perguntas Frequentes

- Desenvolvimento da página de Perguntas Frequentes.
- Sistema de Accordion utilizando JavaScript.
- Abertura individual das respostas.
- Fechamento automático da resposta anteriormente aberta.
- Organização das principais dúvidas dos pacientes.
- CTA final para contato com a equipe.
- Layout responsivo.

---

## 📞 Contato

- Desenvolvimento da Hero da página.
- Cards com informações de contato.
- Organização dos canais de atendimento.
- Informações de telefone, e-mail e endereço.
- Formulário de contato.
- Área destinada à localização da clínica.
- Integração visual com mapa.
- CTA para contato.
- Layout responsivo.

---

## 🧭 Navegação

- Header institucional compartilhando o mesmo padrão visual entre as páginas.
- Navegação entre todas as páginas do projeto.
- Links internos utilizando âncoras.
- CTAs direcionando diretamente para áreas específicas do site.
- Logos do Header e Footer funcionando como acesso à página inicial.
- Footer institucional presente em todas as páginas.
- Links rápidos para as principais áreas do site.
- Links para redes sociais.
- Responsividade do Header.
- Responsividade do Footer.

---

## 🎨 Design

- Desenvolvimento da identidade visual da **Clínica Salus**.
- Criação da logomarca.
- Desenvolvimento de versão monocromática da marca.
- Definição e aplicação da paleta de cores institucional.
- Utilização das fontes **Poppins** e **Josefin Sans**.
- Criação de backgrounds exclusivos para diferentes páginas.
- Desenvolvimento de banners institucionais.
- Produção de imagens da equipe médica.
- Desenvolvimento de imagens para recepção e atendimento.
- Criação de ícones ilustrativos.
- Padronização visual entre todas as páginas.
- Aplicação consistente de botões, cards, títulos e CTAs.

---

## 📱 Responsividade

Implementação de layouts adaptáveis para:

- Desktop.
- Notebooks.
- Tablets.
- Smartphones.
- Smartphones com telas reduzidas.

Principais breakpoints utilizados:

- `1024px`
- `768px`
- `480px`

Foram adaptados:

- Header.
- Footer.
- Hero sections.
- Grids.
- Cards.
- Formulários.
- Imagens.
- Tipografia.
- Convênios.
- Corpo Clínico.
- CTAs.
- Seções institucionais.

---

## ⚙️ JavaScript

Foram implementadas funcionalidades de interação utilizando JavaScript puro, incluindo:

- Accordion de Perguntas Frequentes.
- Abas interativas de Missão, Visão e Valores.
- Linha do tempo interativa.
- Carrossel de depoimentos.
- Seleção dinâmica de profissionais por especialidade.
- Exibição condicional de campos no formulário.
- Validação de formulários.
- Máscara de telefone.
- Manipulação de classes CSS.
- Manipulação do DOM.
- Eventos de clique e alteração de campos.
- Integração e configuração do Swiper.js.

---

## 🏗️ Estrutura

Organização do projeto em arquivos e diretórios separados por responsabilidade.

Estrutura principal:

```text
Clinica_Salus/
│
├── index.html
│
├── css/
├── js/
├── image/
├── icon/
└── pages/
---

## [0.3.0] - 2026-08-08

### ✨ Adicionado
- Desenvolvimento completo da seção **Especialidades**.
- Slider interativo utilizando **Swiper.js**.
- Cards personalizados para todas as especialidades médicas.
- Desenvolvimento da seção **Nossa Equipe**.
- Cards individuais dos médicos.
- Botões para agendamento de consultas.
- Desenvolvimento da seção **Convênios**.
- Área institucional explicando o atendimento por convênios.
- Footer institucional completo.
- Call To Action (CTA) para agendamento.
- Página **Perguntas Frequentes**.
- Sistema Accordion utilizando JavaScript.
- CTA final incentivando o contato da equipe.

### 🎨 Design
- Desenvolvimento da identidade visual da Clínica Salus.
- Criação da logomarca oficial.
- Versão monocromática da logo.
- Produção de backgrounds exclusivos para as páginas.
- Criação de banners institucionais.
- Produção das imagens da equipe médica.
- Desenvolvimento de ícones ilustrados personalizados.
- Padronização visual entre todas as páginas.

### 🏗️ Estrutura
- Organização da arquitetura do projeto.
- Separação dos arquivos CSS por responsabilidade.
- Estruturação da pasta `pages`.
- Criação das páginas:
  - Contato
  - Corpo Clínico
  - Perguntas Frequentes
  - Exames
- Organização dos componentes reutilizáveis.

### 🛠️ Melhorias
- Correções na implementação do Swiper.js.
- Melhorias de responsividade.
- Organização dos backgrounds individuais por página.
- Otimização da estrutura HTML.
- Padronização da arquitetura CSS.

---

### 📊 Estatísticas da versão

| Item | Quantidade |
|------|-----------:|
| Novas páginas | 4 |
| Novas seções | 10+ |
| Novos componentes | 20+ |
| Novas imagens | 30+ |
| Componentes reutilizáveis | Header e Footer |

---

### 📌 Status do Projeto

| Página | Status |
|---------|:------:|
| 🏠 Home | ✅ Concluída |
| 📞 Contato | 🚧 Em desenvolvimento |
| 👨‍⚕️ Corpo Clínico | 🚧 Em desenvolvimento |
| ❓ Perguntas Frequentes | 🚧 Em desenvolvimento |
| 🩺 Exames | ⏳ Planejada |
| 📅 Agendamento | ⏳ Planejada |

---

## [0.2.0] - 2026-08-06

### ✨ Adicionado
- Estrutura completa da Home.
- Header responsivo.
- Hero principal.
- Seção Quem Somos.
- Missão, Visão e Valores.
- Especialidades.
- Equipe.
- Convênios.
- Depoimentos.
- Seção de Contato.
- Footer inicial.

### 🎨 Design
- Definição da paleta de cores.
- Escolha da tipografia.
- Definição da identidade visual da Clínica Salus.
- Planejamento do layout institucional.

---

## [0.1.0] - 2026-08-04

### 🚀 Inicial
- Criação do repositório.
- Configuração do Git e GitHub.
- Organização das pastas do projeto.
- Estrutura inicial HTML, CSS e JavaScript.
- Criação do arquivo `README.md`.
- Criação do arquivo `PLANEJAMENTO.md`.
- Definição da identidade visual.
- Definição das especialidades da clínica.
- Escolha da paleta de cores.
- Configuração inicial do ambiente de desenvolvimento.

---

## 📝 Convenções

### Tipos de alterações

- ✨ **Adicionado** → Novas funcionalidades.
- 🎨 **Design** → Alterações visuais e identidade.
- 🏗️ **Estrutura** → Organização do projeto.
- 🛠️ **Melhorias** → Otimizações e refatorações.
- 🐛 **Correções** → Correção de bugs.
- ♻️ **Refatoração** → Melhorias internas sem alterar funcionalidades.

---

**Projeto desenvolvido para fins de estudo, portfólio e demonstração de habilidades em desenvolvimento Front-End.**