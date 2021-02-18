// 티스토리 에디터에 있는 모든 텍스트의 길이를 가져온다

// 크롬 확장의 기능에서 tabs 와 관련된 기능
// 컨텐트 페이지를 대상으로 아래와 같은 코드를 실행한다

chrome.tabs.executeScript({ code: "getEditorInfo()" }, function (infos) {
  var info = infos[0]
  if (info == null || info == "undefined") {
    var error =
      "현재 다음 사이트의 에디터에서만 집계 기능을 지원합니다.\n" +
      "* 네이버 스마트에디터\n" +
      "* 티스토리의 KEditor(기본모드)\n" +
      "* 미디엄 에디터\n" +
      "* 벨로그 에디터\n"
    document.querySelector("#error").innerText = error
  } else {
    document.querySelector("#type").innerText = info.name

    var count = info.text.length + "자"
    document.querySelector("#result").innerText = count
    document.querySelector("#logo").src = "svg/"+info.imgName
  }
})
