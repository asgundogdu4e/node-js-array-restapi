/* eslint-disable */
const neticeBasliklari = {
    Netice: "Netice",
    Mesaj: "Mesaj",
    Veri: "Veri",
    Token: "Token"
};

const neticeNevleri = {
    Tamam: "Tamam.",
    Hata: "Hata!",
    Ihtar: "İhtar!"
};

const hataMesajiOlustur = function (pVeri) {
    return { Netice: neticeNevleri.Hata, Kayitlar: null, Hata: pVeri + '' };
};
const tamamMesajiOlustur = function (pMesaj) {
    return { Netice: neticeNevleri.Tamam, Kayitlar: pVeri.Kayitlar, Hata: pVeri.Hata };
};
const veriMesajiOlustur = function (pVeri) {
    return { Netice: neticeNevleri.Tamam, Kayitlar: pVeri.Kayitlar, Hata: pVeri.Hata };
};

async function neticeGonder(pKayitlar, pHata, pHataNevi) {
    //console.log("  async neticeGonder(pKayitlar, pHata, pHataNevi) {")
    //console.log(pKayitlar, pHata, pHataNevi)
    const netice = { Netice: '', Kayitlar: null, Hata: null, HataNevi: null };
    if (pHata) {
        netice.Netice = neticeNevleri.Hata;
        if (pHata.stack) {
            netice.Hata = pHata.stack;
        } else {
            netice.Hata = pHata;
        }
        if (pHataNevi) {
            netice.HataNevi = pHataNevi;
        } else {
            netice.HataNevi = null;
        }
    } else {
        netice.Netice = neticeNevleri.Tamam;
        netice.Kayitlar = pKayitlar;
    }
    //console.log(netice)
    return netice;
}

module.exports = {
    neticeGonder,
    neticeNevleri,
    neticeBasliklari,
    hataMesajiOlustur,
    tamamMesajiOlustur,
    veriMesajiOlustur
};