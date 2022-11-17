import * as dotenv from 'dotenv'
dotenv.config()

import Manbo from 'manbo'

const bot = new Manbo.Client(process.env.BOT_TOKEN as string, {
  gateway: {
    disableEvents: {
      TYPING_START: true,
    },
  },
  rest: {
    baseURL: '/api/v10',
  },
  allowedMentions: {
    everyone: false,
    roles: false,
    users: false,
  },
  restMode: true,
  messageLimit: 100,
  intents: [Manbo.Constants.Intents.all],
  defaultImageFormat: 'png',
})

bot.connect()

bot.on('messageCreate', async (message: Manbo.Message) => {
  if (message.guildID) return
  if (message.channel.type !== Manbo.Constants.ChannelTypes.DM) return
  const DMChannel = await message.author.getDMChannel()
  const msg = await DMChannel.createMessage({
    content: 'a',
  })
})

process.on('unhandledRejection', (e: Error) => {
  console.log(e)
})

process.on('uncaughtException', e => {
  console.log(e)
})
