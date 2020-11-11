# API-simples-e-flutter
Simple API implementation made with Node.js and used in a Flutter application
  
## Requisitos
(The commands are valid for linux)

This file shows how to install and configure the requirements, as well as what they are.

https://github.com/josepedroso/API-simples-e-flutter/blob/main/requisitos.md

## API

- Open a terminal in the backend folder

- Run this command to initialize:

```Shell
 npm init -y
```

- Now let's install some necessary packages

```Shell
 npm install express mongoose morgan cors faker
```

- Mongodb:

```Shell
 sudo service mongodb start
```

- Let's initialize now (keep running on the terminal):

```Shell
 node src/index.js
```


![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-17%2020-27-00.png)

You can start playing with the API now

- Use in the browser http://localhost:4000/api/users/create, 5 users will be created.
- Using http://localhost:4000/api/users you can see the users that have been created.

- When looking at the terminal you will see the requests 

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-10-29%2016-55-52.png)



## Flutter App

The backend is working, so let’s go to the App.

Create a Flutter project inside the repository folder.
```Shell
 flutter create (nome)
```


- Open the project in VSCode

- Delete the file from the test folder

- Clean the main.dart file in the lib folder and replace it with the repository's main.dart.

Go to pubspec.yaml and insert http: any as in the image below

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Captura%20de%20tela%20de%202020-11-03%2016-32-56.png)

Now in main.dart

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

Instead of the IP, we must change according to the availability of the device, thus using the emulator identifier or the network IP (in the case of a physical device or Flutter Web).

You can find your IP using the command below in the terminal.
```Shell
 ifconfig
```

After that, just apply the command to the terminal (it may take a while).
 
```Shell
 Flutter run -d (nomedodevice)
```

**Done!!**

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/Screenshot_20201029-164146.png)


## Créditos
The code was written thanks to the tutorial by FaztCode.
 
Video that explains the code in more detail 
https://www.youtube.com/watch?v=SBDI53ECgVk&list=WL&index=10&ab_channel=FaztCode



