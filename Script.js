const channelId = "ID"; // Replace with Target channel IDa
const authorId = "ID"; // Replace with Your user ID
const token = "Token"; // Replace with your token
const ratelimitdelay = 1000; // the rate limit delay should be increased to 2000 (2sec) if you have many messages
let mesagelimit = 10; // use values of 0-100 can try bigger numbers but it you are not deleting a ton of messages leave it as is
let batchCountvar = 10; // the amount of batches it gets so if its 1 it deletes the amount of messages in message limit and so on

// Helper function to delay execution
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const headers = {
    "Authorization": token,
    "Content-Type": "application/json",
  };

  const fetchMessages = async (channelId, limit = messagelimit, before = null) => {
    try {
      const url = `https://discord.com/api/v9/channels/${channelId}/messages?limit=${limit}${
        before ? `&before=${before}` : ""
      }`;
      const response = await fetch(url, { headers });
      if (!response.ok) {
        console.error("Failed to fetch messages", await response.text());
        return [];
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching messages:", error);
      return [];
    }
  };

  const deleteMessage = async (channelId, messageId, content) => {
    try {
      const response = await fetch(
        `https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`,
        { method: "DELETE", headers }
      );
      if (!response.ok) {
        console.error(
          `Failed to delete message (ID: ${messageId}, Content: "${content}")`,
          await response.text()
        );
        return false;
      }
      console.log(`Deleted message (ID: ${messageId}, Content: "${content}")`);
      return true;
    } catch (error) {
      console.error(`Error deleting message (ID: ${messageId}):`, error);
      return false;
    }
  };

  console.log(`Starting to delete your messages in ${batchCountvar+'x'+mesagelimit} batches...`);
  let lastMessageId = null;
  let totalDeleted = 0;
  let batchCount = 0;

  while (batchCount < batchCountvar) {
    console.log(`Fetching batch ${batchCount + 1}...`);
    const messages = await fetchMessages(channelId, mesagelimit, lastMessageId);

    if (messages.length === 0) {
      console.log("No more messages to fetch.");
      break;
    }

    // Filter messages to include only those authored by you
    const myMessages = messages.filter((message) => message.author.id === authorId);

    console.log(
      `Batch ${batchCount + 1}: Fetched ${messages.length} messages, ${myMessages.length} from you.`
    );

    for (const message of myMessages) {
      console.log(
        `Found your message: ID: ${message.id}, Content: "${message.content}"`
      );
      const success = await deleteMessage(channelId, message.id, message.content);
      if (success) {
        totalDeleted++;
      }
      await sleep(ratelimitdelay); // Delay to avoid rate-limiting
    }

    // Update lastMessageId to fetch older messages in the next iteration
    lastMessageId = messages[messages.length - 1].id;

    batchCount++;
  }

  console.log(
    `Finished processing ${batchCountvar} batches. Total messages deleted: ${totalDeleted}`
  );
})();
