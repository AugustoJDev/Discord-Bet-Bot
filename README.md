# ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690) Discord Bets ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690)
Um bot de Discord feito para servidores de apostas. O mesmo criará um canal para o usuário setar as informações da aposta e após as informações configuradas, apagar o canal e enviar a mensagem em um canal específico.<BR></BR>
![](https://cdn.discordapp.com/attachments/873959321376018462/922174868517158912/unknown.png)

### 📁 Sessões
- 📚 [Dependências](#dependences)
- 📕 [Comando](#command)
- 📋 [Etapas](#phases)
  - [Confirmação](#part_1)
  - [Modo](#part_2)
  - [Valor da aposta](#part_3)
  - [Plataforma](#part_4)
  - [Melhor de](#part_5)
  - [Rachada](#part_6)
  - [Resultado](#part_7)
- 📪 [Sugestões/Bug Reports](#contact)

<a name="dependences"></a>
## 📚 Dependências
Nome | Versão | Download |
--------- | ------ | ------ |
[discord.js](https://www.npmjs.com/package/discord.js) | 13.3.1 | npm i discord.js@13.3.1 |
[express](https://www.npmjs.com/package/express) | 4.17.2 | npm i express@4.17.2 |
[quick.db](https://www.npmjs.com/package/quick.db) | 7.1.3 | npm i quick.db@7.1.3 |

<a name="command"></a>
## 📕 Comando
O comando para iniciar uma aposta foi definido como `*aposta`, então para iniciar uma aposta, use o mesmo em qualquer canal de texto. O bot criará um canal com o nome de `adm-seuID`, por exemplo:<br></br>
![](https://cdn.discordapp.com/attachments/873959321376018462/922184285866299402/unknown.png)

<a name="phases"></a>
## 📋 Etapas
<a name="part_1"></a>
### Confirmação
O bot te dará um menu para selecionar se deseja criar a aposta ou se deseja cancelar. Marque a opção de criar a aposta para iniciar.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685399-2503b789-8a29-4e54-aa30-61a417f5c2ac.png)
![](https://user-images.githubusercontent.com/88210142/146685551-676b50ff-ca44-4654-8134-3b94e997a491.png)

<a name="part_2"></a>
### Modo
Selecione o modo desejado, sendo eles entre **1x1 ~ 6x6**<br></br>
![](https://user-images.githubusercontent.com/88210142/146685425-ca75f6a2-d1dc-4a6d-81cd-84093b7ff699.png)

<a name="part_3"></a>
### Valor da Aposta
Forneça o valor da aposta desejada. Forneça apenas a quantia do dinheiro, exemplo: `50,00`.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685485-eb107cd7-76d7-4855-a780-f0e95ac4b334.png)

<a name="part_4"></a>
### Plataforma
Agora, escolha a plataforma que deseja fazer a aposta.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685615-8d511a4e-9ef5-4da1-851b-1b631d3bcd50.png)

<a name="part_5"></a>
### Melhor de
Selecione a quantidade de "melhor de" desejada para a posta.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685653-3d9a577e-e4e2-4ace-abdd-6ccac753f9f6.png)

<a name="part_6"></a>
### Rachada
Selecione se a aposta será rachada ou não.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685682-51c7d73d-3eb0-443d-b62f-50e063d99423.png)

<a name="part_7"></a>
### Resultado
O resultado será esse após a criação da partida.<br></br>
![](https://user-images.githubusercontent.com/88210142/146685708-523ad7c1-34b3-4ab2-b8a2-76b719c1f906.png)
