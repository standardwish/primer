chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scrapText",
    title: "Scrap this text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scrapText") {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      },
      () => {
        console.log(info);
        chrome.tabs.sendMessage(tab.id, {
          type: "text-selection",
          payload: {
            message: info.selectionText,
          },
        });
      }
    );
  }
});
