# Estilos avançados e animações

> Leia atentamente as instruções abaixo, pois elas te
levarão a encontrar a resolução esperada para o desafio

Tópicos
---

Com esse desafio, você aprenderá:

- Usar estilos mais avançados da API [StyleSheet](https://reactnative.dev/docs/stylesheet)
do React Native
- Usar [styled components](https://www.styled-components.com) para criar componentes com seus
estilos diretamente ligados
- Criar animações entre componentes com Animated API do React Native
- Usar animações com o Lottie através de animações pré-existentes no 
[LottieFiles](https://lottiefiles.com/)

Requisitos
---

Este projeto é um aplicativo usado para mostrar os passos esperados
que os integrantes do programa #AceleraDev de React Native precisam
realizar antes de iniciar as aulas. Essas informações estão todas na
aplicação, de forma estática, através de um arquivo JSON no código,
que está sendo lido na aplicação, e apresentado somente os passos
à serem realizados com seus respectivos textos, porém as
funcionalidades desenvolvidas estão incompletas, pois estão
faltando algumas animações nos comportamentos da aplicação.

Então, o objetivo é que com esse desafio você consiga introduzir
novos comportamentos de animações as funcionalidades existentes.
Assim, completando as funcionalidades, através do conhecimento
adquirido de animações em React Native e das fontes de referência
da aula.

### Tarefas

- [ ] Adicionar animação de transição entre a mudança de um passo
para outro usando o efeito que arraste o passo atual para o lado
esquerdo e o proximo passo, para direita.

- [ ] Mudar o tamanho de todas as fontes usadas pelos componentes na
aplicação (os tamanhos devem diminuir 25%), através das definições do
tema usado via styled-components.

- [ ] Alterar a animação de loading usada na transição da tela inicial
do onboarding para a tela para completar os passos do onboarding
(`<Loading />`), por uma animação pronta do Lottie. 

Instruções
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

> Você deve, e pode evoluir essa estrutura da maneira que você
achar e julgar necessária para evoluir e cumprir os requisitos
esperados para o desafio, o que você não pode fazer, pois pode 
afetar sua nota, é excluir ou modificar os nomes dos componentes
que já existem.

```unicode
.
├── src/
|   └── App.js # Representação da aplicação a ser renderizada
|   └── config.js # Definições das variáveis e configurações de ambiente
|   └── styles.js Definições e configurações de estilos da aplicação
|   └── theme.js # Definições do tema de estilos da aplicação
|   └── steps.json # Arquivo JSON estático com os passos e instruções do programa, à serem mostrados no app
|   ├── assets/ # Pasta de conteúdos de representação estáticas, como imagens 
|   ├── components/ # Todos componentes reutilizáveis da aplicação 
|       └── Home/ # Tela inicial de boas vindas ao programa
|       └── LookSteps/ # Tela para completar os passos correspondentes
|       └── Header/ # Cabeçalho correspondente através da imagem
|       └── Content/ # Conteúdo de uma tela
|       └── Steps/ # Passos a serem completados, correspondentes ao fluxo uni-direcional de passos no onboarding
|       └── Step/ # Passo atual correspondente a ser completado no onboarding
|       └── ForwardStep/ # Botão responsável por avançar os passos
|       └── StepTitle/ # Titulo de um passo passo a ser completado no onboarding
|       └── StepDescription/ # Descrição de um passo a ser completado no onboarding
|       └── Loading/ # Indicação de carregamento que cobre toda a tela 
|       └── FadeIn/ # Animação de fade-in incorporada 
```

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

_Se você querer rodar o aplicativo iOS em um dispositivo fisico,
você precisará utilizar o `ios-deploy`, disponível para download
no npm, então basta executar o seguinte comando para instalar o
`ios-deploy` globalmente:_

```bash
$ npm install -g ios-deploy # to install `ios-deploy` globally to use it directly
```

_Agora, você precisa se certificar que seu dispositivo está conectado
e sincronizado corretamente com seu computador, então basta você copiar
o nome do dispositivo fisico conectado, através do seguinte comando:_

> Para ter certeza que seu dispositivo será acessado corretamente,
tenha certeza que o telefone esteja desbloqueado

```bash
$ ios-deploy --detect # to get and display the connected device
```

O resultado do comando acima, deve se parecer com a imagem abaixo:

> No caso da imagem abaixo, o nome do dispositivo é `Renato's iPhone`,
como selecionado e demarcado para facilitar a visualização

![iOS Deploy](https://i.imgur.com/j4Mn8Ob.png)

_Agora, através do nome do dispositivo que você copiou no comando à cima,
você poderá usá-lo para instalar e abrir o aplicativo neste dispositivo,
através do seguinte comando:_

```bash
$ yarn react-native run-ios --device "Renato’s iPhone"
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
