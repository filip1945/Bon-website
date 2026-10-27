
const params = new URLSearchParams(window.location.search);

const cat = params.get("cat");
const productName = params.get("name");

const title = document.getElementById("productTitle");
const img = document.getElementById("productImg");
const opis = document.getElementById("opis");
const kopce = document.getElementById("kopce");
const pakuvanje = document.getElementById("pakuvanje");
const kalorii = document.getElementById("kalorii");
const proteini = document.getElementById("proteini");
const jaglehidrati = document.getElementById("jaglehidrati");
const masti = document.getElementById("masti");

const data = {

    kafe: [
        {
            name:"Еспресо Kласико",
            en: "Espresso Classico",
            descEn: "Traditional espresso with a rich aroma and balanced strength, crafted for lovers of classic coffee and the everyday pleasure of a perfect cup.",
            img:"espreso klasiko.png",
            color:"#9d0208",
            desc:"Еспресо Класико е традиционален еспресо вкус со богата арома и балансирана јачина. Создаден за љубителите на класичното кафе и секојдневното уживање во совршена шолја еспресо.",
            size:"1kg",
            kalorii:"250",
            proteini:"13g",
            jaglehidrati:"15g",
            masti:"14g"
        },
        {
            name:"Еспресо Ројал",
            en: "Espresso Royal",
            descEn: "A distinctive espresso blend with full flavor, creamy texture and an elegant aroma, ideal for refined coffee moments.",
            img:"espreso royal.png",
            color:"#1d3557",
            desc:"Еспресо Ројал е препознатлива мешавина со полн вкус, кремаста текстура и елегантна арома. Совршен избор за оние кои сакаат префинето кафе искуство во секој момент.",
            size:"1kg",
            kalorii:"250",
            proteini:"13g",
            jaglehidrati:"15g",
            masti:"14g"
        },
        {
            name:"Еспресо Топ 13",
            en: "Espresso Top 13",
            descEn: "An intense espresso with a bold character and rich aroma that makes an impression from the first sip, perfect for busy days and coffee enthusiasts.",
            img:"espreso top 13.png",
            color:"#1b1b1b",
            desc:"Еспресо Топ 13 е интензивно еспресо со силен карактер и богата арома што остава впечаток уште од првата голтка. Идеален избор за динамични денови и вистински љубители на кафе.",
            size:"1kg",
            kalorii:"250",
            proteini:"13g",
            jaglehidrati:"15g",
            masti:"14g"
        },
        {
            name:"Минас кафе",
            en: "Minas Coffee",
            descEn: "Premium Turkish coffee made from a carefully selected blend, offering rich flavor and an intense aroma for lovers of traditional Turkish coffee.",
            img:"minas.png",
            color:"#c1121f",
            desc:"Премиум турско кафе со внимателно одбрана мешавина за богат вкус, интензивна арома и совршено уживање во секоја шолја. Создадено за вистинските љубители на традиционалното турско кафе.",
            size:"100g | 200g | 500g | 5kg",
            kalorii:"411",
            proteini:"12g",
            jaglehidrati:"76g",
            masti:"6g"
        },
        {
            name:"Класик кафе",
            en: "Classic Coffee",
            descEn: "Traditional Turkish coffee with a familiar taste and pleasant aroma, ideal for everyday enjoyment with family and friends.",
            img:"classic.png",
            color:"#6f4e37",
            desc:"Традиционално турско кафе со препознатлив вкус и пријатна арома, идеално за секојдневно уживање и моменти поминати со семејството и пријателите.",
            size:"100g | 200g | 450g",
            kalorii:"411",
            proteini:"12g",
            jaglehidrati:"76g",
            masti:"6g"
        },
        {
            name:"Бон кафе 2 во 1",
            en: "BON Coffee 2 in 1",
            descEn: "BON 2 in 1 delivers rich coffee flavor and a smooth creamy texture without added sugar. Made with carefully selected ingredients for a more pronounced, natural taste.",
            img:"Boncafe 2 vo 1 kutija.png",
            color:"#2b2d42",
            desc:"BON 2 во 1 нуди богат и квалитетен вкус на кафе со нежна кремаста текстура, без додаден шеќер. Подготвено од внимателно избрани состојки, ова кафе е одличен избор за љубителите на поизразен и природен вкус. Совршено за утринско кафе или кратка пауза исполнета со вистинско уживање.",
            size:"1 кутија содржи 30 парчиња",
            kalorii:"512",
            proteini:"3g",
            jaglehidrati:"71g",
            masti:"22g"
        },
        {
            name:"Бон кафе 3 во 1",
            en: "BON Coffee 3 in 1",
            descEn: "BON 3 in 1 combines quality coffee, creamy texture and balanced sweetness for a quick, delicious cup with rich flavor and a pleasant aroma.",
            img:"Boncafe 3 vo 1 kutija.png",
            color:"#ba181b",
            desc:"BON 3 во 1 е совршена комбинација од квалитетно кафе, кремаста текстура и избалансирана сладост, создадена за брзо и вкусно уживање во секоја шолја. Со богат вкус и пријатна арома, ова кафе е идеален избор за секој што сака практично, но квалитетно кафе искуство во текот на денот.",
            size:"1 кутија содржи 30 парчиња",
            kalorii:"439",
            proteini:"2g",
            jaglehidrati:"83g",
            masti:"9g"
        },
        {
            name:"Бон кафе 3 во 1 ICE",
            en: "BON Coffee 3 in 1 ICE",
            descEn: "Refreshing, creamy iced coffee with rich flavor and a pleasant aroma. Easy to prepare and ideal for enjoying on warm days.",
            img:"Boncaffe mockup 3 vo 1 ICE kutija.png",
            color:"#457b9d",
            desc:"BON 3 во 1 ICE е освежително и кремасто ладно кафе со богат вкус и пријатна арома, создадено за совршено уживање во топлите денови. Благодарение на внимателно избраната комбинација од квалитетно кафе и кремаста текстура, секоја голтка нуди освежување и вистинско кафе доживување. Брзо се подготвува и е идеално за љубителите на ладно кафе.",
            size:"1 кутија содржи 30 парчиња",
            kalorii:"439",
            proteini:"2g",
            jaglehidrati:"83g",
            masti:"9g"
        }
    ],

    kikiriki: [
        {
            name:"Мрсена кикирика",
            en: "Oil-Roasted Peanuts",
            descEn: "Crunchy roasted, lightly salted peanuts with oil make a tasty, protein-rich snack. One of our earliest and best-known products, carrying a tradition of flavor.",
            img:"kikiriki mrseni mockup (1).png",
            color:"#8d5524",
            desc:"Крцкаво печени, внимателно посолени и мрсени кикирики се одличен избор за вкусна и протеинска ужина. Воедно и еден од нашите први и најпознати производи, мрсената кикирика претставува традиција и вкус кој се пренесува до ден денес.",
            size:"40g | 90g | 180g | 300g | 1kg | 5kg",
            kalorii:"629",
            proteini:"24g",
            jaglehidrati:"23g",
            masti:"48g"
        },
        {
            name:"Солена немрсена кикирика",
            en: "Dry-Roasted Salted Peanuts",
            descEn: "Crunchy, lightly salted peanuts without added roasting oil, perfect for those who want great flavor without additional fats.",
            img:"kikiriki suvi mockup.png",
            color:"#7baa43",
            desc:"Нашата немрсена кикирика претставува одличен избор за оние кои не сакаат дополнителни масти, но истовремено одличен вкус. Крцкава, здрава, лесно солена, немрсената кикирика е твојот омилен избор за здрав протеин.",
            size:"45g | 180g | 300g | 5kg",
            kalorii:"587",
            proteini:"24g",
            jaglehidrati:"21g",
            masti:"49g"
        },
        {
            name:"Чили кикирика",
            en: "Chili Peanuts",
            descEn: "Our new chili peanuts bring together crunch and a bold spicy flavor. Carefully seasoned for an exciting snack in every bite.",
            img:"kikiriki chili mockup.webp",
            color:"#d62828",
            desc:"Нашата нова chili кикирика носи совршен спој на крцкавост и пикантен вкус. Внимателно зачинета со chili зачини, оваа кикирика е создадена за сите љубители на поинтензивни и незаборавни грицки. Подготви се за вистинска експлозија на вкус во секој залак.",
            size:"25g | 60g | 150g",
            kalorii:"625",
            proteini:"24g",
            jaglehidrati:"23g",
            masti:"48g"
        },
        {
            name:"Вакумирана кикирика",
            en: "Vacuum-Packed Peanuts",
            descEn: "Roasted, salted peanuts vacuum-packed to preserve freshness, aroma and their familiar crunchy flavor for longer.",
            img:"vakum kikirika.png",
            color:"#7baa43",
            desc:"Нашата вакумирана мрсeна и солена кикирика е подготвена да ти понуди максимална свежина и препознатлив крцкав вкус. Совршено печени зрна со идеална количина сол, внимателно вакумирани за да ја задржат аромата и квалитетот подолго. Одличен избор за секоја прилика и вистинско уживање за љубителите на класичната кикирика.",
            size:"350g | 500g",
            kalorii:"411",
            proteini:"12g",
            jaglehidrati:"76g",
            masti:"6g"
        },
        {
            name:"Кикирика во лушпа",
            en: "Peanuts in Shell",
            descEn: "Carefully roasted peanuts in their shells, offering a natural aroma and satisfying crunch, perfect for sharing and snacking.",
            img:"kikirika so luspa.png",
            color:"#7baa43",
            desc:"Нашата печена кикирика во лушпа е вистински избор за љубителите на традиционалниот вкус. Внимателно печени зрна со природна арома и крцкавост, спакувани во својата лушпа за уште поголемо уживање при секој залак. Совршена за грицкање, дружење и моменти исполнети со вкус.",
            size:"120g | 350g",
            kalorii:"587",
            proteini:"24g",
            jaglehidrati:"21g",
            masti:"49g"
        },
        {
            name:"Флипс кикирика",
            en: "Peanut Flips",
            descEn: "Light, airy and crunchy peanut-flavored flips, ideal for sharing, movie nights and tasty breaks.",
            img:"flips.png",
            color:"#ff9a03",
            desc:"Нашиот flips со кикирика е крцкава и вкусна грицка создадена за вистинско уживање. Со богат вкус на кикирика и лесна, воздушеста текстура, овој flips е совршен избор за секоја прилика. Идеален за споделување, филмски вечери или едноставно кога ти се јаде нешто вкусно.",
            size:"40g | 150g | 5kg",
            kalorii:"542",
            proteini:"13g",
            jaglehidrati:"44g",
            masti:"34g"
        },
        {
            name:"Зачинета кикирика",
            en: "Seasoned Peanuts",
            descEn: "Carefully roasted peanuts coated in selected spices for an irresistible combination of crunch, aroma and rich flavor.",
            img:"kikirika zacin.png",
            color:"#7baa43",
            desc:"Нашата зачинета печена кикирика е совршен избор за сите љубители на богат и интензивен вкус. Внимателно печени зрна обложени со одбрани зачини кои создаваат неодолива комбинација од крцкавост и арома. Идеална грицка за секој момент кога сакаш нешто вкусно и поразлично.",
            size:"180g",
            kalorii:"625",
            proteini:"24g",
            jaglehidrati:"23g",
            masti:"48g"
        }
    ],

    semki: [
        {
            name:"Бел сончоглед",
            en: "White Sunflower Seeds",
            descEn: "A traditional favorite snack with a distinctive taste and crunchy texture, made from carefully selected seeds.",
            img:"bel soncogled.webp",
            color:"#ccd5ae",
            desc:"Белиот сончоглед е традиционална и омилена грицка со препознатлив вкус и крцкава текстура. Внимателно одбрани зрна, подготвени за вистинско уживање во секој момент, без разлика дали си дома, со друштво или во движење.",
            size:"35g | 120g | 5kg",
            kalorii:"390",
            proteini:"17g",
            jaglehidrati:"16g",
            masti:"3g"
        },
        {
            name:"Црн сончоглед",
            en: "Black Sunflower Seeds",
            descEn: "Quality black sunflower seeds with rich flavor and a satisfying crunch, perfect for relaxed moments and sharing.",
            img:"crn soncogled.webp",
            color:"#2b2d42",
            desc:"Црниот сончоглед носи совршен баланс помеѓу богат вкус и крцкаво уживање. Подготвен од квалитетни зрна, тој е идеален избор за опуштени моменти, добро друштво и секоја пауза исполнета со вкус.",
            size:"45g | 120g | 5kg",
            kalorii:"411",
            proteini:"12g",
            jaglehidrati:"76g",
            masti:"28"
        },
        {
            name:"Шарен сончоглед",
            en: "Striped Sunflower Seeds",
            descEn: "Crunchy, carefully selected striped sunflower seeds with a rich, recognizable flavor, perfect for social gatherings and game days.",
            img:"saren soncogled.webp",
            color:"#ccd5ae",
            desc:"Шарениот сончоглед е сè попопуларна грицка благодарение на својот богат и препознатлив вкус. Со крцкава текстура и внимателно одбрани зрна, тој е совршен избор за уживање во друштво, за време на натпревар или во секој слободен момент.",
            size:"35g | 120g | 5kg",
            kalorii:"411",
            proteini:"12g",
            jaglehidrati:"76g",
            masti:"28"
        },
        {
            name:"Лупен сончоглед",
            en: "Hulled Sunflower Seeds",
            descEn: "Convenient, ready-to-eat sunflower kernels with a rich taste and natural aroma, great for snacking, salads and everyday meals.",
            img:"lupen soncogled.png",
            color:"#d62828",
            desc:"Лупениот сончоглед е вкусна и практична грицка која станува сè попопуларна благодарение на својот богат вкус и подготвеноста за веднаш уживање. Добиен од внимателно одбрани зрна, тој нуди совршена комбинација од крцкава текстура и природна арома, без потреба од лупење. Идеален е за секојдневно грицкање, додавање во салати и оброци или како брза закуска во секое време од денот.",
            size:"45g | 100g"
        },
        {
            name:"Семки од тиква",
            en: "Pumpkin Seeds",
            descEn: "Roasted and salted pumpkin seeds with a delightful crunch and rich flavor, carefully prepared to retain their natural aroma.",
            img:"semki.webp",
            color:"#ff9a03",
            desc:"Печените и солени семки од тиква нудат совршена комбинација од крцкавост и богат вкус. Внимателно подготвени за да ја задржат природната арома, овие семки се идеален избор за вкусна грицка во секое време од денот.",
            size:"25g | 60g | 130g | 5kg",
            kalorii:"446",
            proteini:"18.5g",
            jaglehidrati:"53g",
            masti:"19g"
        }
    ],

    apetisani: [
        {
            name:"Nuts Mix",
            en: "Nuts Mix",
            descEn: "A delicious blend of roasted almonds, hazelnuts and cashews, rich in protein and natural nutrients for a satisfying snack.",
            img:"Nuts mockup 1 (3).png",
            color:"#2c56bf",
            desc:"Nuts Mix е наш нов производ – вкусна комбинација од печени бадеми, лешници и индиски ореви, создадена за љубителите на квалитетни и хранливи закуски. Богат со протеини и природни хранливи состојки, овој микс е одличен избор за здрава ужина, енергија во текот на денот и уживање без компромис во вкусот.",
            size:"90g | 1kg | 5kg",
            kalorii:"653",
            proteini:"18g",
            jaglehidrati:"19g",
            masti:"53g"
        },
        {
            name:"Energy Mix",
            en: "Energy Mix",
            descEn: "A carefully selected blend of raw almonds, cashews, hazelnuts, pumpkin seeds and raisins for natural energy and balanced flavor.",
            img:"Energy mockup 1 (2).png",
            color:"#ff9a03",
            desc:"Energy Mix е внимателно избрана комбинација од непечени бадеми, индиски ореви, лешници, семки од тиква и суво грозје, создадена за природна енергија и балансиран вкус. Богат со протеини, растителни влакна и хранливи состојки, овој микс е идеален избор за здрава ужина, активен животен стил и енергија во текот на целиот ден.",
            size:"90g",
            kalorii:"493",
            proteini:"9g",
            jaglehidrati:"47g",
            masti:"28"
        },
        {
            name:"Party Mix",
            en: "Party Mix",
            descEn: "A crunchy blend of seasoned peanuts, spicy peanuts, peanut flips and fried corn, perfect for parties, movies and gatherings.",
            img:"Party mck 1 (3).png",
            color:"#bf2c7f",
            desc:"Party Mix е совршена комбинација од зачинета кикирика, лута кикирика, флипс кикирика и пржена пченка, создадена за вистинска забава и незаборавен вкус. Со крцкава текстура и богат спој на солени и пикантни ароми, овој микс е идеален за дружења, филмски вечери, натпревари и секој момент кога ти се јаде нешто различно и вкусно.",
            size:"90g",
            kalorii:"565",
            proteini:"17g",
            jaglehidrati:"33g",
            masti:"40g"
        },
        {
            name:"Бадеми",
            en: "Almonds",
            descEn: "Roasted and salted almonds with a satisfying crunch, rich taste and protein, perfect for an active lifestyle.",
            img:"bademi.png",
            color:"#7baa43",
            desc:"Печените и солени бадеми се вкусна, крцкава и високопротеинска закуска, совршена за секој што сака баланс помеѓу одличен вкус и хранлива ужина. Внимателно печени и лесно посолени, тие се богат извор на протеини и енергија, идеални за активен животен стил и уживање во секој момент од денот.",
            size:"50g | 90g | 150g | 1kg | 5kg",
            kalorii:"677",
            proteini:"21g",
            jaglehidrati:"19g",
            masti:"50g"
        },
        {
            name:"Индиски ореви",
            en: "Cashews",
            descEn: "Delicious, nutritious cashews with a delicate crunch and rich flavor, ideal for a wholesome snack and extra energy.",
            img:"indiski orevi.png",
            color:"#7baa43",
            desc:"Индиските ореви се вкусна и хранлива закуска со нежна крцкава текстура и богат, препознатлив вкус. Богати со протеини и природни хранливи состојки, тие се одличен избор за здрава ужина, дополнителна енергија и уживање во секој залак во текот на денот.",
            size:"50g | 90g | 150g | 1kg | 5kg",
            kalorii:"574",
            proteini:"15g",
            jaglehidrati:"32g",
            masti:"46g"
        },
        {
            name:"Фстаци",
            en: "Pistachios",
            descEn: "Carefully selected pistachios with a distinctive taste, natural crunch and protein, great for everyday snacking.",
            img:"fstaci.png",
            color:"#7baa43",
            desc:"Ф’стаците се вкусна и високопротеинска закуска со препознатлив вкус и природна крцкавост. Внимателно одбрани и подготвени за уживање, тие се богат извор на енергија и хранливи состојки, совршени за здрава ужина во секој дел од денот.",
            size:"50g | 90g | 150g | 1kg | 5kg",
            kalorii:"562",
            proteini:"20g",
            jaglehidrati:"28g",
            masti:"45g"
        },
        {
            name:"Лешници",
            en: "Hazelnuts",
            descEn: "Nutritious hazelnuts with a rich natural flavor and crunchy texture, perfect for a satisfying everyday snack.",
            img:"lesnici.png",
            color:"#7baa43",
            desc:"Лешниците се вкусна и хранлива закуска со богат, природен вкус и крцкава текстура. Богати со протеини и хранливи состојки, тие се совршен избор за здрава ужина, дополнителна енергија и уживање во секој момент од денот.",
            size:"50g | 90g | 150g | 1kg | 5kg",
            kalorii:"717",
            proteini:"14g",
            jaglehidrati:"6g",
            masti:"89g"
        },
        {
            name:"Ореви",
            en: "Walnuts",
            descEn: "Ready-to-eat walnuts with a rich flavor and crunchy texture, offering a nutritious snack for any time of day.",
            img:"orevi.png",
            color:"#7baa43",
            desc:"Печените и солени ореви се внимателно извадени од јатката за полесно и практично уживање во секој залак. Со богат вкус, крцкава текстура и природно висока хранлива вредност, тие се одличен избор за здрава и високопротеинска ужина во секое време од денот.",
            size:"150g",
            kalorii:"566",
            proteini:"13g",
            jaglehidrati:"15g",
            masti:"65g"
        },
        {
            name:"Леблебија",
            en: "Chickpeas",
            descEn: "A traditional, nutritious and crunchy chickpea snack with a rich taste and natural protein.",
            img:"leblebija.png",
            color:"#7baa43",
            desc:"Леблебијата е традиционална и хранлива грицка со пријатна крцкава текстура и богат вкус. Подготвена за уживање во секој момент, таа е природен извор на протеини и одличен избор за сите што бараат вкусна и полесна ужина во текот на денот.",
            size:"300g | 1kg | 5kg",
            kalorii:"364",
            proteini:"19g",
            jaglehidrati:"61g",
            masti:"6g"
        },
        {
            name:"Леблебија и суво грозје",
            en: "Chickpeas & Raisins",
            descEn: "A delicious mix of crunchy chickpeas and sweet raisins, bringing natural energy and a satisfying balance of flavors.",
            img:"leblebija i suvo grozje.png",
            color:"#7baa43",
            desc:"Миксот од леблебија и суво грозје нуди совршен спој на крцкаст и благ вкус во една хранлива ужина. Комбинацијата од природни состојки обезбедува енергија, протеини и уживање во секој залак, правејќи го идеален избор за секојдневно грицкање и активен начин на живот.",
            size:"300g",
            kalorii:"323",
            proteini:"11g",
            jaglehidrati:"70g",
            masti:"3g"
        }
    ],

    suvo: [
        {
            name:"Сувa слива",
            en:"Dried Plums",
            descEn:"Naturally sweet dried plums with a soft texture and rich fruity flavor, carefully dried to preserve their natural nutrients and aroma.",
            img:"suva sliva.png",
            color:"#7b2cbf",
            desc:"Сувата слива е природно слатка и вкусна закуска со мека текстура и богат овошен вкус. Внимателно сушена за да ги задржи природните хранливи состојки и арома, таа е одличен избор за здрава ужина, дополнителна енергија и уживање во секој момент од денот.",
            size:"200g",
            kalorii:"240",
            proteini:"2g",
            jaglehidrati:"60g",
            masti:"0,6g"
        },
        {
            name:"Сува урма",
            en:"Dried Dates",
            descEn:"Naturally sweet and nutritious dried dates with a soft texture and rich flavor, perfect for a wholesome snack and a quick energy boost.",
            img:"suva urma.png",
            color:"#c1121f",
            desc:"Сувата урма е природно слатка и хранлива закуска со мека текстура и богат карактеристичен вкус. Богата со природна енергија и хранливи состојки, таа е совршен избор за здрава ужина, брз енергетски поттик и уживање во секој дел од денот.",
            size:"200g",
            kalorii:"282",
            proteini:"2.5g",
            jaglehidrati:"75g",
            masti:"0.4g"
        },
        {
            name:"Сувa кајсија",
            en:"Dried Apricots",
            descEn:"Premium dried apricots with natural sweetness, a rich fruity aroma and a soft texture, carefully selected and dried to preserve their nutritional qualities.",
            img:"suva kajsija.png",
            color:"#ff9a03",
            desc:"Нашата сува кајсија се одликува со врвен квалитет, природна сладост и богата овошна арома. Внимателно одбрана и сушена за да ги зачува хранливите вредности и меката текстура, таа претставува совршен избор за здрава и вкусна ужина во секој дел од денот.",
            size:"200g",
            kalorii:"241",
            proteini:"3.4g",
            jaglehidrati:"62g",
            masti:"0.5g"
        },
        {
            name:"Сува смоква",
            en:"Dried Figs",
            descEn:"Carefully selected dried figs offering premium quality, natural sweetness, a soft texture and rich fruity flavor.",
            img:"suva smokva.png",
            color:"#7baa43",
            desc:"Нашите суви смокви се внимателно одбрани за да понудат врвен квалитет, природна сладост и богат овошен вкус. Со мека текстура и хранливи состојки, тие се идеален избор за здрава ужина, природна енергија и уживање во секој залак.",
            size:"200g",
            kalorii:"249",
            proteini:"3g",
            jaglehidrati:"64g",
            masti:"1g"
        },
        {
            name:"Суво грозје",
            en:"Raisins",
            descEn:"Premium raisins with natural sweetness and a rich fruity taste, carefully packed to preserve their softness, aroma and freshness.",
            img:"suvo grozje.png",
            color:"#c1121f",
            desc:"Нашето суво грозје се одликува со врвен квалитет, природна благост и богат овошен вкус. Внимателно спакувано во свежо пакување за да ја зачува својата мекост, арома и свежина, тоа е идеален избор за здрава ужина, десерти и секојдневно уживање.",
            size:"100g",
            kalorii:"359",
            proteini:"0,3g",
            jaglehidrati:"88g",
            masti:"0,7g"
        },
        {
            name:"Сува брусница",
            en:"Dried Cranberries",
            descEn:"Premium dried cranberries with a refreshing sweet-tart taste and soft texture, ideal for snacking, desserts and salads.",
            img:"brusnica.png",
            color:"#c1121f",
            desc:"Нашата сува брусница се одликува со врвен квалитет, освежителен благо-кисел вкус и мека текстура. Внимателно спакувана во свежо пакување за да ја зачува својата арома и свежина, таа е совршен избор за здрава ужина, додаток во десерти, салати и секојдневно уживање.",
            size:"100g",
            kalorii:"359",
            proteini:"0,3g",
            jaglehidrati:"87g",
            masti:"0,7g"
        },
        {
            name:"Свежа урма",
            en:"Fresh Dates",
            descEn:"Naturally sweet, soft and juicy fresh dates, carefully selected for premium quality and packed to preserve freshness.",
            img:"sveza urma.png",
            color:"#c1121f",
            desc:"Нашите свежи урми се одликуваат со природна сладост, мек вкус и зрна со средна големина, внимателно одбрани за врвен квалитет. Спакувани за да ја задржат свежината и сочноста, тие се совршен избор за здрава ужина, природна енергија и уживање во секој залак.",
            size:"600g",
            kalorii:"277",
            proteini:"2g",
            jaglehidrati:"75g",
            masti:"0.2g"
        }
    ],

    zrnesti: [
        {
            name:"Ориз Екстра класа",
            en:"Extra Class Rice",
            descEn:"Premium Macedonian rice grown in the fertile fields of Kochani, known for carefully selected grains, excellent flavor and a perfect texture.",
            img:"Oriz ekstra.png",
            color:"#457b9d",
            desc:"Оризот Екстра Класа претставува врвен квалитет и традиција по која македонскиот ориз е препознатлив. Одгледан во плодните кочански полиња, познати како дом на најквалитетниот ориз во Македонија, овој ориз се одликува со одличен вкус, совршена текстура и внимателно одбрани зрна. Идеален е за подготовка на разновидни традиционални и модерни јадења, носејќи врвен квалитет во секој оброк.",
            size:"400g | 900g | 2kg | 4kg | 25kg",
            kalorii:"353",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"1g"
        },
        {
            name:"Ориз Прва класа",
            en:"First Class Rice",
            descEn:"Quality Macedonian rice from Kochani with carefully selected grains and excellent flavor, ideal for traditional homemade meals.",
            img:"Oriz prva.png",
            color:"#c1121f",
            desc:"Оризот Прва Класа од Кочани е квалитетен македонски ориз со внимателно одбрани зрна и одличен вкус. Одгледан во плодните кочански полиња, тој нуди одлична текстура и сигурен квалитет за секојдневна подготовка на традиционални и домашни јадења. Практичен и вкусен избор за секоја кујна.",
            size:"900g",
            kalorii:"353",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"1g"
        },
        {
            name:"Ориз Втора класа",
            en:"Second Class Rice",
            descEn:"Affordable, quality Macedonian rice from Kochani with a pleasant taste and good texture, suitable for everyday cooking.",
            img:"Oriz vtora.png",
            color:"#7baa43",
            desc:"Оризот Втора Класа од Кочани е практичен и достапен избор за секојдневна употреба, произведен од квалитетен македонски ориз од познатите кочански полиња. Со пријатен вкус и добра текстура, тој е одличен за подготовка на различни домашни јадења и рецепти, нудејќи сигурен квалитет во секој оброк.",
            size:"900g",
            kalorii:"353",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"1g"
        },
        {
            name:"Ориз Grains",
            en:"Grains Rice",
            descEn:"Medium-grain white rice, carefully selected for balanced texture and excellent flavor, ideal for side dishes and everyday recipes.",
            img:"oriz grains.png",
            color:"#457b9d",
            desc:"Ориз Grains е бел ориз со средна големина на зрната, внимателно одбран за одличен вкус и балансирана текстура. Практичен и лесен за подготовка, тој е идеален за разновидни секојдневни јадења, прилози и традиционални рецепти.",
            size:"900g",
            kalorii:"353",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"1g"
        },
        {
            name:"Грав",
            en:"Beans",
            descEn:"Carefully selected large beans with a rich natural flavor and excellent cooking texture, perfect for traditional homemade dishes.",
            img:"grav.png",
            color:"#457b9d",
            desc:"Нашиот грав се одликува со внимателно одбран квалитет, богат природен вкус и поголеми зрна кои при готвење добиваат одлична текстура и полн вкус. Подготвен да ги задоволи и највисоките стандарди во секоја кујна, тој е совршен избор за традиционални домашни јадења и уживање во секој оброк.",
            size:"400g | 900g | 10kg | 25kg",
            kalorii:"333",
            proteini:"24g",
            jaglehidrati:"59g",
            masti:"1g"
        },
        {
            name:"Грав Grains",
            en:"Grains Beans",
            descEn:"Smaller, carefully selected beans with rich homemade flavor and even cooking, ideal for everyday and traditional dishes.",
            img:"grav grains.png",
            color:"#457b9d",
            desc:"Grains гравот се одликува со помали, внимателно одбрани зрна, врвен квалитет и богат домашен вкус. Благодарение на својата одлична текстура и рамномерно варење, тој е идеален за подготовка на традиционални и секојдневни јадења. Практичен, вкусен и квалитетен избор кој носи вистинско уживање во секој оброк.",
            size:"800g | 10kg",
            kalorii:"333",
            proteini:"24g",
            jaglehidrati:"59g",
            masti:"1g"
        },
        {
            name:"Црвена леќа",
            en:"Red Lentils",
            descEn:"Nutritious red lentils with a delicate texture and rich flavor, quick to prepare and excellent for soups, stews and healthy meals.",
            img:"crvena lekja.png",
            color:"#c1121f",
            desc:"Црвената леќа е хранлив и квалитетен производ со нежна текстура и богат вкус. Брзо се подготвува и е одличен извор на протеини и растителни влакна, што ја прави совршен избор за здрави и вкусни оброци, супи, чорби и различни модерни рецепти.",
            size:"400g",
            kalorii:"353",
            proteini:"26g",
            jaglehidrati:"60g",
            masti:"1g"
        },
        {
            name:"Зелена леќа",
            en:"Green Lentils",
            descEn:"Premium green lentils with rich flavor and excellent texture, carefully packed to preserve freshness and quality.",
            img:"zelena lekja.png",
            color:"#7baa43",
            desc:"Нашата зелена леќа е внимателно одбран производ со врвен квалитет, позната по својот богат вкус и одлична текстура при подготовка. Спакувана во сигурно и практично пакување кое ја зачувува свежината и квалитетот, таа претставува идеален избор за здрави, хранливи и вкусни домашни оброци.",
            size:"400g",
            kalorii:"353",
            proteini:"26g",
            jaglehidrati:"60g",
            masti:"1g"
        },
        {
            name:"Пченица",
            en:"Wheat",
            descEn:"Carefully selected wheat grains with natural freshness and high quality, suitable for traditional recipes and nutritious meals.",
            img:"pcenica.png",
            color:"#7baa43",
            desc:"Нашата пченица е внимателно одбран производ со висок квалитет и природна свежина. Со чисти и здрави зрна, таа е одличен избор за подготовка на традиционални јадења, домашни рецепти и хранливи оброци, носејќи сигурен квалитет и богат вкус во секоја кујна.",
            size:"400g",
            kalorii:"351",
            proteini:"13g",
            jaglehidrati:"70g",
            masti:"2.1g"
        }
    ],

    seminja: [
        {
            name:"Чиа семе",
            en:"Chia Seeds",
            descEn:"Premium chia seeds, carefully selected and naturally rich in fiber, protein and energy, perfect for breakfasts, smoothies and desserts.",
            img:"cia seme.png",
            color:"#8d5524",
            desc:"Нашето чиа семе се одликува со врвен квалитет и внимателно одбрани зрна богати со природни хранливи состојки. Познато како одличен извор на растителни влакна, протеини и енергија, тоа е совршен избор за здрав појадок, смути, десерти и балансирана секојдневна исхрана.",
            size:"100g",
            kalorii:"486",
            proteini:"17g",
            jaglehidrati:"42g",
            masti:"31g"
        },
        {
            name:"Ленено семе",
            en:"Flax Seeds",
            descEn:"High-quality flax seeds, naturally rich in fiber, protein and beneficial nutrients, ideal for breakfasts, smoothies and salads.",
            img:"leneno seme.png",
            color:"#8d5524",
            desc:"Нашето ленено семе е внимателно одбран производ со висок квалитет и богата хранлива вредност. Природен извор на растителни влакна, протеини и корисни хранливи состојки, тоа е одличен избор за додавање во појадоци, смути, салати и здрави секојдневни оброци.",
            size:"100g",
            kalorii:"534",
            proteini:"18g",
            jaglehidrati:"29g",
            masti:"42g"
        },
        {
            name:"Афион",
            en:"Poppy Seeds",
            descEn:"Carefully selected poppy seeds, suitable for adding natural flavor and texture to baked goods, desserts and traditional recipes.",
            img:"afion.png",
            color:"#457b9d",
            desc:"Нашето чиа семе се одликува со врвен квалитет и внимателно одбрани зрна богати со природни хранливи состојки. Познато како одличен извор на растителни влакна, протеини и енергија, тоа е совршен избор за здрав појадок, смути, десерти и балансирана секојдневна исхрана.",
            size:"100g",
            kalorii:"525",
            proteini:"18g",
            jaglehidrati:"28g",
            masti:"41g"
        },
        {
            name:"Сусам",
            en:"Sesame Seeds",
            descEn:"Premium sesame seeds with a rich natural taste and aroma, ideal for baked goods, salads and traditional recipes.",
            img:"susam.png",
            color:"#8d5524",
            desc:"Нашиот сусам се одликува со врвен квалитет, внимателно одбрани зрна и богат, природен вкус. Богат со хранливи состојки и природна арома, тој е совршен избор за подготовка на печива, салати, традиционални јадења и разновидни здрави рецепти.",
            size:"100g | 5kg | 25kg",
            kalorii:"573",
            proteini:"18g",
            jaglehidrati:"23g",
            masti:"50g"
        },
        {
            name:"Лупен непечен сончоглед",
            en:"Raw Hulled Sunflower Seeds",
            descEn:"Carefully selected raw hulled sunflower seeds with a rich natural taste, packed to preserve freshness and nutritional value.",
            img:"lupen nepecen soncogled.png",
            color:"#8d5524",
            desc:"Нашиот лупен непечен сончоглед се одликува со најдобар квалитет, внимателно одбрани зрна и природно богат вкус. Спакуван во свежо и практично пакување кое ја зачувува неговата свежина и хранливи вредности, тој е совршен избор за здрава исхрана, салати, домашни рецепти и секојдневно уживање.",
            size:"100g",
            kalorii:"584",
            proteini:"20g",
            jaglehidrati:"20g",
            masti:"51g"
        },
        {
            name:"Лупена непечена семка",
            en:"Raw Hulled Pumpkin Seeds",
            descEn:"Premium raw hulled pumpkin seeds, carefully selected and packed to retain natural freshness, flavor and nutrients.",
            img:"lupena nepecena semka.png",
            color:"#8d5524",
            desc:"Нашите лупени непечени семки од тиква се производ со врвен квалитет, внимателно одбрани за да ја задржат природната свежина, вкус и хранливи вредности. Спакувани во свежо и сигурно пакување, тие се одличен избор за здрава исхрана, салати, домашни рецепти и вкусно уживање во секој дел од денот.",
            size:"100g",
            kalorii:"556",
            proteini:"24g",
            jaglehidrati:"13g",
            masti:"44g"
        }
    ],

    cooking: [
        {
            name:"Лебни трошки",
            en:"Breadcrumbs",
            descEn:"Premium breadcrumbs from our Cooking range, perfect for crispy coatings, baking and a variety of homemade recipes.",
            img:"prezla.png",
            color:"#ff9a03",
            desc:"Нашата презла е производ со врвен квалитет, подготвена за совршена крцкавост и одлични резултати при готвење. Како дел од нашата Cooking линија, таа е идеален избор за подготовка на похувани јадења, печење и разновидни домашни рецепти, носејќи сигурен квалитет и вкус во секоја кујна.",
            size:"200g | 5kg | 25kg",
            kalorii:"556",
            proteini:"24g",
            jaglehidrati:"13g",
            masti:"44g"
        },
        {
            name:"Густин",
            en:"Corn Starch",
            descEn:"Premium corn starch from our Cooking range, ideal for creams, desserts, cakes and recipes requiring a smooth, thick texture.",
            img:"gustin.png",
            color:"#7b2cbf",
            desc:"Нашиот густин е производ со врвен квалитет и незаменлив дел од нашата Cooking линија. Идеален за подготовка на кремови, десерти, колачи и различни рецепти, тој обезбедува совршена густина, мазна текстура и одлични резултати во секоја кујна.",
            size:"200g",
            kalorii:"351",
            proteini:"0g",
            jaglehidrati:"86g",
            masti:"0g"
        },
        {
            name:"Шеќер во прав",
            en:"Powdered Sugar",
            descEn:"Fine powdered sugar from our Cooking range, ideal for preparing and decorating cakes, pastries and desserts.",
            img:"seker vo prav.png",
            color:"#457b9d",
            desc:"Нашиот шеќер во прав е производ со врвен квалитет, совршен за подготовка и декорација на десерти, колачи и печива. Како дел од нашата Cooking линија, тој се одликува со фина текстура и лесна растворливост, обезбедувајќи совршен завршен изглед и сладок вкус во секој рецепт.",
            size:"200g",
            kalorii:"379",
            proteini:"0g",
            jaglehidrati:"100g",
            masti:"0g"
        },
        {
            name:"Инстант Пире",
            en:"Instant Mashed Potatoes",
            descEn:"Convenient instant mashed potatoes with a creamy texture and rich taste, designed for quick and easy meal preparation.",
            img:"pire.png",
            color:"#7baa43",
            desc:"Нашето инстант пире е практичен и квалитетен производ од нашата Cooking линија, создаден за брза и лесна подготовка на вкусен оброк. Со кремаста текстура, богат вкус и внимателно одбрани состојки, тоа е совршен избор за секојдневни оброци и брзо уживање без компромис во квалитетот.",
            size:"200g",
            kalorii:"358",
            proteini:"7g",
            jaglehidrati:"73g",
            masti:"2g"
        },
        {
            name:"Кокос",
            en:"Coconut",
            descEn:"Premium coconut with a rich natural flavor and exotic aroma, ideal for cakes, desserts and sweet specialties.",
            img:"kokos.png",
            color:"#457b9d",
            desc:"Нашиот кокос е производ со врвен квалитет и богат, природен вкус, внимателно подготвен за совршено уживање во секој рецепт. Како дел од нашата Cooking линија, тој е идеален за подготовка на десерти, колачи, торти и разновидни слатки специјалитети, додавајќи егзотична арома и вкус во секој залак.",
            size:"100g",
            kalorii:"622",
            proteini:"6g",
            jaglehidrati:"41g",
            masti:"48g"
        },
        {
            name:"Палента",
            en:"Polenta",
            descEn:"Quality polenta with a delicate texture and pleasant taste, easy to prepare for breakfast, light meals and traditional recipes.",
            img:"palenta.png",
            color:"#cedc42",
            desc:"Нашата палента е вкусен и квалитетен производ од нашата Cooking линија, подготвен за брза и лесна подготовка. Со нежна текстура и пријатен вкус, таа е омилена кај децата и одличен избор за хранлив појадок, лесен оброк или традиционални домашни рецепти.",
            size:"450g",
            kalorii:"354",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"1g"
        },
        {
            name:"Пченкарно брашно",
            en:"Corn Flour",
            descEn:"Premium corn flour made from carefully selected corn grains, offering rich flavor and excellent texture for traditional dishes and baked goods.",
            img:"pcenkarno brashno.png",
            color:"#cedc42",
            desc:"Нашето пченкарно брашно е производ со врвен квалитет, добиен од внимателно одбрано пченкарно зрно за богат вкус и одлична текстура. Како дел од нашата Cooking линија, тоа е совршен избор за подготовка на традиционални домашни јадења, печива и разновидни рецепти со автентичен вкус.",
            size:"700g",
            kalorii:"367",
            proteini:"7g",
            jaglehidrati:"77g",
            masti:"3g"
        }
    ]
};

const products = data[cat];
const product = products?.find(p => p.name === productName);

function updateProductLanguage(lang) {
    if (!product) return;

    const selectedLanguage = lang === "en" ? "en" : "mk";
    const translatedName = selectedLanguage === "en" ? product.en : product.name;

    title.textContent = translatedName;
    opis.textContent = selectedLanguage === "en" ? product.descEn : product.desc;

    pakuvanje.textContent = product.size
        ? selectedLanguage === "en"
            ? product.size.replace("1 кутија содржи 30 парчиња", "1 box contains 30 pieces")
            : product.size
        : selectedLanguage === "en"
            ? "No information available"
            : "Нема информација";

    img.alt = translatedName;
    document.title = translatedName + " - BON";
}

if (product) {
    img.src = `images/${product.img}`;

    title.style.color = product.color;
    kopce.style.background = product.color;

    kalorii.textContent = product.kalorii || "-";
    proteini.textContent = product.proteini || "-";
    jaglehidrati.textContent = product.jaglehidrati || "-";
    masti.textContent = product.masti || "-";

    document.documentElement.style.setProperty("--mainColor", product.color);

    updateProductLanguage(localStorage.getItem("bonLanguage") || "mk");
}

document.addEventListener("languageChanged", event => {
    updateProductLanguage(event.detail.language);
});

window.addEventListener("load", () => {
    anime({
        targets:"#nav",
        opacity:[0,1],
        translateY:[-25,0],
        duration:1000,
        easing:"easeOutExpo"
    });

    anime({
        targets:"#left",
        opacity:[0,1],
        translateX:[-60,0],
        duration:1200,
        delay:200,
        easing:"easeOutExpo"
    });

    anime({
        targets:"#right",
        opacity:[0,1],
        translateX:[60,0],
        duration:1200,
        delay:350,
        easing:"easeOutExpo"
    });

    anime({
        targets:".nutri",
        opacity:[0,1],
        translateY:[25,0],
        delay:anime.stagger(120),
        duration:900,
        easing:"easeOutExpo"
    });

    anime({
        targets:"#footer",
        opacity:[0,1],
        translateY:[30,0],
        duration:1000,
        delay:600,
        easing:"easeOutExpo"
    });

    anime({
        targets:"#productImg",
        translateY:[
            {value:-10,duration:2000},
            {value:0,duration:2000}
        ],
        loop:true,
        easing:"easeInOutSine"
    });
});


kopce.addEventListener("mouseenter", () => {
    anime({
        targets:"#kopce",
        scale:1.06,
        duration:300,
        easing:"easeOutQuad"
    });
});

kopce.addEventListener("mouseleave", () => {
    anime({
        targets:"#kopce",
        scale:1,
        duration:300,
        easing:"easeOutQuad"
    });
});



