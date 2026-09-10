# 01 — 願景與平台範圍

**產品需求狀態：P0 已定稿（見 `docs/prd/PRD.md`）。**

## 願景

私人肯定／感恩日記。先服務唯一使用者。P0 只讀呈現第一篇「冠均的 Affirmation」。

## 平台原則

| 原則 | 含義 |
| --- | --- |
| 兩個前端 App | Web 與 Mobile 同一篇文章。 |
| Web 桌面優先 | 閱讀版面。禁止 Ionic／Capacitor。 |
| Mobile 手機優先 | Ionic header + content。 |
| 能不上 Web 就不上 | P0 例外：Web 與 Mobile 都要能讀。 |

## Web vs Mobile 功能表

| 能力 | Web | Mobile | 依據 |
| --- | --- | --- | --- |
| 只讀第一篇 Affirmation | 要 | 要 | PRD P0 |
| 輸入／儲存 | 不上 | 不上 | PRD |
| 登入、Firebase | 不上（P1） | 不上（P1） | PRD |
