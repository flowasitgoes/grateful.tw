# 06 — UI / UX

P0 是閱讀頁，不是表單。沒有 loading／empty 與輸入的混淆問題。

## 路由

| 路徑 | 畫面 | 文案 |
| --- | --- | --- |
| `/today` | 第一篇日記全文 | 標題「冠均的 Affirmation」 |
| `/` | 重導向 `/today` | — |

Web：桌面文章版面。Mobile：Ionic header 標題「冠均的 Affirmation」+ `ion-content` 同一篇文章。

沒有 `/login`、沒有儲存、沒有登出。

## 畫面

單一捲動文章，順序：

1. 十一章 Affirmation
2. 每日精簡版
3. 系統化 Affirmation 結構（含九段公式與說明）
