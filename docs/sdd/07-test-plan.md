# 07 — 測試計畫

改什麼就跑什麼。

## 對齊資料夾

| 改什麼 | 跑什麼 |
| --- | --- |
| 共用純函式、service | `tests/unit`（Vitest） |
| Callable、rules | `tests/integration` + emulator |
| Web 頁 | `ng test web` |
| Mobile 頁 | `ng test mobile` |
| 跨端契約 | `shared/contracts` 的 unit |

CI 建議：`test:web` + `test:mobile` + `test:unit` + `test:integration`。

## 產品案例（對齊 AC）

| 案例 | 層 | 要測 | 依據 |
| --- | --- | --- | --- |
| 九段 key 順序與預設空字串 | `tests/unit` + contracts | 固定九 key，不可多不可少 | TODAY-01、05 |
| 未登入不能讀寫 entries | `tests/integration` + emulator | Rules 拒絕 | SEC-01 |
| 只能讀寫自己的 uid | `tests/integration` | 他人路徑拒絕 | SEC-01 |
| 可寫九段 string + updatedAt | `tests/integration` | 允許；多餘欄位拒絕 | 05、TODAY-03 |
| 登入／今天畫面狀態文案 | `ng test web`、`ng test mobile` | loading ≠ empty；失敗文案 | AUTH-*、TODAY-*、06 |

## E2E

| 案例 | 端 | 步驟 | 依據 AC |
| --- | --- | --- | --- |
| 登入後存今天再重整 | Web | 登入 → 填至少一段 → 儲存 → 重整 → 內容仍在 | AUTH-01、TODAY-03、TODAY-04 |
| 同帳號跨端 | Web + Mobile | 一端儲存，另一端打開今天看到同一內容 | TODAY-05 |

E2E 可在 Auth＋今天主路徑實作後再補跑；實作當次至少要有 rules 整合測試與 contracts unit。

## 指令

```bash
npm run test:web
npm run test:mobile
npm run test:unit
npm run test:integration
```
