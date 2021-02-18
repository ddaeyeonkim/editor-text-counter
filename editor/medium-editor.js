// medium editor
function getEditorInfo() {
  var article = document.getElementsByTagName("article")[0]
  var editorId = article.children[0].id
  var editorBody = document.getElementById(editorId)

  return {
    name: "미디엄",
    imgName: 'medium.svg',
    text: editorBody.innerText,
  }
}
