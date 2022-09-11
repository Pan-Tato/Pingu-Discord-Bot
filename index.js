const { Client, GatewayIntentBits, EmbedBuilder, Collection, Intents, ActivityType, ChannelType } = require('discord.js')
const { readdirSync } = require("fs");
const mongoose = require("mongoose")

const ms = require("ms")
const db = require("quick.db")

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.commands = new Collection(readdirSync("./commands").map(cmd => (cmd = require(`./commands/${cmd}`), [cmd.data.name, cmd])))
for (const event of readdirSync("./events")) client.on(event.split(".")[0], require(`./events/${event}`).bind(null))

client.on('messageCreate', async message => {
    const guild = null
    const one = ('1️⃣')
    const two = ('2️⃣')
    const three = ('3️⃣')
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setDescription('The Sharingan is what type of jutsu?')

    if (message.content.toLowerCase().includes('=loop')) {
        var interval = setInterval(function () {
            message.channel.send("@Naruto Botto#1053 m")
            console.log('Sent.')
        }, 1 * 60000)
    }


    if (message.content.toLowerCase().includes('The Sharingan is what type of jutsu?'))
        message.channel.send("Dōjutsu");
    else {
        for (var i = 0; i < message.embeds.length; i++) {
            if (message.embeds[i].description?.includes("The Sharingan is what type of jutsu?") || message.embeds[i].description?.includes("The Sharingan is what type of jutsu?")) {
                message.channel.send("Dōjutsu");
            }
            if (message.embeds[i].description?.includes("What is Narutos last name?") || message.embeds[i].description?.includes("What is Narutos last name?")) {
                message.channel.send("Uzumaki");
            }
            if (message.embeds[i].description?.includes("What is Narutos favourite food?") || message.embeds[i].description?.includes("What is Narutos favourite food?")) {
                message.channel.send("Ramen");
            }
            if (message.embeds[i].description?.includes("What characteristic weapon did Haku use?") || message.embeds[i].description?.includes("What characteristic weapon did Haku use?")) {
                message.channel.send("Senbon");
            }
            if (message.embeds[i].description?.includes("What team is Kakashi the leader of?") || message.embeds[i].description?.includes("What team is Kakashi the leader of?")) {
                message.channel.send("Team 7");
            }
            if (message.embeds[i].description?.includes("What does Tsunade have as a pet?") || message.embeds[i].description?.includes("What does Tsunade have as a pet?")) {
                message.channel.send("Pig");
            }
            if (message.embeds[i].description?.includes("Who was the third Hokage?") || message.embeds[i].description?.includes("Who was the third Hokage?")) {
                message.channel.send("Hiruzen Sarutobi");
            }
            if (message.embeds[i].description?.includes("What item does Gaara wear on his back?") || message.embeds[i].description?.includes("What item does Gaara wear on his back?")) {
                message.channel.send("Gourd");
            }
            if (message.embeds[i].description?.includes("What Jiraiya/Orochimaru/Tsunade known as?") || message.embeds[i].description?.includes("What Jiraiya/Orochimaru/Tsunade known as?")) {
                message.channel.send("The Sannin");
            }
            if (message.embeds[i].description?.includes("What is the village where Naruto lives called?") || message.embeds[i].description?.includes("What is the village where Naruto lives called?")) {
                message.channel.send("Konohagakure");
            }
            if (message.embeds[i].description?.includes("Who was The Sannins teacher?") || message.embeds[i].description?.includes("Who was The Sannins teacher?")) {
                message.channel.send("Hiruzen");
            }
            if (message.embeds[i].description?.includes("'Who are Itachi and Kisame looking for when they first arrive in Konoha together?") || message.embeds[i].description?.includes("'Who are Itachi and Kisame looking for when they first arrive in Konoha together?")) {
                message.channel.send("Naruto");
            }
            if (message.embeds[i].description?.includes("What is translation of Kage Bunshin no Jutsu?") || message.embeds[i].description?.includes("What is translation of Kage Bunshin no Jutsu?")) {
                message.channel.send("Shadow Clone Technique");
            }
            if (message.embeds[i].description?.includes("Who tricked Naruto into stealing a sacred scroll?") || message.embeds[i].description?.includes("Who tricked Naruto into stealing a sacred scroll?")) {
                message.channel.send("Mizuki");
            }
            if (message.embeds[i].description?.includes("How many ninjas from Konoha passed first chunnin exam?") || message.embeds[i].description?.includes("How many ninjas from Konoha passed first chunnin exam?")) {
                message.channel.send("One");
            }
            if (message.embeds[i].description?.includes("Who was killed by Orochimaru?") || message.embeds[i].description?.includes("Who was killed by Orochimaru?")) {
                message.channel.send("Hiruzen Sarutobi");
            }
            if (message.embeds[i].description?.includes("What weapon does Sasuke use?") || message.embeds[i].description?.includes("What weapon does Sasuke use?")) {
                message.channel.send("Katana");
            }
            if (message.embeds[i].description?.includes("What does Narutos wallet look like?") || message.embeds[i].description?.includes("What does Narutos wallet look like?")) {
                message.channel.send("Frog");
            }
            if (message.embeds[i].description?.includes("What weapon does Kankuro use?") || message.embeds[i].description?.includes("What weapon does Kankuro use?")) {
                message.channel.send("Puppet");
            }
            if (message.embeds[i].description?.includes("Who is the leader of Team 10?") || message.embeds[i].description?.includes("Who is the leader of Team 10?")) {
                message.channel.send("Asuma");
            }
            if (message.embeds[i].description?.includes("Which of Gamabuntas sons does Naruto accidentally summon during his fight against Gaara?") || message.embeds[i].description?.includes("Which of Gamabuntas sons does Naruto accidentally summon during his fight against Gaara?")) {
                message.channel.send("Gamakichi");
            }
            if (message.embeds[i].description?.includes("What weapon does Asuma use?") || message.embeds[i].description?.includes("What weapon does Asuma use?")) {
                message.channel.send("Chakra Blades");
            }
            if (message.embeds[i].description?.includes("What is Kakashi's nickname?") || message.embeds[i].description?.includes("What is Kakashi's nickname?")) {
                message.channel.send("Copy Ninja");
            }
            if (message.embeds[i].description?.includes("Who was the person that used the most swords in a single battle?") || message.embeds[i].description?.includes("Who was the person that used the most swords in a single battle?")) {
                message.channel.send("Killer Bee");
            }
            if (message.embeds[i].description?.includes("What colour is Sasuke's Susanoo?") || message.embeds[i].description?.includes("What colour is Sasuke's Susanoo?")) {
                message.channel.send("Purple");
            }
            if (message.embeds[i].description?.includes("What is the name of Ichiraku Ramen owner?") || message.embeds[i].description?.includes("What is the name of Ichiraku Ramen owner?")) {
                message.channel.send("Teuchi");
            }
            if (message.embeds[i].description?.includes("Which word means female ninja?") || message.embeds[i].description?.includes("Which word means female ninja?")) {
                message.channel.send("Kunoichi");
            }
            if (message.embeds[i].description?.includes("Who was the 9 tail's jinchuriki before Naruto?") || message.embeds[i].description?.includes("Who was the 9 tail's jinchuriki before Naruto?")) {
                message.channel.send("Kushina");
            }
            if (message.embeds[i].description?.includes("What is Kakashi's summoning jutsu?") || message.embeds[i].description?.includes("What is Kakashi's summoning jutsu?")) {
                message.channel.send("Dog");
            }
            if (message.embeds[i].description?.includes("What is Team 3 composition?") || message.embeds[i].description?.includes("What is Team 3 composition?")) {
                message.channel.send("Neji, Tenten, Lee");
            }
            if (message.embeds[i].description?.includes("What is the name of Kisame's sword?") || message.embeds[i].description?.includes("What is the name of Kisame's sword?")) {
                message.channel.send("Samehada");
            }
            if (message.embeds[i].description?.includes("Who was the first Hokage?") || message.embeds[i].description?.includes("Who was the first Hokage?")) {
                message.channel.send("Hashirama Senju");
            }
            if (message.embeds[i].description?.includes("What is Sasuke's summoning jutsu?") || message.embeds[i].description?.includes("What is Sasuke's summoning jutsu?")) {
                message.channel.send("Snake");
            }
            if (message.embeds[i].description?.includes("What is Team 10 composition?") || message.embeds[i].description?.includes("What is Team 10 composition?")) {
                message.channel.send("Shikamaru, Choji, Ino");
            }
            if (message.embeds[i].description?.includes("Who is the leader of Team 8?") || message.embeds[i].description?.includes("Who is the leader of Team 8?")) {
                message.channel.send("Kurenai");
            }
            if (message.embeds[i].description?.includes("Who is the youngest ninja to graduate from the academy?") || message.embeds[i].description?.includes("Who is the youngest ninja to graduate from the academy?")) {
                message.channel.send("Kakashi");
            }
            if (message.embeds[i].description?.includes("What is the ability of Zabuza's sword?") || message.embeds[i].description?.includes("What is the ability of Zabuza's sword?")) {
                message.channel.send("Self-repairing");
            }
            if (message.embeds[i].description?.includes("What is Naruto's summoning jutsu?") || message.embeds[i].description?.includes("What is Naruto's summoning jutsu?")) {
                message.channel.send("Toad");
            }
            if (message.embeds[i].description?.includes("Who was the second Hokage?") || message.embeds[i].description?.includes("Who was the second Hokage?")) {
                message.channel.send("Tobirama Senju");
            }
            if (message.embeds[i].description?.includes("What is Team 7 composition?") || message.embeds[i].description?.includes("What is Team 7 composition?")) {
                message.channel.send("Naruto, Sasuke, Sakura");
            }
            if (message.embeds[i].description?.includes("What is Team 8 composition?") || message.embeds[i].description?.includes("What is Team 8 composition?")) {
                message.channel.send("Hinata, Kiba, Shino");
            }
            if (message.embeds[i].description?.includes("Where does Inari live?") || message.embeds[i].description?.includes("Where does Inari live?")) {
                message.channel.send("Land of Waves");
            }
            if (message.embeds[i].description?.includes("What was the first Jutsu Naruto Mastered?") || message.embeds[i].description?.includes("What was the first Jutsu Naruto Mastered?")) {
                message.channel.send("Tsunade");
            }
            if (message.embeds[i].description?.includes("Who taught Sakura medical jutsu?") || message.embeds[i].description?.includes("Who taught Sakura medical jutsu?")) {
                message.channel.send("Tsunade");
            }
            if (message.embeds[i].description?.includes("Who was the fourth Hokage?") || message.embeds[i].description?.includes("Who was the fourth Hokage?")) {
                message.channel.send("Minato Namikaze");
            }
            if (message.embeds[i].description?.includes("Which Hokage sealed the nine-tailed fox inside Naruto?") || message.embeds[i].description?.includes("Which Hokage sealed the nine-tailed fox inside Naruto?")) {
                message.channel.send("4th Hokage");
            }
            if (message.embeds[i].description?.includes("Who gave Naruto his headband?") || message.embeds[i].description?.includes("Who gave Naruto his headband?")) {
                message.channel.send("Iruka");
            }
            if (message.embeds[i].description?.includes("Who was The Sannin's teacher?") || message.embeds[i].description?.includes("Who was The Sannin's teacher?")) {
                message.channel.send("Hiruzen");
            }
            if (message.embeds[i].description?.includes("What is Anko's favourite food?") || message.embeds[i].description?.includes("What is Anko's favourite food?")) {
                message.channel.send("Dango");
            }
            if (message.embeds[i].description?.includes("Who was the first ninja (episode-wise) to acknowledge Naruto's existence?") || message.embeds[i].description?.includes("Who was the first ninja (episode-wise) to acknowledge Naruto's existence?")) {
                message.channel.send("Iruka");
            }
            if (message.embeds[i].description?.includes("What is Team Asuma's favorite food?") || message.embeds[i].description?.includes("What is Team Asuma's favorite food?")) {
                message.channel.send("BBQ");
            }
            if (message.embeds[i].description?.includes("Why, at the start of the series, is everyone fearful of Naruto?") || message.embeds[i].description?.includes("Why, at the start of the series, is everyone fearful of Naruto?")) {
                message.channel.send("Because he is a jinchuriki");
            }
            if (message.embeds[i].description?.includes("What is Kage Bunshin no Jutsu?") || message.embeds[i].description?.includes("What is Kage Bunshin no Jutsu?")) {
                message.channel.send("technique to make clones");
            }
            if (message.embeds[i].description?.includes("Who is the leader of Team 3?") || message.embeds[i].description?.includes("Who is the leader of Team 3?")) {
                message.channel.send("Gai");
            }
            if (message.embeds[i].description?.includes("Who was team 7 looking for on their first mission?") || message.embeds[i].description?.includes("Who was team 7 looking for on their first mission?")) {
                message.channel.send("Tora");
            }
            if (message.embeds[i].description?.includes("How old was Naruto in the original Naruto?") || message.embeds[i].description?.includes("How old was Naruto in the original Naruto?")) {
                message.channel.send("12");
            }
            if (message.embeds[i].description?.includes("Who is the One-Tail jinchūriki?") || message.embeds[i].description?.includes("Who is the One-Tail jinchūriki?")) {
                message.channel.send("Gaara");
            }
            if (message.embeds[i].description?.includes("Who was the fifth Hokage?") || message.embeds[i].description?.includes("Who was the fifth Hokage?")) {
                message.channel.send("Tsunade");
            }
            if (message.embeds[i].description?.includes("How many gates did Lee open during the first Chūnin Exams?") || message.embeds[i].description?.includes("How many gates did Lee open during the first Chūnin Exams?")) {
                message.channel.send("5");
            }
            if (message.embeds[i].description?.includes("What is name of Kakashi's eye technique?") || message.embeds[i].description?.includes("What is name of Kakashi's eye technique?")) {
                message.channel.send("Sharingan");
            }
            if (message.embeds[i].description?.includes("Who is the leader of Team 7?") || message.embeds[i].description?.includes("Who is the leader of Team 7?")) {
                message.channel.send("Kakashi");
            }
            if (message.embeds[i].description?.includes("What does Gaara's tattoo mean?") || message.embeds[i].description?.includes("What does Gaara's tattoo mean?")) {
                message.channel.send("Love");
            }
            if (message.embeds[i].description?.includes("What dōjutsu does Hinata have?") || message.embeds[i].description?.includes("What dōjutsu does Hinata have?")) {
                message.channel.send("Byakugan");
            }
            if (message.embeds[i].description?.includes("Who wrote the Icha Icha Tactics?") || message.embeds[i].description?.includes("Who wrote the Icha Icha Tactics?")) {
                message.channel.send("Jiraiya");
            }
            if (message.embeds[i].description?.includes("What does 'Chidori' mean?") || message.embeds[i].description?.includes("What does 'Chidori' mean?")) {
                message.channel.send("one thousand birds");
            }
            if (message.embeds[i].description?.includes("What does Naruto's wallet look like?") || message.embeds[i].description?.includes("What does Naruto's wallet look like?")) {
                message.channel.send("Frog");
            }
            if (message.embeds[i].title?.includes("report info") || message.embeds[i].title?.includes("report info")) {

                const report = message.embeds[i].description?.toLowerCase();
                const username = message.embeds[i].title.split("'s report info")[0];
                const parsedReport = report.split('you saw a group of ')[1].split(' while wandering around the village')[0];
                console.log(parsedReport);
                const important = ['1', '2', '3', '4', '5', 'white', 'black', 'forest', 'dango', 'gate']
                const ignore = ['shop', 'by']
                setTimeout(async () => {
                    const options = parseReportOption(message.embeds[0].description);
                    let found = false;
                    let similar = 0;
                    for (let opt in options) {
                        const option = options[opt];
                        for (let word of option.split(' ')) {
                            if (parsedReport.includes(word)) {
                                if (options[0].includes(word) && options[1].includes(word) && options[2].includes(word) && !important.includes(word)) continue;
                                if (ignore.includes(word)) continue;
                                if (similar === 1 || similar === 0 || similar === 2) similar = similar + 1;
                                if (similar === 3) {
                                    found = true;
                                    let nums = { 1: '1️⃣', 2: '2️⃣', 3: '3️⃣' }
                                    await message.channel.send(`${nums[parseInt(opt) + 1]}`)
                                }
                            }
                        }
                        if (found) break;
                        similar = 0;
                    }
                }, 8000)


                function parseReportOption(string = '') {
                    const options = string.split('\n');
                    const parsed = [];
                    options.forEach(opt => {
                        parsed.push(opt.split(': ')[1]);
                    })
                    return parsed;
                }
            }
        }
    }
}
)

client.login(process.env.TOKEN).then(() => mongoose.connect(process.env.mongo_url))
//client.login(process.env.TOKEN)