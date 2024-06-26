export const setup = {
  name: "lolcover2",
  version: "40.0.3",
  permission: "Users",
  creator: "John Lester",
  description: "Make Cover Facebook style League of Legends - New",
  category: "Cover Generation",
  usages: ["[text]"],
  mainScreenshot: ["/media/lolcover2/screenshot/main.jpg"],
  screenshot: ["/media/lolcover2/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"lolcover2": setup.name}
export const execCommand = async function({api, event, key, kernel, umaru, args, Users, context}) {
  await umaru.createJournal(event);
  let text = args.join(" ");
  if(args.length === 0) text = await Users.getName(event.senderID);
  return api.sendMessage({body: context, attachment: await kernel.readStream(["lolcover2"], {key: key, text: text})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}