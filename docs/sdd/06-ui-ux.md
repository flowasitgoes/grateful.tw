# 06 — UI / UX

極簡。無輸入。漢堡選單目前只有一列。選單從畫面右側滑出全高面板，不是下拉小塊。

## 共用頂欄

- 左側：主界面顯示「grateful.tw」；閱讀頁顯示返回箭頭圖示，`aria-label` 繁中「返回」／英文「Back」
- 正中：語言 toggle 一顆按鈕顯示「中文／EN」（目前語言粗體）；點一下在 `zh`／`en` 之間切換（手機好點）
- 右側：漢堡圖示按鈕，`aria-label`「選單／Menu」；開啟後改為「關閉／Close」
- 點漢堡：從右側滑出較窄的全高選單；左邊內容保持清晰、不模糊。點遮罩或關閉可關
- 選單第一列：IG 圖示＋「riddles.tw」，開 `https://www.instagram.com/riddles.tw`（新分頁、`rel="noopener noreferrer"`）
- 語言：預設繁中；切換後存 `localStorage` `grateful.locale`（`zh`｜`en`）

## 語言

- 繁中／英文覆蓋：頂欄、選單、列表副標、閱讀頁篇名與全文、上一篇／下一篇
- `document.documentElement.lang`：`zh-Hant` 或 `en`
- 靜態 OG／llms／sitemap 仍以繁中為權威預設（外國人進站後用切換看英文）

## 路由

| 路徑 | 畫面 |
| --- | --- |
| `/` | 主界面：日記列表 |
| `/journals/:id` | 該篇閱讀 |
| `/today` | 重導向 `/journals/affirmation-1` |
| 未知 id | 重導向 `/` |

## 主界面

- Windows 風格**格狀磁貼**，不是一列一列清單
- 最新的格子在最前（左上起、由左而右再往下）：**Day 53**
- 每格左上角：**Day 1**～**Day 53**（對應 `affirmation-1`～`53`），粗體、字級大於標題
- Day 標籤正下方副標，小字、顏色 `#666`：`愛、信任與安全感`（第 12 篇起用篇名）
- 每格其餘：標題靠右對齊；建立日期時間暫隱藏
- 整格可點
- 53 篇，各篇內文不同

## 閱讀頁

- 頂欄左側返回圖示，點了回主界面
- 標題為篇名，不含「一、」等序號
- 畫面右下角：**Day n**；建立日期時間暫隱藏
- 其後為**該篇**全文（不是把五十三篇合成一頁）
- 正文下方「上一篇／下一篇」：依 Day 序相鄰；文案為「上一篇／下一篇」＋ `Day n · 篇名`；可點進相鄰閱讀頁

## 空狀態

P0 至少有一篇，不做空列表畫面。

## SEO

- 全站：`感恩日記｜grateful.tw`；description、og、canonical 指向 `https://grateful.tw/`
- 首頁預設 `og:image`：`/og-image.png`（九宮格，1200×630）；首頁 JSON-LD 為 WebSite＋ItemList
- favicon：16／32 PNG 與 `favicon.ico`；加入主畫面用 180／192／512
- 閱讀頁：`篇名｜感恩日記 Day n｜grateful.tw`；description 為 `感恩日記｜篇名。{開頭文意} 適合每日感恩日記與肯定語練習，主題：{主題詞}。`；`og:image` 為 `/og/:id.jpg`；`og:image:alt` 為 `篇名｜感恩日記`；canonical 為該篇 URL
- Article JSON-LD：含 `author`（冠均）、`keywords`、`about`
- 分享／爬蟲：`build:web` 產每篇字卡 PNG 與 `journals/:id/index.html`（SPA shell＋該篇 meta／JSON-LD）
- Search Console 核心追蹤詞：感恩日記、每日感恩、肯定語、Affirmation、自愛、安全感、親密關係、創造力；提交 `sitemap.xml`；可選 `SITE_GOOGLE_VERIFICATION`
- AI 搜尋：`/llms.txt`、`/llms-full.txt`；`robots.txt` 允許主要 AI 爬蟲；全站 description 清楚說明 grateful.tw 為繁中感恩日記／肯定語站
- `apps/web/public/robots.txt`、`sitemap.xml` 進 Web 靜態產出；`llms*.txt` 由 `build:web` 寫入產出目錄
- P0 由 Vercel 提供靜態檔與 SPA fallback；不得為路由自建 REST `/api`
