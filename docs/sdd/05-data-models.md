# 05 — 資料模型

靜態目錄，寫死在前端。P0 不寫入 localStorage／Firebase。

## Journal

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| `id` | string | 路由用 |
| `title` | string | 列表標題（皆為「感恩日記」）。閱讀頁 `h1` 用篇名，見下表。 |
| `createdAt` | string | ISO 8601（含時區）。畫面顯示 `YYYY-MM-DD HH:mm`，時區 `Asia/Taipei` |

不得加摘要、標籤、草稿、作者欄。

## 現有篇目（50 篇）

列表標題皆為「感恩日記」。`id` 為 `affirmation-1` … `affirmation-50`。閱讀頁 `h1` 為該篇篇名：

| id | 篇名 |
| --- | --- |
| `affirmation-1`～`11` | 十一章篇名（不含「一、」等序號，例如 `愛、信任與安全感`） |
| `affirmation-12` | 每日精簡版 |
| `affirmation-13` | 系統化 Affirmation 結構 |
| `affirmation-14` | 我願意理解並且接受你 |
| `affirmation-15` | 愛情裡的安全感 |
| `affirmation-16` | 自信與自我價值 |
| `affirmation-17` | 我的價值不需要透過比較來證明 |
| `affirmation-18` | 我在親密關係中是安全的 |
| `affirmation-19` | 我選擇輕鬆、自在地生活 |
| `affirmation-20` | 我值得被愛、被關心、被重視 |
| `affirmation-21` | 表達真實的自己是安全的 |
| `affirmation-22` | 不同意見與誤會，不代表關係會結束 |
| `affirmation-23` | 我可以輕鬆、自在地做自己 |
| `affirmation-24` | 我在別人心中是重要的 |
| `affirmation-25` | 我值得擁有親密的連結，也允許自己被愛 |
| `affirmation-26` | 我值得被慷慨、體貼地對待 |
| `affirmation-27` | 我的感受、意願與選擇值得被尊重 |
| `affirmation-28` | 我值得被欣賞、被喜歡 |
| `affirmation-29` | 我值得被主動親近、被溫柔地愛 |
| `affirmation-30` | 愛與關係滋養我的創造力 |
| `affirmation-31` | 我值得被支持，我的創造力值得被看見 |
| `affirmation-32` | 我值得與愛的人共同創造美好的生活 |
| `affirmation-33` | 我選擇用有意識的愛與誠懇對待世界 |
| `affirmation-34` | 我值得擁有讓自己安心、被尊重的關係 |
| `affirmation-35` | 我感謝健康的身體，讓我體驗生命的豐盛 |
| `affirmation-36` | 世界豐富得展開，我正處於一個新的階段 |
| `affirmation-37` | 我選擇相信，我的身體是有力量的 |
| `affirmation-38` | 我感謝眼前這份美好 |
| `affirmation-39` | 給自己的慈愛：願我平安、健康、幸福 |
| `affirmation-40` | 給她人與所愛的人：願你幸福，願你自由 |
| `affirmation-41` | 給身邊的人：願每個人都被善待 |
| `affirmation-42` | 給陌生人與所有生命：願一切眾生安樂 |
| `affirmation-43` | 慈愛與界線：願我在關係中保持溫柔與智慧 |
| `affirmation-44` | 慈愛的生活：願我的存在為世界帶來美好 |
| `affirmation-45` | 每日慈心給予自己 |
| `affirmation-46` | 感謝大地，提供製作床墊的材料 |
| `affirmation-47` | 感謝原料生產者，將自然資源帶進人類生活 |
| `affirmation-48` | 感謝工程師、工廠與所有製造床墊的人 |
| `affirmation-49` | 感謝物流、門市與所有讓床墊來到我面前的人 |
| `affirmation-50` | 「山式」Mountain Pose |

`createdAt` 由舊到新：`affirmation-1` = `2026-09-01T17:08:00+08:00`，其後每篇往後一天同一時刻，至 `affirmation-13` = `2026-09-13T17:08:00+08:00`。`affirmation-14` = `2026-10-10T22:18:00+08:00`。`affirmation-15` = `2026-10-12T00:32:00+08:00`。`affirmation-16` = `2026-10-12T00:34:00+08:00`。`affirmation-17` = `2026-10-12T00:37:00+08:00`。`affirmation-18` = `2026-10-12T00:39:00+08:00`。`affirmation-19` = `2026-10-12T00:40:00+08:00`。`affirmation-20` = `2026-10-12T00:41:00+08:00`。`affirmation-21` = `2026-10-12T00:42:00+08:00`。`affirmation-22` = `2026-10-12T00:43:00+08:00`。`affirmation-23` = `2026-10-12T00:45:00+08:00`。`affirmation-24` = `2026-10-12T00:47:00+08:00`。`affirmation-25` = `2026-10-12T00:49:00+08:00`。`affirmation-26` = `2026-10-12T00:51:00+08:00`。`affirmation-27` = `2026-10-12T00:52:00+08:00`。`affirmation-28` = `2026-10-12T00:53:00+08:00`。`affirmation-29` = `2026-10-12T00:54:00+08:00`。`affirmation-30` = `2026-10-12T00:55:00+08:00`。`affirmation-31` = `2026-10-12T00:56:00+08:00`。`affirmation-32` = `2026-10-12T00:58:00+08:00`。`affirmation-33` = `2026-10-12T00:59:00+08:00`。`affirmation-34` = `2026-10-12T01:00:00+08:00`。`affirmation-35` = `2026-10-12T01:01:00+08:00`。`affirmation-36` = `2026-10-13T10:07:00+08:00`。`affirmation-37` = `2026-10-13T10:09:00+08:00`。`affirmation-38` = `2026-10-13T10:11:00+08:00`。`affirmation-39` = `2026-10-13T10:13:00+08:00`。`affirmation-40` = `2026-10-13T10:18:00+08:00`。`affirmation-41` = `2026-10-13T10:19:00+08:00`。`affirmation-42` = `2026-10-13T10:21:00+08:00`。`affirmation-43` = `2026-10-13T10:22:00+08:00`。`affirmation-44` = `2026-10-13T10:23:00+08:00`。`affirmation-45` = `2026-10-13T10:25:00+08:00`。`affirmation-46` = `2026-10-13T10:26:00+08:00`。`affirmation-47` = `2026-10-13T10:27:00+08:00`。`affirmation-48` = `2026-10-13T10:28:00+08:00`。`affirmation-49` = `2026-10-13T10:30:00+08:00`。`affirmation-50` = `2026-10-13T10:32:00+08:00`。列表依 `createdAt` 由新到舊，故最新（Day 50）在最前。
