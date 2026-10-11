# 02 — 需求與 Acceptance Criteria

## 產品需求

| ID | Acceptance Criteria | 平台 |
| --- | --- | --- |
| HOME-01 | 打開 `/` 看到日記**格狀磁貼**（Windows 一格一格），不是單列清單。每格可點。 | 兩端 |
| HOME-02 | 列表依 `createdAt` 由新到舊。 | 兩端 |
| HOME-03 | 每一列顯示標題，靠右對齊。建立日期時間資料仍在，畫面暫隱藏。 | 兩端 |
| HOME-05 | 每格 Day 標籤下方顯示副標（例如 `愛、信任與安全感`），字小、顏色 `#666`。 | 兩端 |
| HOME-04 | 頂欄右側漢堡按鈕（`aria-label`「選單」）從畫面右側滑出全高選單。點遮罩或關閉可關。第一列為 IG 圖示＋「riddles.tw」，連到 `https://www.instagram.com/riddles.tw`，新分頁開啟。 | 兩端 |
| READ-01 | 點列表項目進入該篇。閱讀頁顯示全文。建立日期時間資料仍在，畫面暫隱藏。沒有 textarea／儲存。 | 兩端 |
| READ-02 | 十一章各成一篇（`affirmation-1`～`11`）；每日精簡版為第 12 篇；系統化 Affirmation 結構為第 13 篇；Day 14「我願意理解並且接受你」；Day 15「愛情裡的安全感」；Day 16「自信與自我價值」；Day 17「我的價值不需要透過比較來證明」；Day 18「我在親密關係中是安全的」；Day 19「我選擇輕鬆、自在地生活」；Day 20「我值得被愛、被關心、被重視」；Day 21「表達真實的自己是安全的」；Day 22「不同意見與誤會，不代表關係會結束」；Day 23「我可以輕鬆、自在地做自己」；Day 24「我在別人心中是重要的」；Day 25「我值得擁有親密的連結，也允許自己被愛」；Day 26「我值得被慷慨、體貼地對待」；Day 27「我的感受、意願與選擇值得被尊重」；Day 28「我值得被欣賞、被喜歡」；Day 29「我值得被主動親近、被溫柔地愛」；Day 30「愛與關係滋養我的創造力」；Day 31「我值得被支持，我的創造力值得被看見」；Day 32「我值得與愛的人共同創造美好的生活」；Day 33「我選擇用有意識的愛與誠懇對待世界」；Day 34「我值得擁有讓自己安心、被尊重的關係」；Day 35「我感謝健康的身體，讓我體驗生命的豐盛」。各篇閱讀頁只顯示該篇全文。 | 兩端 |
| READ-03 | 閱讀頁頂欄左側返回圖示（`aria-label`「返回」）可回主界面。 | 兩端 |
| READ-04 | 未知 `id` 回到 `/`。 | 兩端 |
| READ-05 | 閱讀頁 `h1` 不含「一、」等序號；畫面右下角 **Day n**。日期時間暫隱藏。 | 兩端 |
| READ-06 | 閱讀頁正文下方有「上一篇／下一篇」導覽（依 Day 序）；顯示 Day 標籤與篇名；第一篇無上一篇，最後一篇無下一篇。 | 兩端 |
| SEO-01 | 全站文件標題為「感恩日記｜grateful.tw」；有 description、Open Graph（含 `og:image` 1200×630）、canonical、favicon、`robots.txt`、`sitemap.xml`；首頁 JSON-LD 含 WebSite 與 ItemList（全部篇目）。 | Web |
| SEO-02 | 每篇閱讀頁文件標題為「篇名｜感恩日記 Day n｜grateful.tw」；description 為「感恩日記｜篇名。{該篇開頭文意} 適合每日感恩日記與肯定語練習，主題：{1～2 個主題詞}。」；`og:image:alt` 為「篇名｜感恩日記」。 | 兩端 |
| SEO-03 | Facebook／社群爬蟲抓取 `/journals/:id` 時，靜態 HTML 須含該篇 title、description、Open Graph（含該篇 `og:image` `/og/:id.jpg`）、canonical 與 Article JSON-LD（含 author、keywords、about）。 | Web |
| SEO-04 | `build:web` 為每篇產出 1200×630 字卡 JPEG（篇名＋「感恩日記」＋ Day），路徑 `/og/:id.jpg`。全站仍保留 `/og-image.png` 作首頁預設。 | Web |
| SEO-05 | Search Console：提交 `sitemap.xml`；追蹤核心詞「感恩日記、每日感恩、肯定語、Affirmation、自愛、安全感、親密關係、創造力」。可選填 `SITE_GOOGLE_VERIFICATION` 輸出驗證 meta。 | Web |
| DEPLOY-01 | 根目錄設定讓 Vercel 執行 `npm run build:web`（不可只跑 `ng build`），產出 `dist/apps/web/browser`；建置後產每篇 og PNG，並寫入 `journals/:id/index.html`（SPA shell＋該篇 meta）。 | Web |
| DEPLOY-02 | Vercel 上已存在的 `journals/:id/index.html` 與 `/og/:id.jpg` 直接提供；其餘前端路由落到 SPA；`robots.txt`、`sitemap.xml`、圖示與預設 `og-image` 以靜態檔提供。 | Web |
