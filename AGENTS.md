# grateful.tw — AI 工作規則

規格是唯一權威。不以現有程式碼反推需求。未寫進規格的功能不要做。

## 固定流程

```
PRD / SDD → Task 規劃 → Spec Check → 方案審閱 → 實作 → 測試 → 結果回報 → 合併
```

1. 人類先定 PRD／SDD。
2. AI 負責拆 task、對規格實作、測試、回報。
3. 進程式碼前必須 **Spec Check**：範圍、AC、資料模型、API、UI 狀態、測試都要能對上。缺漏就停、回報，不要自己補需求。
4. 只有改執行邏輯才建 task。改 PRD／SDD／README 免建 task。
5. **MVP／YAGNI**：只做本次 AC。不為 P1／P2 預留欄位或抽象。
6. 一個 branch 一個可獨立 review 的功能。merge → pull main → 再開下一支。
7. `tasks/` 只有 `README.md` 進 git；其餘 `tasks/*.md` 本機用。

## 規格路徑（唯一權威）

| 路徑 | 用途 |
| --- | --- |
| `docs/prd/PRD.md` | 產品要做什麼、User Story、優先級 |
| `docs/sdd/01-vision.md` | 願景、平台範圍（什麼上 Web、什麼只上 Mobile） |
| `docs/sdd/02-requirements.md` | 需求與 Acceptance Criteria |
| `docs/sdd/03-architecture.md` | 技術棧、資料夾邊界、系統圖 |
| `docs/sdd/04-api-spec.md` | Callable／事件契約（沒有對外 REST `/api`） |
| `docs/sdd/05-data-models.md` | Firestore／RTDB／Storage schema |
| `docs/sdd/06-ui-ux.md` | 路由、畫面狀態、文案、平台差異 |
| `docs/sdd/07-test-plan.md` | 測什麼、覆蓋率、E2E |

## 硬限制

- 不得在未確認時改 PRD／SDD、加欄位、加流程。
- 不得讓 Functions import `shared/frontend`。
- 不得把 Web build 輸出到 `www/`，也不得手寫 `www/`。
- 不得在 `apps/web` 引入 Ionic／Capacitor。
- 不得把 `tasks/*.md` 加進 commit（`tasks/README.md` 除外）。
- 不得自建對外 REST `/api` 當 SPA 主入口。
- 不得發明另一套資料夾或技術棧。
- 實作必須對得上 AC；做完用下方格式回報。

## 資料夾邊界

| 路徑 | 誰能用 | 禁止 |
| --- | --- | --- |
| `shared/contracts`（`@app/contracts`） | Web、Mobile、Functions | Angular、Ionic、CSS、Firebase Client |
| `shared/frontend/*`（`@app/frontend/*`） | 僅 Web、Mobile | 被 Functions import |
| `apps/web` | 桌面 SPA、管理後台 | `@ionic/angular`、`@capacitor/*` |
| `apps/mobile` | Ionic + Capacitor | 把業務邏輯寫進 `android/`、`ios/` |
| `functions/` | Admin SDK + contracts | import `shared/frontend` |
| `www/` | Mobile build 產物 | 手寫、進 git |

Collection 先在 `05-data-models.md` 定欄位，再寫 rules 與 contracts，最後才寫 service。

## 完成回報格式

```md
## 實作結果
- 做了什麼（對應哪個 AC）
- 改了哪些檔

## 測試
- 跑了哪些指令、結果
- 未跑／未覆蓋

## 風險與規格
- 未覆蓋風險
- 規格不一致（若有：停、回報，不要自行補需求）
```
