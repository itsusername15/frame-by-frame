# Frame by Frame — Personal Film Journal

Frame by Frame 是我製作的個人電影評價網站，主要用來記錄自己看過的電影以及觀影心得。

網站會顯示每部電影的基本資訊、1～10 分的個人評分及簡短評價。點進電影後，可以閱讀劇情大綱、完整心得和評分理由。另外也加入了搜尋和排序功能，方便瀏覽不同電影。

## 使用技術

- HTML
- CSS
- JavaScript
- JSON
- GitHub Pages

網站使用 `movies.json` 儲存電影資料，不需要額外建立資料庫或後端。

## 專案結構

- `index.html`：網站首頁
- `movie.html`：電影詳細介紹頁面
- `css/`：網站樣式
- `js/`：搜尋、排序和頁面功能
- `data/movies.json`：電影資料及個人評價
- `AGENTS.md`：網站開發規則

## 新增電影

新增電影時，會先提供電影名稱、評分及個人心得，再讓 AI 依照 `AGENTS.md` 的規則更新 `movies.json`。

由於網站的電影卡片和詳細頁面使用共用格式，因此未來新增電影時，不需要重新設計整個網站。

## 網站連結

https://itsusername15.github.io/frame-by-frame/
