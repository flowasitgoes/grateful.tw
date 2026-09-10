# 05 — 資料模型

先定欄位，再寫 rules 與 `shared/contracts`，最後才寫 service。不得加未列欄位。

## 資料放哪

| 儲存 | 用途 | 本產品是否使用 |
| --- | --- | --- |
| Firestore | 每天一則、九段文字 | P0 使用 |
| Realtime Database | 高頻訊息 | 不使用 |
| Storage | 照片、檔案 | 不使用 |
| Auth | email／密碼帳號 | P0 使用 |

## Firestore

路徑：`users/{uid}/entries/{entryId}`

| 項目 | 規則 |
| --- | --- |
| `{uid}` | Firebase Auth uid |
| `{entryId}` | 該則的本地日曆日期 `YYYY-MM-DD`（今天＝裝置本地日） |
| 每天 | 同一 uid 最多一則（文件 ID 即日期） |

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `addressing` | string | 否，預設 `""` | 1. 稱呼自己 |
| `safety` | string | 否，預設 `""` | 2. 安全感 |
| `acceptance` | string | 否，預設 `""` | 3. 自我接納 |
| `capability` | string | 否，預設 `""` | 4. 能力 |
| `relationship` | string | 否，預設 `""` | 5. 關係 |
| `creation` | string | 否，預設 `""` | 6. 創造 |
| `abundance` | string | 否，預設 `""` | 7. 金錢 |
| `gratitude` | string | 否，預設 `""` | 8. 感恩 |
| `intention` | string | 否，預設 `""` | 9. 今日意圖 |
| `updatedAt` | timestamp | 寫入時由客戶端設 server timestamp | 上次儲存時間 |

不得另存 `createdAt`、歷史陣列、標籤、句數陣列、或十一章長文。

未寫過的日期：文件不存在。讀取時視為九段皆 `""`（empty，不是 error）。

## Realtime Database

不使用。

## Storage

不使用。

## Security Rules（對齊 SEC-01）

- 未登入：拒絕一切。
- 僅 `request.auth.uid == uid` 可讀寫自己的 `users/{uid}/entries/{entryId}`。
- `entryId` 須符合 `YYYY-MM-DD`。
- 寫入只允許上表欄位；九段皆 string；`updatedAt` 為 timestamp。

## 與 contracts 對齊

型別與九段 key／順序只放 `shared/contracts`，與此檔一一對應。
