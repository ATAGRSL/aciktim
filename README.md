# ACIKTIM - Yapay Zeka Destekli Restoran Web Sitesi

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://ai.google.dev/)

Bu proje, "ACIKTIM" adlı kurgusal bir restoran için React, TypeScript ve Tailwind CSS ile geliştirilmiş modern, tek sayfa (Single Page Application) bir web sitesi konseptidir. Sitenin en dikkat çekici özelliği, Google Gemini API'si ile güçlendirilmiş, kullanıcının ruh haline veya isteklerine göre kişiselleştirilmiş menü önerileri sunan bir yapay zeka danışmanıdır.

## ✨ Özellikler

- **Modern ve Şık Arayüz:** Tailwind CSS ile oluşturulmuş, kullanıcı deneyimini ön planda tutan temiz ve estetik bir tasarım.
- **Tamamen Duyarlı (Responsive):** Masaüstü, tablet ve mobil cihazlarda kusursuz bir görünüm ve kullanım sunar.
- **Yapay Zeka Menü Danışmanı:** Google Gemini API'sini kullanarak kullanıcının "bugün canım ne çekiyor?" sorusuna akıllı ve iştah açıcı öneriler sunar.
- **İnteraktif ve Filtrelenebilir Menü:** Kullanıcılar, menüdeki ürünleri kategorilere göre (Burger, Salata, Pizza vb.) kolayca filtreleyebilir.
- **Akıcı Kaydırma (Smooth Scrolling):** Tek sayfa tasarımında bölümler arası geçişler pürüzsüz animasyonlarla gerçekleşir.
- **Dinamik Header:** Sayfa aşağı kaydırıldığında şeffaflaşan ve küçülen modern bir sabit (sticky) header.
- **Mobil Uyumlu Navigasyon:** Mobil cihazlar için özel olarak tasarlanmış, kullanışlı bir "hamburger" menü.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Yapay Zeka:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Proje Yapısı

```
.
├── components/         # Tekrar kullanılabilir React bileşenleri (Header, Footer, Menu vb.)
├── services/           # Harici servislerle (Gemini API) iletişimi yöneten modüller
├── constants.ts        # Uygulama genelinde kullanılan sabit veriler (menü, şubeler vb.)
├── types.ts            # TypeScript tip tanımlamaları
├── App.tsx             # Ana uygulama bileşeni, tüm bölümleri birleştirir
├── index.tsx           # React uygulamasını DOM'a render eden giriş noktası
└── index.html          # Ana HTML dosyası
```

## 🚀 Kurulum ve Başlatma

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler

- [Node.js](https://nodejs.org/en/) (v18 veya üstü)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

### Adımlar

1.  **Projeyi klonlayın:**
    ```bash
    git clone https://github.com/ATAGRSL/ACIKTIM-Restaurant-Website.git
    cd ACIKTIM-Restaurant-Website
    ```

2.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **API Anahtarını Yapılandırın:**
    Projenin yapay zeka özelliğinin çalışabilmesi için bir Google Gemini API anahtarına ihtiyacınız vardır.
    - Projenin ana dizininde `.env` adında bir dosya oluşturun.
    - Dosyanın içine aşağıdaki satırı ekleyin ve `YOUR_GEMINI_API_KEY` kısmını kendi API anahtarınızla değiştirin.
      ```
      VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
      ```
    > **Önemli:** `.env` dosyasını asla public repolara göndermeyin! Bu dosya, güvenlik için `.gitignore` dosyanıza eklenmelidir. Vite, güvenlik nedeniyle yalnızca `VITE_` önekine sahip değişkenleri istemci tarafı kodunuza ifşa eder.

4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

5.  **Tarayıcıda açın:**
    Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## ✍️ Yazar

- **Ata Gürsel** - [ATAGRSL](https://github.com/ATAGRSL)

## 📄 Lisans

Bu proje [MIT Lisansı](./LICENSE) ile lisanslanmıştır.
