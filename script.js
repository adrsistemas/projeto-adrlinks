function toggleMode(){
  const html = document.documentElement
html.classList.toggle('light')

// pegar a tag imag 

const img = document.querySelector("#profile img")
const alt2 = document.getElementById("alt2")


// substituir a imagem


if (html.classList.contains('light')){
  img.setAttribute('src', './assets/avatar-light.png')
  alt2.setAttributeNS('ns', 'alt', "André Ricardo01")

} else{

  img.setAttribute("src", "./assets/avatar.png")
  alt2.setAttributeNS('ns', 'alt', "Este é O ligth Mode")
}
}

