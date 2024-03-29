chrome.runtime.onMessage.addListener(
  ({ action, data }, sender, senderResponse) => {
    switch (action) {
      case "getWebInfo":
        senderResponse({
          title: document.title,
          url: window.location.href, // full url
          domain: window.location.hostname, // domain name
        });
        break;
      case "log":
        if (data) console.log("LOG", data);
        else
          chrome.storage.sync.get("notes", (data) =>
            console.log("Flash DB:", data)
          );
        break;
      case "clear":
        chrome.storage.sync.clear();
        console.log("Cleared..");
        break;
    }
  }
);
