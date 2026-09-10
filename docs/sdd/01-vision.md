# 01 — 願景與平台範圍

**產品需求狀態：待人類定稿（見 `docs/prd/PRD.md`）。本文只定工程願景與平台切法。**

## 願景

一套 TypeScript 程式，出三端：

- **Web**：瀏覽器 SPA（`apps/web`）
- **Mobile**：iOS 與 Android 共用同一個 Ionic + Angular build（`apps/mobile`），經 Capacitor 進原生殼

不是三套 UI。能不上 Web 的能力就不上 Web。少做一整條產品線，比「三端功能 100% 相同」便宜。

## 平台原則

| 原則 | 含義 |
| --- | --- |
| 兩個前端 App | `apps/web` 給瀏覽器；`apps/mobile` 給手機。iOS／Android 共用 Mobile build。 |
| Web 桌面優先 | 探索、表單、管理後台放這裡。禁止 Ionic／Capacitor。 |
| Mobile 手機優先 | tabs、stack、modal、手勢。推播、相機、原生登入走 Capacitor。 |
| 能不上 Web 就不上 | 平台範圍刻意不做滿。具體功能表等 PRD 定稿後寫入下方對照表。 |
| 共用一次 | 登入表單、Button、data-access、型別只寫一次，兩端一起吃。 |

## Web vs Mobile 功能表

**待 PRD 定稿後填。** 在填表前，AI 不得假設某功能上哪一端。

| 能力 | Web | Mobile | 依據 |
| --- | --- | --- | --- |
| （待填） | | | PRD / 本表 |

管理後台**只放 Web**。FCM 推播**只有 Mobile**。

## 不做

- React Native + 另一套 Web
- 各端各寫 API client
- Functions 去 import Angular 元件
- 對外 REST `/api` 當 SPA 主入口
- 為尚未定稿的 P1／P2 預留欄位或抽象
