# 04 — API 契約（Callable／事件）

**沒有對外 REST `/api`。** 前端用 Firebase Client SDK；需要原子性或不可信客戶端的事才加 Callable。

**狀態：產品契約待人類依 PRD 定稿。AI 不得自行新增 Callable 或 HTTP 路由。**

## 原則

- 一般讀寫：Client SDK + Security Rules。
- Callable：有限幾支，寫清 request／response／錯誤碼。
- Trigger／排程：寫清來源路徑、事件、副作用。
- Functions 只能 import `@app/contracts`，不可 import `@app/frontend/*`。

## Callable

| 名稱 | 誰可呼叫 | Request | Response | 錯誤碼 | 依據 |
| --- | --- | --- | --- | --- | --- |
| （待填） | | | | | PRD / AC |

## 觸發與排程

| 名稱 | 觸發 | 副作用 | 依據 |
| --- | --- | --- | --- |
| （待填） | | | PRD / AC |

## 明確不做

- `functions/src` 底下的 Express／`onRequest` 當 SPA 主 API。
- 各端各寫一套 REST client。
