# Frame by Frame — Personal Film Journal (2.0)

Frame by Frame 是我個人維護的電影評價網站，記錄自己看過的電影、1～10 分評分、短評、電影大綱與觀影心得。這次 2.0 保留原本的電影日記風格，改善瀏覽和閱讀體驗。

## 網站功能

- 首頁電影卡片與個人評分，目前收錄 **4 部電影**。
- 依名稱搜尋、依年份或評分排序，以及電影類型篩選（可同時使用）。
- 顯示收藏總數與目前篩選的結果數量。
- 點擊電影可閱讀 Synopsis、My Thoughts、Rating Reason。
- 詳情頁可以切換上一部／下一部電影。
- 支援手機與桌面瀏覽，不需要帳號或資料庫。

## 技術與專案結構

- `index.html`：網站首頁
- `movie.html`：共用電影詳情頁
- `css/style.css`：全站樣式
- `js/main.js`：首頁卡片、搜尋、排序、類型篩選
- `js/movie.js`：詳情內容與前後電影導覽
- `data/movies.json`：電影資料與個人評價
- `AGENTS.md`：AI 維護與新增內容的規則

## 如何新增電影

提供電影名稱、年份、類型、評分和個人心得後，請 AI 先閱讀 `AGENTS.md`，再依照既有 JSON 格式增加資料。電影卡片、類型篩選及詳情頁會根據 JSON 自動更新，不需要重新製作網頁。AI 不得自行編造個人評價或擅自修改分數。

## 預覽與發布

在專案資料夾中執行 `python -m http.server 8000`，再到 `http://localhost:8000/` 預覽。由於使用 `fetch()` 讀取 JSON，不建議直接雙擊 HTML 檔案。

GitHub Pages： https://itsusername15.github.io/frame-by-frame/  
Repository： https://github.com/itsusername15/frame-by-frame

## 2.0 修改重點

保留所有原有電影的評分和心得，新增動態類型篩選、篩選結果數量，以及詳情頁前後導覽。`AGENTS.md` 也同步補充了新功能的實作規範與測試要求。
