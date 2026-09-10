# 02 — 需求與 Acceptance Criteria

**狀態：產品 AC 待人類依 PRD 定稿。本文只定工程／流程需求。**

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

> 人類依 PRD 拆 AC。一列一個可測行為。AI 不得自行新增列。

| ID | 來源 Story | Acceptance Criteria | 平台 |
| --- | --- | --- | --- |
| （待填） | | | Web / Mobile / 兩端 |

## Spec Check 清單（每次實作前）

- [ ] 範圍寫在本次 task，且對得上 PRD／SDD
- [ ] 每個 AC 可判定通過／失敗
- [ ] `05-data-models.md` 已有本次欄位（沒有就停）
- [ ] `04-api-spec.md` 已有本次 Callable／事件（沒有且需要就停）
- [ ] `06-ui-ux.md` 已有路由、畫面狀態、文案
- [ ] `07-test-plan.md` 已有要跑的測試
- [ ] 沒有為 P1／P2 預留欄位
