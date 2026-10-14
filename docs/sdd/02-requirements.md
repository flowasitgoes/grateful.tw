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
| READ-02 | 十一章各成一篇（`affirmation-1`～`11`）；每日精簡版為第 12 篇；系統化 Affirmation 結構為第 13 篇；Day 14「我願意理解並且接受你」；Day 15「愛情裡的安全感」；Day 16「自信與自我價值」；Day 17「我的價值不需要透過比較來證明」；Day 18「我在親密關係中是安全的」；Day 19「我選擇輕鬆、自在地生活」；Day 20「我值得被愛、被關心、被重視」；Day 21「表達真實的自己是安全的」；Day 22「不同意見與誤會，不代表關係會結束」；Day 23「我可以輕鬆、自在地做自己」；Day 24「我在別人心中是重要的」；Day 25「我值得擁有親密的連結，也允許自己被愛」；Day 26「我值得被慷慨、體貼地對待」；Day 27「我的感受、意願與選擇值得被尊重」；Day 28「我值得被欣賞、被喜歡」；Day 29「我值得被主動親近、被溫柔地愛」；Day 30「愛與關係滋養我的創造力」；Day 31「我值得被支持，我的創造力值得被看見」；Day 32「我值得與愛的人共同創造美好的生活」；Day 33「我選擇用有意識的愛與誠懇對待世界」；Day 34「我值得擁有讓自己安心、被尊重的關係」；Day 35「我感謝健康的身體，讓我體驗生命的豐盛」；Day 36「世界豐富得展開，我正處於一個新的階段」；Day 37「我選擇相信，我的身體是有力量的」；Day 38「我感謝眼前這份美好」；Day 39「給自己的慈愛：願我平安、健康、幸福」；Day 40「給她人與所愛的人：願你幸福，願你自由」；Day 41「給身邊的人：願每個人都被善待」；Day 42「給陌生人與所有生命：願一切眾生安樂」；Day 43「慈愛與界線：願我在關係中保持溫柔與智慧」；Day 44「慈愛的生活：願我的存在為世界帶來美好」；Day 45「每日慈心給予自己」；Day 46「感謝大地，提供製作床墊的材料」；Day 47「感謝原料生產者，將自然資源帶進人類生活」；Day 48「感謝工程師、工廠與所有製造床墊的人」；Day 49「感謝物流、門市與所有讓床墊來到我面前的人」；Day 50「山式」Mountain Pose；Day 51「感謝妳幫助我感覺自己很好」；Day 52「我值得被溫柔地支持，感受到尊嚴、自信與完整」；Day 53「感謝我們可以一起想像未來」。各篇閱讀頁只顯示該篇全文。 | 兩端 |
| READ-03 | 閱讀頁頂欄左側返回圖示（`aria-label`「返回」）可回主界面。 | 兩端 |
| READ-04 | 未知 `id` 回到 `/`。 | 兩端 |
| READ-05 | 閱讀頁 `h1` 不含「一、」等序號；畫面右下角 **Day n**。日期時間暫隱藏。 | 兩端 |
| READ-06 | 閱讀頁正文下方有「上一篇／下一篇」導覽（依 Day 序）；顯示 Day 標籤與篇名；第一篇無上一篇，最後一篇無下一篇。 | 兩端 |
| SEO-01 | 全站文件標題為「感恩日記｜grateful.tw」；有 description、Open Graph（含 `og:image` 1200×630）、canonical、favicon、`robots.txt`、`sitemap.xml`；首頁 JSON-LD 含 WebSite 與 ItemList（全部篇目）。 | Web |
| SEO-02 | 每篇閱讀頁文件標題為「篇名｜感恩日記 Day n｜grateful.tw」；description 為「感恩日記｜篇名。{該篇開頭文意} 適合每日感恩日記與肯定語練習，主題：{1～2 個主題詞}。」；`og:image:alt` 為「篇名｜感恩日記」。 | 兩端 |
| SEO-03 | Facebook／社群爬蟲抓取 `/journals/:id` 時，靜態 HTML 須含該篇 title、description、Open Graph（含該篇 `og:image` `/og/:id.jpg`）、canonical 與 Article JSON-LD（含 author、keywords、about）。 | Web |
| SEO-04 | `build:web` 為每篇產出 1200×630 字卡 JPEG（篇名＋「感恩日記」＋ Day），路徑 `/og/:id.jpg`。全站仍保留 `/og-image.png` 作首頁預設。 | Web |
| SEO-05 | Search Console：提交 `sitemap.xml`；追蹤核心詞「感恩日記、每日感恩、肯定語、Affirmation、自愛、安全感、親密關係、創造力」。可選填 `SITE_GOOGLE_VERIFICATION` 輸出驗證 meta。 | Web |
| SEO-06 | AI 搜尋／引用：`robots.txt` 明確允許 GPTBot、ClaudeBot、PerplexityBot 等；建置產出 `/llms.txt` 與 `/llms-full.txt`（站點說明、核心主題、全部短箋連結與摘要）；首頁 description 清楚陳述「誰／做什麼／主題」；JSON-LD 含 alternateName、sameAs、isAccessibleForFree。 | Web |
| I18N-01 | 預設語言為繁體中文（`zh`）。頂欄正中一顆「中文／EN」toggle；點一下切換；目前語言可辨識。 | 兩端 |
| I18N-02 | 語言偏好寫入 `localStorage`（`grateful.locale`），重新開啟仍記得；切換後 UI 文案、列表副標、閱讀頁篇名與全文、上一篇／下一篇、文件 title／description 一併切換。 | 兩端 |
| I18N-03 | 五十三篇皆有英文正文與英文篇名；`html[lang]` 隨語言為 `zh-Hant` 或 `en`。靜態分享 OG／llms 仍以繁中為主（預設語言）。 | 兩端 |
| DEPLOY-01 | 根目錄設定讓 Vercel 執行 `npm run build:web`（不可只跑 `ng build`），產出 `dist/apps/web/browser`；建置後產每篇 og JPEG、`llms.txt`／`llms-full.txt`，並寫入 `journals/:id/index.html`（SPA shell＋該篇 meta）。 | Web |
| DEPLOY-02 | Vercel 上已存在的 `journals/:id/index.html`、`/og/:id.jpg`、`llms.txt`、`llms-full.txt` 直接提供；其餘前端路由落到 SPA；`robots.txt`、`sitemap.xml`、圖示與預設 `og-image` 以靜態檔提供。 | Web |
