# 07 — 測試計畫

| 案例 | 跑什麼 |
| --- | --- |
| 列表新到舊、日期格式、Day 標籤、副標 | `tests/unit` |
| 十三篇文稿仍在、無表單 | `tests/unit` |
| 全站與每篇 SEO 標題／描述 | `tests/unit` |
| Web 生產建置（Vercel 同指令） | `npm run build:web` |

```bash
npm run test:unit
npm run build:web
```
