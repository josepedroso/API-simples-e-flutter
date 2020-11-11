# API-simples-e-flutter
Implementação de API simples feita com Node.js e usada em um aplicativo Flutter.

## Versão em inglês

https://github.com/josepedroso/API-simples-e-flutter/blob/main/README_EN.md

## Requisitos
(Os comandos são válidos para linux)

Neste arquivo está como instalar e configurar os requisitos, assim como quais são. 

https://github.com/josepedroso/API-simples-e-flutter/blob/main/requisitos.md

## API

- Abra um terminal na pasta backend

- Execute este comando para inicializar:

```Shell
 npm init -y
```

- Agora vamos instalar alguns pacotes necessários:

```Shell
 npm install express mongoose morgan cors faker
```

- O Mongodb:

```Shell
 sudo service mongodb start
```

- Vamos inicializar agora(manter rodando no terminal):

```Shell
 node src/index.js
```


![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-17%2020-27-00.png)

Você pode começar a brincar com a API agora

- Use no navegador http://localhost:4000/api/users/create , sera criado 5 usuários.
- Ao usar http://localhost:4000/api/users poderá ver os usuários que foram criados. 

- Ao olhar no terminal verá as requisições.  

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-29%2016-55-52.png)



## Flutter App

O backend está funcionando então bora para o App.

Crie um projeto Flutter dentro da pasta do repositório.
```Shell
 flutter create (nome)
```


- Abra o projeto no VSCode

- Apague o arquivo da pasta test

- Limpe o arquivo main.dart na pasta lib e coloque o main.dart do repositório no lugar.

Vá até pubspec.yaml e insira ***http: any*** no mesmo local da imagem 

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-11-03%2016-32-56.png)

Agora em main.dart

```Dart
 getUsers() async {
    http.Response response = await http.get(
        'http://192.168.15.12:4000/api/users'); //acesso servidor local
    data = json.decode(response.body);
    setState(() {
      usersData = data['users'];
    });
  }
```

No lugar do IP devemos trocar conforme a disponibilidade de device, assim usando o identificador do emulador ou o IP da rede(no caso de um device físico ou Flutter Web).

O IP da rede pode ser obtido com

```Shell
 ifconfig
```

Após isso eh apenas aplicar o comando no terminal(pode demorar um tempo)
 
```Shell
 Flutter run -d (nomedodevice)
```

**Prontinho!!**

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Screenshot_20201029-164146.png)


## Créditos
O código foi escrito graças o tutorial do youtuber FaztCode.

Link do video que explica de maneira mais detalhada o codigo https://www.youtube.com/watch?v=SBDI53ECgVk&list=WL&index=10&ab_channel=FaztCode


