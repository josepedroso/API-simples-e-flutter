# Instalação e configuração dos requisitos(Em construção)

## Requisitos

- Flutter 
- Node.js
- Mongodb
- Extensões no VSCode( Dart e Flutter)
- Device(Emulador, Físico ou Web) 
- Chrome(opcional)
## Node.js

### Instalação do Node.js
```Shell
sudo apt-get update
```
```Shell
sudo apt-get install node.js
```

## Mongodb

### Instalação do Mongodb
```Shell
sudo apt install -y mongodb
```
```Shell
sudo apt install mongodb --fix-missing
```
```Shell
sudo apt install mongodb-clients --fix-missing
```
## Flutter

### Instalação do Flutter

```Shell
sudo apt install snapd
```
```Shell
sudo snap install flutter --classic
```
```Shell
sudo apt install android-sdk
```

Ao executar o comando abaixo ainda terá alguns problemas mas na atual situação já suficiente para rodar o app
```Shell
flutter doctor
```

### Para executar na web
```Shell
flutter channel beta
```
```Shell
flutter upgrade
```
```Shell
flutter config --enable-web
```

Se tudo deu certo mostrará chrome e um service como device 
```Shell
flutter doctor -v
```


## VSCode
Basta pesquisar flutter e instalar a extensão 

![alt text](https://github.com/josepedroso/API-simples-e-flutter/blob/main/screens/flutter-VSCode.png)


