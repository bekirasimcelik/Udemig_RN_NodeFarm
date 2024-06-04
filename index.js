//*Http modülü çağrıldı
const http = require("http");
const fs = require("fs");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplates");


// ana sayfa içindeki html dosyasının içeriğini okuma
let tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");

// detay sayfasını okuma
let tempProduct = fs.readFileSync("./templates/product.html", "utf-8");

// card html'ini okuma
let tempCard = fs.readFileSync("./templates/card.html", "utf-8");

// Ürün verilerini metin olarak oku (Json formatında okur)
const data = fs.readFileSync("./dev-data/data.json", "utf-8");

// Json formatındaki veriyi js formatına çevirir
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

    // url'i parçalara ayırmak için
    const {pathname, query } = url.parse(req.url, true);

    switch (pathname) {
        case "/overview":

        // Meyveler verisini dön dizideki eleman sayısı kadar kart oluştur.
        const cards = dataObj.map((el) => replaceTemplate(tempCard, el));

        // Anasayfadaki {%PRODUCT_CARDS%} ifadesi yerine cardları basacağız
        tempOverview = tempOverview.replace("{%PRODUCT_CARDS%}", cards);

        return res.end(tempOverview);

        case "/product":
            // Diziden urldeki parametreyle gelen id li elemanı bulma
        return res.end(tempProduct);
        
        case "/card":
        return res.end(tempCard);

        default :
        return res.end("<h1> Aranan SAYFA Bulunamadi<h1/>");

    };
});

server.listen(4000, "127.0.0.1", () => {
    console.log("Server 400 porta gelen istekleri dinlemeye başladı.");
});
