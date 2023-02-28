

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1560548",
  key: "16489bfebf2112e5b975",
  secret: "f312be0dc8f7f94142d6",
  cluster: "eu",
  useTLS: true
});

console.log("server.js being called")

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

