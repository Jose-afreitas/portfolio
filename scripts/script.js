function toogleMode() {
  const html = document.documentElement
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  /*Tudo acima posso trocar pela função abaixo*/
  html.classList.toggle('light')
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //
  if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light

    img.setAttribute("src", "../assets/avatar-light.png")
    img.setAttribute("alt", 'Sem foto')

  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "../assets/avatar.png")
    img.setAttribute("alt", 'Sem foto')
  }







}