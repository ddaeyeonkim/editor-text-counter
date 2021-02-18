// velog editor
function getEditorInfo() {
  var preview = document.getElementById("preview")
  var editorBody = preview.children[1]

  return {
    name: "벨로그",
    imgName: 'velog.svg',
    text: editorBody.innerText,
  }
}
