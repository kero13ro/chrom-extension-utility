chrome.omnibox.onInputEntered.addListener((text) => {
  chrome.tabs.create({
    url: `https://interview.tw/search?keyword=${text}`,
  });
});
