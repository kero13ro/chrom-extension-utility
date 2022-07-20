chrome.omnibox.onInputEntered.addListener((text) => {
  chrome.tabs.update({
    url: `https://interview.tw/search?keyword=${text}`,
  });
});
