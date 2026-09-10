# 07 — 測試計畫

改什麼就跑什麼。產品案例等 AC 定稿後補列。

## 對齊資料夾

| 改什麼 | 跑什麼 |
| --- | --- |
| 共用純函式、service | `tests/unit`（Vitest） |
| Callable、rules | `tests/integration` + emulator |
| Web 頁 | `ng test web` |
| Mobile 頁 | `ng test mobile` |
| 跨端契約 | `shared/contracts` 的 unit |

CI 建議：`test:web` + `test:mobile` + `test:unit` + `test:integration`。

## 覆蓋率

產品 AC 定稿後再定門檻。工程骨架階段：能 build、能依上表對應即可，不為未寫的功能寫測試。

## E2E

| 案例 | 端 | 步驟 | 依據 AC |
| --- | --- | --- | --- |
| （待填） | | | |

## 指令

```bash
npm run test:web
npm run test:mobile
npm run test:unit
npm run test:integration
```
