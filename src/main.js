const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);
const hashMap = xObject || [
  { logo: "D", logoType: "text", url: "developer.mozilla.org" },
  { logo: "images/bilibili.png", logoType: "image", url: "bilibili.com" },
];

const render = () => {
  $siteList.find("li:not(.last").remove();
  hashMap.forEach((node) => {
    const $li = $(`<li>
        <a href="${node.url}">
          <div class="site">
            <div class="logo">${node.logo[0]}</div>
            <div class="link">${node.url}</div>
          </div>
        </a>
      </li>`).insertBefore($lastLi);
  });
};

render();

$(".addButton").on("click", () => {
  let url = window.prompt("请输入您要添加的网址");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);
  hashMap.push({
    logo: url[0],
    logoType: "text",
    url: url,
  });
  render();
});

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("x", string);
};
