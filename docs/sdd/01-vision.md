# 01 — 願景與平台範圍

**產品需求狀態：P0 已定稿（見 `docs/prd/PRD.md`）。**

## 願景

私人九段式肯定／感恩日記。先服務唯一使用者；Web 與 Mobile 走同一條「今天」主路徑，資料同步。

一套 TypeScript 程式，出三端：

- **Web**：瀏覽器 SPA（`apps/web`）
- **Mobile**：iOS 與 Android 共用同一個 Ionic + Angular build（`apps/mobile`），經 Capacitor 進原生殼

不是三套 UI。P0 不做滿平台能力：沒有管理後台、沒有推播。

## 平台原則

| 原則 | 含義 |
| --- | --- |
| 兩個前端 App | `apps/web` 給瀏覽器；`apps/mobile` 給手機。iOS／Android 共用 Mobile build。 |
| Web 桌面優先 | 同一條「登入 → 今天九段 → 儲存」。禁止 Ionic／Capacitor。 |
| Mobile 手機優先 | 同一條主路徑；用 Ionic 導覽。P0 不用推播、相機。 |
| 能不上 Web 就不上 | P0 例外：主路徑 **Web 與 Mobile 都要**（已拍板）。 |
| 共用一次 | 登入表單、九段表單、data-access、型別只寫一次。 |

## Web vs Mobile 功能表

| 能力 | Web | Mobile | 依據 |
| --- | --- | --- | --- |
| Email／密碼登入、登出 | 要 | 要 | PRD P0 |
| 今天九段讀寫／儲存 | 要 | 要 | PRD P0 |
| 同一帳號資料同步 | 要 | 要 | PRD P0 |
| 管理後台 | 不上 | 不上 | 非目標 |
| FCM 推播 | 無 | 不上（P1） | PRD |
| 歷史列表 | 不上（P1） | 不上（P1） | PRD |

管理後台**只放 Web**（P0 沒有後台）。FCM 推播**只有 Mobile**（P0 不做）。

## 不做

- React Native + 另一套 Web
- 各端各寫 API client
- Functions 去 import Angular 元件
- 對外 REST `/api` 當 SPA 主入口
- 為尚未定稿的 P1／P2 預留欄位或抽象
