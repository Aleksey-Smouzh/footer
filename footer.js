let footer = document.createElement("footer");
footer.className = "footer";
footer.style.background = "#0A0909";
footer.style.height = "180px";
footer.style.display = "flex";
footer.style.flexGrow = "0px";
footer.style.flexShrink = "0px";
footer.style.flexBasis = "auto";

console.log(footer);

let columnOneNav = document.createElement("nav");
columnOneNav.className = "columnOne_list";
columnOneNav.style.display = "flex";
columnOneNav.style.alignItems = "center";
let columnOneUl = document.createElement("ul");
columnOneUl.className = "columnOne_links";

const arrayFooterOne = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "Tiktok", href: "https://www.tiktok.com/" },
];
for (i = 0; i < arrayFooterOne.length; i++) {
  let columnOneLi = document.createElement("li");
  columnOneLi.className = "columnOne_social-lists";
  columnOneLi.style.marginBottom = "5px";

  let columnOneA = document.createElement("a");
  columnOneA.className = "columnOne_social-link";
  columnOneA.style.color = "#FFFFFF";
  columnOneA.style.fontFamily = "Fuzzy Bubbles, cursive";
  columnOneA.style.fontSize = "20px";
  columnOneA.style.textDecoration = "none";

  columnOneA.innerText = arrayFooterOne[i].name;
  columnOneA.href = arrayFooterOne[i].href;

  columnOneLi.appendChild(columnOneA);
  columnOneUl.appendChild(columnOneLi);
}
columnOneNav.appendChild(columnOneUl);
footer.appendChild(columnOneNav);
document.body.append(footer);

let columnTwoNav = document.createElement("nav");
columnTwoNav.className = "columnTwo_list";
columnTwoNav.style.display = "flex";
columnTwoNav.style.alignItems = "center";

let columnTwoUl = document.createElement("ul");
columnTwoUl.className = "columnTwo_links";

const arrayFooterTwo = [
  { name: "+78 (892) 123-45-67", href: "tel:+788921234567" },
  { name: "murzik@puchkin.be", href: "mailto:murzik@puchkin.be" },
];
for (i = 0; i < arrayFooterTwo.length; i++) {
  let columnTwoli = document.createElement("li");
  let columnTwoA = document.createElement("a");
  columnTwoA.className = "columnTwo_phone_maile-link";
  columnTwoA.style.color = "#FFFFFF";
  columnTwoA.style.fontFamily = "Fuzzy Bubbles, cursive";
  columnTwoA.style.fontSize = "20px";
  columnTwoA.style.textDecoration = "none";
  columnTwoA.innerText = arrayFooterTwo[i].name;
  columnTwoA.href = arrayFooterTwo[i].href;

  columnTwoli.appendChild(columnTwoA);
  columnTwoUl.appendChild(columnTwoli);
}
columnTwoNav.appendChild(columnTwoUl);
footer.appendChild(columnTwoNav);
