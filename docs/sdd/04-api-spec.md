# 04 — API 契約（Callable／事件）

**沒有對外 REST `/api`。** 前端用 Firebase Client SDK；需要原子性或不可信客戶端的事才加 Callable。

## 原則

- 一般讀寫：Client SDK + Security Rules。
- Callable：有限幾支，寫清 request／response／錯誤碼。
- Trigger／排程：寫清來源路徑、事件、副作用。
- Functions 只能 import `@app/contracts`，不可 import `@app/frontend/*`。

## P0

日記讀寫與 Auth **不走 Callable**。

- Auth：Firebase Auth email／密碼（Client SDK）
- 今天一則：Firestore Client SDK，路徑見 `05-data-models.md`
- 權限：Security Rules（`SEC-01`）

## Callable

| 名稱 | 誰可呼叫 | Request | Response | 錯誤碼 | 依據 |
| --- | --- | --- | --- | --- | --- |
| （無） | — | — | — | — | P0 不需要 |

## 觸發與排程

| 名稱 | 觸發 | 副作用 | 依據 |
| --- | --- | --- | --- |
| （無） | — | — | P0 不需要 |

## 明確不做

- `functions/src` 底下的 Express／`onRequest` 當 SPA 主 API。
- 各端各寫一套 REST client。
- 為同步或儲存自建 Callable。
