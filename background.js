chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-feature") {
    // console.log(window);
    console.log(chrome.tabs);
    // let url = tabs[0].url;

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      console.log(url);
      // use `url` here inside the callback because it's asynchronous!
    });

    // chrome.tabs.create({
    //   url: "https://translate.google.com/?sl=en&tl=zh-CN&text=simulation&op=translate",
    // });
  }
});
