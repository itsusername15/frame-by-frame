# Frame by Frame — A Personal Film Journal

> Every film leaves a little something.

**Frame by Frame** 是我的個人電影日記網站，用來收藏看過的電影，以及它們留下的感受。我希望這裡不只是電影評分清單，也是一個能慢慢累積觀影心得的地方。

網站採用簡約的電影雜誌（Editorial）設計，以米白和酒紅色為主色調，搭配電影海報和個人評論。每部電影都有自己的評分、短評和完整心得，重點是記錄我真實的觀影想法，而不是提供制式的影評分析。

**[瀏覽網站](https://itsusername15.github.io/frame-by-frame/)** · **[GitHub Repository](https://github.com/itsusername15/frame-by-frame)**

## 目前收錄的電影

| 電影 | 我的評分 |
| --- | :---: |
| 10 Things I Hate About You | 8/10 |
| Inception | 10/10 |
| Past Lives | 7/10 |
| The Odyssey | 9/10 |

每部電影包含 **Synopsis**（劇情簡介）、**My Thoughts**（個人心得）和 **Rating Reason**（評分理由）；首頁則顯示海報、基本資料及 Short Review（短評）。

## 網站功能

- **電影收藏展示**：以海報搭配文字的卡片呈現每部電影，首頁另設有主打電影區塊。
- **搜尋與排序**：可搜尋片名，並依評分或年份排序。
- **類型篩選**：依電影類型篩選，並可與搜尋、排序搭配使用。
- **收藏數量**：顯示電影總數及符合篩選條件的結果數量。
- **電影詳細頁**：閱讀完整心得與評分理由，並透過上一部／下一部導覽切換電影。
- **響應式排版**：針對桌面和較小螢幕設計不同版面。

本網站是個人閱讀與收藏用途，沒有會員系統或訪客投稿功能。

## 使用技術與專案結構

網站使用 **HTML、CSS、原生 JavaScript 和 JSON** 製作，並透過 **GitHub Pages** 發布，不需資料庫或後端服務。

```text
frame-by-frame/
├── index.html            # 首頁
├── movie.html            # 共用電影詳細頁
├── css/style.css         # 網站樣式與響應式排版
├── js/main.js            # 首頁搜尋、排序、類型篩選與卡片
├── js/movie.js           # 電影詳細內容及前後導覽
├── data/movies.json      # 電影資料與個人評論
├── assets/posters/       # 電影海報
├── AGENTS.md             # AI 協作與維護規則
└── README.md             # 專案說明
```

電影內容集中保存在 `data/movies.json`，首頁與詳細頁共用這份資料。新增電影時不必另外複製一個 HTML 頁面。

## 使用 AI 與 AGENTS.md

這個專案也用來練習透過 `AGENTS.md` 管理 AI 輔助開發。`AGENTS.md` 定義了專案架構、電影資料格式、設計原則、新增電影流程，以及修改後應檢查的功能。

AI 可以協助撰寫程式碼、改善排版和潤飾評論，但**不能擅自變更我的評分、原始觀點或加入我沒有表達過的觀影經驗**。評論的修改會先由我確認，再更新到網站。

## 如何新增電影

1. 先閱讀 `AGENTS.md`，確認資料格式與開發規範。
2. 在 `data/movies.json` 新增電影資料，包含 `id`、`title`、`year`、`genre`、`rating`、`poster`、`shortReview`、`synopsis`、`review` 和 `ratingReason`。
3. 如果有可使用的圖片，放入 `assets/posters/`，並在 `poster` 欄位填入正確的相對路徑；沒有圖片時保留空值，由網站顯示文字封面。
4. 確認 JSON 格式、電影 ID、圖片路徑及搜尋、排序、篩選、詳細頁功能都正常。

個人評分與心得以我提供的內容為準，不由 AI 自行產生。

## 本次重新修改的內容（2.4）

這次在原有網站基礎上持續改善，而不是重新建立另一個專案：

- **2.0｜瀏覽功能**：新增電影類型篩選、收藏與結果數量、詳細頁前後導覽。
- **2.2｜電影海報**：加入四部電影的本地圖片，讓首頁和詳細頁共用同一份海報資料。
- **2.3｜視覺改版**：重新設計首頁主視覺與電影卡片，調整成更符合個人電影日記的 Editorial 風格。
- **2.4｜評論優化**：潤飾四部電影的 Short Review、My Thoughts 和 Rating Reason，保留原本的觀點與評分，讓內容更自然、完整且容易閱讀。

未來希望隨著觀看更多電影，持續擴充這份私人電影收藏。

## 本機預覽

在專案根目錄執行：

```bash
python -m http.server 8000
```

再開啟 `http://localhost:8000/`。網站使用 `fetch()` 讀取 JSON，因此建議透過本機伺服器預覽，不要直接雙擊 HTML 檔案。

正式網站：[https://itsusername15.github.io/frame-by-frame/](https://itsusername15.github.io/frame-by-frame/)
