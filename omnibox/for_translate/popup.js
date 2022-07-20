const _u = $(".unit");
const _d = $(".delete");
_d.remove();

function constructOptions() {
  $("#root").empty();

  chrome.storage.sync.get("wordsList", (data) => {
    let wordsList = data.wordsList;

    wordsList.forEach((text, index) => {
      // const node = _u.clone(true, true).text(text).appendTo("#root");

      const node = _u.clone(true, true);
      const textWrap = $("<div class='textWrap'></div>");
      textWrap.text(text).appendTo(node);
      textWrap.click(() => {
        chrome.tabs.update({
          url: `https://translate.google.com/?sl=en&tl=zh-TW&text=${text}&op=translate`,
        });
      });

      node.appendTo("#root");

      const _delete = _d.clone(true, true).appendTo(node);
      _delete.click(() => {
        wordsList.splice(index, 1);
        chrome.storage.sync.set({ wordsList });
        constructOptions();
      });
    });
  });
}

constructOptions();

// const _u = $(".unit");
// const _d = $(".delete");
// _d.remove();

// function constructOptions() {
//   $("#root").empty();

//   let wordsList = [11, 22, 33];

//   wordsList.forEach((text, index) => {
//     const node = _u.clone(true, true);
//     const textWrap = $("<div class='textWrap'></div>");
//     textWrap.text(text).appendTo(node);
//     textWrap.click(() => {
//       chrome.tabs.create({
//         url: `https://translate.google.com/?sl=en&tl=zh-TW&text=${text}&op=translate`,
//       });
//     });

//     node.appendTo("#root");
//     const _delete = _d.clone(true, true).appendTo(node);
//     _delete.click(() => {
//       wordsList.splice(index, 1);
//       chrome.storage.sync.set({ wordsList });
//       constructOptions();
//     });
//   });
// }

// constructOptions();
