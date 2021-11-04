const i18n = require("i18n");

module.exports = {
  name: "leave",
  cooldown: 3,
  aliases: ["quit"],
  description: i18n.__("Disconnects the Bot"),
  execute(message) {
    const { channel } = message.member.voice;
    channel.leave();
    message
    .channel
    .send(i18n.__("👋 Disconnected from channel."))
    .catch(console.error);
  }
}
