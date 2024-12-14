---

# **DiscordDeleteMessageJS**  

A JavaScript script to delete your messages in bulk from a Discord channel or DM. This tool is especially useful if you want to clean up your own message history efficiently.  

---

## **⚠️ Disclaimer**  
This script is for **educational purposes only**. Use it responsibly and at your own risk.  
> **Note:** It may violate Discord's Terms of Service if used improperly. Proceed with caution!  

---

## **💡 Features**  
- Deletes only **your own messages** in a specified Discord channel or DM.  
- Customizable options for:  
  - **Batch size**: Control how many messages are processed at a time.  
  - **Rate limit delay**: Avoid hitting Discord’s API limits.  
- Supports large-scale deletion (e.g., 50k+ messages).  

---

## **📖 How to Use**  

1. **Open the Console:**  
   - In Discord (web version), press `Ctrl+Shift+I` or `F12` to open the Developer Tools.  
   - Go to the **Console** tab.  

2. **Modify the Script:**  
   - Replace the following placeholders in the script:  
     - `channelId`: The ID of the channel or DM where you want to delete messages.  
     - `authorId`: Your own Discord user ID.  
     - `token`: Your Discord authorization token.  

3. **Run the Script:**  
   - Copy the entire script into the console and hit `Enter`.  

4. **Watch the Magic Happen:**  
   - Messages will start deleting in batches based on your configuration.  

---

## **⚙️ Configuration Options**  
```javascript
const channelId = "ID";      // Replace with the target channel or DM ID  
const authorId = "ID";       // Replace with your Discord user ID  
const token = "Token";       // Replace with your Discord token  
const ratelimitdelay = 1000; // Delay between each deletion (in milliseconds)  
let mesagelimit = 10;        // Number of messages fetched in each batch  
let batchCountvar = 10;      // Number of batches to process  
```

---

## **🔒 Privacy Note**  
Your token and user ID are sensitive. **Do not share these with anyone**, as it can compromise your Discord account.  

---

## **📝 Example Use Case**  
"I used this script to delete all my messages sent to someone in a DM. There were over 50,000 messages, and it worked perfectly! Feel free to try it for similar scenarios."  

---

## **💻 Contributions**  
Contributions are welcome! If you improve the script or add new features, feel free to open a pull request.  

---

## **📜 License**  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## **⚠️ Final Warning**  
Use this responsibly. Any misuse is at your own risk. This tool is not endorsed by or affiliated with Discord.  

---
