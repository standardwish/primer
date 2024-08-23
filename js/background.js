chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scrapText",
    title: "해당 사업을 추가하기",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scrapText") {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["js/contentScript.js"],
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
