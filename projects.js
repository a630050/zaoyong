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
