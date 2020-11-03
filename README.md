# API-simples-e-flutter
Implementação de API simples feita com Node.js e usada em um aplicativo Flutter.  

## API
Deve ser executado algumas configurações para a utilização do App. Para começar instale o Node.js, ao terminar siga os seguintes passos(Obs: comandos válidos para linux).

- Abra um terminal na pasta backend

- Execute este comando para inicializar:
***npm init -y***

- Agora vamos instalar alguns pacotes necessários:
***npm install express mongoose morgan cors faker***

- Vamos inicializar agora:

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-17%2020-27-00.png)

Você pode começar a brincar com a API agora

Use no navegador http://localhost:4000/api/users/create , sera criado 5 usuários e com http://localhost:4000/api/users poderá ver os usuários criados. Ao olhar no terminal verá as requisições.  

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-29%2016-55-52.png)

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

Podemos usar o identificador do emulador ou o ip da rede(no caso de um device físico)


## Flutter App(em construção) 
O backend está funcionando então bora para o App, instale o flutter e crie um projeto.

Agora apague o arquivo na pasta test e limpe o arquivo main.dart na pasta lib e coloque o main.dart do repositório no lugar

###### Isso vai dar alguns erros e vamos corrigir eles

Vá até pubspec.yaml e insira ***http: any*** no mesmo local da imagem 

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-11-03%2016-32-56.png)



## Créditos
O código foi escrito graças o tutorial do youtuber FaztCode.

Link do video que explica de maneira mais detalhada o codigo https://www.youtube.com/watch?v=SBDI53ECgVk&list=WL&index=10&ab_channel=FaztCode


