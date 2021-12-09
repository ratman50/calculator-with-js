let btnLight = document.querySelector(".fa-sun");
let mode = document.querySelector(".container-box .box .screen .mode");
let btn = document.querySelectorAll(".btn");
let boxNumber = document.querySelector(".container-box .box .box-number");
let btnDark = document.querySelector(".fa-moon");

let box = document.querySelector(".container-box .box");
btnLight.addEventListener("click", () => {
  box.classList.add("active");
  boxNumber.classList.add("active");
  mode.classList.add("active");
  for (let key of btn) key.classList.add("active");
  document
    .querySelector(".container-box .box .screen .content .edit")
    .classList.add("active");
  document
    .querySelector(".container-box .box .screen .content .result")
    .classList.add("active");
  document.querySelector(".container-box .box .screen").classList.add("active");

  // console.log(btn.className)
});

btnDark.addEventListener("click", () => {
  box.classList.remove("active");
  boxNumber.classList.remove("active");
  mode.classList.remove("active");
  for (let key of btn) key.classList.remove("active");
  document
    .querySelector(".container-box .box .screen .content .edit")
    .classList.remove("active");
  document
    .querySelector(".container-box .box .screen .content .result")
    .classList.remove("active");
  document
    .querySelector(".container-box .box .screen")
    .classList.remove("active");
});

let btnNumber = document.querySelectorAll(".btn.number");
let result = document.querySelector(".result");
let edit = document.querySelector(".edit");
edit.innerHTML = "";
for (let key of btnNumber) {
  key.addEventListener("click", () => {
    edit.innerHTML += key.innerHTML;
    // console.log(key.textContent)
  });
}
for (let key of btn) {
  key.addEventListener("mousedown", () => {
    key.classList.add("click");
    // console.log(key.textContent)
  });
}
for (let key of btn) {
  key.addEventListener("mouseup", () => {
    key.classList.remove("click");
    // console.log(key.textContent)
  });
}
let ebt=0;
let btnClear = document.querySelector(".btn.clear");
btnClear.addEventListener("click", () => {
  edit.innerHTML = "";
  result.innerHTML = "";
});
let btnDivide = document.querySelector(".fa-divide");
btnDivide.addEventListener("click", () => {
  edit.innerHTML += "/";
});
let btnMult = document.querySelector(".fa-times");
btnMult.addEventListener("click", () => {
  edit.innerHTML += "*";
});
let btnLess = document.querySelector(".less");
btnLess.addEventListener("click", () => {
  edit.innerHTML += "-";
});
let btnPlus = document.querySelector(".fa-plus");
btnPlus.addEventListener("click", () => {
  edit.innerHTML += "+";
});
let btnRev = document.querySelector(".reverse");
btnRev.addEventListener("click", () => {
  let val = eval(edit.innerHTML);
  let resultat = 1 / val;
  if (!isFinite(resultat)) result.innerHTML = "ERREUR";
  else {
    result.innerHTML = resultat.toFixed(3);
  }
});

let btnResult = document.querySelector(".fa-equals");
let stepBack=0;

let tab = [];
btnResult.addEventListener("click", () => {
  let digitAfterDot=0;
  let val = edit.textContent;
  let res="";
  edit.innerHTML += "<br>"; //pour que les calculs se mettent apres click sur egal
  if (val.length >=1) {
    tab.push(String(edit.textContent.split("\n"))); //recuperer les operaritions en éliminant \n
    let l = tab.length;
    stepBack=l-1;
    let lst, last, lst1;
    /* 
        on verifie  la taille
        est superireur pour recuperer les opérations effectuées précédemment sur le screen
        tab prend tous les opérations faites les anciennes et les nouvelles
    */
    if (l >= 2) {
      lst = tab[l - 1];//le dernier élément
      lst1 = tab.slice(0, l - 1);//oon recopie sauf le dernier élément
      last = lst1.join("");//on transforme le tableau en chaine de caractère
      lst = lst.slice(last.length);//on supprime les calculs précédemment effectué
      tab[l - 1] = lst;//on affecte le dernier calcul ssur le dernier élément
      val = lst;//on met à jour nos donnes
    }
    res=eval(val);
    let chaine=String(res);
    let pos=chaine.indexOf(".");//rechercher la position du virgule
    if(pos>0 )
    {
      digitAfterDot=chaine.slice(pos+1).length;//le nombre de chiffre après la virgule
      if(digitAfterDot>3)//si c'est superieur à  trois on prend trois chiffres après la virgule
        digitAfterDot=3;
    }
    let resFinal=res.toFixed(digitAfterDot).slice(0,12);
    result.innerHTML =resFinal;
    edit.scrollTop+=10
  }
});

let btnModulo = document.querySelector(".modulo");
btnModulo.addEventListener("click", () => {
  edit.innerHTML += "%";
});
let btnUndo=document.querySelector(".fa-undo");
btnUndo.addEventListener("click",()=>{
  stepBack=(stepBack>0)?--stepBack:0;
  result.innerHTML=tab[stepBack]+"="+eval(tab[stepBack])
  
})