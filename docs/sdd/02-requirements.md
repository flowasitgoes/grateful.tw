# 02 — 需求與 Acceptance Criteria

規格是唯一權威。不以現有程式碼反推需求。

## 工程需求（已定）

| ID | 需求 | Acceptance Criteria |
| --- | --- | --- |
| ENG-01 | Monorepo 兩個 Angular project | `apps/web`、`apps/mobile` 存在；根 `angular.json` 登記兩者 |
| ENG-02 | Web 不碰 Ionic／Capacitor | `apps/web` 無 `@ionic/angular`、`@capacitor/*` |
| ENG-03 | Mobile build 對準 Capacitor | `outputPath.base` 為 `www` 且 `browser` 為 `""`；`capacitor.config.ts` 的 `webDir` 為 `www` |
| ENG-04 | Web 部署對準 Hosting | `ng build web` → `dist/apps/web/browser`；Hosting SPA rewrite 到 `index.html` |
| ENG-05 | 無對外 REST 主入口 | 不建 `/api` |
| ENG-06 | 共用層 alias | 依 `03-architecture.md` |
| ENG-07 | 機密與產物不進 git | 見 `.gitignore` |
| ENG-08 | 規格驅動 | 進程式碼前 Spec Check |

## 產品需求

| ID | 來源 Story | Acceptance Criteria | 平台 |
| --- | --- | --- | --- |
| READ-01 | P0 只讀 | 打開 `/` 或 `/today` 即看到標題「冠均的 Affirmation」。頁面上沒有 textarea、input、儲存按鈕。 | 兩端 |
| READ-02 | P0 只讀 | 可見十一章：愛與信任、自愛、內在小孩、親密關係、自信、平靜、創造、金錢、感恩、伙伴祝福、給孩子們的祝福。 | 兩端 |
| READ-03 | P0 只讀 | 同一頁可見「每日精簡版」與「系統化 Affirmation 結構」（含九段公式）。 | 兩端 |

## Spec Check 清單（每次實作前）

- [ ] 範圍寫在本次 task，且對得上 PRD／SDD
- [ ] 每個 AC 可判定通過／失敗
- [ ] 沒有為 P1／P2 預留輸入或雲端欄位
