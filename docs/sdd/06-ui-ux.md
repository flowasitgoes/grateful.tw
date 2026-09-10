# 06 — UI / UX

極簡。無輸入。漢堡不開功能。

## 共用頂欄

- 左側：主界面顯示「grateful.tw」；閱讀頁顯示返回箭頭圖示，`aria-label`「返回」
- 右側：漢堡圖示按鈕，`aria-label`「選單」。點了沒有選單、沒有提示文案。

## 路由

| 路徑 | 畫面 |
| --- | --- |
| `/` | 主界面：日記列表 |
| `/journals/:id` | 該篇閱讀 |
| `/today` | 重導向 `/journals/affirmation-1` |
| 未知 id | 重導向 `/` |

## 主界面

- Windows 風格**格狀磁貼**，不是一列一列清單
- 最新的格子在最前（左上起、由左而右再往下）：**Day 13**
- 每格左上角：**Day 1**～**Day 13**（對應 `affirmation-1`～`13`），粗體、字級大於標題
- Day 標籤正下方副標，小字、顏色 `#666`：`愛、信任與安全感`（第 12、13 篇用篇名）
- 每格其餘：標題＋建立日期時間，靠右對齊
- 整格可點
- 13 篇，各篇內文不同

## 閱讀頁

- 頂欄左側返回圖示，點了回主界面
- 標題為篇名，不含「一、」等序號
- 畫面右下角：**Day n** 在上，建立日期時間（`YYYY-MM-DD HH:mm`）在下，靠右
- 其後為**該篇**全文（不是把十三篇合成一頁）

## 空狀態

P0 至少有一篇，不做空列表畫面。

## SEO

- 全站：`感恩日記｜grateful.tw`；description、og、canonical 指向 `https://grateful.tw/`
- `og:image` 暫用九宮格圖，1200×630（方圖置中、底色 `#f2f2f2`）
- favicon：16／32 PNG 與 `favicon.ico`；加入主畫面用 180／192／512
- 閱讀頁：`篇名｜Day n｜grateful.tw`；description 為該篇開頭文意；canonical 為該篇 URL
- `apps/web/public/robots.txt`、`sitemap.xml` 進 Web 靜態產出
