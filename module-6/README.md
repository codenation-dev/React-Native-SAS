# Componentes e estilos React Native

> Leia atentamente as instruções abaixo, pois elas te
levarão a encontrar a resolução esperada para o desafio

Tópicos
---

Com esse desafio, você aprenderá:

- À mostrar código QR via svg com `react-native-qrcode-svg` e `react-native-svg`
- À usar a camera do celular do dispositivo para ler código QR e extrair as informações
do código para mostrar na tela usando `react-native-qrcode-scanner` e `react-native-camera`

Requisitos
---

Este projeto é um aplicativo usado para integrar novos integrantes no
programa #AceleraDev de React Native, através dos primeiros que eles
precisam realizar antes de iniciar as aulas, e após a conclusão dos passos,
promover a interação com integrações estes os mesmos. As informações estão
necessário no momento, estão todas em arquivos JSON de forma estática.

Porém, os fluxos de interação após a realização dos desafios, ainda precisam ser
melhorados. Dessa forma, o objetivo deste desafio, é utilizar códigos QR para promover
interações entre os participantes do programa, através da geração de um código QR para
cada integrante da plataforma e de um leitor de códigos QR, para ler o conteúdo destes
códigos, que contém as informações pessoais públicas do integrante, para promover de maneira
simples e fácil, o acesso as redes sociais do integrante.

### Tarefas

- [ ] Mostrar código QR com informações públicas do usuário na tela inicial do
aplicativo, conforme imagem abaixo:

- **As informações à serem adicionadas no código QR, devem ser:
nome, imagem, link do linkedin, link do github, usuário da codenation**

![Tarefa 1](.docs/task-1.png)

- [ ] Habilitar o compartilhamento da imagem do código QR com outros aplicativos,
através de botão na tela inicial, aonde o código QR é mostrado, conforme imagem abaixo:

![Tarefa 2](.docs/task-2.gif)

**DICAS:**

- usar o hook `useRef` do React na propriedade `getRef` do
[react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg#props) para
conseguir gerar uma imagem PNG do código QR
- usar a API `Share` do React Native para o compartilhamento da imagem PNG gerada através
do [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg)

- [ ] Permitir que códigos QR sejam lidos através de uma tela de leitor de
códigos QR, que pode ser aberta somente à partir da tela inicial, através de
um botão, conforme imagem abaixo:

- **Deve ser mostrado um marcador de enquadramento do código na camera do dispositivo, na tela
de leitor de códigos QR**

![Tarefa 3](.docs/task-3.gif)

- [ ] Permitir que a tela de leitor de códigos QR, possa ser fechada pelo aplicativo, conforme
imagem abaixo:

![Tarefa 4](.docs/task-4.gif)

- [ ] Ao ler um código na tela de leitor de códigos QR, deve-se mostrar uma pré-visualização dos
dados do usuário vinculado ao código, à fins de confirmação, conforme imagem abaixo: 

- **Deve ser possível limpar o usuário escaneado através de um botão na tela de leitura de código QR**
- **Deve ser possível ler outro código QR sem que necessariamente, seja limpa uma leitura já feita de um código**

![Tarefa 5](.docs/task-5.gif)

- [ ] Confirmar o usuário do código QR escaneado, através de botão de confirmação na tela
de leitura de códigos QR, que ao ser confirmado, deve-se mostrar a visualização completa dos dados de
perfil do usuário escaneado, inclusive com os links das redes sociais profissionais do usuário, conforme
imagem abaixo: 

- **Deve ser possível voltar ao estado de leitura de códigos QR novamente, através de botão na tela de confirmação**
- **Ao voltar da tela de confirmação, para a tela de leitura de códigos QR, a leitura anterior deve estar limpa também**

![Tarefa 6](.docs/task-6.gif)

- [ ] Abrir links das redes sociais LinkedIn e GitHub do perfil do usuário escaneado confirmado, confirme imagem abaixo:

![Tarefa 7](.docs/task-7.gif)

**DICAS:**

- usar API do `Linking` do React Native para abrir links

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
|   └── onboarding.json # Arquivo JSON estático com os passos e instruções do programa, à serem mostrados no app
|   ├── assets/ # Pasta de conteúdos de representação estáticas, como imagens
|   ├── components/ # Todos componentes reutilizáveis da aplicação 
|       └── Steps/ # Passos a serem completados, correspondentes ao fluxo uni-direcional de passos no onboarding
|       └── Step/ # Passo atual correspondente a ser completado no onboarding
|       └── ForwardStep/ # Botão responsável por avançar os passos
|       └── StepTitle/ # Titulo de um passo passo a ser completado no onboarding
|       └── StepDescription/ # Descrição de um passo a ser completado no onboarding
|   ├── router/ # Estrutura de routers da aplicação
|       └── AppRouter # Router principal responsável por renderizar toda a estrutura de navegação
|       └── routes # Nomes das rotas usados para identificar unicamente cada rota
|       └── routers/ # Routers separados por contexto de navegação
|           └── OnboardingRouter # Router responsável por gerenciar as rotas de onboarding do usuario ao programa AceleraDev
|   ├── screens/ # Todas as telas renderizadas pelos routers
|       └── LoookStep/ # Tela responsável pelo fluxo de passos do usuario
|       └── Welcome/ # Tela de boas vindas ao aplicativo e ao fluxo de onboarding
|       └── Home/ # Tela inicial do aplicativo depois que os passos do onboarding estão concluídos
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
