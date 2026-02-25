import type { Slide } from "../types/slide"

export const slidesData: Slide[] = [
      // ========== 模块标题 ==========
      {
        id: 'M02-title',
        section: '模块标题',
        time: '',
        type: 'title',
        title: 'Module 02',
        subtitle: '骨架系统（Bone）',
        description: 'Day 1 上午 | 150分钟',
        isStar: true,
        notes: '这是整个培训最核心、信息量最大的模块。骨层决定了视频的说服逻辑。'
      },
      {
        id: 'M02-why-important',
        section: '模块标题',
        time: '',
        type: 'content',
        title: '为什么这是最重模块？',
        studentContent: `
          <div class="highlight-box" style="font-size: 18px; text-align: center;">
            <strong>骨 = 决策中枢</strong><br><br>
            掌握骨层 = 掌握内容生产的核心逻辑
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <p style="font-size: 16px; margin-bottom: 14px;">本模块回答三个关键问题：</p>
            <div style="font-size: 18px; color: var(--accent);">1. 这条视频的目标是什么？（Objective）</div>
            <div style="font-size: 18px; color: var(--accent); margin-top: 10px;">2. 视频由哪些部分组成？（Skeleton）</div>
            <div style="font-size: 18px; color: var(--accent); margin-top: 10px;">3. 每个部分用什么方式说服？（Strategy）</div>
          </div>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 教学提示：</strong>强调这是最重要的模块。Objective决定视频方向，Skeleton决定结构，Strategy决定说服方式。
          </div>
        `,
        notes: '强调三个核心问题，为整个模块定调。'
      },
      {
        id: 'M02-objectives',
        section: '模块标题',
        time: '',
        type: 'content',
        title: '学习目标',
        studentContent: `
          <p style="margin-bottom: 12px;">完成本模块后，你将能够：</p>
          <ul>
            <li>根据业务需求选择正确的 <strong>Objective（视频目标）</strong></li>
            <li>识别并运用 <strong>7种Section类型</strong>（HOOK/BRIDGE/PROBLEM/RESOLUTION/REVERSAL/VALUE/CTA）</li>
            <li>掌握 <strong>8种Skeleton骨架</strong>（ABC三级：Tier-A基础四段 / Tier-B五段 / Tier-C含Bridge铺垫）</li>
            <li>理解 <strong>Strategy L0/L1/L2</strong> 三层策略体系</li>
            <li>完成一条视频的 <strong>完整骨架分析</strong></li>
          </ul>
        `,
        presenterContent: '',
        notes: '5个学习目标，涵盖Objective、Section、Skeleton、Strategy。'
      },

      // ========== Part 1: 说服路径 ==========
      {
        id: 'M02-part1-title',
        section: '1️⃣ 说服路径',
        time: '0:00-0:15',
        type: 'title',
        title: 'Part 1',
        subtitle: '什么是说服路径',
        description: '⏱ 0:00 - 0:15 | 15分钟',
        notes: '建立"视频=改变大脑状态的过程"的认知。'
      },
      {
        id: 'M02-1-question',
        section: '1️⃣ 说服路径',
        time: '0:00-0:05',
        type: 'content',
        title: '视频的本质是什么？',
        studentContent: `
          <div style="text-align: center; padding: 20px 0;">
            <p style="font-size: 18px; color: var(--text-secondary); margin-bottom: 24px;">一条视频，本质上在做什么？</p>
            <div style="font-size: 16px; color: #888; margin-bottom: 30px;">
              传递信息？展示产品？说服用户？
            </div>
            <div style="font-size: 28px; color: var(--accent); font-weight: bold;">
              视频 = 改变观众大脑状态的过程
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              在开始讲具体内容之前，我想先问大家一个问题：一条视频，本质上在做什么？<br><br>
              <em>（等待2-3秒）</em><br><br>
              有人说是"传递信息"，有人说是"展示产品"，有人说是"说服用户"。这些都对，但我想给大家一个更本质的答案：<em>一条视频，本质上是在改变观众大脑的状态。</em>
            </div>
          </div>
        `,
        notes: '这个比喻非常重要，是整个培训的认知基础。'
      },
      {
        id: 'M02-1-state-change',
        section: '1️⃣ 说服路径',
        time: '0:05-0:15',
        type: 'content',
        title: '状态A → 状态B',
        studentContent: `
          <div style="display: flex; align-items: center; justify-content: center; gap: 30px; padding: 16px 0;">
            <div style="flex: 1; padding: 20px; background: rgba(244,67,54,0.15); border: 2px solid #f44336; border-radius: 12px; text-align: center;">
              <div style="font-size: 20px; color: #f44336; font-weight: bold; margin-bottom: 10px;">状态A（看视频前）</div>
              <ul style="text-align: left; font-size: 14px; color: var(--text-secondary); list-style: none; padding: 0;">
                <li style="padding: 3px 0;">❌ 不知道你是谁</li>
                <li style="padding: 3px 0;">❌ 不关心你在卖什么</li>
                <li style="padding: 3px 0;">❌ 不信任你说的话</li>
              </ul>
            </div>
            <div style="font-size: 40px; color: var(--accent);">→</div>
            <div style="flex: 1; padding: 20px; background: rgba(76,175,80,0.15); border: 2px solid #4CAF50; border-radius: 12px; text-align: center;">
              <div style="font-size: 20px; color: #4CAF50; font-weight: bold; margin-bottom: 10px;">状态B（看视频后）</div>
              <ul style="text-align: left; font-size: 14px; color: var(--text-secondary); list-style: none; padding: 0;">
                <li style="padding: 3px 0;">✅ 对产品产生兴趣</li>
                <li style="padding: 3px 0;">✅ 相信你说的话</li>
                <li style="padding: 3px 0;">✅ 愿意采取行动</li>
              </ul>
            </div>
          </div>
          <div class="highlight-box" style="text-align: center; margin-top: 16px;">
            从状态A到状态B的这条路，就是<strong>「说服路径」</strong><br>
            骨架系统，就是设计这条说服路径的工具
          </div>
        `,
        presenterContent: '',
        notes: '确保学员理解"视频是一个过程"而不是"一堆内容的组合"。'
      },

      // ========== Part 2: Objective 视频目标 ==========
      {
        id: 'M02-part2-title',
        section: '2️⃣ Objective目标',
        time: '0:15-0:35',
        type: 'title',
        title: 'Part 2',
        subtitle: 'Objective 视频目标',
        description: '⏱ 0:15 - 0:35 | 20分钟',
        notes: '这是新增的关键部分！在讲骨架之前，必须先明确视频目标。'
      },
      {
        id: 'M02-2-why-objective',
        section: '2️⃣ Objective目标',
        time: '0:15-0:20',
        type: 'content',
        title: '为什么要先定义目标？',
        studentContent: `
          <div class="highlight-box" style="text-align: center; font-size: 18px;">
            <strong>不知道这条视频要干什么，就不可能做出好视频</strong>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 12px;">在开始写脚本之前，必须回答一个问题：</p>
            <div style="font-size: 22px; color: var(--accent); text-align: center; padding: 16px;">
              「这条视频的目标是什么？」
            </div>
            <p style="color: var(--text-secondary); margin-top: 12px;">
              目标不同 → 结构不同 → 策略不同 → 内容不同<br>
              一条涨粉视频和一条带货视频，从骨架到策略都完全不一样。
            </p>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              很多编导拿到需求就开始写脚本，这是错的。第一步永远是：明确这条视频的目标是什么。<br><br>
              目标定错了，后面写得再好也是白费。目标决定了你选什么骨架、用什么策略。
            </div>
          </div>
        `,
        notes: '强调目标优先的重要性，这是很多编导容易忽略的。'
      },
      {
        id: 'M02-2-objective-groups',
        section: '2️⃣ Objective目标',
        time: '0:20-0:30',
        type: 'content',
        title: '两大目标组（9种Objective）',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <div style="flex: 1; padding: 16px; background: rgba(100,181,246,0.1); border: 2px solid #64B5F6; border-radius: 12px;">
              <div style="font-size: 18px; color: #64B5F6; font-weight: bold; margin-bottom: 10px;">👤 账号运营 ACCOUNT_GROWTH</div>
              <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">提升账号影响力、粉丝粘性和人设塑造</p>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #64B5F6;">PERSONA</strong> <span style="font-size: 12px;">人设塑造 - 建立账号人设和专业形象，展示独特调性</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #64B5F6;">GROW</strong> <span style="font-size: 12px;">粉丝增长 - 吸引新粉丝关注，提升账号曝光和粉丝数</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #64B5F6;">BOND</strong> <span style="font-size: 12px;">粉丝粘性 - 加深粉丝情感连接，提高互动和忠诚度</span>
                </div>
              </div>
            </div>
            <div style="flex: 1; padding: 16px; background: rgba(76,175,80,0.1); border: 2px solid #4CAF50; border-radius: 12px;">
              <div style="font-size: 18px; color: #4CAF50; font-weight: bold; margin-bottom: 10px;">🛒 电商带货 COMMERCE</div>
              <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">电商种草、转化、复购等商业目标</p>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">BRAND</strong> <span style="font-size: 12px;">品牌心智 - 建立品牌认知和心智占位，传递品牌价值观</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">SEED</strong> <span style="font-size: 12px;">种草曝光 - 激发兴趣、建立认知，让用户"种草"</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">CONVERT</strong> <span style="font-size: 12px;">即时转化 - 促进即时购买决策，实现短期转化</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">RETAIN</strong> <span style="font-size: 12px;">复购召回 - 召回老客户，促进复购和增购</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">PREHEAT</strong> <span style="font-size: 12px;">活动预热 - 为大促/新品/活动预热造势，积累流量</span>
                </div>
                <div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                  <strong style="color: #4CAF50;">LIVE_JOIN</strong> <span style="font-size: 12px;">直播引流 - 从短视频引流到直播间，提升直播观看</span>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 重点：</strong>Objective 是脚本创作的第一个决策点——先确定目标，再选结构和策略。一条视频只能有一个主目标。
          </div>
        `,
        notes: '两大类目标：账号运营(3个) vs 电商带货(6个)。描述来自 core-defs/01_OBJECTIVES.md。'
      },
      {
        id: 'M02-2-objective-mix',
        section: '2️⃣ Objective目标',
        time: '0:33-0:35',
        type: 'content',
        title: '❓ 能把不同目标融在一起吗？',
        studentContent: `
          <div class="highlight-box" style="font-size: 16px;">
            <strong>原则：一条视频只能有一个主目标</strong><br>
            但可以有次要目标作为"附带收益"
          </div>
          <div style="margin-top: 14px;">
            <p style="font-size: 15px; margin-bottom: 10px;"><strong>🎯 决策原则：</strong></p>
            <ul style="font-size: 14px;">
              <li>主目标决定骨架和核心策略，次要目标只是"顺便"</li>
              <li>如果两个目标冲突（如GROW vs CONVERT），必须二选一</li>
              <li>目标越聚焦，视频效果越好</li>
            </ul>
          </div>
          <div style="margin-top: 14px;">
            <p style="font-size: 15px; margin-bottom: 8px;"><strong>✅ 可以融合的案例：</strong></p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
              <div style="padding: 10px; background: rgba(76,175,80,0.1); border-radius: 8px;">
                <strong style="color: #4CAF50;">SEED + PERSONA</strong><br>
                <span style="color: var(--text-secondary);">种草视频同时展示博主专业人设</span>
              </div>
              <div style="padding: 10px; background: rgba(76,175,80,0.1); border-radius: 8px;">
                <strong style="color: #4CAF50;">CONVERT + BRAND</strong><br>
                <span style="color: var(--text-secondary);">促销视频中强化品牌记忆点</span>
              </div>
              <div style="padding: 10px; background: rgba(76,175,80,0.1); border-radius: 8px;">
                <strong style="color: #4CAF50;">GROW + BOND</strong><br>
                <span style="color: var(--text-secondary);">涨粉内容让老粉也愿意转发</span>
              </div>
              <div style="padding: 10px; background: rgba(244,67,54,0.1); border-radius: 8px;">
                <strong style="color: #f44336;">❌ GROW + CONVERT</strong><br>
                <span style="color: var(--text-secondary);">涨粉和卖货往往是对立的</span>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              有同学可能会问：能不能一条视频又涨粉又卖货？<br><br>
              答案是：<em>主目标只能有一个</em>。为什么？因为涨粉需要的内容特质（有趣、有价值、可传播）和卖货需要的内容特质（展示产品、强调利益、促进下单）往往是冲突的。<br><br>
              你可以有次要目标，但主目标必须聚焦。
            </div>
          </div>
        `,
        notes: '解答常见问题：能否融合多个目标。强调主目标唯一性原则。'
      },

      // ========== Part 3: Section 段落类型 ==========
      {
        id: 'M02-part3-title',
        section: '3️⃣ Section段落',
        time: '0:35-0:55',
        type: 'title',
        title: 'Part 3',
        subtitle: 'Section 段落类型',
        description: '⏱ 0:35 - 0:55 | 20分钟',
        notes: '7种段落类型，本质是心理推进顺序。'
      },
      {
        id: 'M02-3-section-intro',
        section: '3️⃣ Section段落',
        time: '0:35-0:40',
        type: 'content',
        title: '什么是Section？',
        studentContent: `
          <div class="highlight-box" style="text-align: center; font-size: 16px;">
            <strong>Section = 心理推进的阶段</strong><br>
            不是"内容类型"，而是"观众状态变化"
          </div>
          <div style="margin-top: 14px;">
            <p style="margin-bottom: 10px; font-size: 14px;"><strong>🔥 核心认知：</strong>Section是心理推进顺序，不是内容顺序</p>
            <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px; padding: 12px 0; font-size: 13px;">
              <span style="padding: 6px 12px; background: rgba(244,67,54,0.2); border-radius: 6px;">注意力获取</span>
              <span>→</span>
              <span style="padding: 6px 12px; background: rgba(255,183,77,0.2); border-radius: 6px;">关联建立</span>
              <span>→</span>
              <span style="padding: 6px 12px; background: rgba(156,39,176,0.2); border-radius: 6px;">张力产生</span>
              <span>→</span>
              <span style="padding: 6px 12px; background: rgba(76,175,80,0.2); border-radius: 6px;">张力缓解</span>
              <span>→</span>
              <span style="padding: 6px 12px; background: rgba(100,181,246,0.2); border-radius: 6px;">决策稳定</span>
              <span>→</span>
              <span style="padding: 6px 12px; background: rgba(255,152,0,0.2); border-radius: 6px;">行为触发</span>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              很多人以为Section是"内容分类"——这里讲产品，这里讲证据。<em>这是错的。</em><br><br>
              Section的本质是<em>心理推进</em>。每一个Section要完成的任务是：把观众从一个心理状态推进到下一个心理状态。
            </div>
          </div>
        `,
        notes: 'Section的本质是心理推进，不是内容分类。这是核心认知！'
      },
      {
        id: 'M02-3-section-all',
        section: '3️⃣ Section段落',
        time: '0:40-0:48',
        type: 'content',
        title: '7种Section类型',
        studentContent: `
          <table class="section-table" style="font-size: 13px;">
            <tr>
              <th style="width:90px;">Section</th>
              <th style="width:90px;">中文名</th>
              <th style="width:140px;">观众状态迁移</th>
              <th>核心功能</th>
            </tr>
            <tr>
              <td class="code">HOOK</td>
              <td>注意力捕获</td>
              <td>浏览 → 注意</td>
              <td>打断自动滑动，争夺认知带宽 <strong style="color:#f44336;">✅必需</strong></td>
            </tr>
            <tr>
              <td class="code">BRIDGE</td>
              <td>关联建立</td>
              <td>注意 → 产生关联</td>
              <td>建立语境与个人相关性 <span style="color:#FFB74D;">⚠️高建议</span></td>
            </tr>
            <tr>
              <td class="code">PROBLEM</td>
              <td>张力建立</td>
              <td>平静 → 不安</td>
              <td>暴露现状与理想差距，制造改变动机 <span style="color:#4CAF50;">⭐强烈建议</span></td>
            </tr>
            <tr>
              <td class="code">RESOLUTION</td>
              <td>张力释放</td>
              <td>不安 → 有希望</td>
              <td>缓解张力，展示改善路径 <span style="color:#4CAF50;">⭐强烈建议</span></td>
            </tr>
            <tr>
              <td class="code">REVERSAL</td>
              <td>认知改写</td>
              <td>确信 → 重新思考</td>
              <td>挑战既有假设，重塑理解框架 <span style="color:#888;">非必需</span></td>
            </tr>
            <tr>
              <td class="code">VALUE</td>
              <td>决策稳定</td>
              <td>感兴趣 → 被说服</td>
              <td>提供选择理由，降低风险感 <span style="color:#4CAF50;">⭐强烈建议</span></td>
            </tr>
            <tr>
              <td class="code">CTA</td>
              <td>行为触发</td>
              <td>被说服 → 行动</td>
              <td>将选择倾向转化为行动 <strong style="color:#f44336;">✅必需</strong></td>
            </tr>
          </table>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 核心链条：</strong>HOOK(抓注意) → BRIDGE(建关联) → PROBLEM(制造张力) → RESOLUTION(释放张力) → VALUE(稳定决策) → CTA(触发行动)
          </div>
        `,
        notes: '7种Section是心理推进的完整链条。'
      },
      {
        id: 'M02-3-section-mantra',
        section: '3️⃣ Section段落',
        time: '0:48-0:52',
        type: 'content',
        title: '🎯 快速判定口诀',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="padding: 14px; background: rgba(244,67,54,0.1); border-radius: 10px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 6px;">😣 不舒服</div>
              <div style="font-size: 16px; color: #f44336; font-weight: bold;">→ PROBLEM</div>
              <div style="font-size: 12px; color: var(--text-secondary);">让观众焦虑、警觉</div>
            </div>
            <div style="padding: 14px; background: rgba(76,175,80,0.1); border-radius: 10px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 6px;">😌 有救了</div>
              <div style="font-size: 16px; color: #4CAF50; font-weight: bold;">→ RESOLUTION</div>
              <div style="font-size: 12px; color: var(--text-secondary);">缓解焦虑、看到希望</div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.1); border-radius: 10px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 6px;">😲 我错了</div>
              <div style="font-size: 16px; color: #64B5F6; font-weight: bold;">→ REVERSAL</div>
              <div style="font-size: 12px; color: var(--text-secondary);">认知被推翻、重新思考</div>
            </div>
            <div style="padding: 14px; background: rgba(255,183,77,0.1); border-radius: 10px; text-align: center;">
              <div style="font-size: 20px; margin-bottom: 6px;">🤑 值得买</div>
              <div style="font-size: 16px; color: #FFB74D; font-weight: bold;">→ VALUE</div>
              <div style="font-size: 12px; color: var(--text-secondary);">提供选择理由</div>
            </div>
            <div style="padding: 14px; background: rgba(156,39,176,0.1); border-radius: 10px; text-align: center; grid-column: span 2;">
              <div style="font-size: 20px; margin-bottom: 6px;">👆 去做吧</div>
              <div style="font-size: 16px; color: #9C27B0; font-weight: bold;">→ CTA</div>
              <div style="font-size: 12px; color: var(--text-secondary);">引导立即行动</div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              记住这五句话，你就能快速判断任何一段内容属于哪个Section：<br><br>
              <em>不舒服 → PROBLEM</em><br>
              <em>有救了 → RESOLUTION</em><br>
              <em>我错了 → REVERSAL</em><br>
              <em>值得买 → VALUE</em><br>
              <em>去做吧 → CTA</em>
            </div>
          </div>
        `,
        notes: '这个口诀是快速判定的核心工具，务必让学员记住。'
      },
      {
        id: 'M02-3-section-diff',
        section: '3️⃣ Section段落',
        time: '0:52-0:55',
        type: 'content',
        title: '⚠️ 最易混淆：RESOLUTION vs REVERSAL',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <div style="flex: 1; padding: 16px; background: rgba(76,175,80,0.1); border: 2px solid #4CAF50; border-radius: 12px;">
              <div style="font-size: 18px; color: #4CAF50; font-weight: bold; margin-bottom: 8px;">RESOLUTION</div>
              <div style="font-size: 14px; margin-bottom: 8px;"><strong>改变的是：处境</strong></div>
              <div style="font-size: 13px; color: var(--text-secondary);">"问题可以被解决"<br>世界变得可行</div>
              <div style="margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 6px; font-size: 12px;">
                例："这个产品能阻断黑色素生成路径"
              </div>
            </div>
            <div style="flex: 1; padding: 16px; background: rgba(100,181,246,0.1); border: 2px solid #64B5F6; border-radius: 12px;">
              <div style="font-size: 18px; color: #64B5F6; font-weight: bold; margin-bottom: 8px;">REVERSAL</div>
              <div style="font-size: 14px; margin-bottom: 8px;"><strong>改变的是：认知</strong></div>
              <div style="font-size: 13px; color: var(--text-secondary);">"你原来的理解是错的"<br>世界观被改写</div>
              <div style="margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 6px; font-size: 12px;">
                例："你以为是黑，其实是糖化导致的暗黄"
              </div>
            </div>
          </div>
          <div class="highlight-box" style="margin-top: 12px; text-align: center;">
            <strong>黄金判定问题：</strong>观众原来是错的吗？<br>
            YES → REVERSAL ｜ NO → RESOLUTION
          </div>
        `,
        presenterContent: '',
        notes: 'RESOLUTION改变处境，REVERSAL改变认知。这是最高频的误判。'
      },

      // ========== Part 4: Skeleton 骨架 ==========
      {
        id: 'M02-part4-title',
        section: '4️⃣ Skeleton骨架',
        time: '0:55-1:20',
        type: 'title',
        title: 'Part 4',
        subtitle: 'Skeleton 骨架预设',
        description: '⏱ 0:55 - 1:20 | 25分钟',
        notes: '8种骨架（ABC三级）是Section的标准组合。'
      },
      {
        id: 'M02-4-skeleton-intro',
        section: '4️⃣ Skeleton骨架',
        time: '0:55-1:00',
        type: 'content',
        title: '什么是Skeleton？',
        studentContent: `
          <div class="highlight-box" style="text-align: center; font-size: 18px;">
            <strong>Skeleton = Section的预设组合</strong><br>
            是经过验证的、标准化的视频结构模板
          </div>
          <div style="margin-top: 16px;">
            <p style="margin-bottom: 12px;">就像乐高有"套装"一样，Skeleton就是视频的"套装"：</p>
            <ul>
              <li>不用每次从零开始想结构</li>
              <li>根据目标和时长选择合适的骨架</li>
              <li>然后往里面填充内容</li>
            </ul>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              有了Section这些"积木"之后，问题来了：怎么组合？<br><br>
              好消息是，我们不需要每次都从零开始。我们总结出了8种标准骨架，按复杂度分为ABC三级。
            </div>
          </div>
        `,
        notes: 'Skeleton是Section的"套餐"，降低决策成本。'
      },
      {
        id: 'M02-4-skeleton-all',
        section: '4️⃣ Skeleton骨架',
        time: '1:00-1:10',
        type: 'content',
        title: '8种骨架类型（ABC三级）',
        studentContent: `
          <div style="font-size: 10px; color: var(--text-secondary); margin-bottom: 8px;">缩写：H=HOOK, P=PROBLEM, Re=RESOLUTION, Rv=REVERSAL, V=VALUE, C=CTA, Br=BRIDGE</div>
          <div style="margin-bottom: 10px;">
            <div style="font-size: 13px; font-weight: bold; color: #4CAF50; margin-bottom: 6px;">Tier A — 基础四段（新手优先）</div>
            <div class="skeleton-list">
              <div class="skeleton-item"><span class="skeleton-type">HPVC</span><span class="skeleton-flow">H → P → V → C</span><span class="skeleton-use">四段-问题型 | 30-45s</span></div>
              <div class="skeleton-item"><span class="skeleton-type">HBVC</span><span class="skeleton-flow">H → Re → V → C</span><span class="skeleton-use">四段-张力释放型 | 30-45s</span></div>
              <div class="skeleton-item"><span class="skeleton-type">HRVC</span><span class="skeleton-flow">H → Rv → V → C</span><span class="skeleton-use">四段-反转型 | 30-45s</span></div>
            </div>
          </div>
          <div style="margin-bottom: 10px;">
            <div style="font-size: 13px; font-weight: bold; color: #FFB74D; margin-bottom: 6px;">Tier B — 五段结构（叙事更完整）</div>
            <div class="skeleton-list">
              <div class="skeleton-item"><span class="skeleton-type">HPRVC</span><span class="skeleton-flow">H → P → Rv → V → C</span><span class="skeleton-use">五段-问题反转型 | 45-60s</span></div>
              <div class="skeleton-item"><span class="skeleton-type">HPBVC</span><span class="skeleton-flow">H → P → Re → V → C</span><span class="skeleton-use">五段-问题+张力释放型 | 45-60s</span></div>
            </div>
          </div>
          <div>
            <div style="font-size: 13px; font-weight: bold; color: #EF5350; margin-bottom: 6px;">Tier C — 含 BRIDGE 铺垫（需较强把控力）</div>
            <div class="skeleton-list">
              <div class="skeleton-item"><span class="skeleton-type">HBrPVC</span><span class="skeleton-flow">H → Br → P → V → C</span><span class="skeleton-use">五段-铺垫问题型 | 45-60s</span></div>
              <div class="skeleton-item"><span class="skeleton-type">HBrBVC</span><span class="skeleton-flow">H → Br → Re → V → C</span><span class="skeleton-use">五段-铺垫+张力释放型 | 50-60s</span></div>
              <div class="skeleton-item"><span class="skeleton-type">HBrPBVC</span><span class="skeleton-flow">H → Br → P → Re → V → C</span><span class="skeleton-use">六段-完整铺垫型 | 50-90s</span></div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 记忆技巧：</strong>所有骨架都是H开头C结尾。Tier-A是四段入门，Tier-B是五段进阶，Tier-C含Bridge铺垫需要较强把控力。新手从Tier-A开始。
          </div>
        `,
        notes: 'Tier-A适合新手，Tier-B叙事更完整，Tier-C含Bridge需要把控力。'
      },
      {
        id: 'M02-4-skeleton-decision',
        section: '4️⃣ Skeleton骨架',
        time: '1:10-1:15',
        type: 'content',
        title: '🌳 骨架选择决策树',
        studentContent: `
          <div style="font-size: 12px; margin-bottom: 8px; color: var(--text-secondary);">先选 Tier → 再选具体骨架</div>
          <div class="decision-tree" style="font-size: 13px;">
            <div style="font-weight: bold; color: #4CAF50; margin: 8px 0 4px;">Tier A — 30-45秒，快速出片</div>
            <div class="decision-item">
              <span class="decision-if">需要制造问题→给价值</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #4CAF50;">HPVC（四段-问题型）</span>
            </div>
            <div class="decision-item">
              <span class="decision-if">直接展示解决方案→给价值</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #4CAF50;">HBVC（四段-张力释放型）</span>
            </div>
            <div class="decision-item">
              <span class="decision-if">需要反转认知→给价值</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #4CAF50;">HRVC（四段-反转型）</span>
            </div>
            <div style="font-weight: bold; color: #FFB74D; margin: 8px 0 4px;">Tier B — 45-60秒，叙事更完整</div>
            <div class="decision-item">
              <span class="decision-if">问题+反转双驱动，高说服力</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #FFB74D;">HPRVC（五段-问题反转型）</span>
            </div>
            <div class="decision-item">
              <span class="decision-if">问题+释放张力，标准叙事</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #FFB74D;">HPBVC（五段-问题+张力释放型）</span>
            </div>
            <div style="font-weight: bold; color: #EF5350; margin: 8px 0 4px;">Tier C — 含 BRIDGE，50-90秒</div>
            <div class="decision-item">
              <span class="decision-if">上下文跨度大，需要铺垫前提</span>
              <span class="decision-arrow">→</span>
              <span class="decision-then" style="color: #EF5350;">HBrPVC / HBrBVC / HBrPBVC</span>
            </div>
          </div>
          <div class="tip-box" style="margin-top: 10px; font-size: 12px;">
            <strong>💡 新手建议：</strong>从 Tier-A 开始练习。HPVC（问题型）是最安全的选择。<br>
            Tier-C 的 BRIDGE 容易拖慢节奏，仅在上下文跨度大时使用。
          </div>
        `,
        presenterContent: '',
        notes: '按 Tier 分级选择，新手从 A 开始，进阶选 B，Tier-C 需要较强把控力。'
      },
      // ========== Part 5: Strategy 策略 ==========
      {
        id: 'M02-part5-title',
        section: '5️⃣ Strategy策略',
        time: '1:20-2:00',
        type: 'title',
        title: 'Part 5',
        subtitle: 'Strategy 说服策略',
        description: '⏱ 1:20 - 2:00 | 40分钟',
        notes: '策略是骨架的灵魂，决定了"怎么说"。这是最详细的部分，要循序渐进讲解。'
      },

      // === 5.1 Strategy总览 ===
      {
        id: 'M02-5-intro',
        section: '5️⃣ Strategy策略',
        time: '1:20-1:23',
        type: 'content',
        title: 'Skeleton vs Strategy',
        studentContent: `
          <div style="display: flex; gap: 24px; align-items: center; justify-content: center; padding: 16px 0;">
            <div style="flex: 1; text-align: center; padding: 20px; background: rgba(255,183,77,0.15); border-radius: 12px;">
              <div style="font-size: 24px; font-weight: bold; color: var(--accent); margin-bottom: 10px;">Skeleton</div>
              <div style="font-size: 16px;">视频由哪些部分组成</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">= "说什么"</div>
            </div>
            <div style="font-size: 32px; color: #666;">+</div>
            <div style="flex: 1; text-align: center; padding: 20px; background: rgba(100,181,246,0.15); border-radius: 12px;">
              <div style="font-size: 24px; font-weight: bold; color: #64B5F6; margin-bottom: 10px;">Strategy</div>
              <div style="font-size: 16px;">每个部分用什么方式说服</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">= "怎么说"</div>
            </div>
          </div>
          <div class="highlight-box" style="text-align: center;">
            Strategy绑定在每个Section上，决定了这个段落的说服方式
          </div>
        `,
        presenterContent: '',
        notes: '明确Skeleton和Strategy的区别。'
      },
      {
        id: 'M02-5-architecture',
        section: '5️⃣ Strategy策略',
        time: '1:23-1:28',
        type: 'content',
        title: '🏗️ L0-L1-L2 三层架构总览',
        studentContent: `
          <div style="text-align: center; margin-bottom: 12px;">
            <span style="font-size: 13px; color: var(--text-secondary);">策略体系 = L0战略层 → L1战术层 → L2执行层（层层细化）</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; font-size: 11px;">
            <!-- HEAD 列 -->
            <div style="background: rgba(100,181,246,0.12); border-radius: 10px; padding: 10px; border-top: 3px solid #64B5F6;">
              <div style="text-align: center; font-weight: bold; color: #64B5F6; font-size: 14px; margin-bottom: 8px;">🧠 HEAD</div>
              <div style="font-size: 10px; color: var(--text-secondary); text-align: center; margin-bottom: 10px;">理性说服</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="background: rgba(100,181,246,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #64B5F6;">EXPLAIN</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Logic · Data · Transparency</div>
                </div>
                <div style="background: rgba(100,181,246,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #64B5F6;">PROOF</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">UGC · Before_After · Sales_Data</div>
                </div>
                <div style="background: rgba(100,181,246,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #64B5F6;">AUTHORITY</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Expert · Certification · Media · Guarantee</div>
                </div>
                <div style="background: rgba(100,181,246,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #64B5F6;">CONTRAST</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">AB · Shocking · Value_Stack</div>
                </div>
              </div>
            </div>
            <!-- HEART 列 -->
            <div style="background: rgba(239,83,80,0.12); border-radius: 10px; padding: 10px; border-top: 3px solid #EF5350;">
              <div style="text-align: center; font-weight: bold; color: #EF5350; font-size: 14px; margin-bottom: 8px;">❤️ HEART</div>
              <div style="font-size: 10px; color: var(--text-secondary); text-align: center; margin-bottom: 10px;">情感打动</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="background: rgba(239,83,80,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #EF5350;">PAIN</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Scene · Daily · Loss</div>
                </div>
                <div style="background: rgba(239,83,80,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #EF5350;">FEAR</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Consequence · Miss_Out</div>
                </div>
                <div style="background: rgba(239,83,80,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #EF5350;">STORY</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Origin · User</div>
                </div>
              </div>
            </div>
            <!-- EYES 列 -->
            <div style="background: rgba(186,104,200,0.12); border-radius: 10px; padding: 10px; border-top: 3px solid #BA68C8;">
              <div style="text-align: center; font-weight: bold; color: #BA68C8; font-size: 14px; margin-bottom: 8px;">👁️ EYES</div>
              <div style="font-size: 10px; color: var(--text-secondary); text-align: center; margin-bottom: 10px;">眼见为实</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="background: rgba(186,104,200,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #BA68C8;">DEMO</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Step · Multi_Angle</div>
                </div>
              </div>
            </div>
            <!-- HAND 列 -->
            <div style="background: rgba(255,183,77,0.12); border-radius: 10px; padding: 10px; border-top: 3px solid #FFB74D;">
              <div style="text-align: center; font-weight: bold; color: #FFB74D; font-size: 14px; margin-bottom: 8px;">✋ HAND</div>
              <div style="font-size: 10px; color: var(--text-secondary); text-align: center; margin-bottom: 10px;">推动行动</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="background: rgba(255,183,77,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #FFB74D;">SUSPENSE</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Question · Reveal</div>
                </div>
                <div style="background: rgba(255,183,77,0.15); padding: 6px 8px; border-radius: 6px;">
                  <div style="font-weight: bold; color: #FFB74D;">URGENCY</div>
                  <div style="font-size: 9px; color: #888; margin-top: 2px;">Time · Stock</div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 12px; font-size: 11px; color: var(--text-secondary);">
            <span>🔵 L0 = 大标题</span>
            <span>⬜ L1 = 卡片标题</span>
            <span>📝 L2 = 卡片内容</span>
            <span style="color: var(--accent);">4个L0 → 10个L1 → 26个L2</span>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              大家看这张图，Strategy是一个三层级联体系。<br><br>
              最上面蓝色/红色/紫色/橙色的大标题是L0，只有4种，代表说服的大方向。<br><br>
              每个L0下面有若干个L1，比如HEAD下面有EXPLAIN、PROOF、AUTHORITY、CONTRAST四个。<br><br>
              每个L1下面又有若干个L2，是可以直接拿来用的具体技法。<br><br>
              这就是"级联"的意思：L0包含L1，L1包含L2。
            </div>
          </div>
        `,
        notes: '展示清晰的层级关系，让学员理解级联结构。'
      },
      {
        id: 'M02-5-full-table',
        section: '5️⃣ Strategy策略',
        time: '1:28-1:30',
        type: 'content',
        title: '📊 Strategy完整对照表',
        studentContent: `
          <table class="section-table" style="font-size: 11px;">
            <tr style="background: rgba(255,255,255,0.1);">
              <th style="width:55px;">L0</th>
              <th style="width:75px;">L1</th>
              <th>L2 具体战术</th>
            </tr>
            <tr>
              <td rowspan="4" style="background: rgba(100,181,246,0.15); color: #64B5F6; font-weight: bold;">HEAD<br><span style="font-size:10px;">理性说服</span></td>
              <td>EXPLAIN</td>
              <td>Logic(逻辑推理) · Data(数据佐证) · Transparency(配方透明)</td>
            </tr>
            <tr>
              <td>PROOF</td>
              <td>UGC(UGC见证) · Before_After(使用前后对比) · Sales_Data(销量/复购数据)</td>
            </tr>
            <tr>
              <td>AUTHORITY</td>
              <td>Expert(专家背书) · Certification(认证/奖项) · Media(媒体报道) · Guarantee(承诺保障)</td>
            </tr>
            <tr>
              <td>CONTRAST</td>
              <td>AB(A/B对比) · Shocking(反差冲击) · Value_Stack(价值堆叠)</td>
            </tr>
            <tr>
              <td rowspan="3" style="background: rgba(239,83,80,0.15); color: #EF5350; font-weight: bold;">HEART<br><span style="font-size:10px;">情感打动</span></td>
              <td>PAIN</td>
              <td>Scene(场景共鸣) · Daily(日常困扰) · Loss(损失厌恶)</td>
            </tr>
            <tr>
              <td>FEAR</td>
              <td>Consequence(后果警示) · Miss_Out(错过恐惧)</td>
            </tr>
            <tr>
              <td>STORY</td>
              <td>Origin(品牌故事) · User(用户故事)</td>
            </tr>
            <tr>
              <td style="background: rgba(186,104,200,0.15); color: #BA68C8; font-weight: bold;">EYES<br><span style="font-size:10px;">眼见为实</span></td>
              <td>DEMO</td>
              <td>Step(分步演示) · Multi_Angle(多角度展示)</td>
            </tr>
            <tr>
              <td rowspan="2" style="background: rgba(255,183,77,0.15); color: #FFB74D; font-weight: bold;">HAND<br><span style="font-size:10px;">推动行动</span></td>
              <td>SUSPENSE</td>
              <td>Question(反问开场) · Reveal(揭秘反转)</td>
            </tr>
            <tr>
              <td>URGENCY</td>
              <td>Time(限时促销) · Stock(限量库存)</td>
            </tr>
          </table>
          <div class="tip-box" style="margin-top: 12px; font-size: 12px;">
            <strong>💡 记忆技巧：</strong>4个L0 → 10个L1 → 26个L2。L0是方向，L1是手段，L2是具体动作。
          </div>
        `,
        presenterContent: '',
        notes: '完整对照表，让学员有个参考。可以打印成速查表。'
      },

      // === 5.2 L0四大路径概览 ===
      {
        id: 'M02-5-L0-overview',
        section: '5️⃣ Strategy策略',
        time: '1:30-1:32',
        type: 'content',
        title: 'L0：四大说服路径',
        studentContent: `
          <div class="strategy-grid">
            <div class="strategy-box strategy-head">
              <h3>🧠 HEAD</h3>
              <p><strong>认知与信任</strong> - 理性说服</p>
              <p>核心问题："为什么相信？"</p>
              <div class="tagline">"我给你讲道理，你就会信"</div>
            </div>
            <div class="strategy-box strategy-heart">
              <h3>❤️ HEART</h3>
              <p><strong>情绪与共鸣</strong> - 情感打动</p>
              <p>核心问题："为什么在意？"</p>
              <div class="tagline">"我懂你，我也经历过"</div>
            </div>
            <div class="strategy-box strategy-eyes">
              <h3>👁️ EYES</h3>
              <p><strong>视觉与体验</strong> - 眼见为实</p>
              <p>核心问题："效果如何？"</p>
              <div class="tagline">"你看，就是这么神奇"</div>
            </div>
            <div class="strategy-box strategy-hand">
              <h3>✋ HAND</h3>
              <p><strong>吸引与行动</strong> - 推动转化</p>
              <p>核心问题："为什么现在？"</p>
              <div class="tagline">"现在不买，过时不候"</div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 教学提示：</strong>让学员记住4个核心问题：为什么相信？为什么在意？效果如何？为什么现在？
          </div>
        `,
        notes: '四大路径是Strategy的核心，让学员记住关键词和核心问题。'
      },

      // === 5.3 HEAD详解 ===
      {
        id: 'M02-5-HEAD-title',
        section: '5️⃣ Strategy策略',
        time: '1:32-1:33',
        type: 'content',
        title: '🧠 L0: HEAD 认知与信任',
        studentContent: `
          <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div style="flex: 1; padding: 20px; background: rgba(100,181,246,0.15); border-radius: 12px; border-left: 4px solid #64B5F6;">
              <div style="font-size: 22px; font-weight: bold; color: #64B5F6; margin-bottom: 12px;">🧠 HEAD</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>核心逻辑：</strong>用理性说服观众</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
                "我给你讲清楚道理，你就会相信我说的是真的"
              </div>
              <div style="font-size: 14px;">
                <strong>适用场景：</strong><br>
                • 功能性产品（护肤品、保健品）<br>
                • 高客单价产品（需要建立信任）<br>
                • 目标人群偏理性（专业人士、高知群体）
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">HEAD下的4个L1：</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 10px; background: rgba(100,181,246,0.1); border-radius: 8px;">
                  <strong>EXPLAIN</strong> - 机制解释：讲清楚"为什么有效"
                </div>
                <div style="padding: 10px; background: rgba(100,181,246,0.1); border-radius: 8px;">
                  <strong>PROOF</strong> - 真实见证：用事实和数据说话
                </div>
                <div style="padding: 10px; background: rgba(100,181,246,0.1); border-radius: 8px;">
                  <strong>AUTHORITY</strong> - 权威背书：借势建立信任
                </div>
                <div style="padding: 10px; background: rgba(100,181,246,0.1); border-radius: 8px;">
                  <strong>CONTRAST</strong> - 对比反差：突出差异和优势
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'HEAD是理性说服路径，适合需要建立信任的场景。'
      },
      {
        id: 'M02-5-HEAD-EXPLAIN',
        section: '5️⃣ Strategy策略',
        time: '1:33-1:35',
        type: 'content',
        title: 'HEAD → EXPLAIN 机制解释',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #64B5F6; color: white; border-radius: 4px; font-size: 12px;">HEAD</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">EXPLAIN 机制解释</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">讲清楚"为什么有效"</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Logic 逻辑推理</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">用逻辑链条解释因果关系</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "因为它含有XXX成分，所以能够XXX"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Data 数据佐证</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">用实验数据或统计数据支撑论点</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "实验证明，使用28天后，XX指标提升37%"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Transparency 配方透明</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">公开成分/工艺/流程，建立信任</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "我们的配方表公开，你可以自己查"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'EXPLAIN的3个L2：Logic/Data/Transparency，核心是"讲清楚为什么"。'
      },
      {
        id: 'M02-5-HEAD-PROOF',
        section: '5️⃣ Strategy策略',
        time: '1:35-1:37',
        type: 'content',
        title: 'HEAD → PROOF 真实见证',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #64B5F6; color: white; border-radius: 4px; font-size: 12px;">HEAD</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">PROOF 真实见证</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">用事实和数据说话</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">UGC UGC见证</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">展示真实用户的使用反馈</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "来看看买家们怎么说的" "用户反馈：用了两周..."
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Before_After 使用前后对比</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">对比使用前后的效果变化</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "这是我用之前和用了一周之后的对比"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Sales_Data 销量/复购数据</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">用销量、复购率等数据证明受欢迎</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "上架3天卖出10万件" "复购率80%"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'PROOF的3个L2：UGC/Before_After/Sales_Data，核心是"用事实说话"。'
      },
      {
        id: 'M02-5-HEAD-AUTHORITY',
        section: '5️⃣ Strategy策略',
        time: '1:37-1:39',
        type: 'content',
        title: 'HEAD → AUTHORITY 权威背书',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #64B5F6; color: white; border-radius: 4px; font-size: 12px;">HEAD</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">AUTHORITY 权威背书</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">借势建立信任</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Expert 专家背书</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">借用专业人士的权威</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "皮肤科医生推荐" "营养师都在用" "XX专家亲测"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Certification 认证/奖项</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">展示获得的认证、检测报告、奖项</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "获得了XXX国际认证" "通过FDA认证"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Media 媒体报道</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">借媒体公信力</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "被XX媒体报道" "登上XX杂志" "XX节目推荐"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Guarantee 承诺保障</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">降低用户风险感知</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "7天无理由退货" "不满意全额退款" "质量问题包换"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'AUTHORITY的4个L2：Expert/Certification/Media/Guarantee，核心是"借势"。'
      },
      {
        id: 'M02-5-HEAD-CONTRAST',
        section: '5️⃣ Strategy策略',
        time: '1:39-1:41',
        type: 'content',
        title: 'HEAD → CONTRAST 对比反差',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #64B5F6; color: white; border-radius: 4px; font-size: 12px;">HEAD</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">CONTRAST 对比反差</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">突出差异和优势</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">AB A/B对比</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">同类产品或方案的直接对比</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "我用它和XX大牌做了个对比"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Shocking 反差冲击</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">打破常规认知的反差效果</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "你绝对想不到，这个差距有多大"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(100,181,246,0.08); border-radius: 10px; border: 1px solid rgba(100,181,246,0.2);">
              <div style="font-weight: bold; color: #64B5F6; margin-bottom: 8px;">Value_Stack 价值堆叠</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">通过赠品、组合、价格锚定让价值感超价格</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "买一送三" "原价999现价299"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'CONTRAST的3个L2：AB/Shocking/Value_Stack，核心是"对比产生价值感"。'
      },

      // === 5.4 HEART详解 ===
      {
        id: 'M02-5-HEART-title',
        section: '5️⃣ Strategy策略',
        time: '1:41-1:42',
        type: 'content',
        title: '❤️ L0: HEART 情绪与共鸣',
        studentContent: `
          <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div style="flex: 1; padding: 20px; background: rgba(239,83,80,0.15); border-radius: 12px; border-left: 4px solid #EF5350;">
              <div style="font-size: 22px; font-weight: bold; color: #EF5350; margin-bottom: 12px;">❤️ HEART</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>核心逻辑：</strong>用情感打动观众</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
                "我懂你的感受，我也经历过，所以你可以信任我"
              </div>
              <div style="font-size: 14px;">
                <strong>适用场景：</strong><br>
                • 解决情绪类问题（焦虑、自卑）<br>
                • 有故事可讲的产品<br>
                • 目标人群偏感性
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">HEART下的3个L1：</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 10px; background: rgba(239,83,80,0.1); border-radius: 8px;">
                  <strong>PAIN</strong> - 痛点共鸣：引发"你懂我"的感觉
                </div>
                <div style="padding: 10px; background: rgba(239,83,80,0.1); border-radius: 8px;">
                  <strong>FEAR</strong> - 恐惧诉求：制造紧迫感和危机感
                </div>
                <div style="padding: 10px; background: rgba(239,83,80,0.1); border-radius: 8px;">
                  <strong>STORY</strong> - 故事叙事：用故事建立情感连接
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'HEART是情感说服路径，适合感性人群和有故事的产品。'
      },
      {
        id: 'M02-5-HEART-PAIN',
        section: '5️⃣ Strategy策略',
        time: '1:42-1:44',
        type: 'content',
        title: 'HEART → PAIN 痛点共鸣',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #EF5350; color: white; border-radius: 4px; font-size: 12px;">HEART</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">PAIN 痛点共鸣</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">引发"你懂我"的感觉</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Scene 场景共鸣</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">描述具体痛苦场景</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "每次照镜子都不敢..." "约会前总是担心..." "出门在外最怕..."
              </div>
            </div>
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Daily 日常困扰</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">列举日常生活中的具体困扰</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "每天早上起来脸都水肿" "总是反复长痘"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Loss 损失厌恶</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">强调不解决问题会造成的损失</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "不重视这个问题，皮肤只会越来越差"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'PAIN的3个L2：Scene/Daily/Loss，核心是"共情"。'
      },
      {
        id: 'M02-5-HEART-FEAR',
        section: '5️⃣ Strategy策略',
        time: '1:44-1:46',
        type: 'content',
        title: 'HEART → FEAR 恐惧诉求',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #EF5350; color: white; border-radius: 4px; font-size: 12px;">HEART</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">FEAR 恐惧诉求</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">制造紧迫感和危机感</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Consequence 后果警示</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">展示不行动可能带来的负面后果</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "长期这样下去，会导致XXX" "如果你还在用这个方法..."
              </div>
            </div>
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Miss_Out 错过恐惧</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">营造错过机会的紧迫感</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "这个价格过了今天就没有了" "别人都已经在用了"
              </div>
            </div>
          </div>
          <div class="warning-box" style="margin-top: 12px; font-size: 12px;">
            <strong>⚠️ 注意：</strong>FEAR要适度使用，过度会让人反感。建议与RESOLUTION配合使用，先制造焦虑再给出解决方案。
          </div>
        `,
        presenterContent: '',
        notes: 'FEAR的2个L2：Consequence/Miss_Out，核心是"制造紧迫感"，但要适度。'
      },
      {
        id: 'M02-5-HEART-STORY',
        section: '5️⃣ Strategy策略',
        time: '1:46-1:48',
        type: 'content',
        title: 'HEART → STORY 故事叙事',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #EF5350; color: white; border-radius: 4px; font-size: 12px;">HEART</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">STORY 故事叙事</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">用故事建立情感连接</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">Origin 品牌故事</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">讲述品牌/产品的诞生故事</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "这个品牌的创始人，最初是为了帮助XXX..."
              </div>
            </div>
            <div style="padding: 14px; background: rgba(239,83,80,0.08); border-radius: 10px; border: 1px solid rgba(239,83,80,0.2);">
              <div style="font-weight: bold; color: #EF5350; margin-bottom: 8px;">User 用户故事</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">真实用户的使用经历和改变</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "有个用户告诉我，她用了之后..."
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'STORY的2个L2：Origin/User，核心是"用故事打动人"。'
      },

      // === 5.5 EYES详解 ===
      {
        id: 'M02-5-EYES-title',
        section: '5️⃣ Strategy策略',
        time: '1:48-1:50',
        type: 'content',
        title: '👁️ L0: EYES 视觉与体验',
        studentContent: `
          <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div style="flex: 1; padding: 20px; background: rgba(186,104,200,0.15); border-radius: 12px; border-left: 4px solid #BA68C8;">
              <div style="font-size: 22px; font-weight: bold; color: #BA68C8; margin-bottom: 12px;">👁️ EYES</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>核心逻辑：</strong>让观众"眼见为实"</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
                "你不用听我说，你自己看，效果就是这么好"
              </div>
              <div style="font-size: 14px;">
                <strong>适用场景：</strong><br>
                • 效果可视化的产品（美妆、清洁）<br>
                • 使用过程有冲击力<br>
                • 前后对比明显
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">EYES下的1个L1：</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 10px; background: rgba(186,104,200,0.1); border-radius: 8px;">
                  <strong>DEMO</strong> - 展示演示：用视觉直接展示效果
                </div>
              </div>
              <div class="tip-box" style="margin-top: 16px; font-size: 12px;">
                <strong>💡 特点：</strong>EYES是最直接的说服路径。产品效果好的话，"眼见为实"比任何语言都有说服力。
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'EYES是视觉说服路径，适合效果可视化的产品。'
      },
      {
        id: 'M02-5-EYES-DEMO',
        section: '5️⃣ Strategy策略',
        time: '1:50-1:52',
        type: 'content',
        title: 'EYES → DEMO 展示演示',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #BA68C8; color: white; border-radius: 4px; font-size: 12px;">EYES</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">DEMO 展示演示</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">用视觉直接展示效果</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(186,104,200,0.08); border-radius: 10px; border: 1px solid rgba(186,104,200,0.2);">
              <div style="font-weight: bold; color: #BA68C8; margin-bottom: 8px;">Step 分步演示</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">分步骤展示使用方法</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "第一步：先XXX，第二步：再XXX"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(186,104,200,0.08); border-radius: 10px; border: 1px solid rgba(186,104,200,0.2);">
              <div style="font-weight: bold; color: #BA68C8; margin-bottom: 8px;">Multi_Angle 多角度展示</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">多角度、多场景展示产品</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "从这个角度看，效果更明显"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'DEMO的2个L2：Step/Multi_Angle，核心是"眼见为实"。'
      },

      // === 5.6 HAND详解 ===
      {
        id: 'M02-5-HAND-title',
        section: '5️⃣ Strategy策略',
        time: '1:52-1:53',
        type: 'content',
        title: '✋ L0: HAND 吸引与行动',
        studentContent: `
          <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div style="flex: 1; padding: 20px; background: rgba(255,183,77,0.15); border-radius: 12px; border-left: 4px solid #FFB74D;">
              <div style="font-size: 22px; font-weight: bold; color: #FFB74D; margin-bottom: 12px;">✋ HAND</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>核心逻辑：</strong>推动观众采取行动</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
                "现在不买/不看，你就会错过/后悔"
              </div>
              <div style="font-size: 14px;">
                <strong>特别适用于：</strong><br>
                • HOOK开场（用悬念吸引）<br>
                • CTA收尾（用紧迫促行动）<br>
                • 促销活动期间
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">HAND下的2个L1：</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 10px; background: rgba(255,183,77,0.1); border-radius: 8px;">
                  <strong>SUSPENSE</strong> - 悬念反问：勾起好奇心，吸引继续看
                </div>
                <div style="padding: 10px; background: rgba(255,183,77,0.1); border-radius: 8px;">
                  <strong>URGENCY</strong> - 稀缺紧迫：制造紧迫感，推动行动
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: 'HAND是行动导向路径，特别适合HOOK和CTA。'
      },
      {
        id: 'M02-5-HAND-SUSPENSE',
        section: '5️⃣ Strategy策略',
        time: '1:53-1:55',
        type: 'content',
        title: 'HAND → SUSPENSE 悬念反问',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #FFB74D; color: white; border-radius: 4px; font-size: 12px;">HAND</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">SUSPENSE 悬念反问</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">勾起好奇心</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(255,183,77,0.08); border-radius: 10px; border: 1px solid rgba(255,183,77,0.2);">
              <div style="font-weight: bold; color: #FFB74D; margin-bottom: 8px;">Question 反问开场</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">用疑问句开场制造信息缺口</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "你知道90%的人都犯了这个错误吗？"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(255,183,77,0.08); border-radius: 10px; border: 1px solid rgba(255,183,77,0.2);">
              <div style="font-weight: bold; color: #FFB74D; margin-bottom: 8px;">Reveal 揭秘反转</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">先设悬念后揭秘的反转结构</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "答案你绝对想不到..." "最后一个绝了"
              </div>
            </div>
          </div>
          <div class="tip-box" style="margin-top: 12px; font-size: 12px;">
            <strong>💡 最佳用途：</strong>SUSPENSE是写HOOK的最佳武器。用悬念开场，让观众"不得不看下去"。
          </div>
        `,
        presenterContent: '',
        notes: 'SUSPENSE的2个L2：Question/Reveal，核心是"制造好奇"。'
      },
      {
        id: 'M02-5-HAND-URGENCY',
        section: '5️⃣ Strategy策略',
        time: '1:55-1:57',
        type: 'content',
        title: 'HAND → URGENCY 稀缺紧迫',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; padding: 4px 12px; background: #FFB74D; color: white; border-radius: 4px; font-size: 12px;">HAND</span>
            <span style="margin: 0 8px; color: #666;">→</span>
            <span style="font-size: 18px; font-weight: bold;">URGENCY 稀缺紧迫</span>
            <span style="margin-left: 12px; font-size: 14px; color: var(--text-secondary);">推动立即行动</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(255,183,77,0.08); border-radius: 10px; border: 1px solid rgba(255,183,77,0.2);">
              <div style="font-weight: bold; color: #FFB74D; margin-bottom: 8px;">Time 限时促销</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">限时优惠、倒计时促销</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "限时活动，只剩最后3小时" "今天最后一天"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(255,183,77,0.08); border-radius: 10px; border: 1px solid rgba(255,183,77,0.2);">
              <div style="font-weight: bold; color: #FFB74D; margin-bottom: 8px;">Stock 限量库存</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">库存有限、售完即止</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
                "库存只剩最后200件" "限量500份"
              </div>
            </div>
          </div>
          <div class="tip-box" style="margin-top: 12px; font-size: 12px;">
            <strong>💡 最佳用途：</strong>URGENCY是CTA收尾的利器。在观众被说服后，用紧迫感推动最终行动。
          </div>
        `,
        presenterContent: '',
        notes: 'URGENCY的2个L2：Time/Stock，核心是"现在就要行动"。'
      },

      // === 5.7 Section × Strategy 配合 ===
      {
        id: 'M02-5-section-strategy',
        section: '5️⃣ Strategy策略',
        time: '1:57-2:00',
        type: 'content',
        title: '🔗 Section × Strategy 配合',
        studentContent: `
          <div style="font-size: 12px; text-align: center; color: var(--text-secondary); margin-bottom: 12px;">
            每个Section有最适合的Strategy组合，选对了事半功倍
          </div>
          <table class="section-table" style="font-size: 11px;">
            <tr style="background: rgba(255,255,255,0.1);">
              <th style="width: 90px;">Section</th>
              <th style="width: 100px;">心理任务</th>
              <th style="width: 120px;">推荐L0</th>
              <th>常用L1组合</th>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">HOOK</td>
              <td>抓住注意力</td>
              <td><span style="color: #FFB74D;">HAND</span> / <span style="color: #EF5350;">HEART</span></td>
              <td>SUSPENSE(Question/Reveal) · PAIN(Scene) · CONTRAST</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">BRIDGE</td>
              <td>建立关联</td>
              <td><span style="color: #64B5F6;">HEAD</span> / <span style="color: #EF5350;">HEART</span></td>
              <td>EXPLAIN(Logic) · AUTHORITY · PAIN(Scene/Daily)</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">PROBLEM</td>
              <td>制造张力</td>
              <td><span style="color: #EF5350;">HEART</span></td>
              <td>PAIN(Scene/Daily/Loss) · FEAR(Consequence/Miss_Out)</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">RESOLUTION</td>
              <td>释放张力</td>
              <td><span style="color: #64B5F6;">HEAD</span> / <span style="color: #BA68C8;">EYES</span></td>
              <td>EXPLAIN(Logic/Data) · DEMO(Step/Multi_Angle)</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">REVERSAL</td>
              <td>改变认知</td>
              <td><span style="color: #64B5F6;">HEAD</span> / <span style="color: #EF5350;">HEART</span></td>
              <td>CONTRAST(AB/Shocking) · STORY(Origin/User)</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">VALUE</td>
              <td>稳定决策</td>
              <td><span style="color: #64B5F6;">HEAD</span> / <span style="color: #BA68C8;">EYES</span></td>
              <td>PROOF(UGC/Sales_Data) · AUTHORITY(Expert/Certification) · DEMO(Step)</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: var(--accent);">CTA</td>
              <td>推动行动</td>
              <td><span style="color: #FFB74D;">HAND</span></td>
              <td>URGENCY(Time/Stock) · PROOF(Sales_Data) · FEAR</td>
            </tr>
          </table>
          <div class="tip-box" style="margin-top: 10px; font-size: 11px;">
            <strong>💡 记忆技巧：</strong>HOOK用悬念抓人，PROBLEM用痛点制造张力，RESOLUTION用逻辑/演示释放，VALUE用证据稳定，CTA用紧迫促行动
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              这张表是Section和Strategy的配合指南。<br><br>
              比如HOOK要抓注意力，最适合用HAND的悬念策略；<br>
              PROBLEM要制造张力，最适合用HEART的痛点和恐惧；<br>
              CTA要推动行动，最适合用HAND的紧迫感。<br><br>
              这个配合关系记住了，写脚本就有方向了。
            </div>
          </div>
        `,
        notes: 'Section × Strategy是实战核心，让学员知道每个段落该用什么策略。'
      },

      // ========== Part 6: HOOK训练 ==========
      {
        id: 'M02-part6-title',
        section: '6️⃣ HOOK训练 ⭐',
        time: '2:00-2:20',
        type: 'title',
        title: 'Part 6',
        subtitle: 'HOOK 深度训练',
        description: '⏱ 2:00 - 2:20 | 20分钟 | ⭐ 最重要实操',
        notes: 'HOOK是爆款的最大杠杆，这是本模块的高潮。'
      },
      {
        id: 'M02-6-why',
        section: '6️⃣ HOOK训练 ⭐',
        time: '2:00-2:05',
        type: 'content',
        title: '为什么HOOK最重要？',
        studentContent: `
          <div class="highlight-box" style="text-align: center; font-size: 18px;">
            在短视频平台，用户的平均注意力只有 <strong style="font-size: 26px; color: #f44336;">3秒</strong>
          </div>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 18px; margin-bottom: 16px;">如果前3秒没有抓住用户</div>
            <div style="font-size: 24px; color: var(--accent);">后面做得再好都没有意义</div>
            <div style="font-size: 16px; color: var(--text-secondary); margin-top: 20px;">
              HOOK决定了视频能不能被"看到"
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              HOOK是整个视频最重要的部分。为什么？因为它决定了视频能不能被看到。<br><br>
              在抖音、小红书这些平台，用户的手指一直在屏幕上，随时准备划走。你只有3秒钟的时间让他停下来。
            </div>
          </div>
        `,
        notes: '强调HOOK的重要性，为后面的训练做铺垫。'
      },
      {
        id: 'M02-6-types',
        section: '6️⃣ HOOK训练 ⭐',
        time: '2:05-2:12',
        type: 'content',
        title: 'HOOK的5种写法',
        studentContent: `
          <div class="hook-grid">
            <div class="hook-item">
              <h4>1️⃣ 问题型 (SUSPENSE-Question)</h4>
              <p>"你有没有遇到过这种情况..."<br>"为什么你的皮肤总是..."</p>
            </div>
            <div class="hook-item">
              <h4>2️⃣ 数字型 (EXPLAIN-Data)</h4>
              <p>"3个方法让你..."<br>"90%的人不知道..."</p>
            </div>
            <div class="hook-item">
              <h4>3️⃣ 反常识型 (CONTRAST-Shocking)</h4>
              <p>"千万别买这个产品，除非..."<br>"医生都在用的秘密..."</p>
            </div>
            <div class="hook-item">
              <h4>4️⃣ 悬念型 (SUSPENSE-Reveal)</h4>
              <p>"接下来发生的事让我惊呆了..."<br>"最后一个方法绝了..."</p>
            </div>
            <div class="hook-item" style="grid-column: span 2;">
              <h4>5️⃣ 痛点型 (PAIN-Scene)</h4>
              <p>"熬夜党必看！" "油皮救星来了！" "敏感肌福音！"</p>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="tip-box presenter-only">
            <strong>💡 提示：</strong>每种HOOK写法都对应特定的Strategy L2。同一个产品可以用不同类型的HOOK。
          </div>
        `,
        notes: '5种写法要让学员都能举一反三，注意与Strategy L2的对应关系。'
      },
      {
        id: 'M02-6-practice',
        section: '6️⃣ HOOK训练 ⭐',
        time: '2:12-2:20',
        type: 'content',
        title: 'HOOK写作实战',
        countdown: 480,
        studentContent: `
          <div class="interactive-badge">🤝 互动环节 - 8分钟</div>
          <div class="highlight-box">
            <strong>练习任务：</strong><br>
            1. 每人选择一个产品（可用自己品牌的产品）<br>
            2. 先确定Objective（这条视频要达成什么目标）<br>
            3. 用5种HOOK写法各写一个版本<br>
            4. 标注每个HOOK用了什么Strategy（L0-L1-L2）
          </div>
          <div class="info-box" style="margin-top: 12px;">
            <strong>评分标准：</strong><br>
            ✓ 抓人度：前3秒能不能让人停下来？<br>
            ✓ Strategy清晰度：能不能说清楚用了什么Strategy？<br>
            ✓ 与Objective的匹配：HOOK是否服务于视频目标？
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>巡场观察，记录优秀案例用于点评。强调Objective→Strategy→HOOK的决策链。
          </div>
        `,
        notes: '这是本模块最重要的实操环节，强调完整的决策链。'
      },

      // ========== Part 7: 总结 ==========
      {
        id: 'M02-part7-title',
        section: '7️⃣ 案例与总结',
        time: '2:20-2:30',
        type: 'title',
        title: 'Part 7',
        subtitle: '案例拆解与总结',
        description: '⏱ 2:20 - 2:30 | 10分钟',
        notes: '用真实案例串联所有知识点。'
      },
      {
        id: 'M02-7-case',
        section: '7️⃣ 案例与总结',
        time: '2:20-2:25',
        type: 'content',
        title: '案例拆解模板',
        studentContent: `
          <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
            <tr style="background: rgba(255,255,255,0.1);">
              <th style="padding: 6px; text-align: left; border-bottom: 1px solid #444;">Section</th>
              <th style="padding: 6px; text-align: left; border-bottom: 1px solid #444;">状态迁移</th>
              <th style="padding: 6px; text-align: left; border-bottom: 1px solid #444;">时间段</th>
              <th style="padding: 6px; text-align: left; border-bottom: 1px solid #444;">L0</th>
              <th style="padding: 6px; text-align: left; border-bottom: 1px solid #444;">L1</th>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-weight: bold; color: var(--accent);">HOOK</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-size: 11px;">浏览→注意</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">0:00-0:03</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; color: #FFB74D;">HAND</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">SUSPENSE</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-weight: bold; color: var(--accent);">PROBLEM</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-size: 11px;">平静→不安</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">0:03-0:08</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; color: #EF5350;">HEART</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">PAIN</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-weight: bold; color: var(--accent);">RESOLUTION</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-size: 11px;">不安→有希望</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">0:08-0:15</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; color: #4CAF50;">HEAD</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">EXPLAIN</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-weight: bold; color: var(--accent);">VALUE</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; font-size: 11px;">感兴趣→被说服</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">0:15-0:25</td>
              <td style="padding: 6px; border-bottom: 1px solid #333; color: #BA68C8;">EYES</td>
              <td style="padding: 6px; border-bottom: 1px solid #333;">DEMO</td>
            </tr>
            <tr>
              <td style="padding: 6px; font-weight: bold; color: var(--accent);">CTA</td>
              <td style="padding: 6px; font-size: 11px;">被说服→行动</td>
              <td style="padding: 6px;">0:25-0:30</td>
              <td style="padding: 6px; color: #FFB74D;">HAND</td>
              <td style="padding: 6px;">URGENCY</td>
            </tr>
          </table>
          <div class="info-box" style="margin-top: 12px;">
            <strong>示例视频：</strong>Objective = CONVERT（即时转化）| Skeleton = HPRVC（万能五段式）
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>播放2-3个真实视频案例，边播边用这个模板拆解。
          </div>
        `,
        notes: '展示分析思路，让学员知道怎么用骨架系统分析视频。'
      },
      {
        id: 'M02-7-case-video',
        section: '7️⃣ 案例与总结',
        time: '2:25-2:30',
        type: 'content',
        title: '案例视频播放',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <a href="/video-player.html?src=/videos/hook/1.mp4&title=案例1" target="_blank" class="video-btn" style="display:flex;align-items:center;gap:10px;padding:16px 20px;background:rgba(255,183,77,0.15);border:1px solid rgba(255,183,77,0.3);border-radius:10px;color:var(--text-primary);text-decoration:none;font-size:15px;transition:all .2s;">
              <span style="font-size:28px;">▶</span>
              <div><strong>案例 1</strong><br><span style="font-size:12px;color:var(--text-secondary);">点击新窗口播放</span></div>
            </a>
            <a href="/video-player.html?src=/videos/hook/4.mp4&title=案例4" target="_blank" class="video-btn" style="display:flex;align-items:center;gap:10px;padding:16px 20px;background:rgba(255,183,77,0.15);border:1px solid rgba(255,183,77,0.3);border-radius:10px;color:var(--text-primary);text-decoration:none;font-size:15px;transition:all .2s;">
              <span style="font-size:28px;">▶</span>
              <div><strong>案例 4</strong><br><span style="font-size:12px;color:var(--text-secondary);">点击新窗口播放</span></div>
            </a>
            <a href="/video-player.html?src=/videos/hook/内行人买奶粉1.mp4&title=内行人买奶粉" target="_blank" class="video-btn" style="display:flex;align-items:center;gap:10px;padding:16px 20px;background:rgba(255,183,77,0.15);border:1px solid rgba(255,183,77,0.3);border-radius:10px;color:var(--text-primary);text-decoration:none;font-size:15px;transition:all .2s;">
              <span style="font-size:28px;">▶</span>
              <div><strong>内行人买奶粉</strong><br><span style="font-size:12px;color:var(--text-secondary);">点击新窗口播放</span></div>
            </a>
            <a href="/video-player.html?src=/videos/hook/故事类.mp4&title=故事类" target="_blank" class="video-btn" style="display:flex;align-items:center;gap:10px;padding:16px 20px;background:rgba(255,183,77,0.15);border:1px solid rgba(255,183,77,0.3);border-radius:10px;color:var(--text-primary);text-decoration:none;font-size:15px;transition:all .2s;">
              <span style="font-size:28px;">▶</span>
              <div><strong>故事类</strong><br><span style="font-size:12px;color:var(--text-secondary);">点击新窗口播放</span></div>
            </a>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>逐一播放视频案例，每个播放后用案例拆解模板引导学员分析。
          </div>
        `,
        notes: '4个HOOK案例视频，配合前一页的拆解模板使用。'
      },
      {
        id: 'M02-7-quiz',
        section: '7️⃣ 案例与总结',
        time: '2:25-2:28',
        type: 'quiz',
        title: '🎯 知识检查',
        question: '一条视频的决策顺序是？',
        options: ['A. Skeleton → Strategy → Objective', 'B. Objective → Skeleton → Strategy', 'C. Strategy → Objective → Skeleton', 'D. 随便选都可以'],
        correctIndex: 1,
        explanation: '正确顺序是：先定Objective（目标）→ 再选Skeleton（结构）→ 最后配Strategy（策略）。目标决定结构，结构决定策略。',
        notes: '检验学员是否理解了完整的决策链。'
      },
      {
        id: 'M02-7-summary',
        section: '7️⃣ 案例与总结',
        time: '2:28-2:30',
        type: 'content',
        title: '模块总结',
        studentContent: `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #64B5F6;">
              <div style="font-size: 22px;">1️⃣</div>
              <div><strong>Objective</strong>：9种视频目标，先明确要干什么</div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #4CAF50;">
              <div style="font-size: 22px;">2️⃣</div>
              <div><strong>Section</strong>：7种心理推进段落，是骨架的积木</div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid var(--accent);">
              <div style="font-size: 22px;">3️⃣</div>
              <div><strong>Skeleton</strong>：8种骨架预设（ABC三级：Tier-A基础四段 / Tier-B五段 / Tier-C含Bridge铺垫）</div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #BA68C8;">
              <div style="font-size: 22px;">4️⃣</div>
              <div><strong>Strategy</strong>：L0(4) → L1(10) → L2(26) 三层策略体系</div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #EF5350;">
              <div style="font-size: 22px;">5️⃣</div>
              <div><strong>决策链</strong>：Objective → Skeleton → Strategy → 内容</div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: '快速回顾5个核心知识点。'
      },

      // ========== 结束页 ==========
      {
        id: 'M02-end',
        section: '结束',
        time: '',
        type: 'title',
        title: 'Module 02 完成 ✓',
        subtitle: '休息后：Module 03 肉体系统',
        description: '午休15分钟',
        notes: 'M02结束，这是信息量最大的模块。让学员好好休息，消化内容。'
      }
    ]
