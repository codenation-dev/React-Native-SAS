# Introduções ao React Native

> Leia atentamente as instruções abaixo, pois elas te
levarão a encontrar a resolução esperada para o desafio

Tópicos
---

Com esse desafio, você aprenderá:

- Javascript (ES6+)
- React Native
- Como _debuggar_ aplicações React
- Como usar as ferramentas de _debug_ para React Native
- Como os dados de uma API impactam diretamente o código

Requisitos
---

Este projeto é um aplicativo usado para mostrar receitas gostosas
através de uma API de dados públicos. Aliás, não se preocupe com a
API, ou em como os dados estão vindo, pois sua missão é encontrar os
problemas relacionados aos comportamentos inesperados ao mostrar essas
receitas na tela.

Dessa forma, o objetivo com este desafio é que você consiga resolver os
problemas do código neste projeto através do uso das ferramentas e dicas
ensinadas em sala de auda para corrigir esta aplicação, para que
se comporte conforme à imagem abaixo:

> Você não precisa validar os comportamentos do aplicativo
em ambas plataformas, iOS e Android, basta validar em uma
plataforma

![iPhone 7 iOS](https://i.imgur.com/zQAc0jq.png)

### Tarefas

- [ ] Ajustar o crash na tela acontecendo quando abre o aplicativo
- [ ] Incluir a receita que está faltando ser renderizada na lista de receitas
- [ ] Ajustar os link das receitas que não estão sendo renderizados na tela
- [ ] Ajustar lista de ingredientes para serem mostrados por receita ao invés de
mostrar todos os ingredientes de todas as receitas

Intruções
---

> Todas as configurações necessárias já foram criadas, se sentir
falta de algo, contate os instrutores/mentores.

- Tenha certeza que você está na pasta do projeto:

```bash
$ cd $PASTA_DO_PROJETO
```

- Tenha a versão correta do Node instalada e use-a para o projeto:

> ^12.16.1 (lts/erbium)

```bash
$ nvm install # to install and use the project node version specified .nvmrc
```

- Instalando as dependências do projeto:

**Node (React Native):**

> Tenha certeza que você está utilizando corretamente as versões
correspondentes

- CocoaPods: ^1.8
- yarn: ^1.17.3

_Tenha certeza que você está usando a versão correta do yarn_

> Não está habilitado ou permitido usar a versão 3 do yarn

```bash
$ yarn --version # to display the current yarn version
```

_Para instalar as dependências do node, configuradas no projeto,
basta você estar na pasta do projeto e executar o comando do yarn
para instalar as depedências do node configurada no `package.json`,
através do seguinte comando:_

```bash
$ yarn # to install the lock dependencies at yarn
```

**iOS:**

_Se você estiver no MacOS, você precisará instalar as dependências
do iOS através do cocoapods, então tenha certeza que você tem instalado
corretamente a versão 1.8+ do cocoapods localmente:_

```bash
$ pod --version # to display the current cocoapods version
```

_Para instalar as dependências do iOS com o cocoapods, basta você
entrar na pasta do `ios` no projeto e executar o comando do cocoapods
para instalar dependencias através do seguinte comando:_

```bash
$ cd ios/ # to open the iOS project directory
$ pod install # to display the current cocoapods version
```

- React Native Debugger: 

```bash
$ yarn open:debugger  # to open the react-native-debugger
```

- Toda a estrutura básica necessária para o projeto 
está na pasta `/src`:

> Não crie novos arquivos, use a mesma estrutura proposta, caso
contrário, pode afetar sua nota do desafio

```unicode
.
├── src/
|   ├── App.js # Componente responsável por renderizar a aplicação
|   ├── config.js # Arquivo com variáveis de configuração de ambiente
|   └── Recipes.js # Componente responsável por renderizar a listagem de receitas
|   └── useRecipes.js # Hook usado para extrair a lista de receitas à serem renderizadas
```

- O código que você precisará alterar estão nos seguintes
arquivos:

> _**Não altere o valor da propriedade `testID` usada nos componentes, isso
pode afetar sua nota de desempenho do desafio**_

- `Recipes.js`: Lista de receitas
- `useRecipes.js`: Lógica de extração das receitas

- Você pode usar os testes pra lhe auxiliar no desenvolvimento
do desafio, e garantir que suas correções tiveram o efeito esperado:

**Rodando todos os testes:**

> Usando este modo, todos os testes serão executados todos de uma vez, um por um

```bash
$ yarn test # or npm test
```

**Rodando os testes em desenvolvimento:**

> Usando este modo, os testes serão re-executados a cada mudança feita
no código

```bash
$ yarn test:watch # or npm run test:watch
```

- Para iniciar o packager para desenvolvimento com metro bundler: 

```bash
$ yarn start # or npm start
```

_Se você querer abrir por padrão o react native debugger,
execute o seguinte comando:_

```bash
$ REACT_DEBUGGER="yarn open:debugger" yarn start 
```

**Windows:**

```bash
$ set REACT_DEBUGGER="yarn open:debugger" && yarn start 
```

- Para buildar e testar a aplicação:

**iOS:**

```bash
$ yarn react-native run-ios
```

_Se você querer rodar em um modelo especifico no simulador,
execute o seguinte comando:_

```bash
$ yarn react-native run-ios --simulator "iPhone 7"
```

_Se você estiver usando um aparelho fisico iOS,
você precisará instalar o pacote `ios-deploy` no projeto,
através do seguinte comando:_

```bash
$ yarn -D ios-deploy
```

_E então, para instalar e abrir o aplicaitovo no dispositivo
fisico, basta executar o seguinte comando:_

```bash
$ yarn react-native run-ios --device "$NOME_DO_DISPOSITIVO"
```

**Android:**

```bash
$ yarn react-native run-android
```

_Se você estiver usando um aparelho fisico android,
execute o seguinte comando:_

```bash
$ yarn android:ports
```
