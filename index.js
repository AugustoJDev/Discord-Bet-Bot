const { Client, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const client = new Client({ intents: 32767 });

const db = require('quick.db');

const express = require('express');
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

client.login("sua token aqui dentro");

client.on('ready', () => {
  console.log(`Logado em ::: ${client.user.username}`);
  console.log(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
});

client.on('messageCreate', async (message) => {

  if(message.content.startsWith('*aposta')) {

  const embedConfirm = new MessageEmbed()
    .setTitle("Confirmação de Aposta")
    .setDescription("Você confirma que deseja iniciar essa aposta?")

  const confirmBet = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('betMenu')
					.setPlaceholder('Nada Selecionado')
					.addOptions([
						{
							label: 'Fazer Aposta',
							description: 'Abrirá um canal com o adm responsável pelas apostas.',
							value: 'apostar',
						},
						{
							label: 'Cancelar Aposta',
							description: 'Irá cancelar a aposta.',
							value: 'cancelar',
						},
					]),
			);

    let channelName = `adm-${message.author.id}`;
		await message.guild.channels.create(channelName, {
        type: "text",
        permissionOverwrites: [
           {
             id: message.guild.roles.everyone,
             allow: [],
             deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
		   },
		   {
			id: message.author.id,
			allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
			deny: []
		  }
        ],
    }).then(ch => {
      ch.send({ content: `${message.author}`, embeds: [embedConfirm], components: [confirmBet] });
    });
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

  const channel = client.channels.cache.get("917073384871981097");

  const channelToDelete = await interaction.guild.channels.cache.find(channelName => channelName.name === `adm-${interaction.user.id}`);

  const modoMenu = new MessageEmbed()
    .setTitle("Quantidade de Players")
    .setDescription("Selecione a quantidade desejada, entre 1x1 ~ 6x6")
  const valorAposta = new MessageEmbed()
    .setTitle("Valor da aposta")
    .setDescription("Forneça o valor da aposta. Ex.: R$ 50")
  const platEmbed = new MessageEmbed()
    .setTitle("Plataforma da Aposta")
    .setDescription("Selecione a plataforma desejada.")
  const mdEmbed = new MessageEmbed()
    .setTitle("Quantidades de MD")
    .setDescription("Selecione a quantidade de MDs desejadas.")
  const rachaEmbed = new MessageEmbed()
    .setTitle("Aposta Rachada")
    .setDescription("Selecione a opção de aposta.")

  const modoBet = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('modoBet')
					.setPlaceholder('Nada Selecionado')
					.addOptions([
            {
							label: '1x1',
							description: 'Seta o modo para 1x1.',
							value: '1x1',
						},
						{
							label: '2x2',
							description: 'Seta o modo para 2x2.',
							value: '2x2',
						},
						{
							label: '3x3',
							description: 'Seta o modo para 3x3.',
							value: '3x3',
						},
            {
							label: '4x4',
							description: 'Seta o modo para 4x4.',
							value: '4x4',
						},
            {
							label: '5x5',
							description: 'Seta o modo para 5x5.',
							value: '5x5',
						},
            {
							label: '6x6',
							description: 'Seta o modo para 6x6.',
							value: '6x6',
						},
					]),
			);
      const plataformaBet = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('plataformaBet')
					.setPlaceholder('Nada Selecionado')
					.addOptions([
            {
							label: 'Mobile',
							description: 'Seta para apenas jogadores mobile.',
							value: 'Mobile',
						},
						{
							label: 'Emulador',
							description: 'Seta para apenas jogadores emulador.',
							value: 'Emulador',
						},
						{
							label: 'Misto',
							description: 'Seta para jogadores misto.',
							value: 'Misto',
						}
					]),
			);
      const mdBet = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('mdBet')
					.setPlaceholder('Nada Selecionado')
					.addOptions([
            {
							label: 'MD1',
							description: 'Seta para md1.',
							value: 'MD1',
						},
						{
							label: 'MD2',
							description: 'Seta para md2.',
							value: 'MD2',
						},
						{
							label: 'MD3',
							description: 'Seta para md3.',
							value: 'MD3',
						},
            {
							label: 'MD4',
							description: 'Seta para md4.',
							value: 'MD4',
						},
            {
							label: 'MD5',
							description: 'Seta para md5.',
							value: 'MD5',
						},
					]),
			);
    const rachadaBet = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('rachadaBet')
					.setPlaceholder('Nada Selecionado')
					.addOptions([
            {
							label: 'Rachada',
							description: 'Seta uma aposta rachada.',
							value: 'Sim',
						},
						{
							label: 'Único',
							description: 'Seta uma aposta com único pagador.',
							value: 'Não',
						}
					]),
			);
    const fecharBet = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('fecharBet')
					.setLabel('Fechar Canal')
					.setStyle('DANGER'),
			);

	if (interaction.customId === 'betMenu') {
		if(interaction.values[0] === 'apostar') {
      await interaction.reply({ embeds: [modoMenu], components: [modoBet] })
    }
    if(interaction.values[0] === 'cancelar') {
      await interaction.reply({ content: "Sala fechada." })
      channelToDelete.delete();
    }
	}
  if (interaction.customId === 'modoBet') {
    db.set('betInfo', { modo: interaction.values[0] });

    await interaction.reply({ embeds: [valorAposta] });

    const filter = m => m.author.id == interaction.user.id;

    interaction.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
			.then(async collected => {
				await db.push('betInfo.valor', collected.first().content)
        await interaction.followUp({ embeds: [platEmbed], components: [plataformaBet] })
			})
			.catch(collected => {
				interaction.followUp('Você não forneceu um valor no tempo estimado...');
			});
  }
  if (interaction.customId === 'plataformaBet') {
    await db.push('betInfo.plataforma', interaction.values[0])
    await interaction.reply({ embeds: [mdEmbed], components: [mdBet] })
  }
  if (interaction.customId === 'mdBet') {
    await db.push('betInfo.md', interaction.values[0])
    await interaction.reply({ embeds: [rachaEmbed], components: [rachadaBet] })
  };
  if(interaction.customId === 'rachadaBet') {
    await db.push('betInfo.racha', interaction.values[0])

    const apostaFeita = new MessageEmbed()
      .setTitle("Informações da Aposta")
      .setDescription("Veja as informações da aposta abaixo e clique na interação se quiser entrar na mesma.")
      .addFields(
		  { name: `👤 | Modo`, value: `*${db.get('betInfo.modo')}*`, inline: true },
		  { name: `💰 | Valor`, value: `*R$ ${db.get('betInfo.valor')}*`, inline: true },
		  { name: `💻 | Plataforma`, value: `*${db.get('betInfo.plataforma')}*`, inline: true },
		  { name: `🔥 | MD`, value: `*${db.get('betInfo.md')}*`, inline: true },
      { name: `🤖 | Com ADM`, value: '*Sim*', inline: true },
      { name: `✅ | Rachar Sala`, value: `*${db.get('betInfo.racha')}*`, inline: true },
	    )

    await channel.send({ embeds: [apostaFeita] }).then(async msgFinal => {
      channelToDelete.delete();
      msgFinal.react('💸');

      const filter = (reaction, user) => {
	      return ['💸'].includes(reaction.emoji.name);
      };

      let modoValor = await db.get('betInfo.modo');
        modoValor = modoValor.split('x')[0]

      let channelName = `bet-${interaction.user.id}`;
		  await interaction.guild.channels.create(channelName, {
        type: "text",
        permissionOverwrites: [
           {
             id: interaction.guild.roles.everyone,
             allow: [],
             deny: ['VIEW_CHANNEL']
		       }
      ],
     }).then(ch => {
      ch.send({ content: `${interaction.user}`, components: [fecharBet] });
    })

    const channelToBet = await interaction.guild.channels.cache.find(channelName => channelName.name === `bet-${interaction.user.id}`);

    console.log(modoValor * 2 + 1)

      msgFinal.awaitReactions({ filter, max: `${modoValor * 2 + 1}` , time: 43200000, errors: ['time'] })
	    .then(collected => {

        console.log(collected)

        collected.first().users.cache.forEach(users => {
          console.log(users.username)
          channelToBet.permissionOverwrites.edit(users.id, { VIEW_CHANNEL: true });
        })
	    });
    });
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;

  if (interaction.customId === 'fecharBet') {
    interaction.channel.delete();
  };
})
