chrome.omnibox.onInputEntered.addListener((text) => {
  chrome.tabs.create({
    url: `https://translate.google.com/?sl=en&tl=zh-CN&text=${text}&op=translate`,
  });
});
