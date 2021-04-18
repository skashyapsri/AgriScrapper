chrome.webNavigation.onCompleted.addListener(
  function (details) {
    localStorage.setItem("month", 0);
    localStorage.setItem("year", 2007);
    localStorage.setItem("data", []);
    chrome.tabs.executeScript(details.tabId, {
      file: "inject.js",
    });
  },
  {
    url: [
      {
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: ".krishimaratavahini.",
      },
    ],
  }
);
