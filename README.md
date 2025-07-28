# Dynamic Carousel Project

## Açıklama

Bu proje, E-Bebek ana sayfasında "Beğenebileceğinizi düşündüklerimiz" başlığı altında ürünleri gösteren basit ve responsive bir ürün carouselidir.

- Ürünler API’den veya localStorage’dan yüklenir.
- Favori ürünler kalp ikonuyla işaretlenir ve localStorage’da saklanır.
- Ürünlere tıklanınca yeni sekmede ürün sayfası açılır.
- İndirim varsa eski fiyat, indirim yüzdesi ve yeni fiyat gösterilir.
- Yalnızca saf JavaScript ile yazılmıştır, dış kütüphane kullanılmamıştır.
- Kod sadece ana sayfada çalışır.

## Kullanım

1. Kodu Chrome konsoluna yapıştırıp çalıştırın.
2. Ana sayfada çalışacaktır, başka sayfada `"Wrong Page."` mesajı verir.
3. Carousel otomatik olarak sayfadaki doğru yere eklenir.

## Teknik Bilgiler

- Ürün verisi `https://gist.githubusercontent.com/sevindi/...` adresinden çekilir.
- LocalStorage anahtarları:
  - `productCache` — ürün verisi.
  - `favorites` — favori ürün ID’leri.
- Responsive tasarım mobil, tablet ve masaüstü uyumludur.
- Ürün kartları, favori butonu, fiyat bilgisi ve sepete ekle butonu içerir.

## Lisans

Bir Lisansı Yoktur.

