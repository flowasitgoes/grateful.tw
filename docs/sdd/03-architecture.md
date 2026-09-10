# 03 — 技術架構

本文是工程架構的唯一權威。不要發明另一套資料夾，不要自加 REST API。

## 為什麼這樣能省成本、快速出三端

| 選擇 | 原因 |
| --- | --- |
| 一套語言 | Angular + TypeScript，前後端都能讀 |
| 兩個前端 App，不是三套 UI | `apps/web` 給瀏覽器；`apps/mobile` 給手機。iOS／Android 共用同一個 Mobile build |
| Ionic | Mobile 用 Web 技術做原生感導覽（tabs、stack、modal、手勢），不必各寫 Swift／Kotlin UI |
| Capacitor | 把 Mobile 靜態網站塞進原生殼：相機、推播、Google／Apple 登入、StatusBar。`npx cap sync` 把 `www/` 同步進 `android/`、`ios/` |
| Firebase 當後端 | Auth、Firestore、RTDB、Storage、Hosting、FCM、Cloud Functions。前端用 Client SDK，不自架 REST server |
| 平台範圍刻意不做滿 | Web 做探索、表單、管理後台；僅 Mobile 的能力（例如推播）就不上 Web |
| 共用層 | 登入表單、Button、data-access、型別只寫一次 |

**不要做：** React Native + 另一套 Web、各端各寫 API client、Functions 去 import Angular 元件。

## 目錄（固定）

```
/
├── AGENTS.md
├── package.json              # 根 monorepo；scripts 管 serve／build／cap／test
├── angular.json              # 兩個 project：web、mobile
├── tsconfig.json             # path alias：@app/contracts、@app/frontend/*
├── capacitor.config.ts       # appId、webDir: 'www'
├── firebase.json             # 後端／emulator；P0 Web 不上 Hosting
├── vercel.json               # P0 靜態 Web：build web、output browser、SPA rewrite
├── firestore.rules
├── docs/
│   ├── prd/PRD.md
│   └── sdd/                  # 01～07
├── tasks/                    # 僅 README 進版控
├── apps/
│   ├── web/                  # Angular SPA，禁止 Ionic／Capacitor
│   └── mobile/               # Ionic + Angular；build 輸出到根目錄 www/
├── shared/
│   ├── contracts/            # 純型別與常數；Web／Mobile／Functions 都可 import
│   └── frontend/             # 僅 Web／Mobile
│       ├── ui/
│       ├── styles/
│       ├── data-access/
│       └── firebase/
├── functions/                # Cloud Functions（Admin SDK）
│   └── src/
│       ├── callable/
│       ├── triggers/
│       └── lib/
├── www/                      # Mobile build 產物，gitignore，不手寫
├── android/                  # Capacitor 原生殼（npx cap add / sync）
├── ios/
├── scripts/                  # build／seed／deploy
├── tools/                    # 離線 ops，不是 runtime
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

## 兩個 App 怎麼切

### `apps/web`

- 桌面優先 SPA。
- 建置：`npm run build:web`（`ng build web`）→ `dist/apps/web/browser`。不可只跑 `ng build`（workspace 還有 mobile）。
- P0 部署：**Vercel** 連 GitHub `main`。根目錄 `vercel.json` 指定 build 與 output。Framework 用 Other／不自動偵測 Angular 的裸 `ng build`。
- 網域：`grateful.tw` 指到 Vercel。
- 不要引入 `@ionic/angular`、`@capacitor/*`。
- 管理後台只放這裡（P0 不做）。
- Firebase Hosting 本階段不用；`firebase.json` 的 hosting 區塊可留著，不作為 P0 上線路徑。

### `apps/mobile`

- 手機優先。Ionic `ion-content`、tabs、navigation stack。
- prefix：`mobile`；頁面放 `apps/mobile/src/app/features/...`。
- 平台專用 UI（swipe、bottom tabs）放 `apps/mobile/src/app/ui` 或 `layout/`。
- Build 輸出必須對準 Capacitor：

```json
"outputPath": { "base": "www", "browser": "" }
```

開發指令：

```bash
npm run start:web          # ng serve web
npm run start:mobile       # ng serve mobile（瀏覽器先驗 UI）
npm run build:mobile && npx cap sync android
npx cap open android       # 或 ios
```

實機／模擬器改的是**同一個** Mobile Angular 專案，不是另一份 Android 原始碼業務邏輯。`android/`、`ios/` 主要是原生殼、權限、圖示、plugin。

## www 和 build 的關係

這是整條 Mobile 打包鏈，不要搞混 Web 的 `dist/`。

1. `npx ng build mobile`（或 `npm run build:mobile`）把 Ionic＋Angular 編成靜態檔，寫進根目錄 `www/`。
2. `capacitor.config.ts` 的 `webDir: 'www'` 告訴 Capacitor：原生 App 載入的網站在這裡。
3. `npx cap sync`（或 `npm run cap:sync`）把 `www/` 拷進 `android/`、`ios/` 的資產目錄，並更新 plugin。
4. 之後用 Android Studio／Xcode 跑，或 `npx cap open android`。

`www/` 可刪、可重建、不手改、不進 git。改畫面永遠改 `apps/mobile/src`，再 build＋sync。

Web **不走** `www/`：

```bash
npm run build:web     # → dist/apps/web/browser
# P0：git push main → Vercel（見 vercel.json）
```

`npm run check` 一次跑：`build:web` + `build:mobile` + `cap sync`。

日常實機：

```bash
npx ng build mobile --configuration=development && npx cap sync android
```

## 共用層

用 tsconfig paths，不必先拆一堆 npm package。

| Alias | 實體 | 誰能用 | 禁止 |
| --- | --- | --- | --- |
| `@app/contracts` | `shared/contracts` | Web、Mobile、Functions | Angular、Ionic、CSS、Firebase Client |
| `@app/frontend/ui` | `shared/frontend/ui` | 僅 Web、Mobile | 被 Functions import |
| `@app/frontend/data-access` | 服務、repository | 僅前端 | 被 Functions import |
| `@app/frontend/firebase` | Client SDK 初始化 | 僅前端 | — |
| `@app/frontend/styles` | Design system 入口 | 僅前端 | — |

原則：

- **contracts**：型別、錯誤碼、列舉。與 `05-data-models.md` 對齊。
- **frontend/ui**：Button、Card、EmptyState、登入／註冊表單。寫一次，兩端共用。
- **frontend/data-access**：facade；頁面不直接散落 Firestore 細節。
- **apps/**\*：只放 routing、layout、該端才有的頁。
- **functions**：只能看 contracts。用 Admin SDK。不可 import `shared/frontend`。

這就是省成本的關鍵：改「登入中」進度條，改 `shared/frontend/ui` 一次，Web／Mobile 一起變。

## 後端（不要自建 REST）

預設 BaaS + 薄 Functions。

**前端直連 Firebase**

- 讀寫一般文件、即時資料用 Client SDK。
- Security Rules 是真正的權限層，要有 emulator 整合測試。

**Cloud Functions 只做兩類**

- Trigger／排程：文件變更後的衍生、治理、過期、推播。
- Callable（有限幾支）：需要原子性或不能信任客戶端的事。

不要做一套對外 HTTP `/api` 給 SPA 當主入口。

**資料放哪**

| 儲存 | 用途 |
| --- | --- |
| Firestore | 業務主資料（文件＋collection） |
| Realtime Database | 高頻訊息（若 PRD 需要） |
| Storage | 照片、封面（若 PRD 需要） |
| FCM | 只有 Mobile 推播 |

Collection **先**在 `05-data-models.md` 定欄位，再寫 rules 與 contracts，最後才寫 service。不要先做 schema 再補規格。

具體 collection／Callable 名稱等產品 SDD 定稿後寫入 `04`、`05`。不得把其他專案的配對／聊天／錢包示例當成本產品資料模型。

## UI／設計系統

- 外部 design system（或自訂 token）從 `shared/frontend/styles` 進兩端。
- 可重用元件進 wrapper，不要每個頁面複製一套 button。
- Web 專用：data table、admin sidebar。
- Mobile 專用：tabs、swipe、Ionic modal。
- `06-ui-ux.md` 要寫清：哪個 route 只在 Mobile、空狀態文案、loading 與空狀態不可混淆。

## 系統圖

```
                    ┌────────────┐
                    │  PRD / SDD │  ← 唯一需求權威
                    └─────┬──────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
    ┌──────────┐   ┌───────────┐   ┌────────────┐
    │ apps/web │   │apps/mobile│   │ functions  │
    │ Angular  │   │Ionic+Cap  │   │ Admin SDK  │
    └────┬─────┘   └─────┬─────┘   └─────┬──────┘
         │               │               │
         │    @app/frontend/*            │
         │◄──────────────►│               │
         │               │               │
         └───────┬───────┴───────┬───────┘
                 │ @app/contracts │
                 ▼               ▼
         ┌─────────────┐  ┌─────────────┐
         │ Vercel      │  │ www/ → Cap  │
         │ 靜態 Web    │  │ android/ios │
         │ (P0)        │  └─────────────┘
         └─────────────┘
              P1 才接 Firebase Auth/FS/…
```

## 第一週建議順序（人類＋AI）

1. 寫最短 PRD：誰、核心流程、P0／非 P0。
2. 寫完本檔已有的工程部分後，補 01 功能表、02 產品 AC。
3. 建 monorepo（本 repo 骨架）。
4. P0 Web：Vercel 連 GitHub，build `web` 靜態產出。Firebase 專案＋emulator 留到有資料寫入再接。
5. 先做 Auth 與一條主路徑；表單放 `shared/frontend/ui`。（須先有對應 AC）
6. Mobile 能 build → `cap sync` → 實機，再開始堆功能。
7. 之後每個功能：task → Spec Check → 最小實作 → 測試 → squash MR 進 main。
