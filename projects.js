// 新作品放在陣列最前面。painPoint 為解決痛點，description 為作品介紹。
// 未提供的網址留空；圖片放 assets/。
window.ZAOYONG_PROJECTS = [
  {
    "title": "足跡影片｜Footprint Film",
    "painPoint": "旅行照片拍了很多，單純輪播卻看不出一路去了哪裡；想串成有路線、有故事的回憶影片，又得自己整理地點、安排順序並剪輯。",
    "description": "選取旅行照片，自動分站並搭配地圖軌跡動畫，製作旅程影片；照片在本機處理，可編輯、預覽與輸出。",
    "image": "./assets/footprint-film.jpg",
    "imageAlt": "足跡影片的旅行照片匯入畫面，提供自動分站、地圖軌跡動畫與本機處理說明",
    "serviceUrl": "https://a630050.github.io/footprint-film/",
    "sourceUrl": "https://github.com/a630050/footprint-film",
    "tags": ["旅行回憶", "地圖動畫", "照片成片"]
  },
  {
    "title": "PrintAlign｜精準合併列印",
    "painPoint": "製作需要套印姓名、分數等資料的卡牌時，逐張替換、調整位置很費工；使用 Word 合併列印，又容易卡在繁瑣設定、文字對位與一頁多張的排版。",
    "description": "匯入底圖與 Excel／CSV 名單，拖拉文字精準對位，批次產生合併列印 PDF。",
    "image": "./assets/printalign.jpg",
    "imageAlt": "PrintAlign 備份程式的版面裁切設定、文字對位與全版面即時預覽",
    "serviceUrl": "https://a630050.github.io/PrintAlign/",
    "sourceUrl": "https://github.com/a630050/PrintAlign",
    "tags": [
      "合併列印",
      "Excel",
      "PDF"
    ]
  },
  {
    "title": "跨語言即時對講字幕機",
    "painPoint": "和使用不同語言的人交談時，邊聽邊翻譯容易跟不上；反覆切換翻譯工具，也讓對話斷斷續續。",
    "description": "透過房間碼加入對話，設定自己的語言，以即時翻譯字幕輔助雙方溝通。",
    "image": "./assets/cross-lang-meeting.jpg",
    "imageAlt": "跨語言即時對講字幕機的暱稱、房間碼與辨識翻譯語言設定介面",
    "serviceUrl": "https://a630050.github.io/cross_lang_meeting/",
    "sourceUrl": "https://github.com/a630050/cross_lang_meeting",
    "tags": [
      "跨語溝通",
      "即時字幕",
      "語音翻譯"
    ]
  },
  {
    "title": "菜單發想製作程式",
    "painPoint": "準備多天或多人用餐，想菜色、安排餐次、整理備菜項目都很費心；討論好之後，還得另外排成一份好看、方便分享的菜單。",
    "description": "規劃每天的餐點，搭配 AI 菜色發想，快速輸出飯店等級精美菜單與備菜清單。",
    "image": "./assets/menu-planner.jpg",
    "imageAlt": "使用者 Notion 說明頁提供的菜單討論程式畫面，含菜單規劃與 AI 靈感獲取區",
    "serviceUrl": "https://gemini.google.com/share/dafd24b55061",
    "sourceUrl": "",
    "tags": [
      "菜單規劃",
      "AI 發想",
      "Gemini"
    ]
  },
  {
    "title": "Samba Beatmaker｜森巴鼓團練習",
    "painPoint": "上森巴鼓課時，各聲部的節奏分開看還能理解，合奏卻不容易想像；課後自己練，又缺少其他聲部陪練，難以掌握配合、左右手與強弱。",
    "description": "編排多種森巴打擊樂器的節奏，放慢、循環聆聽，搭配左右手與強弱提示，支援合奏、輪奏及 MP3 匯出。",
    "image": "./assets/samba-beatmaker.jpg",
    "imageAlt": "Samba Beatmaker 的多樂器節奏格、速度設定與強弱提示介面",
    "serviceUrl": "https://a630050.github.io/beatmaker-samba-V2/",
    "sourceUrl": "https://github.com/a630050/beatmaker-samba-V2",
    "tags": [
      "森巴鼓",
      "節奏編排",
      "音樂練習"
    ]
  },
  {
    "title": "DistroCraft｜配電練習",
    "painPoint": "上水電課時，只看線路圖，不容易理解電流路徑與開關原理；實體練習得先備好元件與接線環境，驗證結果不便，也有用電安全的顧慮。",
    "description": "在網頁上拖曳元件、拉線接電，透過通電動畫與短路跳脫模擬，觀察接線結果、練習基礎配電。",
    "image": "./assets/distrocraft.jpg",
    "imageAlt": "DistroCraft 內建雙切開關控制一燈範例的實際畫面",
    "serviceUrl": "https://a630050.github.io/DistroCraft/",
    "sourceUrl": "https://github.com/a630050/DistroCraft",
    "tags": [
      "配電練習",
      "互動模擬",
      "教學工具"
    ]
  },
  {
    "title": "CSV 專用處理器",
    "painPoint": "只想整理一份 CSV，用 Excel 開啟後，編號前面的零或文字格式卻被自動改掉。對不熟悉匯入設定的人來說，光是保留正確資料就成了一道門檻。",
    "description": "在瀏覽器以文字方式處理 CSV，保留編號與欄位文字，完成搜尋篩選、欄位整理及重複值清理，再匯出檔案。",
    "image": "./assets/csv-processor.jpg",
    "imageAlt": "CSV 專用處理器的匯入、匯出與資料表介面",
    "serviceUrl": "https://a630050.github.io/CSV_Processor/",
    "sourceUrl": "https://github.com/a630050/CSV_Processor",
    "tags": [
      "CSV",
      "資料整理",
      "本機處理"
    ]
  },
  {
    "title": "籃球戰術板",
    "painPoint": "靜態戰術圖能畫出位置與箭頭，卻不容易說清楚跑位的先後與配合；每次重新畫、重新講，也不方便讓隊員反覆複習。",
    "description": "在球場上安排球員，逐格編排並播放戰術跑位，支援名單與腳本匯入匯出。",
    "image": "./assets/basketball-tacticalboard.jpg",
    "imageAlt": "籃球戰術板使用內建快速開始建立雙方各五名球員的畫面",
    "serviceUrl": "https://a630050.github.io/basketball_tacticalboard/",
    "sourceUrl": "https://github.com/a630050/basketball_tacticalboard",
    "tags": [
      "籃球",
      "戰術編排",
      "動畫播放"
    ]
  },
  {
    "title": "PDF 簽名套印",
    "painPoint": "文件只需補上幾處手寫內容或簽名就能線上回傳，卻得列印、填寫後再掃描，費事又耗紙；直接貼照片，還要處理紙張底色與對位。",
    "description": "從照片框選手寫簽名或字樣，去背後套印至 PDF，調整位置與大小，再匯出或列印；匯出時可選擇壓平處理。",
    "image": "./assets/pdf-signstamp.jpg",
    "imageAlt": "PDF 簽名套印的文件區、簽名照片與去背設定介面",
    "serviceUrl": "https://a630050.github.io/pdf-signstamp/",
    "sourceUrl": "https://github.com/a630050/pdf-signstamp",
    "tags": [
      "PDF",
      "簽名套印",
      "圖片去背"
    ]
  },
  {
    "title": "EdgeSRT｜語音轉錄",
    "painPoint": "聽講或記錄口述內容時，打字跟不上說話，容易漏掉重點；常用詞與專有名詞若反覆辨識錯誤，事後還得逐一修正。",
    "description": "將語音轉成文字，支援多語言辨識與辭彙替換；建議使用 Edge 瀏覽器。",
    "image": "./assets/edgesrt.jpg",
    "imageAlt": "EdgeSRT 語音轉錄介面及內建 Edge 瀏覽器與麥克風使用說明",
    "serviceUrl": "https://a630050.github.io/edgesrt/",
    "sourceUrl": "https://github.com/a630050/edgesrt",
    "tags": [
      "語音轉文字",
      "多語言",
      "Edge"
    ]
  },
  {
    "title": "BookLabel｜圖書標籤套印",
    "painPoint": "補印書標或登錄號標籤時，得挑選書庫資料、重新排版，再反覆調整貼紙位置；即使只印幾張，也要處理整套列印設定。",
    "description": "匯入書庫資料，挑選要套印的書籍，設定書標或登錄號標籤版型與位置，下載 PDF。",
    "image": "./assets/booklabel.jpg",
    "imageAlt": "BookLabel 的書庫匯入、套印序列、標籤模板與列印位置設定",
    "serviceUrl": "https://a630050.github.io/BookLabel/",
    "sourceUrl": "https://github.com/a630050/BookLabel",
    "tags": [
      "圖書館",
      "標籤套印",
      "PDF"
    ]
  },
  {
    "title": "書籍催還通知單產生器",
    "painPoint": "圖書館系統匯出的借閱報表，不一定適合直接發給老師或學生；館員還得整理班級、合併讀者書單，再排成通知單，重複抄整容易遺漏。",
    "description": "匯入借閱通知 Excel，整併同一位讀者的書單，產生適合館員與學生使用的催還通知單。",
    "image": "./assets/overdue-slip-generator.jpg",
    "imageAlt": "書籍催還通知單產生器的多檔 Excel 匯入及兩種通知單輸出介面",
    "serviceUrl": "https://a630050.github.io/overdue-slip-generator/",
    "sourceUrl": "https://github.com/a630050/overdue-slip-generator",
    "tags": [
      "圖書館",
      "Excel",
      "通知單"
    ]
  },
  {
    "title": "PitchTutor｜排練桌",
    "painPoint": "拿到不熟悉的樂譜，自己練唱時難以確認音高；想針對自己的聲部反覆聽、跟著唱，還得找人彈奏或另外製作導唱音檔。",
    "description": "輸入音符與歌詞、播放旋律，搭配麥克風即時音準分析，協助看譜、跟唱與聲部練習。",
    "image": "./assets/pitchtutor.jpg",
    "imageAlt": "PitchTutor 排練桌的樂譜照片參照、音符編輯軌與樂譜設定介面",
    "serviceUrl": "https://a630050.github.io/PitchTutor/",
    "sourceUrl": "https://github.com/a630050/PitchTutor",
    "tags": [
      "音準練唱",
      "樂譜編輯",
      "音樂學習"
    ]
  }
];
