# OneSignal Custom Tags

Este projeto foi criado para testar e demonstrar a implementação de tags customizadas utilizando a [Web SDK do OneSignal](https://documentation.onesignal.com/docs/web-sdk-reference).

## Funcionalidades

-   **Criação, remoção e leitura de tags customizadas**
-   **Integração com o DOM para ativação/desativação de tags via clique**
-   **Inicialização do OneSignal com login automático**
-   **Testes unitários automatizados com [Vitest](https://vitest.dev/)**

## Estrutura do Projeto

```
src/
  onesignal/
    index.js                # Inicialização do OneSignal e integração principal
    onesignal-signatures.js # Funções para adicionar telefone e e-mail
    onesignal-tags.js       # Funções para manipulação de tags customizadas
    *.test.js               # Testes unitários para cada módulo
```

## Como rodar localmente

1. **Instale as dependências:**

    ```sh
    npm install
    ```

2. **Rode o projeto:**

    ```sh
    npm run dev
    ```

3. **Execute os testes:**

    ```sh
    npm test
    ```

4. **Utilize os scripts JS em seu HTML:**

    - Importe os arquivos do diretório `src/onesignal/` conforme necessário.

5. **Gerar o Build:**
    ```sh
    npm run build
    ```

## Como funciona

-   O arquivo `index.js` inicializa o OneSignal, faz login automático (caso o usuário esteja logado ou haja um parâmetro `id` na URL) e ativa o sistema de tagging customizado.
-   O arquivo `onesignal-tags.js` permite adicionar/remover tags customizadas ao usuário do OneSignal e integra com elementos do DOM via atributos `data-onesignal-tag`.
-   O arquivo `onesignal-signatures.js` permite adicionar telefone e e-mail ao perfil do usuário no OneSignal.
-   Todos os módulos possuem testes unitários cobrindo os principais fluxos.

## Testes

Os testes utilizam mocks para o objeto global `OneSignal` e simulam interações com o DOM, garantindo que as funções estejam corretamente integradas e funcionando.

## Observações

-   Este projeto é apenas para fins de estudo e demonstração.
-   Certifique-se de configurar corretamente o `appId` e demais parâmetros do OneSignal para uso em produção.

---

Feito para testar a criação e manipulação de tags customizadas no OneSignal com
