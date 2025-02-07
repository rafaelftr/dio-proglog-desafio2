# Calculadora de Partidas Rankeadas

Este é um programa simples em **Node.js** que classifica o nível de um herói com base no saldo de vitórias.

## Como Funciona

O programa solicita ao usuário:
1. O nome do herói.
2. O número de vitórias.
3. O número de derrotas.

Com base nesses dados, calcula o saldo de vitórias e determina o nível do herói de acordo com a seguinte classificação:

- **Ferro**: 10 vitórias ou menos
- **Bronze**: 11 a 20 vitórias
- **Prata**: 21 a 50 vitórias
- **Ouro**: 51 a 80 vitórias
- **Diamante**: 81 a 90 vitórias
- **Lendário**: 91 a 100 vitórias
- **Imortal**: mais de 100 vitórias

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- Módulo `readline` para entrada de dados do usuário via terminal

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório ou baixe o arquivo do código-fonte.
3. No terminal, navegue até o diretório do projeto.
4. Execute o seguinte comando:
   ```sh
   node calculadoraPartidasRankeadas.js
   ```
5. Insira os dados solicitados no terminal.

## Exemplo de Uso

```sh
Digite o nome do herói: GuerreiroX
Digite o número de vitórias: 55
Digite o número de derrotas: 10
O Herói de nome **GuerreiroX** tem um saldo de vitórias de **45** e está no nível de **Prata**
```

## Contribuição
Contribuições são bem-vindas! Sinta-se livre para abrir issues, propor melhorias ou enviar pull requests.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

## Autor
Desenvolvido por **Rafael Fontoura** durante a Formação de Lógica em Programação na plataforma DIO.me.
