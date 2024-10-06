let kredi = prompt('Kredi miktarını giriniz: ');
let taksit = prompt('Taksit sayısını giriniz: ');
let faiz = prompt('Aylık faiz miktarını yüzdesel olarak giriniz: ');

let faizsizTutar = kredi / taksit ;
let faizliTutar = faizsizTutar + (faizsizTutar * (faiz / 100));

alert('Aylık ödeyeceğiniz faizli tutar: ' + faizliTutar);