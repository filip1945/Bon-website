
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

const naslov = document.getElementById("naslov");
const productsDiv = document.getElementById("products");

const titles = {
    mk: {
        kafe: "Кафе",
        kikiriki: "Кикирики",
        semki: "Семки и сончоглед",
        apetisani: "Апетисани",
        zrnesti: "Зрнести производи",
        suvo: "Суво овошје",
        seminja: "Семиња",
        cooking: "Cooking"
    },
    en: {
        kafe: "Coffee",
        kikiriki: "Peanuts",
        semki: "Seeds & Sunflower",
        apetisani: "Nuts & Snacks",
        zrnesti: "Grains & Legumes",
        suvo: "Dried Fruits",
        seminja: "Seeds",
        cooking: "Cooking"
    }
};

const data = {
    kafe: [
        {name:"Еспресо Kласико", en:"Espresso Classico", img:"espreso klasiko.png",color:"#9d0208"},
        {name:"Еспресо Ројал", en:"Espresso Royal", img:"espreso royal.png",color:"#1d3557"},
        {name:"Еспресо Топ 13", en:"Espresso Top 13", img:"espreso top 13.png",color:"#1b1b1b"},
        {name:"Минас кафе", en:"Minas Coffee", img:"minas.png",color:"#c1121f"},
        {name:"Класик кафе", en:"Classic Coffee", img:"classic.png",color:"#6f4e37"},
        {name:"Бон кафе 2 во 1", en:"BON Coffee 2 in 1", img:"Boncafe 2 vo 1 kutija.png",color:"#2b2d42"},
        {name:"Бон кафе 3 во 1", en:"BON Coffee 3 in 1", img:"Boncafe 3 vo 1 kutija.png",color:"#ba181b"},
        {name:"Бон кафе 3 во 1 ICE", en:"BON Coffee 3 in 1 ICE", img:"Boncaffe mockup 3 vo 1 ICE kutija.png",color:"#457b9d"}
    ],

    kikiriki: [
        {name:"Мрсена кикирика", en:"Oil-Roasted Peanuts", img:"kikiriki mrseni mockup (1).png",color:"#8d5524"},
        {name:"Солена немрсена кикирика", en:"Dry-Roasted Salted Peanuts", img:"kikiriki suvi mockup.png",color:"#7baa43"},
        {name:"Чили кикирика", en:"Chili Peanuts", img:"kikiriki chili mockup.webp",badge:"NEW",color:"#d62828"},
        {name:"Вакумирана кикирика", en:"Vacuum-Packed Peanuts", img:"vakum kikirika.png",color:"#c2a878"},
        {name:"Кикирика во лушпа", en:"Peanuts in Shell", img:"kikirika so luspa.png",color:"#a3b18a"},
        {name:"Флипс кикирика", en:"Peanut Flips", img:"flips.png",color:"#ff9a03"},
        {name:"Зачинета кикирика", en:"Seasoned Peanuts", img:"kikirika zacin.png",color:"#588157"}
    ],

    semki: [
        {name:"Бел сончоглед", en:"White Sunflower Seeds", img:"bel soncogled.webp",color:"#ccd5ae"},
        {name:"Црн сончоглед", en:"Black Sunflower Seeds", img:"crn soncogled.webp",color:"#2b2d42"},
        {name:"Шарен сончоглед", en:"Striped Sunflower Seeds", img:"saren soncogled.webp",color:"#a68a64"},
        {name:"Лупен сончоглед", en:"Hulled Sunflower Seeds", img:"lupen soncogled.png",color:"#d62828"},
        {name:"Семки од тиква", en:"Pumpkin Seeds", img:"semki.webp",color:"#bc6c25"}
    ],

    apetisani: [
        {name:"Nuts Mix", en:"Nuts Mix", img:"Nuts mockup 1 (3).png",badge:"NEW",color:"#3a5a9f"},
        {name:"Energy Mix", en:"Energy Mix", img:"Energy mockup 1 (2).png",badge:"NEW",color:"#f77f00"},
        {name:"Party Mix", en:"Party Mix", img:"Party mck 1 (3).png",badge:"NEW",color:"#d63384"},
        {name:"Бадеми", en:"Almonds", img:"bademi.png",color:"#a3b18a"},
        {name:"Индиски ореви", en:"Cashews", img:"indiski orevi.png",color:"#a3b18a"},
        {name:"Фстаци", en:"Pistachios", img:"fstaci.png",color:"#a3b18a"},
        {name:"Лешници", en:"Hazelnuts", img:"lesnici.png",color:"#a3b18a"},
        {name:"Ореви", en:"Walnuts", img:"orevi.png",color:"#a3b18a"},
        {name:"Леблебија", en:"Chickpeas", img:"leblebija.png",color:"#a3b18a"},
        {name:"Леблебија и суво грозје", en:"Chickpeas & Raisins", img:"leblebija i suvo grozje.png",color:"#a3b18a"}
    ],

    zrnesti: [
        {name:"Ориз Екстра класа", en:"Extra Class Rice", img:"Oriz ekstra.png",color:"#adb5bd"},
        {name:"Ориз Прва класа", en:"First Class Rice", img:"Oriz prva.png",color:"#6c757d"},
        {name:"Ориз Втора класа", en:"Second Class Rice", img:"Oriz vtora.png",color:"#495057"},
        {name:"Ориз Grains", en:"Grains Rice", img:"oriz grains.png",color:"#588157"},
        {name:"Грав", en:"Beans", img:"grav.png",color:"#7f5539"},
        {name:"Грав Grains", en:"Grains Beans", img:"grav grains.png",color:"#9c6644"},
        {name:"Црвена леќа", en:"Red Lentils", img:"crvena lekja.png",color:"#bc4749"},
        {name:"Зелена леќа", en:"Green Lentils", img:"zelena lekja.png",color:"#588157"},
        {name:"Пченица", en:"Wheat", img:"pcenica.png",color:"#dda15e"}
    ],

    suvo: [
        {name:"Сувa слива", en:"Dried Plums", img:"suva sliva.png",color:"#7b2cbf"},
        {name:"Сува урма", en:"Dried Dates", img:"suva urma.png",color:"#c1121f"},
        {name:"Сувa кајсија", en:"Dried Apricots", img:"suva kajsija.png",color:"#f4a261"},
        {name:"Сува смоква", en:"Dried Figs", img:"suva smokva.png",color:"#6d597a"},
        {name:"Суво грозје", en:"Raisins", img:"suvo grozje.png",color:"#e9c46a"},
        {name:"Сува брусница", en:"Dried Cranberries", img:"brusnica.png",color:"#c1121f"},
        {name:"Свежа урма", en:"Fresh Dates", img:"sveza urma.png",color:"#c1121f"}
    ],

    seminja: [
        {name:"Чиа семе", en:"Chia Seeds", img:"cia seme.png",color:"#222"},
        {name:"Ленено семе", en:"Flax Seeds", img:"leneno seme.png",color:"#8d5524"},
        {name:"Афион", en:"Poppy Seeds", img:"afion.png",color:"#3a3a3a"},
        {name:"Сусам", en:"Sesame Seeds", img:"susam.png",color:"#e9c46a"},
        {name:"Лупен непечен сончоглед", en:"Raw Hulled Sunflower Seeds", img:"lupen nepecen soncogled.png",color:"#588157"},
        {name:"Лупена непечена семка", en:"Raw Hulled Pumpkin Seeds", img:"lupena nepecena semka.png",color:"#bc6c25"}
    ],

    cooking: [
        {name:"Лебни трошки", en:"Breadcrumbs", img:"prezla.png",color:"#dda15e"},
        {name:"Густин", en:"Corn Starch", img:"gustin.png",color:"#adb5bd"},
        {name:"Шеќер во прав", en:"Powdered Sugar", img:"seker vo prav.png",color:"#dee2e6"},
        {name:"Инстант Пире", en:"Instant Mashed Potatoes", img:"pire.png",color:"#ffd166"},
        {name:"Кокос", en:"Coconut", img:"kokos.png",color:"#f1faee"},
        {name:"Палента", en:"Polenta", img:"palenta.png",color:"#ffb703"},
        {name:"Пченкарно брашно", en:"Corn Flour", img:"pcenkarno brashno.png",color:"#fcbf49"}
    ]
};

function updateCategoryLanguage(lang) {
    const selectedLanguage = lang === "en" ? "en" : "mk";

    if (titles[selectedLanguage][cat]) {
        naslov.innerHTML = `BON <span>${titles[selectedLanguage][cat]}</span>`;
        document.title = `${titles[selectedLanguage][cat]} - BON`;
    }

    document.querySelectorAll(".product").forEach(element => {
        const index = Number(element.dataset.index);
        const product = data[cat]?.[index];

        if (!product) {
            return;
        }

        const translatedName = selectedLanguage === "en" ? product.en : product.name;

        element.querySelector("h3").textContent = translatedName;
        element.querySelector("img").alt = translatedName;
        element.querySelector("button").textContent = selectedLanguage === "en" ? "Details" : "Детали";
    });
}

if (data[cat]) {
    data[cat].forEach((p, index) => {
        const el = document.createElement("div");
        el.className = "product";
        el.dataset.index = index;

        el.innerHTML = `
            ${p.badge ? `<div class="badge">${p.badge}</div>` : ""}

            <div class="color-layer"
                 style="background:${p.color || '#7baa43'}">
            </div>

            <img src="images/${p.img}" alt="${p.name}">

            <h3>${p.name}</h3>

            <button>Детали</button>
        `;

        el.querySelector("button").addEventListener("click", () => {
            window.location.href =
                `product.html?cat=${cat}&name=${encodeURIComponent(p.name)}`;
        });

        productsDiv.appendChild(el);
    });
}

document.addEventListener("languageChanged", event => {
    updateCategoryLanguage(event.detail.language);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("bonLanguage") || "mk";
    updateCategoryLanguage(savedLanguage);
});

window.addEventListener("load", () => {
    anime({
        targets: '#nav',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 900,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '#naslov',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 900,
        delay: 150,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.product',
        opacity: [0, 1],
        translateY: [25, 0],
        delay: anime.stagger(90),
        duration: 700,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '#footer',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 900,
        delay: 500,
        easing: 'easeOutExpo'
    });
});
