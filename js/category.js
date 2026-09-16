const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

const naslov = document.getElementById("naslov");
const productsDiv = document.getElementById("products");


const titles = {
    kafe: "Кафе",
    kikiriki: "Кикирики",
    semki: "Семки и сончоглед",
    apetisani: "Апетисани",
    zrnesti: "Зрнести производи",
    suvo: "Суво овошје",
    seminja: "Семиња",
    cooking: "BON Cooking"
};


const data = {

    kafe: [
        {name:"Еспресо Kласико", img:"espreso klasiko.png",color:"#9d0208"},
        {name:"Еспресо Ројал", img:"espreso royal.png",color:"#1d3557"},
        {name:"Еспресо Топ 13", img:"espreso top 13.png",color:"#1b1b1b"},
        {name:"Минас кафе", img:"minas.png",color:"#c1121f"},
        {name:"Класик кафе", img:"classic.png",color:"#6f4e37"},
        {name:"Бон кафе 2 во 1", img:"Boncafe 2 vo 1 kutija.png",color:"#2b2d42"},
        {name:"Бон кафе 3 во 1", img:"Boncafe 3 vo 1 kutija.png",color:"#ba181b"},
        {name:"Бон кафе 3 во 1 ICE", img:"Boncaffe mockup 3 vo 1 ICE kutija.png",color:"#457b9d"},
    ],

    kikiriki: [
        {name:"Мрсена кикирика", img:"kikiriki mrseni mockup (1).png",color:"#8d5524"},
        {name:"Солена немрсена кикирика", img:"kikiriki suvi mockup.png",color:"#7baa43"},
        {name:"Чили кикирика", img:"kikiriki chili mockup.png",badge:"NEW",color:"#d62828"},
        {name:"Вакумирана кикирика", img:"vakum kikirika.png",color:"#c2a878"},
        {name:"Кикирика во лушпа", img:"kikirika so luspa.png",color:"#a3b18a"},
        {name:"Флипс кикирика", img:"flips.png",color:"#ff9a03"},
        {name:"Зачинета кикирика", img:"kikirika zacin.png",color:"#588157"},
    ],

    semki: [
        {name:"Бел сончоглед", img:"bel soncogled.png",color:"#ccd5ae"},
        {name:"Црн сончоглед", img:"crn soncogled.png",color:"#2b2d42"},
        {name:"Шарен сончоглед", img:"saren soncogled.png",color:"#a68a64"},
        {name:"Лупен сончоглед", img:"lupen soncogled.png",color:"#d62828"},
        {name:"Семки од тиква", img:"semki.png",color:"#bc6c25"}
    ],

    apetisani: [
        {name:"Nuts Mix", img:"Nuts mockup 1 (3).png",badge:"NEW",color:"#3a5a9f"},
        {name:"Energy Mix", img:"Energy mockup 1 (2).png",badge:"NEW",color:"#f77f00"},
        {name:"Party Mix", img:"Party mck 1 (3).png",badge:"NEW",color:"#d63384"},
        {name:"Бадеми", img:"bademi.png",color:"#a3b18a"},
        {name:"Индиски ореви", img:"indiski orevi.png",color:"#a3b18a"},
        {name:"Фстаци", img:"fstaci.png",color:"#a3b18a"},
        {name:"Лешници", img:"lesnici.png",color:"#a3b18a"},
        {name:"Ореви", img:"orevi.png",color:"#a3b18a"},
        {name:"Леблебија", img:"leblebija.png",color:"#a3b18a"},
        {name:"Леблебија и суво грозје", img:"leblebija i suvo grozje.png",color:"#a3b18a"},
    ],

    zrnesti: [
        {name:"Ориз Екстра класа", img:"Oriz ekstra.png",color:"#adb5bd"},
        {name:"Ориз Прва класа", img:"Oriz prva.png",color:"#6c757d"},
        {name:"Ориз Втора класа", img:"Oriz vtora.png",color:"#495057"},
        {name:"Ориз Grains", img:"oriz grains.png",color:"#588157"},
        {name:"Грав", img:"grav.png",color:"#7f5539"},
        {name:"Грав Grains", img:"grav grains.png",color:"#9c6644"},
        {name:"Црвена леќа", img:"crvena lekja.png",color:"#bc4749"},
        {name:"Зелена леќа", img:"zelena lekja.png",color:"#588157"},
        {name:"Пченица", img:"pcenica.png",color:"#dda15e"}
    ],

    suvo: [
        {name:"Сувa слива", img:"suva sliva.png",color:"#7b2cbf"},
        {name:"Сува урма", img:"suva urma.png",color:"#c1121f"},
        {name:"Сувa кајсија", img:"suva kajsija.png",color:"#f4a261"},
        {name:"Сува смоква", img:"suva smokva.png",color:"#6d597a"},
        {name:"Суво грозје", img:"suvo grozje.png",color:"#e9c46a"},
        {name:"Сува брусница", img:"brusnica.png",color:"#c1121f"},
        {name:"Свежа урма", img:"sveza urma.png",color:"#c1121f"},
    ],

    seminja: [
        {name:"Чиа семе", img:"cia seme.png",color:"#222"},
        {name:"Ленено семе", img:"leneno seme.png",color:"#8d5524"},
        {name:"Афион", img:"afion.png",color:"#3a3a3a"},
        {name:"Сусам", img:"susam.png",color:"#e9c46a"},
        {name:"Лупен непечен сончоглед", img:"lupen nepecen soncogled.png",color:"#588157"},
        {name:"Лупена непечена семка", img:"lupena nepecena semka.png",color:"#bc6c25"}
    ],

    cooking: [
        {name:"Лебни трошки", img:"prezla.png",color:"#dda15e"},
        {name:"Густин", img:"gustin.png",color:"#adb5bd"},
        {name:"Шеќер во прав", img:"seker vo prav.png",color:"#dee2e6"},
        {name:"Инстант Пире", img:"pire.png",color:"#ffd166"},
        {name:"Кокос", img:"kokos.png",color:"#f1faee"},
        {name:"Палента", img:"palenta.png",color:"#ffb703"},
        {name:"Пченкарно брашно", img:"pcenkarno brashno.png",color:"#fcbf49"},
    ]
};

/* TITLE */
if(titles[cat]){
    naslov.innerHTML = `BON <span>${titles[cat]}</span>`;
    document.title = titles[cat] + " - BON";
}

/* GENERATE PRODUCTS */
if(data[cat]){

    data[cat].forEach(p => {

        const el = document.createElement("div");
        el.className = "product";

        el.innerHTML = `

            ${p.badge ? `<div class="badge">${p.badge}</div>` : ""}

            <div class="color-layer"
            style="background:${p.color || '#7baa43'}">
            </div>

            <img src="images/${p.img}" alt="${p.name}">

            <h3>${p.name}</h3>

            <button>
                Детали
            </button>

        `;


        el.querySelector("button").addEventListener("click", () => {

            window.location.href =
                `product.html?cat=${cat}&name=${encodeURIComponent(p.name)}`;

        });

        productsDiv.appendChild(el);

    });

}

/* ANIMATIONS */

window.addEventListener("load", () => {

    anime({
        targets:'#nav',
        opacity:[0,1],
        translateY:[-20,0],
        duration:900,
        easing:'easeOutExpo'
    });

    anime({
        targets:'#naslov',
        opacity:[0,1],
        translateY:[15,0],
        duration:900,
        delay:150,
        easing:'easeOutExpo'
    });

    anime({
        targets:'.product',
        opacity:[0,1],
        translateY:[25,0],
        delay:anime.stagger(90),
        duration:700,
        easing:'easeOutExpo'
    });

    anime({
        targets:'#footer',
        opacity:[0,1],
        translateY:[30,0],
        duration:900,
        delay:500,
        easing:'easeOutExpo'
    });

});
