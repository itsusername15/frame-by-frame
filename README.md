# Frame by Frame — Personal Film Journal

這是一個自己維護的個人電影評價網站。首頁可瀏覽電影卡片、依標題搜尋及依分數／年份排序；點擊電影可閱讀大綱、個人心得與評分理由。目前有三部：10 Things I Hate About You（8/10）、Inception（10/10）、Past Lives（7/10）。

## 專案技術
HTML、CSS、原生 JavaScript、`data/movies.json`；不需要後端、帳號、資料庫或 API Key。詳細開發規則見 `AGENTS.md`。

## 如何在自己的電腦預覽
因為網頁會用 JavaScript 的 `fetch()` 讀取 JSON，**不要直接雙擊 `index.html` 透過 `file://` 開啟**。在專案根目錄執行：

```bash
python -m http.server 8000
```

再瀏覽 `http://localhost:8000/`。若未安裝 Python，也可以直接用 GitHub Pages 預覽。

## 如何新增電影（示範給 AI 的指令）
> 請先讀 AGENTS.md，沿用目前的網站架構，依照我提供的電影資訊、評分和感想，在 data/movies.json 新增一部電影。不得捏造我的觀點、不得更改現有評分。新增後請檢查資料格式、首頁卡片與詳情連結。

只要依照既有 JSON 欄位新增一筆電影，通常不必修改 HTML、CSS 或 JS。若沒有合法可用海報，讓 `poster` 保留空字串，網站會顯示文字封面。

## GitHub Pages 上線
1. 在 GitHub 建立 Public Repository，例如 `frame-by-frame`。
2. 上傳**專案根目錄裡的所有檔案與資料夾**，確保 `index.html` 和 `AGENTS.md` 在 Repo 最上層，不是多包一層 `frame-by-frame/`。
3. 前往 Repository 的 `Settings → Pages → Build and deployment`。
4. `Source` 選 `Deploy from a branch`，Branch 選 `main`，Folder 選 `/(root)`，按 Save。
5. 部署完成後，網站通常為 `https://你的帳號.github.io/frame-by-frame/`。打開首頁與三部電影詳情測試。

## 作業驗證建議
目前三部電影已經存在。可使用新的 Codex 工作階段，要求它閱讀 `AGENTS.md`，在不改版型的前提下新增第四部你實際看過的電影，並用 Git diff 檢視改動是否只在 `data/movies.json`。如果想展示「第三部由 AI 新增」的過程，也可以在 Git commit 歷史中先建立只有前兩部的版本，再用 Codex 按規則加入 Past Lives；**不要把原本已寫好的心得當作 AI 自己生成**。

## 素材
本專案初版沒有直接附電影海報。電影海報通常有著作權，請確認授權或使用允許使用的圖片來源，再放進 `assets/posters/` 並填寫相對路徑。
