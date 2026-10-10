# PRD — grateful.tw

**狀態：P0 為極簡只讀感恩日記（列表＋閱讀）。未列的功能不要做。**

## 產品

- 名稱：grateful.tw
- 類型：私人感恩日記
- 端：Web（`apps/web`）+ Mobile（`apps/mobile`）
- 誰：先只有冠均自己。不是公開平台。
- 調性：極簡。沒有多餘裝飾、沒有輸入。

## 誰、核心流程、P0／非 P0

**核心流程：** 打開網站 → 主界面格狀磁貼（最新在左上）→ 點一格 → 閱讀該篇全文。

P0 **沒有撰寫界面、沒有登入、不接 Firebase 資料。** 頂欄漢堡選單第一列連 Instagram。靜態 Web 暫部署 **Vercel**（連 GitHub `main`）。

| 優先級 | User Story | 備註 |
| --- | --- | --- |
| P0 | 主界面以格狀磁貼列出日記，最新在最前；可點進去閱讀。14 篇。 | 列表 |
| P0 | 每一篇顯示建立的日期與時間。 | 列表與閱讀頁 |
| P0 | 右上漢堡從右側滑出全高選單；第一列為 IG 圖示＋「riddles.tw」，開 https://www.instagram.com/riddles.tw | 選單 |
| P0 | 十一章、每日精簡版、系統化 Affirmation 結構，以及 Day 14 短箋，共 14 篇只讀文稿。 | 只讀 |
| P0 | 全站與每篇有獨立文件標題與 description。 | SEO |
| P0 | 靜態 Web 能從 GitHub 部署到 Vercel（grateful.tw）。 | 部署 |
| P1 | 漢堡選單其他項目 | 不做 |
| P1 | 新增／編輯日記 | 不做 |
| P1 | Firebase、登入 | 不做 |

## 非目標（Non-goals）

- 輸入表單、儲存、登入、Firebase
- 漢堡選單第二列以後、設定頁、搜尋、標籤
- 自建 REST `/api`、Vercel Serverless 當產品 API
- 未寫進本 PRD 的功能

## 變更紀錄

| 日期 | 作者 | 變更 |
| --- | --- | --- |
| 2026-09-10 | 冠均 | 主界面 10 篇同文磁貼（看版面）；最新在前 |
| 2026-09-10 | 冠均 | 拆成 13 篇：十一章 + 每日精簡版 + 系統化結構；標籤 Day 1–Day 13 |
| 2026-09-10 | 冠均 | 全站與每篇 SEO（title、description、sitemap） |
| 2026-09-10 | 冠均 | 暫用九宮格圖作 og:image、favicon、app icon |
| 2026-09-10 | 冠均 | P0 靜態 Web 暫改 Vercel 部署（不經 Firebase Hosting） |
| 2026-10-10 | 冠均 | 漢堡選單第一列：IG＋riddles.tw |
| 2026-10-10 | 冠均 | 漢堡改為右側滑出全高選單 |
| 2026-10-10 | 冠均 | 新增 Day 14：謝謝你剛剛來找我 |
