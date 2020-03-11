const nome = "silvana";
const sexo = "M";
const idade = 48;
const contribuicao = 34;

if (((sexo == "F") && (contribuicao >= 30)) || ((sexo == "M") && (contribuicao >=35))) { 
  if (((sexo == "F") && (contribuicao + idade >=85)) || ((sexo == "M") && (contribuicao + idade >= 95))) { 
    console.log(nome, ", você pode se aposentar!") 

  } else {
    console.log (nome,", você ainda não possui a soma de periodo necessária para se aposentar")
  } 
} else {
    console.log (nome,", você ainda não possui tempo de contribuição para se aposentar")
}
  // condição 1 passou, porem condição 2 não passou










/* if ((sexo == "f") && (contribuicao >= 35)) || ((sexo == "m") && (contribuicao >= 30)){ 
    if ((contribuicao + idade)){
      // condição 1 e 2 true
    console.log(contribuicao + idade)  
  } else {
    console.log("Seu tempo de contribuição ainda não atingiu o minimo necessário")
    // condição 1 passou, porém condição 2 não passou
  }
} else {
  console.log()
} */