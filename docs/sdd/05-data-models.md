# 05 — 資料模型

靜態目錄，寫死在前端。P0 不寫入 localStorage／Firebase。

## Journal

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| `id` | string | 路由用 |
| `title` | string | 列表與閱讀標題 |
| `createdAt` | string | ISO 8601（含時區）。畫面顯示 `YYYY-MM-DD HH:mm`，時區 `Asia/Taipei` |

不得加摘要、標籤、草稿、作者欄。

## 現有篇目

| id | title | createdAt |
| --- | --- | --- |
| `affirmation-1` | 冠均的 Affirmation | `2026-09-10T17:08:00+08:00` |

`createdAt` 為使用者提供此文稿當日（台北時間）。內文仍為靜態 template，不拆成可編輯欄位。
