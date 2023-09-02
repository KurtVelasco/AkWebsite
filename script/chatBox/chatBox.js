function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatbox = document.querySelector(".chatbox");
    var message = document.createElement("div");

    message.classList.add("message", "user-message");

    var profilePic = document.createElement("img");
    profilePic.src = "https://storage.googleapis.com/sticker-prod/N1Dtgi2CatO2BM5IesCo/7.png";
    profilePic.classList.add("profile-pic");

    var messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    messageContent.textContent = userInput;

    message.appendChild(profilePic);
    message.appendChild(messageContent);

    chatbox.appendChild(message);


    var botReply = document.createElement("div");
    botReply.classList.add("message", "bot-message");

    var botProfilePic = document.createElement("img");
    botProfilePic.src = "https://img-10.stickers.cloud/packs/9a9a4142-6d07-4962-bab6-792b72833061/webp/84d520ac-1889-4140-ad7e-705697d367c5.webp";
    botProfilePic.classList.add("profile-pic");

    var botMessageContent = document.createElement("div");
    botMessageContent.classList.add("message-content");
    botMessageContent.textContent = "I'm sorry, I can't assist you at the moment.";

    botReply.appendChild(botProfilePic);
    botReply.appendChild(botMessageContent);

    chatbox.appendChild(botReply);

    chatbox.scrollTop = chatbox.scrollHeight;

    document.getElementById("user-input").value = "";
}