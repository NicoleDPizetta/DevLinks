function toggleMode() {
  const html = document.documentElement;
  /* if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  } */
  /* Podemos fazer a condicional toda acima, ou usar o recurso toggle abaixo que já vem pronto */
  html.classList.toggle("light")

  /* pegar a imagem com óculos */
  const img = document.querySelector("#profile img")

  /* substituir a imagem */
  if(html.classList.contains("light")) {
    /* se tiver class=light, substituir para a img com óculos escuros */
    img.setAttribute("src", "./assets/Avatar-LightMode.png")
  } else {
    /* se tiver sem class=light, manter a img normal */
    img.setAttribute("src", "./assets/Avatar-DarkMode.png")
  }
}