# 🚜 ऊस तोडणी मशीन हिशोब व नफा-तोटा डिजिटल डायरी
### Sugarcane Harvester Machine Operations & Live P&L Book (PWA)

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Mobile%20PWA%20%7C%20Web-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Offline](https://img.shields.io/badge/Offline-100%25%20Ready-success.svg)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[![UI](https://img.shields.io/badge/Language-English%20%2B%20Marathi%20(मराठी)-amber.svg)](#bilingual-interface)

---

## 📌 प्रकल्प परिचय / Overview

**ऊस तोडणी मशीन हिशोब (Sugarcane Harvester P&L)** हे ऊस तोडणी मशीन (Combine Harvester) मालक, कंत्राटदार आणि चालकांसाठी तयार केलेले एक **मोबाइल-फर्स्ट, १००% ऑफलाइन प्रोग्रेसिव्ह वेब ॲप (PWA)** आहे. 

शेतात व ग्रामीण भागात इंटरनेट रेंज नसतानाही हे ॲप सुरळीतपणे चालते. यात दैनंदिन ऊस तोडणी काटा पावत्या, डिझेल खर्च, स्पेअर पार्ट्स देखभाल, कामगार उचल व पगार, आणि रिअल-टाइम नफा-तोटा (Live P&L) यांचा अचूक हिशोब ठेवता येतो.

> **Designed for machines like:** John Deere 3522 / CH570, Case IH Austoft 4000/8000 series, New Holland, and Shaktiman sugarcane harvesters operating in Maharashtra, Karnataka, and Gujarat sugarcane belts.

---

## 🎨 डिझाइन व थीम / Design System & Theme

ॲपची रचना शेतात काम करताना डोळ्यांना त्रास होणार नाही अशा **Dark Industrial / Agricultural Theme** वर आधारित आहे:

| रंग / Color | Hex Code | घटक / Element | उद्देश / Purpose |
| :--- | :--- | :--- | :--- |
| **Deep Slate** | `#0f172a` / `#020617` | Background & Surfaces | बॅकग्राउंड व कार्ड्स (रात्री व उन्हात सुलभ वाचन) |
| **Emerald Green** | `#10b981` | Income, Tonnage & Net Profit | गाळप वजन, एकूण उत्पन्न, नफा व जमा रक्कम |
| **Amber Gold** | `#f59e0b` | Diesel, Engine Hours, Fuel Avg | डिझेल नोंदी, मशीन तास, इंधन सरासरी व वॉर्निंग |
| **Crimson / Rose** | `#ef4444` | Expenses & Pending Dues | सर्व खर्च, तोटा व कारखान्याकडून येणे बाकी रक्कम |
| **Sky Blue** | `#0284c7` | Reports & Ledger | ताळेबंद रिपोर्ट, डेटा बॅकअप व सेटिंग्ज |

---

## 🌟 मुख्य वैशिष्ट्ये / Key Modules

### १. थेट ताळेबंद व डॅशबोर्ड (Live KPI Dashboard)
- **निव्वळ नफा / तोटा (Net Profit / Loss):** एकूण बिल व एकूण खर्च वजा करून शिल्लक नफा ठळकपणे दाखवला जातो (+ नफा मार्जिन %).
- **उत्पन्न vs. खर्च गुणोत्तर पट्टी (Visual Ratio Bar):** डिझेल, मेंटेनन्स, मजुरी आणि नफ्याचे परस्पर प्रमाण एका दृष्टीक्षेपात.
- **४ मुख्य मेट्रिक्स कार्ड्स:**
  - **एकूण गाळप (Total Crushed Tonnage):** मेट्रिक टन (MT) व एकूण पावत्यांची संख्या.
  - **एकूण बिल (Gross Revenue):** कारखान्याकडून जमा (Paid) vs. येणे बाकी (Pending) चे वर्गीकरण.
  - **एकूण खर्च (Total Expenses):** डिझेल, स्पेअर्स आणि मजुरी खर्चाचा एकत्रित ताळेबंद.
  - **मशीन अवर्स (Engine Hours):** एकूण चाललेले तास आणि तोडणी वेग (Tons/Hour).
- **इंधन कार्यक्षमता निर्देशांक (Diesel Index):**
  - **प्रति टन डिझेल (Liters / Ton):** ऊस तोडणी उद्योगातील मानक सरासरी (४.५ ते ५.५ लिटर/टन) सह स्वयंचलित तुलना व स्टेटस बॅज (Optimal / Moderate / High).
  - **प्रति तास डिझेल (Liters / Hour):** इंजिनचा डिझेल खप (उदा. २२ ते २६ लिटर/तास).
  - **प्रति टन खर्च व निव्वळ नफा (Cost & Profit per Ton).**

---

### २. ऊस तोडणी व काटा पावती नोंद (Harvest Slip Entry)
- **तपशीलवार नोंद:**
  - काटा पावती तारीख (Date)
  - काटा पावती क्र. (Slip Number, उदा. `DS-8901`)
  - साखर कारखान्याचे नाव (Sugar Mill Name - दत्त शिरोळ, शाहू कागल, जवाहर हुपरी, वारणा, सोमेश्वर, बारामती ॲग्रो इत्यादींची जलद निवड ड्रॉपडाउन सूची).
  - शेतकरी नाव (Farmer Name) व गट / सर्व्हे क्र. (Plot/Gut No.)
  - गाळप वजन (Tonnage in MT)
  - तोडणी दर प्रति टन (Cutting Rate per Ton - डिफॉल्ट ₹४५०, बदलता येणारा)
  - **स्वयंचलित बिल गणना:** `एकूण बिल = वजन (टन) × प्रति टन दर`
  - मशीन अवर्स (Engine Hours Run)
  - इनफिल्डर ट्रॅक्टर नंबर (Tractor/Haulage No.)
  - पेमेंट स्थिती (Payment Status): ⏳ कारखान्याकडून येणे बाकी (Pending) / ✅ खात्यावर जमा (Paid).
- **सुलभ कृती:** पावती दुरुस्ती (Edit), डिलीट (Delete), पेमेंट स्टेटस टॉगल आणि शेतकरी/कारखान्यानुसार फिल्टर.

---

### ३. खर्च आणि देखभाल नोंदवही (Expense & Maintenance Tracker)
खर्चाचे ४ स्वतंत्र श्रेणींमध्ये वर्गीकरण:
1. **⛽ डिझेल नोंद (Diesel Log):**
   - भरलेले डिझेल लिटर (Liters filled)
   - डिझेल दर प्रति लिटर (Rate/L)
   - स्वयंचलित एकूण खर्च (Liters × Rate)
   - मशीन अवर्स रिडिंग (Current Hour Meter Reading)
   - पेट्रोल पंप / पुरवठादाराचे नाव
2. **🛠 स्पेअर पार्ट्स व दुरुस्ती (Spares & Repairs):**
   - बेस कटर पाती (Base Cutter Blades)
   - चॉपर पाती (Chopper Blades)
   - हायड्रॉलिक ऑईल व फिल्टर (Hydraulic Oil 68 & Filters)
   - इंजिन ऑईल व सर्व्हिसिंग (Engine Oil Service)
   - वेल्डिंग व मेकॅनिक मजुरी (Welding & Fabrication)
   - एलिव्हेटर चेन व स्लॅट्स (Elevator Chain & Slats)
   - ग्रीसिंग व नट-बोल्ट
3. **👷 ड्रायव्हर व स्टाफ उचल / पगार (Staff Advances & Wages):**
   - कर्मचाऱ्याचे नाव (Staff Name)
   - हुद्दा: मुख्य ऑपरेटर, सेकंड ऑपरेटर, ट्रॅक्टर ड्रायव्हर, हेल्पर, मेकॅनिक
   - प्रकार: उचल (Advance), मासिक पगार (Wage), मेस/खानावळ भत्ता (Mess), बोनस
4. **🚜 इनफिल्डर / ट्रॅक्टर वाहतूक खर्च (Tractor Logistics):**
   - ट्रॅक्टर नंबर व ड्रायव्हर
   - ट्रॅक्टर डिझेल किंवा भाडे (Tractor Hire / Fuel)

---

### ४. हिशोब वही व रिपोर्ट (Filterable Ledger & Reports)
- **कालावधीनुसार फिल्टर:** सर्व कालावधी, आज (Today), चालू आठवडा (This Week), चालू महिना (This Month), किंवा सानुकूल तारीख (Custom From/To Date).
- **कारखानानिहाय फिल्टर:** विशिष्ट कारखान्याचा ताळेबंद तपासण्याची सुविधा.
- **एकत्रित वही (Chronological Ledger):** बँक पासबुकप्रमाणे जमा (Credit), नावे (Debit) आणि **रनिंग शिल्लक (Running Balance)** दाखवणारी सारणी.

---

### ५. 📥 एक्सेल (Excel / CSV) एक्सपोर्ट व व्हॉट्सॲप शेअरिंग

#### अ. एक-क्लिक Excel (CSV) एक्सपोर्ट:
- **तोडणी पावत्या CSV (Harvest Slips CSV)**
- **खर्च वही CSV (Expenses Log CSV)**
- **संपूर्ण ताळेबंद CSV (Full P&L Ledger CSV)**
> **महत्त्वाची टीप:** CSV फाइल्समध्ये **UTF-8 BOM (`\uFEFF`)** समाविष्ट केल्यामुळे Microsoft Excel मध्ये मराठी फॉन्ट किंवा आकडेमोड अजिबात खराब होत नाही.

#### ब. 📲 एका क्लिकवर WhatsApp रिपोर्ट शेअर करा:
मालक किंवा भागीदारांना पाठवण्यासाठी खालील स्वरूपातील स्वच्छ व सुटसुटीत रिपोर्ट तयार होतो:

```text
🚜 John Deere 3522 (MH-12-AB-9876)
📊 ऊस तोडणी हिशोब व ताळेबंद रिपोर्ट
━━━━━━━━━━━━━━━━━━━━━━
📅 कालावधी: 01-Nov-2026 ते 09-Nov-2026
🌾 हंगाम: 2026-27

🌱 १. गाळप व उत्पन्न (Harvest & Bill):
▪ एकूण गाळप: 284.45 टन
▪ एकूण पावत्या: 8
▪ एकूण बिल रक्कम: ₹ 1,27,932
▪ प्रत्यक्षात जमा: ₹ 51,660
⏳ कारखान्याकडे बाकी: ₹ 76,272
⏱ एकूण मशीन तास: 15.2 तास (18.7 टन/तास)

⛽ २. इंधन व कार्यक्षमता (Diesel Index):
▪ एकूण डिझेल: 650 लिटर
▪ सरासरी/टन: 2.28 L/Ton
▪ सरासरी/तास: 42.76 L/Hour
▪ डिझेल खर्च: ₹ 60,125

🛠 ३. खर्च तपशील (Expenses Breakdown):
▪ डिझेल खर्च: ₹ 60,125
▪ स्पेअर पार्ट्स व दुरुस्ती: ₹ 16,400
▪ ड्रायव्हर/स्टाफ उचल व पगार: ₹ 8,200
▪ इनफिल्डर/ट्रॅक्टर खर्च: ₹ 4,500
🔴 एकूण खर्च: ₹ 89,225

💰 ४. निव्वळ नफा-तोटा (Net P&L):
🏆 निव्वळ नफा (Net Profit): ₹ 38,707
📈 नफा मार्जिन: 30.3%
💵 निव्वळ नफा प्रति टन: ₹ 136.08 / टन
━━━━━━━━━━━━━━━━━━━━━━
तयार केले: ऊस तोडणी डिजिटल डायरी ॲप (Offline PWA)
```

---

### ६. १००% ऑफलाइन डेटा बॅकअप व सुरक्षा
- **LocalStorage मध्ये ऑटो-सेव्ह:** प्रत्येक नवीन नोंदीनंतर डेटा तात्काळ सेव्ह होतो.
- **पूर्ण JSON बॅकअप (Download):** फोन बदलताना किंवा सुरक्षेसाठी संपूर्ण डेटा फाईल डाउनलोड करा.
- **JSON बॅकअप रिस्टोअर (Restore):** आधीचा डेटा कधीही एका सेकंदात पुन्हा लोड करा.
- **नमुना डेटा (Sample Demo Data):** पश्चिम महाराष्ट्रातील कारखाने, शेतकरी आणि खऱ्या दरांसह सराव करण्यासाठी नमुना डेटा उपलब्ध.

---

## 📁 फाईल रचना / File Structure

```
d:\Development\atb-sugar-cane-harvesting\
│
├── index.html         # मुख्य सिंगल-पेज ॲप (HTML5, Tailwind CSS, Inline SVGs, Vanilla JS)
├── manifest.json      # PWA Web App Manifest (ॲप इन्स्टॉल व आयकॉन्स कॉन्फिगरेशन)
├── sw.js              # Service Worker (कॅशे-फर्स्ट ऑफलाइन क्षमता)
├── icon-192.svg       # 192x192 ॲप आयकॉन (Sugarcane Harvester Emblem)
├── icon-512.svg       # 512x512 ॲप स्प्लॅश स्क्रीन आयकॉन
└── README.md          # प्रकल्प माहिती व वापर मार्गदर्शिका (हा दस्तऐवज)
```

---

## 🚀 ॲप कसे चालवायचे / How to Run the App

कोणत्याही अतिरिक्त लायब्ररी किंवा सर्व्हर सेटअपची गरज नाही:

### पद्धत १: थेट ब्राउझरमध्ये उघडा (Direct Browser Launch)
1. प्रोजेक्ट फोल्डरमधील `index.html` फाईलवर डबल-क्लिक करा.
2. गुगल क्रोम (Google Chrome) किंवा मायक्रोसॉफ्ट एज (Edge) मध्ये ॲप सुरू होईल.

### पद्धत २: लोकल वेब सर्व्हरवर चालवा (Recommended for Local PWA Testing)
जर Node.js उपलब्ध असेल, तर टर्मिनल/पॉवरशेलमध्ये खालील कमांड चालवा:

```powershell
cd d:\Development\atb-sugar-cane-harvesting
npx serve .
```
त्यानंतर ब्राउझरमध्ये `http://localhost:3000` ओपन करा.

### पद्धत ३: व्हर्सेल (Vercel) वर मोफत १-क्लिक होस्ट करा (Recommended for 24/7 Mobile Use)
हे ॲप Vercel वर १००% मोफत आणि तात्काळ चालू होते. `vercel.json` कॉन्फिगरेशन फाईल आधीच समाविष्ट आहे.

**GitHub द्वारे सोप्या पायऱ्या:**
1. हे प्रोजेक्ट तुमच्या GitHub अकाउंटवर पुश (Push) करा:
   ```powershell
   git init
   git add .
   git commit -m "Initial Sugarcane Harvester PWA"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sugarcane-harvester-pwa.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) वर जाऊन तुमच्या GitHub अकाउंटने लॉगिन करा.
3. **"Add New..."** -> **"Project"** निवडा.
4. तुमची रिपॉझिटरी सिलेक्ट करा आणि **"Deploy"** बटण दाबा.
5. काही सेकंदांत तुम्हाला मोफत लाईव्ह लिंक मिळेल (उदा. `https://sugarcane-harvester.vercel.app`).
6. आता ही लिंक तुमच्या मोबाईलवर उघडून **"Add to Home Screen"** करा.

---

## 📱 मोबाईलवर ॲप कसे इन्स्टॉल करावे (Add to Home Screen)

### Android (Google Chrome):
1. मोबाईल ब्राउझरमध्ये ॲपची लिंक उघडा.
2. वरील उजव्या कोपऱ्यातील **तीन ठिपके (⋮)** वर टॅप करा.
3. **"Install app"** किंवा **"Add to Home Screen" (स्क्रीनवर जोडा)** निवडा.
4. तुमच्या मोबाईलच्या ॲप ड्रॉवरमध्ये "तोडणी हिशोब" चे स्वतंत्र ॲप आयकॉन तयार होईल, जे इंटरनेट नसतानाही थेट उघडेल.

### iPhone / iPad (Apple Safari):
1. सफारी ब्राउझरमध्ये लिंक उघडा.
2. खालील **शेअर (Share) बटण** वर टॅप करा.
3. खाली स्क्रोल करून **"Add to Home Screen"** निवडा.

---

## ⚙️ तांत्रिक वैशिष्ट्ये / Technical Stack

- **Frontend:** HTML5, CSS3, Tailwind CSS (via CDN)
- **Programming Language:** Pure Vanilla JavaScript (ES6+)
- **Storage Engine:** Browser `window.localStorage`
- **PWA Features:** Cache API, Service Worker (`sw.js`), Web App Manifest
- **Icons:** Custom Inlined SVG Vector Icons (No external icon fonts required offline)
- **Data Export Formats:** `.csv` (Excel with UTF-8 BOM) & `.json` (Full Database Backup)

---

## 📜 परवाना / License
हे ॲप मुक्त व मोफत वापरासाठी **MIT License** अंतर्गत उपलब्ध आहे. शेतकरी, हार्वेस्टर मालक व तंत्रज्ञान मित्रांना यात सुधारणा करण्याचे पूर्ण स्वातंत्र्य आहे.

---
*हंगाम २०२६-२७ | ऊस तोडणी डिजिटल डायरी* 🌾🚜
