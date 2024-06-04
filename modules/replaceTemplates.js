// Card htmlini ve ürün bilgilerini alıp card htmlinde değişken olarak tanımlanan bütün değerlerin yerine
// ürün bilgilerini aktaran fonksiyon

const replaceTemplate = (cardHTML, data) => {
  let output = cardHTML.replace(/{%PRODUCTNAME%}/g, data.productName);

  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%IMAGE%}/g, data.image);

  // oluşturduğunuz htmli göndereceğiz
  return output;
};

// ReplaceTemplate isimkli fonk projedeki diğer dosyalarda kullanmak için export hale getiriyoruz
module.exports = replaceTemplate;
