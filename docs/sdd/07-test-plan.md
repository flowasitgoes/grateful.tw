# 07 — 測試計畫

| 案例 | 跑什麼 |
| --- | --- |
| 列表新到舊、日期格式、Day 標籤、副標 | `tests/unit` |
| 五十篇文稿仍在、無表單 | `tests/unit` |
| 全站與每篇 SEO 標題／描述／主題詞／og:image:alt | `tests/unit` |
| 分享用靜態 HTML 含該篇 OG／meta／JSON-LD | `tests/unit` |
| Article author／keywords；首頁 ItemList；上下篇導覽 | `tests/unit` |
| `build:web` 產出每篇 `/og/:id.jpg` | `npm run build:web` |
| `llms.txt`／`llms-full.txt` 內容與 AI robots 允許 | `tests/unit`、`npm run build:web` |
| Instagram 外連文案與網址 | `tests/unit` |
| 雙語：預設 zh、英文篇名／正文／UI 文案 | `tests/unit` |
| Web 生產建置（Vercel 同指令） | `npm run build:web` |

```bash
npm run test:unit
npm run build:web
```
