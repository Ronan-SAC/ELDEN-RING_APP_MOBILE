# Elden Ring Compendium

Um aplicativo de compêndio/wiki sobre o jogo **Elden Ring**, desenvolvido com **React Native** e **Expo**, que consome a [Elden Ring Fan API](https://eldenring.fanapis.com/).

## Funcionalidades

- Menu principal com categorias navegáveis
- Listagem de itens por categoria
- Detalhes de cada item
- 15 categorias disponíveis:

  | Categoria | Descrição |
  |---|---|
  | Legendary Bosses | Chefes lendários |
  | Weapons | Armas |
  | Armor | Armaduras |
  | Talismans | Talismãs |
  | Sorceries | Feitiços |
  | Incantations | Invocações |
  | Ashes of War | Cinzas de Guerra |
  | Key Items | Itens-chave |
  | Shields | Escudos |
  | Ammo | Munições |
  | Spirit Summons | Invocações espirituais |
  | Classes | Classes |
  | Creatures | Criaturas |
  | NPCs | Personagens não jogáveis |
  | Locations | Localizações |

## Tecnologias

- [Expo](https://expo.dev) (SDK 52) com [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- [React Native](https://reactnative.dev) 0.76
- [NativeWind](https://www.nativewind.dev) (Tailwind CSS) + TypeScript
- Arquitetura **MVVM** (Model-View-ViewModel):
  - `models/` — modelos de dados
  - `services/` — camada de acesso à API (repositórios)
  - `viewmodels/` — hooks de gerenciamento de estado
  - `app/views/` — telas (views)
  - `components/` — componentes reutilizáveis

## Como executar

1. Instale as dependências

   ```bash
   npm install
   ```

2. Inicie o app

   ```bash
   npx expo start
   ```

3. No terminal, escolha como abrir o app:
   - **[development build](https://docs.expo.dev/develop/development-builds/introduction/)**
   - **[Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)**
   - **[iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)**
   - **[Expo Go](https://expo.dev/go)**

## Scripts

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o Expo |
| `npm run android` | Inicia no Android |
| `npm run ios` | Inicia no iOS |
| `npm run web` | Inicia na web |
| `npm run lint` | Executa o ESLint |
| `npm test` | Executa os testes (Jest) |

## API

O app consome a [Elden Ring Fan API](https://eldenring.fanapis.com/) através dos repositórios em `services/`, utilizando `fetch` para buscar os dados por nome ou a lista completa (limite de 100 itens por categoria).
