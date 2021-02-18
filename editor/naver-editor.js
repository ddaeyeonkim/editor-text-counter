// 네이버 스마트에디터
function getEditorInfo() {
  var iframeId = document.getElementsByTagName("iframe")[0].id
  var iframe = document.getElementById(iframeId)
  var iframeDocument = iframe.contentDocument
  var article = iframeDocument.getElementsByTagName("article")
  // 0번째는 제목 영역
  // 1번째가 본문 영역
  var bodyId = article[0].children[1].id
  var editorBody = iframeDocument.getElementById(bodyId)

  return {
    name: "네이버",
    imgName: 'naver.svg',
    text: editorBody.innerText,
  }
}
