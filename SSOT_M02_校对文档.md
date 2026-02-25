# M02 SSOT 校对文档

> 校对时间: 2026-02-13
> 权威源: `core-defs/` 目录下的 01~04 markdown 文件
> 被校对文件: `src/data/m02.ts` + `src/i18n/m02/zh-CN.json` + `src/i18n/m02/en.json`

---

## 一、Objective（视频目标）— 幻灯片 M02-2-*

### 1.1 数量与分组
| 维度 | core-defs | PPT当前 | 是否一致 |
|------|-----------|---------|----------|
| 总数 | 9个 | 9个 | ✅ |
| 分组 | ACCOUNT_GROWTH(3) + COMMERCE(6) | 账号运营(3) + 电商带货(6) | ✅ |

### 1.2 各 Objective 名称与排序

| # | Code | core-defs 中文名 | core-defs 英文名 | PPT中文名 | 差异 |
|---|------|-----------------|-----------------|-----------|------|
| 1 | PERSONA | 人设塑造 | Persona Building | 人设塑造 | ✅ |
| 2 | GROW | 粉丝增长 | Follower Growth | 涨粉 | ⚠️ PPT 简化为"涨粉"，可接受但不精确 |
| 3 | BOND | 粉丝粘性 | Fan Engagement | 粉丝粘性 | ✅ |
| 4 | BRAND | 品牌心智 | Brand Awareness | 品宣 | ⚠️ PPT 用"品宣"，core-defs 是"品牌心智" |
| 5 | SEED | 种草曝光 | Product Seeding | 种草 | ⚠️ PPT 简化为"种草"，可接受 |
| 6 | CONVERT | 即时转化 | Instant Conversion | 转化 | ⚠️ PPT 简化为"转化"，可接受 |
| 7 | RETAIN | 复购召回 | Customer Retention | 复购 | ⚠️ PPT 简化为"复购"，core-defs 是"复购召回" |
| 8 | PREHEAT | 活动预热 | Campaign Warmup | 预热 | ⚠️ PPT 简化，可接受 |
| 9 | LIVE_JOIN | 直播引流 | Live Traffic | 直播引流 | ✅ |

**结论**: Objective 名称在 PPT 中多为简称，核心无误。排序一致。**无需修改**（教学场景允许简称）。

---

## 二、Section（段落）— 幻灯片 M02-3-*

### 2.1 数量与 Code
| 维度 | core-defs | PPT当前 | 是否一致 |
|------|-----------|---------|----------|
| 总数 | 7个 | 7个 | ✅ |
| Code列表 | HOOK,BRIDGE,PROBLEM,RESOLUTION,REVERSAL,VALUE,CTA | 同 | ✅ |

### 2.2 中文名称

| Code | core-defs 中文名 | PPT 中文名 | 差异 |
|------|-----------------|-----------|------|
| HOOK | 开场 | 注意力捕获 | ⚠️ 不一致 |
| BRIDGE | 过渡 | 关联建立 | ⚠️ 不一致 |
| PROBLEM | 问题 | 张力建立 | ⚠️ 不一致 |
| RESOLUTION | 张力释放 | 张力释放 | ✅ |
| REVERSAL | 反转 | 认知改写 | ⚠️ 不一致 |
| VALUE | 价值 | 决策稳定 | ⚠️ 不一致 |
| CTA | 收口 | 行为触发 | ⚠️ 不一致 |

**分析**: core-defs 的 `name_zh` 是简洁表名（开场/过渡/问题/反转/价值/收口），PPT 使用的是 `subtitle`/功能描述（注意力捕获/关联建立/张力建立/认知改写/决策稳定/行为触发）。两套名称均出自 core-defs 的不同字段。PPT 中的功能描述更适合教学场景，**无需修改**。

### 2.3 状态转变

| Code | core-defs 状态转变 | PPT 状态转变 | 差异 |
|------|-------------------|-------------|------|
| HOOK | 浏览 → 注意 | 浏览→注意 | ✅ |
| BRIDGE | 注意 → 产生关联 | 注意→产生关联 | ✅ |
| PROBLEM | 平静 → 不安/焦虑 | 平静→不安 | ✅ (简化OK) |
| RESOLUTION | 不安 → 有希望 | 不安→有希望 | ✅ |
| REVERSAL | 确信 → 重新思考 | 确信→重新思考 | ✅ |
| VALUE | 感兴趣 → 被说服 | 感兴趣→被说服 | ✅ |
| CTA | 被说服 → 行动 | 被说服→行动 | ✅ |

### 2.4 快速判定口诀

| 触发词 | core-defs | PPT | 差异 |
|--------|-----------|-----|------|
| 不舒服 | PROBLEM | PROBLEM | ✅ |
| 有救了 | RESOLUTION | RESOLUTION | ✅ |
| 我错了 | REVERSAL | REVERSAL | ✅ |
| 值得买 | VALUE | VALUE | ✅ |
| 去做吧 | CTA | CTA | ✅ |

### 2.5 RESOLUTION vs REVERSAL 判定

| 维度 | core-defs | PPT | 差异 |
|------|-----------|-----|------|
| RESOLUTION | 改变处境 | 改变处境 | ✅ |
| REVERSAL | 改变认知模型 | 改变认知 | ✅ |
| 黄金判定 | YES→REVERSAL, NO→RESOLUTION | 同 | ✅ |

**结论**: Section 部分与 core-defs 完全一致。**无需修改**。

---

## 三、Skeleton（骨架）— 幻灯片 M02-4-* ❌ 有重大差异

### 3.1 数量与 Code

| 维度 | core-defs | PPT当前 | 差异 |
|------|-----------|---------|------|
| 总数 | **8个** (3 Tier-A + 2 Tier-B + 3 Tier-C) | **5个** | ❌ **严重不一致** |
| 分级 | A/B/C 三级 | 无分级 | ❌ 缺失 |

### 3.2 Code 对照

| core-defs Code | core-defs 段落组合 | PPT Code | PPT 段落组合 | 匹配状况 |
|----------------|-------------------|----------|-------------|----------|
| **HPVC** (A) | H→P→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| **HBVC** (A) | H→Re→V→C | `HBVC` | H→Br→V→C | ❌ **Code相同但组合完全不同！** |
| **HRVC** (A) | H→Rv→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| **HPRVC** (B) | H→P→Rv→V→C | `HPRVC` | H→P→Re→V→C | ❌ **Code相同但组合不同！** |
| **HPBVC** (B) | H→P→Re→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| **HBrPVC** (C) | H→Br→P→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| **HBrBVC** (C) | H→Br→Re→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| **HBrPBVC** (C) | H→Br→P→Re→V→C | ❌ 缺失 | — | ❌ PPT缺失此骨架 |
| ❌ 不存在 | — | `HVC` | H→V→C | ❌ core-defs中无此骨架 |
| ❌ 不存在 | — | `HPRVRC` | H→P→Rv→V→C (命名错误) | ❌ 实际应为 HPRVC |
| ❌ 不存在 | — | `HBPRVC` | H→Br→P→Re→V→C | ❌ 实际应为 HBrPBVC |

### 3.3 详细问题分析

**问题1: PPT的HBVC ≠ core-defs的HBVC**
- core-defs `HBVC` = H→**Resolution**→V→C（四段-张力释放型，Tier-A）
- PPT `HBVC` = H→**Bridge**→V→C（轻量四段，快速种草）
- 这是**完全不同的骨架**，B 在 core-defs 代表 Resolution(B=Body/张力释放)，在 PPT 中被误读为 Bridge

**问题2: PPT的HPRVC ≠ core-defs的HPRVC**
- core-defs `HPRVC` = H→P→**Reversal**→V→C（五段-问题反转型，Tier-B）
- PPT `HPRVC` = H→P→**Resolution**→V→C（标准五段，万能结构）
- PPT 中的组合实际对应 core-defs 的 `HPBVC`

**问题3: PPT的HPRVRC不存在于core-defs**
- PPT `HPRVRC` = H→P→Rv→V→C，这个 Code 不存在
- 其组合 H→P→Reversal→V→C 实际就是 core-defs 的 `HPRVC`

**问题4: PPT的HVC不存在于core-defs**
- PPT 中有 `HVC`（极简三段 H→V→C），但 core-defs 没有定义此骨架

**问题5: PPT的HBPRVC = core-defs的HBrPBVC**
- PPT `HBPRVC` = H→Br→P→Re→V→C 实际就是 core-defs 的 `HBrPBVC`（六段-完整铺垫型）

### 3.4 修改方案

**这是最核心的差异，需要整体更新 Skeleton 部分。**

PPT 中的 5 个骨架需要替换为 core-defs 定义的 8 个骨架（按 A/B/C 分级展示）：

**Tier A（基础四段，新手优先）:**
| Code | 组合 | 中文名 |
|------|------|--------|
| HPVC | H→P→V→C | 四段-问题型 |
| HBVC | H→Re→V→C | 四段-张力释放型 |
| HRVC | H→Rv→V→C | 四段-反转型 |

**Tier B（五段结构）:**
| Code | 组合 | 中文名 |
|------|------|--------|
| HPRVC | H→P→Rv→V→C | 五段-问题反转型 |
| HPBVC | H→P→Re→V→C | 五段-问题+张力释放型 |

**Tier C（含 Bridge 铺垫）:**
| Code | 组合 | 中文名 |
|------|------|--------|
| HBrPVC | H→Br→P→V→C | 五段-铺垫问题型 |
| HBrBVC | H→Br→Re→V→C | 五段-铺垫+张力释放型 |
| HBrPBVC | H→Br→P→Re→V→C | 六段-完整铺垫型 |

> 缩写: H=HOOK, Br=BRIDGE, P=PROBLEM, Re=RESOLUTION, Rv=REVERSAL, V=VALUE, C=CTA

---

## 四、Strategy（策略）— 幻灯片 M02-5-*

### 4.1 L0 层

| Code | core-defs 中文名 | core-defs 英文名 | PPT 中文名 | 差异 |
|------|-----------------|-----------------|-----------|------|
| HEAD | 认知与信任 | Cognition & Trust | 理性说服 | ⚠️ PPT 简化 |
| HEART | 情绪与共鸣 | Emotion & Empathy | 情感打动 | ⚠️ PPT 简化 |
| EYES | 视觉与体验 | Visual & Experience | 眼见为实 | ⚠️ PPT 简化 |
| HAND | 吸引与行动 | Attraction & Action | 推动行动 | ⚠️ PPT 简化 |

**结论**: L0 名称 PPT 使用了教学简化版本，方向正确。**建议保留 PPT 简称，但在首次出现时括号补充 core-defs 正式名**。

### 4.2 L1 层

| L0 | L1 Code | core-defs 中文名 | core-defs 英文名 | PPT 是否列出 | 差异 |
|----|---------|-----------------|-----------------|-------------|------|
| HEAD | EXPLAIN | 机制解释 | Explain | ✅ | - |
| HEAD | PROOF | 真实见证 | Proof | ✅ | - |
| HEAD | AUTHORITY | 权威背书 | Authority | ✅ | - |
| HEAD | CONTRAST | 对比反差 | Contrast | ✅ | - |
| HEART | PAIN | 痛点共鸣 | Pain | ✅ | - |
| HEART | FEAR | 恐惧诉求 | Fear | ✅ | - |
| HEART | STORY | 故事叙事 | Story | ✅ | - |
| EYES | DEMO | 展示演示 | Demo | ✅ | - |
| HAND | SUSPENSE | 悬念反问 | Suspense | ✅ | - |
| HAND | URGENCY | 稀缺紧迫 | Urgency | ✅ | - |

**结论**: L1 全部 10 个完全一致。✅

### 4.3 L2 层 ❌ 有严重差异

PPT 中的 L2 名称与 core-defs 完全不同：

| L1 | core-defs L2 (26个) | PPT L2 | 差异 |
|----|---------------------|--------|------|
| EXPLAIN | Logic, Data, Transparency | Logic, Steps, Science | ❌ 2/3 不同 |
| PROOF | UGC, Before_After, Sales_Data | UGC, Data, Before_After | ❌ Data≠Sales_Data |
| AUTHORITY | Expert, Certification, Media, Guarantee | Expert, Cert, Media, Guarantee | ✅ Cert=Certification简写 |
| CONTRAST | AB, Shocking, Value_Stack | AB, Myth, Upgrade, Value_Stack | ❌ 多了Myth/Upgrade, 少了Shocking |
| PAIN | Scene, Daily, Loss | Scene, Empathy, Fear_Soft | ❌ 完全不同 |
| FEAR | Consequence, Miss_Out | Loss, Risk, FOMO | ❌ 完全不同 |
| STORY | Origin, User | Origin, Journey, Transformation | ❌ 2/3 不同 |
| DEMO | Step, Multi_Angle | Unbox, Tutorial, Effect | ❌ 完全不同 |
| SUSPENSE | Question, Reveal | Question, Countdown, Info_Gap | ❌ 2/3 不同 |
| URGENCY | Time, Stock | Flash, Scarcity, Social_Proof | ❌ 完全不同 |

**总计**: PPT 声称 26 个 L2，core-defs 也是 26 个，但**具体名称几乎全部不同**。

### 4.4 L2 修改方案

需要将 PPT 中的 L2 全部替换为 core-defs 定义：

```
HEAD → EXPLAIN: EXPLAIN_LOGIC(逻辑推理), EXPLAIN_DATA(数据佐证), EXPLAIN_TRANSPARENCY(配方透明)
HEAD → PROOF: PROOF_UGC(UGC见证), PROOF_BEFORE_AFTER(使用前后对比), PROOF_SALES_DATA(销量/复购数据)
HEAD → AUTHORITY: AUTH_EXPERT(专家背书), AUTH_CERTIFICATION(认证/奖项), AUTH_MEDIA(媒体报道), AUTH_GUARANTEE(承诺保障)
HEAD → CONTRAST: CONTRAST_AB(A/B对比), CONTRAST_SHOCKING(反差冲击), CONTRAST_VALUE_STACK(价值堆叠)

HEART → PAIN: PAIN_SCENE(场景共鸣), PAIN_DAILY(日常困扰), PAIN_LOSS(损失厌恶)
HEART → FEAR: FEAR_CONSEQUENCE(后果警示), FEAR_MISS_OUT(错过恐惧)
HEART → STORY: STORY_ORIGIN(品牌故事), STORY_USER(用户故事)

EYES → DEMO: DEMO_STEP(分步演示), DEMO_MULTI_ANGLE(多角度展示)

HAND → SUSPENSE: SUSPENSE_QUESTION(反问开场), SUSPENSE_REVEAL(揭秘反转)
HAND → URGENCY: URGENCY_TIME(限时促销), URGENCY_STOCK(限量库存)
```

### 4.5 Section × Strategy 兼容性矩阵

需要与 core-defs `04_STRATEGIES.md` 中的兼容性矩阵逐项比对（此处需要读取 PPT 中 M02-5-section-strategy 幻灯片的具体内容后再做对比）。

---

## 五、修改优先级

| 优先级 | 区域 | 问题 | 影响范围 |
|--------|------|------|----------|
| 🔴 P0 | Skeleton | Code命名、组合方式、数量全部不一致 | m02.ts 的 3 个幻灯片 + zh-CN.json + en.json |
| 🔴 P0 | Strategy L2 | 26个 L2 名称几乎全部不同 | m02.ts 的 2 个幻灯片 + zh-CN.json + en.json |
| 🟡 P1 | Strategy L0 描述 | 可补充 core-defs 正式名 | 若干幻灯片的描述文字 |
| 🟢 P2 | Objective 简称 | 教学简化可接受 | 无需修改 |
| 🟢 P2 | Section 名称 | 使用功能描述而非简名，可接受 | 无需修改 |

---

## 六、执行计划

### Step 1: 修改 Skeleton 部分 (P0)
- 更新 `M02-4-skeleton-all` 幻灯片：5个旧骨架 → 8个新骨架（按 Tier A/B/C 分组）
- 更新 `M02-4-skeleton-decision` 决策树：匹配新的 8 个骨架 Code
- 同步更新 zh-CN.json 和 en.json

### Step 2: 修改 Strategy L2 部分 (P0)
- 更新 `M02-5-architecture` 幻灯片：L2 名称全部替换
- 更新 `M02-5-full-table` 幻灯片：L2 名称全部替换
- 更新所有 L1 详细页面中的 L2 列表
- 同步更新 zh-CN.json 和 en.json

### Step 3: 微调 L0 描述 (P1)
- 在 L0 首次出现时补充 core-defs 正式名称
