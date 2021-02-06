// 티스토리 에디터에 있는 모든 텍스트의 길이를 가져온다

// 크롬 확장의 기능에서 tabs 와 관련된 기능
// 컨텐트 페이지를 대상으로 아래와 같은 코드를 실행한다
chrome.tabs.executeScript(
  {
    code:
      'var iframeId = document.getElementsByTagName("iframe")[0].id;var iframe = document.getElementById(iframeId);var iframeDocument = iframe.contentDocument;var editorBody = iframeDocument.getElementById("tinymce");editorBody.innerText;',
  },
  // 위의 코드가 실행 된 결과를 추출
  function (result) {
    var editorInnerText = result[0]
    var result
    if (editorInnerText == null || editorInnerText == "undefined") {
      result =
        "현재 티스토리의 KEditor(기본모드) 에서만 집계 기능을 지원합니다."
    } else {
      var length = editorInnerText.length
      // id 값이 result 인 태그에 결과를 추가한다.
      result = "현재 글자수 : " + length
    }

    document.querySelector("#result").innerText = result
  }
)
