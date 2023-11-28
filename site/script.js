const items = [
  { img: "imgs/img1.jpg", title: "خبز تورتيلا لزيزة", code: "100" },
  { img: "imgs/img2.jpg", title: "مرطبان زبدة اللوتس من لزيزة", code: "101" },
  { img: "imgs/img3.jpg", title: "مرطبان طحينة من لزيزة", code: "102" },
  { img: "imgs/img4.jpg", title: "علبة حليب مكثف ومركز من لزيزة", code: "103" },
  { img: "imgs/img5.jpg", title: "علبة مخلل خيار ملح من لزيزة", code: "104" },
  { img: "imgs/img6.jpg", title: "كرسبي كرام كلاسيك", code: "105" },
  { img: "imgs/img7.jpg", title: "شاورما كريم", code: "106" },
  { img: "imgs/img8.jpg", title: "دبابيس كريم", code: "107" },
  { img: "imgs/img9.jpg", title: "علبة بازيلاء خضراء من زادنا", code: "108" },
  {
    img: "imgs/img10.jpg",
    title: "علبة مخلل خيار بالملح من زادنا",
    code: "109",
  },
  { img: "imgs/img11.jpg", title: "علبة ذرة قطع من زادنا", code: "110" },
  {
    img: "imgs/img12.jpg",
    title: "علبة زيتون اسود بدون حب من زادنا",
    code: "111",
  },
  { img: "imgs/img13.jpg", title: "حلاوة حربي ابو عايش نصف كيلو", code: "112" },
  { img: "imgs/img14.jpg", title: "علب طحينة ابو عايش", code: "113" },
  { img: "imgs/img15.jpg", title: "بن ابو الرشيد وقية", code: "114" },
  { img: "imgs/img16.jpg", title: "علبة بن من ابو الرشيد", code: "115" },
  {
    img: "imgs/img17.jpg",
    title: "بكج حليب و لبن ولبنة من بينار",
    code: "116",
  },
  { img: "imgs/img18.jpg", title: "هاي فرش بالفراولة من بينار", code: "117" },
  {
    img: "imgs/img19.jpg",
    title: "علبة لبنة دانيا كيلو من البينار",
    code: "118",
  },
  { img: "imgs/img20.jpg", title: "حليب الجنيدي لتر", code: "119" },
  { img: "imgs/img21.jpg", title: "لبن اب بالفراولة من الجنيدي", code: "120" },
];

let showItems = document.getElementById("show-items");
items.map((item) => {
  let oneItem = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h4");
  let code = document.createElement("span");
  code.innerText = item.code;
  img.src = item.img;
  title.innerText = item.title;
  oneItem.className = "item";
  oneItem.setAttribute("key", item.code);
  oneItem.appendChild(img);
  oneItem.appendChild(title);
  oneItem.appendChild(code);
  showItems.appendChild(oneItem);
});
const fillteredItems = items.filter((item) => {
  return item.code.includes("");
});

let search = document.getElementById("search");
search.addEventListener("keyup", () => {
  let value = search.value;
  if (!/[0-9]/.test(value)) {
    document.getElementById("error-code").innerText =
      "يجب عليك ان تقوم بادخال ارقام";
    showItems.innerHTML = "";
    items.map((item) => {
      if (item.title.includes(value)) {
        let oneItem = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h4");
        let code = document.createElement("span");
        code.innerText = item.code;
        img.src = item.img;
        title.innerText = item.title;
        oneItem.className = "item";
        oneItem.appendChild(img);
        oneItem.appendChild(title);
        oneItem.appendChild(code);
        showItems.appendChild(oneItem);
      }
    });
  } else {
    document.getElementById("error-code").innerText = "";
    showItems.innerHTML = "";
    items.map((item) => {
      if (item.code.includes(value)) {
        let oneItem = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h4");
        let code = document.createElement("span");
        code.innerText = item.code;
        img.src = item.img;
        title.innerText = item.title;
        oneItem.className = "item";
        oneItem.appendChild(img);
        oneItem.appendChild(title);
        oneItem.appendChild(code);
        showItems.appendChild(oneItem);
      }
    });
  }
});
