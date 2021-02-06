// 네이버 스마트에디터
function getNaverEditorText() {
  var iframeId = document.getElementsByTagName("iframe")[0].id
  var iframe = document.getElementById(iframeId)
  var iframeDocument = iframe.contentDocument
  var article = iframeDocument.getElementsByTagName("article")
  // 0번째는 제목 영역
  // 1번째가 본문 영역
  var bodyId = article[0].children[1].id
  var editorBody = iframeDocument.getElementById(bodyId)

  return editorBody.innerText
}

// 티스토리 KEditor
function getTistoryEditorText() {
  var iframeId = document.getElementsByTagName("iframe")[0].id
  var iframe = document.getElementById(iframeId)
  var iframeDocument = iframe.contentDocument
  var editorBody = iframeDocument.getElementById("tinymce")

  return editorBody.innerText
}

function getEditorType() {
  var url = document.URL
  // 네이버
  var naverPattern = "(https://blog.naver.com).*(Redirect=(Write|Update))"
  var naverRegex = new RegExp(naverPattern)
  // 티스토리
  var tistoryPattern = "(tistory.com/manage/newpost).*(type=post)"
  var tistoryRegex = new RegExp(tistoryPattern)

  if (naverRegex.test(url)) {
    return "N"
  } else if (tistoryRegex.test(url)) {
    return "T"
  } else {
    return null
  }
}

function getEditorText(type) {
  if (type == "N") {
    return getNaverEditorText()
  } else if (type == "T") {
    return getTistoryEditorText()
  } else {
    return null
  }
}
