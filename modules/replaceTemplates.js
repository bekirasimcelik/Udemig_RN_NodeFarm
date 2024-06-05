// Card htmlini ve ürün bilgilerini alıp card htmlinde değişken olarak tanımlanan bütün değerlerin yerine
// ürün bilgilerini aktaran fonksiyon

const replaceTemplate = (cardHTML, data) => {
  let output = cardHTML.replace(/{%PRODUCTNAME%}/g, data.productName);

  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%FROM%}/g, data.from);
  output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, data.description);

  // Eğer ürün orgnaic değilse not-organic ifadesi ekle
  if (data.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  // oluşturduğunuz htmli göndereceğiz
  return output;
};

// ReplaceTemplate isimkli fonk projedeki diğer dosyalarda kullanmak için export hale getiriyoruz
module.exports = replaceTemplate;
