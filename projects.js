// 每件作品只需填入以下欄位。新作品放在陣列最前面；未提供的網址留空。
// 圖片存放在 assets/，例如 image: './assets/my-tool.webp'。
// 範例：
// {
//   title: '作品名稱',
//   description: '一至兩句說明用途。',
//   image: './assets/my-tool.webp',
//   imageAlt: '作品操作畫面的簡短說明',
//   serviceUrl: 'https://your-tool.example',
//   sourceUrl: 'https://github.com/your-name/your-tool',
//   tags: ['AI', '文字處理']
// }
window.ZAOYONG_PROJECTS = [
  {
    title: 'PrintAlign｜精準合併列印',
    description: '匯入底圖與 Excel／CSV 名單，拖拉文字精準對位，批次產生合併列印 PDF。',
    image: './assets/printalign.jpg',
    imageAlt: 'PrintAlign 備份程式的版面裁切設定、文字對位與全版面即時預覽',
    serviceUrl: 'https://a630050.github.io/PrintAlign/',
    sourceUrl: 'https://github.com/a630050/PrintAlign',
    tags: ['合併列印', 'Excel', 'PDF']
  },
  {
    title: '跨語言即時對講字幕機',
    description: '透過房間碼加入跨語言對話，設定自己的語言，以即時字幕輔助溝通。',
    image: './assets/cross-lang-meeting.jpg',
    imageAlt: '跨語言即時對講字幕機的暱稱、房間碼與辨識翻譯語言設定介面',
    serviceUrl: 'https://a630050.github.io/cross_lang_meeting/',
    sourceUrl: 'https://github.com/a630050/cross_lang_meeting',
    tags: ['跨語溝通', '即時字幕', '語音翻譯']
  },
  {
    title: '菜單發想製作程式',
    description: '規劃每天的餐點，搭配 AI 菜色發想，快速輸出飯店等級精美菜單與備菜清單。',
    image: './assets/menu-planner.jpg',
    imageAlt: '使用者 Notion 說明頁提供的菜單討論程式畫面，含菜單規劃與 AI 靈感獲取區',
    serviceUrl: 'https://gemini.google.com/share/dafd24b55061',
    sourceUrl: '',
    tags: ['菜單規劃', 'AI 發想', 'Gemini']
  },
  {
    title: 'Samba Beatmaker｜森巴鼓團練習',
    description: '編排多種森巴打擊樂器的節奏，調整速度、強弱與左右手提示，支援合奏、輪奏與 MP3 匯出。',
    image: './assets/samba-beatmaker.jpg',
    imageAlt: 'Samba Beatmaker 的多樂器節奏格、速度設定與強弱提示介面',
    serviceUrl: 'https://a630050.github.io/beatmaker-samba-V2/',
    sourceUrl: 'https://github.com/a630050/beatmaker-samba-V2',
    tags: ['森巴鼓', '節奏編排', '音樂練習']
  },
  {
    title: 'DistroCraft｜配電練習',
    description: '拖曳元件、拉線接電，透過通電動畫與短路跳脫模擬，練習基礎配電。',
    image: './assets/distrocraft.jpg',
    imageAlt: 'DistroCraft 內建雙切開關控制一燈範例的實際畫面',
    serviceUrl: 'https://a630050.github.io/DistroCraft/',
    sourceUrl: 'https://github.com/a630050/DistroCraft',
    tags: ['配電練習', '互動模擬', '教學工具']
  },
  {
    title: 'CSV 專用處理器',
    description: '在瀏覽器編修 CSV，快速完成搜尋篩選、欄位整理與重複值清理，再匯出檔案。',
    image: './assets/csv-processor.jpg',
    imageAlt: 'CSV 專用處理器的匯入、匯出與資料表介面',
    serviceUrl: 'https://a630050.github.io/CSV_Processor/',
    sourceUrl: 'https://github.com/a630050/CSV_Processor',
    tags: ['CSV', '資料整理', '本機處理']
  },
  {
    title: '籃球戰術板',
    description: '在球場上安排球員與戰術，逐格編排、播放跑位，支援名單與腳本匯入匯出。',
    image: './assets/basketball-tacticalboard.jpg',
    imageAlt: '籃球戰術板使用內建快速開始建立雙方各五名球員的畫面',
    serviceUrl: 'https://a630050.github.io/basketball_tacticalboard/',
    sourceUrl: 'https://github.com/a630050/basketball_tacticalboard',
    tags: ['籃球', '戰術編排', '動畫播放']
  },
  {
    title: 'PDF 簽名套印',
    description: '從照片擷取手寫簽名、去背後放上 PDF，調整位置與大小，再匯出或列印。',
    image: './assets/pdf-signstamp.jpg',
    imageAlt: 'PDF 簽名套印的文件區、簽名照片與去背設定介面',
    serviceUrl: 'https://a630050.github.io/pdf-signstamp/',
    sourceUrl: 'https://github.com/a630050/pdf-signstamp',
    tags: ['PDF', '簽名套印', '圖片去背']
  },
  {
    title: 'EdgeSRT｜語音轉錄',
    description: '將語音轉成文字，支援多語言辨識與辭彙替換；建議使用 Edge 瀏覽器。',
    image: './assets/edgesrt.jpg',
    imageAlt: 'EdgeSRT 語音轉錄介面及內建 Edge 瀏覽器與麥克風使用說明',
    serviceUrl: 'https://a630050.github.io/edgesrt/',
    sourceUrl: 'https://github.com/a630050/edgesrt',
    tags: ['語音轉文字', '多語言', 'Edge']
  },
  {
    title: 'BookLabel｜圖書標籤套印',
    description: '匯入書庫資料，編排書標與登錄號標籤，調整套印位置並下載 PDF。',
    image: './assets/booklabel.jpg',
    imageAlt: 'BookLabel 的書庫匯入、套印序列、標籤模板與列印位置設定',
    serviceUrl: 'https://a630050.github.io/BookLabel/',
    sourceUrl: 'https://github.com/a630050/BookLabel',
    tags: ['圖書館', '標籤套印', 'PDF']
  },
  {
    title: '書籍催還通知單產生器',
    description: '匯入借閱通知 Excel，整併同一位讀者的書單，產生館員版與學生版催還通知單。',
    image: './assets/overdue-slip-generator.jpg',
    imageAlt: '書籍催還通知單產生器的多檔 Excel 匯入及兩種通知單輸出介面',
    serviceUrl: 'https://a630050.github.io/overdue-slip-generator/',
    sourceUrl: 'https://github.com/a630050/overdue-slip-generator',
    tags: ['圖書館', 'Excel', '通知單']
  },
  {
    title: 'PitchTutor｜排練桌',
    description: '輸入音符與歌詞、播放旋律，搭配麥克風音準分析，協助看譜與練唱。',
    image: './assets/pitchtutor.jpg',
    imageAlt: 'PitchTutor 排練桌的樂譜照片參照、音符編輯軌與樂譜設定介面',
    serviceUrl: 'https://a630050.github.io/PitchTutor/',
    sourceUrl: 'https://github.com/a630050/PitchTutor',
    tags: ['音準練唱', '樂譜編輯', '音樂學習']
  }
];
