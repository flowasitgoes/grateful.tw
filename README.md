# grateful.tw

感恩日記平台／App。一套 TypeScript：Web（Angular 20）+ Mobile（Ionic 8 + Capacitor，iOS／Android 同一 build）+ Firebase（無對外 REST `/api`）。

本機 Node 24.13 無法使用 Angular 22 CLI（需 24.15+），故骨架鎖 Angular 20。

規格是唯一權威。流程與硬限制見 [`AGENTS.md`](./AGENTS.md)。架構見 [`docs/sdd/03-architecture.md`](./docs/sdd/03-architecture.md)。

## 現況

- 工程骨架與 SDD 已依固定目錄落地。
- **P0：** 極簡列表（最新在前）→ 點進閱讀。每篇有建立日期時間。右上漢堡僅佔位。無輸入、無 Firebase。

## 指令

```bash
npm install
npm run start:web      # ng serve web；主界面為日記列表
npm run start:mobile   # ng serve mobile（瀏覽器先驗 UI）
npm run test:unit
npm run build:web      # → dist/apps/web/browser
npm run build:mobile   # → www/
```

實機（需已 `npx cap add android`）：

```bash
npx ng build mobile --configuration=development && npx cap sync android
npx cap open android
```
