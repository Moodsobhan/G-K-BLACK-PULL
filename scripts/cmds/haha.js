module.exports = {
	config: {
			name: "haha",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hahaha") return message.reply("what a happy chat my owner 👇https://www.facebook.com/m.zenesha you are especially happy with him HAHA");
}
};