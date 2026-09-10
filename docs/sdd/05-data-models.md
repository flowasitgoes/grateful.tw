# 05 — 資料模型

**狀態：待人類依 PRD 定稿。先定欄位，再寫 rules 與 `shared/contracts`，最後才寫 service。**

AI 不得自行加 collection、欄位或預留 P1／P2 結構。架構示例中的配對／聊天／錢包**不是**本產品模型。

## 資料放哪

| 儲存 | 用途 | 本產品是否使用 |
| --- | --- | --- |
| Firestore | 業務主資料 | 待 PRD 確認 |
| Realtime Database | 高頻訊息 | 待 PRD 確認 |
| Storage | 照片、檔案 | 待 PRD 確認 |

## Firestore

| Collection | 文件 ID | 欄位 | 備註 |
| --- | --- | --- | --- |
| （待填） | | | |

## Realtime Database

| 路徑 | 節點 | 備註 |
| --- | --- | --- |
| （待填） | | |

## Storage

| 路徑 | 內容 | 備註 |
| --- | --- | --- |
| （待填） | | |

## 與 contracts 對齊

定稿後：型別與常數只放 `shared/contracts`，與此檔欄位一一對應。Security Rules 只允許規格內的讀寫。
