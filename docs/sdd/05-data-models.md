# 05 — 資料模型

靜態目錄，寫死在前端。P0 不寫入 localStorage／Firebase。

## Journal

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| `id` | string | 路由用 |
| `title` | string | 列表標題（皆為「感恩日記」）。閱讀頁 `h1` 用篇名，見下表。 |
| `createdAt` | string | ISO 8601（含時區）。畫面顯示 `YYYY-MM-DD HH:mm`，時區 `Asia/Taipei` |

不得加摘要、標籤、草稿、作者欄。

## 現有篇目（13 篇）

列表標題皆為「感恩日記」。`id` 為 `affirmation-1` … `affirmation-13`。閱讀頁 `h1` 為該篇篇名：

| id | 篇名 |
| --- | --- |
| `affirmation-1`～`11` | 十一章篇名（不含「一、」等序號，例如 `愛、信任與安全感`） |
| `affirmation-12` | 每日精簡版 |
| `affirmation-13` | 系統化 Affirmation 結構 |

`createdAt` 由舊到新：`affirmation-1` = `2026-09-01T17:08:00+08:00`，其後每篇往後一天同一時刻，至 `affirmation-13` = `2026-09-13T17:08:00+08:00`。列表依 `createdAt` 由新到舊，故最新（Day 13）在最前。
