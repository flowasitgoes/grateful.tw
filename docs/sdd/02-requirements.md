# 02 — 需求與 Acceptance Criteria

規格是唯一權威。不以現有程式碼反推需求。

## 工程需求（已定）

| ID | 需求 | Acceptance Criteria |
| --- | --- | --- |
| ENG-01 | Monorepo 兩個 Angular project | `apps/web`、`apps/mobile` 存在；根 `angular.json` 登記兩者 |
| ENG-02 | Web 不碰 Ionic／Capacitor | `apps/web` 無 `@ionic/angular`、`@capacitor/*` |
| ENG-03 | Mobile build 對準 Capacitor | `outputPath.base` 為 `www` 且 `browser` 為 `""`；`capacitor.config.ts` 的 `webDir` 為 `www` |
| ENG-04 | Web 部署對準 Hosting | `ng build web` → `dist/apps/web/browser`；Hosting SPA rewrite 到 `index.html` |
| ENG-05 | 無對外 REST 主入口 | `docs/sdd/04-api-spec.md` 只列 Callable／觸發事件；不建 `/api` |
| ENG-06 | 共用層 alias | `@app/contracts`、`@app/frontend/*` 依 `03-architecture.md`；Functions 不得 import frontend |
| ENG-07 | 機密與產物不進 git | `www/`、`dist/`、`functions/lib/`、`tasks/*`（保留 README）、環境檔、service account 在 `.gitignore` |
| ENG-08 | 規格驅動 | 進程式碼前 Spec Check；缺 AC／模型／API／UI 狀態／測試就停 |

## 產品需求

| ID | 來源 Story | Acceptance Criteria | 平台 |
| --- | --- | --- | --- |
| AUTH-01 | P0 登入 | 未登入只能看到登入畫面；不能讀寫日記。Email／密碼正確則進入「今天」。錯誤時顯示登入失敗，不進入今天。 | 兩端 |
| AUTH-02 | P0 登入 | 已登入重新打開 App／網站，維持登入並進入「今天」，不必重填密碼。 | 兩端 |
| AUTH-03 | P0 登入 | 可登出；登出後回到登入畫面，無法再讀寫直到再次登入。 | 兩端 |
| TODAY-01 | P0 今天 | 「今天」為裝置本地日曆日期（`YYYY-MM-DD`）。畫面固定九段，順序與標籤見 PRD／06。 | 兩端 |
| TODAY-02 | P0 今天 | 每段一個文字欄；可空。畫面上提示「1～3 句，可留空」。P0 不驗證句數。 | 兩端 |
| TODAY-03 | P0 儲存 | 點儲存後，成功有明確成功狀態；失敗有錯誤狀態，且不與空白未填混淆。 | 兩端 |
| TODAY-04 | P0 儲存 | 儲存後重新進入「今天」（含重新整理、換 Web／Mobile），九段內容與上次儲存一致。未存過的今天：九段皆空，屬 empty，不是 error。 | 兩端 |
| TODAY-05 | P0 同步 | 同一帳號在一端儲存後，另一端再開「今天」讀到同一內容。 | 兩端 |
| SEC-01 | 私人日記 | 未登入或不同 uid 不能讀寫他人 `users/{uid}/entries/**`。 | Rules |

## Spec Check 清單（每次實作前）

- [ ] 範圍寫在本次 task，且對得上 PRD／SDD
- [ ] 每個 AC 可判定通過／失敗
- [ ] `05-data-models.md` 已有本次欄位（沒有就停）
- [ ] `04-api-spec.md` 已有本次 Callable／事件（沒有且需要就停；本 P0 無 Callable）
- [ ] `06-ui-ux.md` 已有路由、畫面狀態、文案
- [ ] `07-test-plan.md` 已有要跑的測試
- [ ] 沒有為 P1／P2 預留欄位
