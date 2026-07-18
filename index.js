require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Đăng nhập: ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const args = message.content.split(" ");
  const cmd = args[0].toLowerCase();

  // Ping
  if (cmd === "!ping") {
    return message.reply("🏓 Pong!");
  }

  // Avatar
  if (cmd === "!avatar") {
    return message.reply(message.author.displayAvatarURL({ size: 1024 }));
  }

  // Menu
  if (cmd === "!menu") {
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("📜 MENU BOT")
      .setDescription("Danh sách lệnh hiện có")
      .addFields(
        { name: "🏓 !ping", value: "Kiểm tra bot", inline: false },
        { name: "🖼 !avatar", value: "Xem avatar", inline: false },
        { name: "📋 !menu", value: "Hiển thị menu", inline: false }
      )
      .setFooter({ text: "Menu Bot v1.0" })
      .setTimestamp();

    return message.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
