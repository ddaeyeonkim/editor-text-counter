// 티스토리 KEditor
function getEditorInfo() {
  var iframeId = document.getElementsByTagName("iframe")[0].id
  var iframe = document.getElementById(iframeId)
  var iframeDocument = iframe.contentDocument
  var editorBody = iframeDocument.getElementById("tinymce")

  return {
    name: "티스토리",
    text: editorBody.innerText,
  }
}
