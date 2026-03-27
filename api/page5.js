export default async function handler(req, res) {
  const token = "8701915082:AAFi4g7h2CDy9xqXOGfjY8iGJNW5WrodAf4";
  const chatId = "1468507562";

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Someone visited Page 5"
    })
  });

  res.status(200).send("ok");
}
