# 02 — 需求與 Acceptance Criteria

## 產品需求

| ID | Acceptance Criteria | 平台 |
| --- | --- | --- |
| HOME-01 | 打開 `/` 看到日記**格狀磁貼**（Windows 一格一格），不是單列清單。每格可點。 | 兩端 |
| HOME-02 | 列表依 `createdAt` 由新到舊。 | 兩端 |
| HOME-03 | 每一列顯示標題，以及建立日期與時間（格式 `YYYY-MM-DD HH:mm`），靠右對齊。 | 兩端 |
| HOME-05 | 每格 Day 標籤下方顯示副標（例如 `愛、信任與安全感`），字小、顏色 `#666`。 | 兩端 |
| HOME-04 | 頂欄右側有漢堡按鈕（`aria-label`「選單」）。點擊不開啟選單、不導向新頁。 | 兩端 |
| READ-01 | 點列表項目進入該篇。閱讀頁顯示同一建立日期時間，以及全文。沒有 textarea／儲存。 | 兩端 |
| READ-02 | 十一章各成一篇（`affirmation-1`～`11`）；每日精簡版為第 12 篇；系統化 Affirmation 結構為第 13 篇。各篇閱讀頁只顯示該篇全文。 | 兩端 |
| READ-03 | 閱讀頁頂欄左側返回圖示（`aria-label`「返回」）可回主界面。 | 兩端 |
| READ-04 | 未知 `id` 回到 `/`。 | 兩端 |
| READ-05 | 閱讀頁 `h1` 不含「一、」等序號；畫面右下角 **Day n** 在上，日期時間在下。 | 兩端 |
| SEO-01 | 全站文件標題為「感恩日記｜grateful.tw」；有 description、Open Graph、canonical、`robots.txt`、`sitemap.xml`。 | Web |
| SEO-02 | 每篇閱讀頁文件標題為「篇名｜Day n｜grateful.tw」，description 取該篇開頭文意。 | 兩端 |
