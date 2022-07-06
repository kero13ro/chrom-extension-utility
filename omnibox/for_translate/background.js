chrome.omnibox.onInputEntered.addListener(async (text) => {
  chrome.tabs.update({
    url: `https://translate.google.com/?sl=en&tl=zh-CN&text=${text}&op=translate`,
  });
  chrome.storage.sync.get("wordsList", (data) => {
    const wordsList = data.wordsList || [];

    chrome.storage.sync.set({ wordsList: [...wordsList, text] }, function () {
      console.log("Value is set to " + text);
    });
  });
});
