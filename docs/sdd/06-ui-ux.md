# 06 — UI / UX

**狀態：產品路由與文案待人類依 PRD 定稿。**

loading 與空狀態不可混淆。哪個 route 只在 Mobile 必須寫清。

## 設計系統

- Token／共用樣式入口：`shared/frontend/styles`
- 可重用元件：`shared/frontend/ui`（兩端共用）
- Web 專用：data table、admin sidebar → `apps/web`
- Mobile 專用：tabs、swipe、Ionic modal → `apps/mobile/src/app/ui` 或 `layout/`

## Web 路由（`apps/web`）

| 路徑 | 畫面 | 狀態（loading / empty / error） | 文案 |
| --- | --- | --- | --- |
| `/` | （待填） | | |

## Mobile 路由（`apps/mobile`）

| 路徑 | 畫面 | 僅 Mobile | 狀態 | 文案 |
| --- | --- | --- | --- | --- |
| `/` | （待填） | | | |

## 平台差異

| 項目 | Web | Mobile |
| --- | --- | --- |
| 導覽 | 桌面 layout／之後的 admin sidebar | Ionic tabs／stack |
| 管理後台 | 只在 Web | 無 |
| 推播 UI | 無 | 僅 Mobile（若 PRD 需要） |

## 空狀態與 Loading

| 畫面 | Loading | Empty | Error |
| --- | --- | --- | --- |
| （待填） | 不可與 empty 相同文案 | | |
