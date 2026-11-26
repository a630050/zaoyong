# 造用所 ZAOYONG

把生活裡的小麻煩，做成用得上的小工具。

Vincent 的 vibe coding 作品牆。暖白與深綠的簡潔卡片版式，不設大分類，每件作品保留圖片、短簡介、自訂膠囊標籤，以及服務與開源連結。電腦三欄、平板兩欄、手機單欄。

- 正式首頁：https://a630050.github.io/zaoyong/
- 版式示範：https://a630050.github.io/zaoyong/?preview=1

版式示範的三件作品、數字及畫面皆為虛構，僅展示排版。正式作品牆已收錄 DistroCraft、CSV 專用處理器、籃球戰術板、PDF 簽名套印、EdgeSRT、BookLabel、書籍催還通知單產生器與 PitchTutor，共八件作品。

首批作品簡介依各專案 README 或實際網頁介面整理；封面為 2026-11-26 擷取的實際網頁畫面。DistroCraft 使用內建配電模板，籃球戰術板使用內建快速開始，其餘為初始介面或使用說明；截圖不代表各工具全部功能均經測試。

## 新增作品

1. 將作品截圖放進 `assets/`，建議使用 1600 × 1000 的 WebP、PNG 或 JPEG；主要內容放在中央，圖片會以 16:10 等比例裁切。
2. 編輯 `projects.js`，在 `window.ZAOYONG_PROJECTS` 陣列最前面新增一筆：

```js
{
  title: '你的作品名稱',
  description: '用一至兩句說明工具用途。',
  image: './assets/your-tool.webp',
  imageAlt: '作品操作畫面的簡短說明',
  serviceUrl: 'https://your-tool.example',
  sourceUrl: '',
  tags: ['AI', '工作應用']
}
```

上述網址為填寫示意，請換成實際服務。多筆作品間以逗號分隔。沒有服務或開源網址就填空字串，對應連結會自動隱藏。圖片未填或載入失敗時會顯示品牌封面。標籤可自訂，點擊可搜尋。搜尋包含名稱、簡介與標籤。

## 本機預覽與發布

直接用瀏覽器開啟 `index.html` 即可預覽；在網址後加 `?preview=1` 可看三張示範卡片。

無建置步驟、無套件安裝、無後端、無追蹤分析。GitHub Pages 使用 `main` 分支根目錄發布；提交修改後由 GitHub 更新。所有資產使用相對路徑，支援 `/zaoyong/` 子目錄。

## 檔案

- `index.html`：頁首、作品牆及頁尾。
- `styles.css`：桌面與手機版式。
- `projects.js`：實際作品清單。
- `app.js`：卡片、搜尋、標籤、連結處理與示範模式。
- `assets/`：網站圖示與作品截圖。

尚未指定開源授權；作品卡片的 GitHub 連結是否開源，依各作品自己的授權為準。
