# 06 — UI / UX

loading 與空狀態不可混淆。P0 沒有僅 Mobile 的產品 route。

## 設計系統

- Token／共用樣式入口：`shared/frontend/styles`
- 可重用元件：`shared/frontend/ui`（登入表單、九段表單、Button，兩端共用）
- Web 專用：桌面頁寬、頁面 layout → `apps/web`
- Mobile 專用：Ionic header／content → `apps/mobile` layout
- P0 不做 admin sidebar、data table、tabs 多頁、swipe

## 九段標籤（兩端相同）

| 順序 | key | 標籤 |
| --- | --- | --- |
| 1 | addressing | 稱呼自己 |
| 2 | safety | 安全感 |
| 3 | acceptance | 自我接納 |
| 4 | capability | 能力 |
| 5 | relationship | 關係 |
| 6 | creation | 創造 |
| 7 | abundance | 金錢 |
| 8 | gratitude | 感恩 |
| 9 | intention | 今日意圖 |

每段輔助文案：**1～3 句，可留空。**

## Web 路由（`apps/web`）

| 路徑 | 畫面 | 狀態（loading / empty / error） | 文案 |
| --- | --- | --- | --- |
| `/login` | 登入 | error＝登入失敗 | 標題「登入」；欄位 email、密碼；按鈕「登入」；失敗「登入失敗」 |
| `/today` | 今天九段 | 見下表 | 標題「今天」；按鈕「儲存」「登出」 |
| `/` | 重導向 | 已登入 → `/today`；未登入 → `/login` | — |

未登入訪問 `/today` → `/login`。已登入訪問 `/login` → `/today`。

## Mobile 路由（`apps/mobile`）

| 路徑 | 畫面 | 僅 Mobile | 狀態 | 文案 |
| --- | --- | --- | --- | --- |
| `/login` | 登入（Ionic） | 否，產品相同 | 同 Web | 同 Web |
| `/today` | 今天九段（`ion-content`） | 否 | 同 Web | 同 Web |
| `/` | 同 Web 重導向 | 否 | | |

P0 不做 bottom tabs。

## 平台差異

| 項目 | Web | Mobile |
| --- | --- | --- |
| 導覽 | 桌面單頁 layout | Ionic header + content |
| 主路徑 | 登入／今天 | 登入／今天 |
| 管理後台 | 無 | 無 |
| 推播 UI | 無 | 無 |

## 空狀態與 Loading

| 畫面 | Loading | Empty | Error | Success |
| --- | --- | --- | --- | --- |
| 登入 | 「登入中」 | 空白表單（不是 empty 頁） | 「登入失敗」 | 進入今天 |
| 今天（讀取） | 「讀取中」 | 九段皆空：仍顯示九個欄位，不要寫「沒有日記」或錯誤 | 「讀取失敗」 | 顯示已存文字 |
| 今天（儲存） | 「儲存中」 | 不適用 | 「儲存失敗」 | 「已儲存」 |

「讀取中」不可與「九段皆空」使用同一文案。
