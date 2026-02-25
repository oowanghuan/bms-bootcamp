import type { Slide } from "../types/slide"

export const slidesData: Slide[] = [
      // ========== 模块标题 ==========
      {
        id: 'M03-title',
        section: '模块标题',
        time: '',
        type: 'title',
        title: 'Module 03',
        subtitle: '灵魂系统（Soul）',
        description: 'Day 1 下午 | 90分钟',
        notes: 'Soul层回答"为什么有效"。午休后开场，注意激活学员状态。'
      },
      {
        id: 'M03-position',
        section: '模块标题',
        time: '',
        type: 'content',
        title: '灵魂系统的定位',
        studentContent: `
          <div style="display: flex; gap: 24px; align-items: center; justify-content: center; padding: 20px 0;">
            <div style="flex: 1; text-align: center; padding: 20px; background: rgba(255,183,77,0.15); border-radius: 12px; border: 2px solid #FFB74D;">
              <div style="font-size: 24px; font-weight: bold; color: #FFB74D; margin-bottom: 10px;">🦴 Bone</div>
              <div style="font-size: 16px;">怎么讲</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">结构 + 技法</div>
            </div>
            <div style="font-size: 32px; color: #666;">→</div>
            <div style="flex: 1; text-align: center; padding: 20px; background: rgba(156,39,176,0.15); border-radius: 12px; border: 2px solid #9C27B0;">
              <div style="font-size: 24px; font-weight: bold; color: #9C27B0; margin-bottom: 10px;">💜 Soul</div>
              <div style="font-size: 16px;">为什么有效</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">用户洞察</div>
            </div>
            <div style="font-size: 32px; color: #666;">→</div>
            <div style="flex: 1; text-align: center; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 2px dashed #666;">
              <div style="font-size: 24px; font-weight: bold; color: #888; margin-bottom: 10px;">🥩 Meat</div>
              <div style="font-size: 16px;">具体怎么呈现</div>
              <div style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">下一模块</div>
            </div>
          </div>
          <div class="highlight-box" style="text-align: center; margin-top: 16px;">
            <strong>同样的骨架，不同的灵魂 = 完全不同的效果</strong>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              上午我们学了Bone层，知道了"怎么讲"——用什么结构、什么技法。<br><br>
              但同样的结构和技法，为什么有的视频火，有的就是不火？<br><br>
              这就是我们下午要学的"Soul层"——它回答的是"为什么有效"。
            </div>
          </div>
        `,
        notes: '建立Bone和Soul的关系，强调Soul是"为什么有效"的分析工具。'
      },
      {
        id: 'M03-learning-goals',
        section: '模块标题',
        time: '',
        type: 'content',
        title: '学习目标',
        studentContent: `
          <p style="margin-bottom: 12px;">完成本模块后，你将能够：</p>
          <ul>
            <li>理解 <strong>SoulProfile</strong> 的5个字段及其作用</li>
            <li>用5个字段分析任何视频的"灵魂层"</li>
            <li>为特定产品设计 SoulProfile</li>
            <li>理解 Soul 层与 Bone 层的配合关系</li>
          </ul>
        `,
        presenterContent: '',
        notes: '4个学习目标，核心是掌握SoulProfile。'
      },

      // ========== Part 1: SoulProfile 概览 ==========
      {
        id: 'M03-part1-title',
        section: '1️⃣ SoulProfile概览',
        time: '14:00-14:10',
        type: 'title',
        title: 'Part 1',
        subtitle: 'SoulProfile 灵魂档案',
        description: '⏱ 14:00 - 14:10 | 10分钟',
        notes: '介绍SoulProfile的概念和5个字段。'
      },
      {
        id: 'M03-1-what-is-soul',
        section: '1️⃣ SoulProfile概览',
        time: '14:00-14:05',
        type: 'content',
        title: '什么是SoulProfile？',
        studentContent: `
          <div class="highlight-box" style="text-align: center; font-size: 18px;">
            <strong>SoulProfile = 视频的"用户洞察档案"</strong>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <p>回答一个核心问题：</p>
            <div style="font-size: 28px; color: var(--accent); margin: 16px 0; font-weight: bold;">
              "这条视频为什么能打动人？"
            </div>
          </div>
          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: var(--text-secondary); text-align: center;">
              SoulProfile包含5个字段，每个字段都是一个"洞察维度"
            </p>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              SoulProfile是我们对视频"灵魂层"的标准化描述。<br><br>
              你可以把它理解为一份"用户洞察档案"——记录了这条视频为什么能打动特定的人群。
            </div>
          </div>
        `,
        notes: '先建立概念，再展开5个字段。'
      },
      {
        id: 'M03-1-five-fields',
        section: '1️⃣ SoulProfile概览',
        time: '14:05-14:10',
        type: 'content',
        title: 'SoulProfile 5个字段',
        studentContent: `
          <div class="soul-grid">
            <div class="soul-card audience">
              <h4>字段1</h4>
              <div class="field-name">target_audience</div>
              <p>目标受众<br>"打动谁？"</p>
            </div>
            <div class="soul-card scenario">
              <h4>字段2</h4>
              <div class="field-name">trigger_scenario</div>
              <p>触发场景<br>"什么时候触动？"</p>
            </div>
            <div class="soul-card reward">
              <h4>字段3</h4>
              <div class="field-name">reward_type</div>
              <p>奖励类型<br>"最深层想要什么？"</p>
            </div>
            <div class="soul-card conflict">
              <h4>字段4</h4>
              <div class="field-name">conflict_type</div>
              <p>冲突类型<br>"视频的张力是什么？"</p>
            </div>
            <div class="soul-card emotion">
              <h4>字段5</h4>
              <div class="field-name">emotion_arc</div>
              <p>情感弧线<br>"情绪如何变化？"</p>
            </div>
          </div>
          <div class="tip-box" style="margin-top: 16px; font-size: 13px;">
            <strong>💡 记忆技巧：</strong>谁(audience) → 何时(scenario) → 要什么(reward) → 什么张力(conflict) → 情绪变化(emotion)
          </div>
        `,
        presenterContent: '',
        notes: '5个字段的概览，后面会逐个详细讲解。'
      },

      // ========== Part 2: target_audience ==========
      {
        id: 'M03-part2-title',
        section: '2️⃣ target_audience',
        time: '14:10-14:25',
        type: 'title',
        title: 'Part 2',
        subtitle: 'target_audience 目标受众',
        description: '⏱ 14:10 - 14:25 | 15分钟',
        notes: '第一个也是最重要的字段。'
      },
      {
        id: 'M03-2-definition',
        section: '2️⃣ target_audience',
        time: '14:10-14:15',
        type: 'content',
        title: 'target_audience 定义',
        studentContent: `
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1; padding: 20px; background: rgba(233,30,99,0.1); border-radius: 12px; border-left: 4px solid #E91E63;">
              <div style="font-size: 18px; font-weight: bold; color: #E91E63; margin-bottom: 12px;">target_audience</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>这条视频要说服的"理想观众"是谁？</strong></div>
              <div style="font-size: 14px; color: var(--text-secondary);">
                不是"产品适合谁"，而是"这条视频打动谁"
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">包含的维度：</div>
              <table class="section-table" style="font-size: 13px;">
                <tr><td style="width: 120px;"><strong>age_range</strong></td><td>年龄范围（如25-35）</td></tr>
                <tr><td><strong>gender</strong></td><td>性别倾向</td></tr>
                <tr><td><strong>pain_points</strong></td><td>核心痛点列表</td></tr>
                <tr><td><strong>consumption_level</strong></td><td>消费能力</td></tr>
              </table>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              第一个字段是target_audience，目标受众。这看起来很基础，但大多数人都理解错了。<br><br>
              我经常听到的说法是："我们的产品适合所有人"。这是产品的角度，但不是内容的角度。<br><br>
              产品可能适合很多人，但一条视频只能打动一类人。这是Soul层的第一个重要认知。
            </div>
          </div>
        `,
        notes: '强调"一条视频只能打动一类人"的核心观点。'
      },
      {
        id: 'M03-2-misconception',
        section: '2️⃣ target_audience',
        time: '14:15-14:18',
        type: 'content',
        title: '常见误区：越广越好？',
        studentContent: `
          <div style="display: flex; gap: 20px; align-items: center;">
            <div style="flex: 1; padding: 20px; background: rgba(244,67,54,0.1); border-radius: 12px; text-align: center;">
              <div style="font-size: 40px; margin-bottom: 10px;">❌</div>
              <div style="font-size: 16px; font-weight: bold; color: #F44336;">错误想法</div>
              <div style="font-size: 14px; margin-top: 8px;">"目标人群越广，看的人越多"</div>
            </div>
            <div style="flex: 1; padding: 20px; background: rgba(76,175,80,0.1); border-radius: 12px; text-align: center;">
              <div style="font-size: 40px; margin-bottom: 10px;">✅</div>
              <div style="font-size: 16px; font-weight: bold; color: #4CAF50;">正确理解</div>
              <div style="font-size: 14px; margin-top: 8px;">"目标人群越精准，打动越深"</div>
            </div>
          </div>
          <div class="highlight-box" style="margin-top: 20px; text-align: center; font-size: 16px;">
            <strong>一条视频只能打动一类人</strong><br>
            <span style="font-size: 14px; color: var(--text-secondary);">想打动所有人 = 打动不了任何人</span>
          </div>
        `,
        presenterContent: '',
        notes: '纠正"越广越好"的常见误区。'
      },
      {
        id: 'M03-2-example',
        section: '2️⃣ target_audience',
        time: '14:18-14:25',
        type: 'content',
        title: '案例：同一产品，不同受众',
        studentContent: `
          <div style="font-size: 14px; margin-bottom: 12px;">以护肤品为例，同一个产品可以有完全不同的视频：</div>
          <table class="section-table" style="font-size: 13px;">
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="width: 120px;">目标人群</th>
              <th style="width: 150px;">视频角度</th>
              <th style="width: 150px;">核心诉求</th>
              <th>HOOK示例</th>
            </tr>
            <tr>
              <td><strong style="color: #E91E63;">25岁熬夜党</strong></td>
              <td>急救、快速见效</td>
              <td>"第二天要见客户"</td>
              <td>"熬夜后急救！10分钟拯救暗沉脸"</td>
            </tr>
            <tr>
              <td><strong style="color: #E91E63;">35岁初老妈</strong></td>
              <td>日常保养、长期维护</td>
              <td>"忙中也要爱自己"</td>
              <td>"三娃妈妈的护肤秘密..."</td>
            </tr>
            <tr>
              <td><strong style="color: #E91E63;">20岁大学生</strong></td>
              <td>平价替代、性价比</td>
              <td>"学生党也能用好的"</td>
              <td>"月生活费1500也能用的贵妇面霜"</td>
            </tr>
          </table>
          <div class="tip-box" style="margin-top: 12px; font-size: 13px;">
            <strong>💡 洞察：</strong>同一个产品，三条完全不同的视频，打动三类完全不同的人。这就是target_audience的力量。
          </div>
        `,
        presenterContent: '',
        notes: '用具体案例展示target_audience的差异化价值。'
      },

      // ========== Part 3: trigger_scenario ==========
      {
        id: 'M03-part3-title',
        section: '3️⃣ trigger_scenario',
        time: '14:25-14:40',
        type: 'title',
        title: 'Part 3',
        subtitle: 'trigger_scenario 触发场景',
        description: '⏱ 14:25 - 14:40 | 15分钟',
        notes: '第二个字段，关于"什么时候被触动"。'
      },
      {
        id: 'M03-3-definition',
        section: '3️⃣ trigger_scenario',
        time: '14:25-14:30',
        type: 'content',
        title: 'trigger_scenario 定义',
        studentContent: `
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1; padding: 20px; background: rgba(255,152,0,0.1); border-radius: 12px; border-left: 4px solid #FF9800;">
              <div style="font-size: 18px; font-weight: bold; color: #FF9800; margin-bottom: 12px;">trigger_scenario</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>观众在什么情况下会被这个内容触动？</strong></div>
              <div style="font-size: 14px; color: var(--text-secondary);">
                好的内容能够"呼唤"出观众的特定场景记忆
              </div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">场景类型：</div>
              <table class="section-table" style="font-size: 13px;">
                <tr><td style="width: 80px;"><strong>时间</strong></td><td>换季时、熬夜后、早起时、生理期前</td></tr>
                <tr><td><strong>空间</strong></td><td>在办公室、在地铁上、在化妆台前</td></tr>
                <tr><td><strong>事件</strong></td><td>看到别人皮肤好、被评价"你看起来很累"</td></tr>
                <tr><td><strong>情绪</strong></td><td>焦虑时、无聊时、想奖励自己时</td></tr>
              </table>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              第二个字段是trigger_scenario，触发场景。<br><br>
              大家有没有这种体验：同样一个广告，平时看不觉得怎样，但某个特定时刻看到，突然就被打动了？<br><br>
              这就是场景的力量。好的内容能够"呼唤"出观众的特定场景记忆。
            </div>
          </div>
        `,
        notes: '场景触发是内容"打动人心"的关键机制。'
      },
      {
        id: 'M03-3-types',
        section: '3️⃣ trigger_scenario',
        time: '14:30-14:35',
        type: 'content',
        title: '场景类型详解',
        studentContent: `
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(255,152,0,0.08); border-radius: 10px; border: 1px solid rgba(255,152,0,0.3);">
              <div style="font-weight: bold; color: #FF9800; margin-bottom: 8px;">⏰ 时间场景</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                "换季时皮肤总是不稳定"<br>
                "每天早起都顶着熊猫眼"<br>
                "经期前总是长痘"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(255,152,0,0.08); border-radius: 10px; border: 1px solid rgba(255,152,0,0.3);">
              <div style="font-weight: bold; color: #FF9800; margin-bottom: 8px;">📍 空间场景</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                "在办公室空调房里脸干得紧绷"<br>
                "出差住酒店皮肤就出问题"<br>
                "健身房镜子里看到自己的毛孔"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(255,152,0,0.08); border-radius: 10px; border: 1px solid rgba(255,152,0,0.3);">
              <div style="font-weight: bold; color: #FF9800; margin-bottom: 8px;">📌 事件场景</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                "被同事问'你是不是没睡好？'"<br>
                "看到闺蜜皮肤突然变好了"<br>
                "视频会议时看到自己的脸"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(255,152,0,0.08); border-radius: 10px; border: 1px solid rgba(255,152,0,0.3);">
              <div style="font-weight: bold; color: #FF9800; margin-bottom: 8px;">💭 情绪场景</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                "感觉最近压力太大想对自己好一点"<br>
                "工作太累想要一点小确幸"<br>
                "和男朋友吵架心情不好"
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: '4种场景类型：时间、空间、事件、情绪。'
      },
      {
        id: 'M03-3-practice',
        section: '3️⃣ trigger_scenario',
        time: '14:35-14:40',
        type: 'content',
        title: '互动：场景头脑风暴',
        studentContent: `
          <div class="interactive-badge">🤝 互动环节 - 5分钟</div>
          <div class="highlight-box" style="font-size: 16px;">
            <strong>任务：</strong>针对你们的产品，列举尽可能多的触发场景
          </div>
          <div style="margin-top: 16px;">
            <p><strong>规则：</strong></p>
            <ul>
              <li>每组2分钟头脑风暴</li>
              <li>一个场景写一张便签纸</li>
              <li>从"时间、空间、事件、情绪"四个维度思考</li>
              <li>场景越具体越好</li>
            </ul>
          </div>
          <div class="tip-box" style="margin-top: 16px; font-size: 13px;">
            <strong>💡 提示：</strong>好的场景描述让人一听就能"代入"——"对对对，我就是这样！"
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>发便签纸给各组</li>
              <li>计时2分钟</li>
              <li>收集便签贴到白板上</li>
              <li>快速点评几个好的场景</li>
            </ul>
          </div>
        `,
        notes: '互动环节，激活午休后的学员状态。'
      },
      // ========== 案例1：早C晚A精华「时间 × 情绪」==========
      {
        id: 'M03-3-case1',
        section: '3️⃣ trigger_scenario',
        time: '14:38-14:40',
        type: 'content',
        title: '案例1：早C晚A精华「时间 × 情绪」',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <!-- 左侧：场景描述 -->
            <div style="flex: 1.2;">
              <div style="background: linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,107,53,0.05) 100%); border-radius: 12px; padding: 16px; border-left: 4px solid #FF6B35; margin-bottom: 12px;">
                <div style="font-size: 11px; color: #FF6B35; margin-bottom: 8px;">🎬 场景还原</div>
                <div style="font-size: 15px; line-height: 1.7; color: #fff;">
                  "早上7点，闹钟响了。你挣扎着爬起来，走到洗手间。<br><br>
                  洗完脸，习惯性地凑近镜子——昨晚熬夜追剧，脸色暗沉，法令纹好像又深了...<br><br>
                  摸了摸脸，皮肤粗糙得像砂纸。<br><br>
                  <span style="color: #FF6B35; font-weight: bold;">'才25岁，怎么看起来像35？今天开始必须认真护肤了...'</span>"
                </div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">📝 场景要素拆解</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                  <div style="padding: 8px; background: rgba(255,107,53,0.1); border-radius: 6px;">
                    <strong style="color: #FF6B35;">⏰ 时间</strong><br>
                    <span style="color: var(--text-secondary);">早上起床后</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,107,53,0.1); border-radius: 6px;">
                    <strong style="color: #FF6B35;">📍 空间</strong><br>
                    <span style="color: var(--text-secondary);">卫生间镜子前</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,107,53,0.1); border-radius: 6px;">
                    <strong style="color: #FF6B35;">🎯 事件</strong><br>
                    <span style="color: var(--text-secondary);">熬夜后照镜子</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,107,53,0.1); border-radius: 6px;">
                    <strong style="color: #FF6B35;">💭 情绪</strong><br>
                    <span style="color: var(--text-secondary);">年龄焦虑+决心</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：分析 -->
            <div style="flex: 1;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; color: #FF6B35; margin-bottom: 12px;">🔍 为什么这个场景有效？</div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">1. 早晨 = 肤质问题最明显的时刻</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    刚起床时皮肤状态最真实，没有妆容遮盖，熬夜痕迹一览无余。这是用户最容易产生护肤焦虑的时刻。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">2. "凑近镜子" = 普遍行为共鸣</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    几乎每个女生都有凑近镜子研究皮肤的习惯，这个动作一说就有画面感，代入感极强。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">3. 年龄对比 = 核心焦虑点</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    "25岁看起来像35"直击早C晚A目标用户的核心痛点——抗初老。这种年龄差的表达比单纯说"皮肤差"更有冲击力。
                  </div>
                </div>

                <div class="tip-box" style="margin-top: auto; font-size: 12px;">
                  <strong>💡 应用：</strong>适合周一早晨发布，配合"新的一周从好好护肤开始"的心态
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>问学员："有没有早起照镜子发现皮肤状态很差的经历？"</li>
              <li>强调：早晨是护肤类内容的黄金发布时间</li>
              <li>指出："年龄焦虑"是抗老产品的核心触发点</li>
            </ul>
          </div>
        `,
        notes: '案例1：早C晚A精华，展示时间×情绪的组合威力。'
      },

      // ========== 案例2：防晒霜「事件 × 情绪」==========
      {
        id: 'M03-3-case2',
        section: '3️⃣ trigger_scenario',
        time: '14:40-14:42',
        type: 'content',
        title: '案例2：防晒霜「事件 × 情绪」',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <!-- 左侧：场景描述 -->
            <div style="flex: 1.2;">
              <div style="background: linear-gradient(135deg, rgba(33,150,243,0.2) 0%, rgba(33,150,243,0.05) 100%); border-radius: 12px; padding: 16px; border-left: 4px solid #2196F3; margin-bottom: 12px;">
                <div style="font-size: 11px; color: #2196F3; margin-bottom: 8px;">🎬 场景还原</div>
                <div style="font-size: 15px; line-height: 1.7; color: #fff;">
                  "周末和闺蜜去了趟海边，玩得很开心。<br><br>
                  回来洗完澡，对着镜子——胳膊上出现了清晰的表带印，脸比脖子白了两个色号...<br><br>
                  发了张自拍到群里，闺蜜回复：'姐妹你是不是没涂防晒？'<br><br>
                  <span style="color: #2196F3; font-weight: bold;">'完了完了，这得多久才能白回来...'</span>"
                </div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">📝 场景要素拆解</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                  <div style="padding: 8px; background: rgba(33,150,243,0.1); border-radius: 6px;">
                    <strong style="color: #2196F3;">⏰ 时间</strong><br>
                    <span style="color: var(--text-secondary);">户外活动后</span>
                  </div>
                  <div style="padding: 8px; background: rgba(33,150,243,0.1); border-radius: 6px;">
                    <strong style="color: #2196F3;">📍 空间</strong><br>
                    <span style="color: var(--text-secondary);">家里洗完澡后</span>
                  </div>
                  <div style="padding: 8px; background: rgba(33,150,243,0.1); border-radius: 6px;">
                    <strong style="color: #2196F3;">🎯 事件</strong><br>
                    <span style="color: var(--text-secondary);">发现晒黑/晒伤</span>
                  </div>
                  <div style="padding: 8px; background: rgba(33,150,243,0.1); border-radius: 6px;">
                    <strong style="color: #2196F3;">💭 情绪</strong><br>
                    <span style="color: var(--text-secondary);">后悔+焦虑</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：分析 -->
            <div style="flex: 1;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; color: #2196F3; margin-bottom: 12px;">🔍 为什么这个场景有效？</div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">1. "表带印" = 视觉化痛点</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    晒黑不是一个抽象概念，"表带印""色差"这种具体细节让用户立刻想到自己的类似经历，代入感极强。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">2. 闺蜜吐槽 = 社交压力触发</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    别人的评价往往比自我审视更有杀伤力。闺蜜一句"没涂防晒？"比自己发现晒黑更让人焦虑。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">3. 后悔心理 = 高转化意图</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    "早知道就涂防晒了"的后悔感会转化为强烈的购买意愿——用户这时最想立刻下单，避免下次再犯。
                  </div>
                </div>

                <div class="tip-box" style="margin-top: auto; font-size: 12px;">
                  <strong>💡 应用：</strong>五一、十一等假期后发布，配合"假期晒黑急救"话题
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>问学员："有没有出去玩回来发现晒黑的经历？"</li>
              <li>强调：防晒产品的场景要结合"后悔"情绪</li>
              <li>指出：节假日前后是防晒内容的黄金期</li>
            </ul>
          </div>
        `,
        notes: '案例2：防晒霜，展示事件×情绪的组合威力。'
      },

      // ========== 案例3：遮瑕产品「空间 × 事件」==========
      {
        id: 'M03-3-case3',
        section: '3️⃣ trigger_scenario',
        time: '14:42-14:44',
        type: 'content',
        title: '案例3：遮瑕产品「空间 × 事件」',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <!-- 左侧：场景描述 -->
            <div style="flex: 1.2;">
              <div style="background: linear-gradient(135deg, rgba(156,39,176,0.2) 0%, rgba(156,39,176,0.05) 100%); border-radius: 12px; padding: 16px; border-left: 4px solid #9C27B0; margin-bottom: 12px;">
                <div style="font-size: 11px; color: #9C27B0; margin-bottom: 8px;">🎬 场景还原</div>
                <div style="font-size: 15px; line-height: 1.7; color: #fff;">
                  "公司卫生间，午休后补妆。<br><br>
                  掏出镜子一照——上午开了3个会，粉底斑驳，眼下的黑眼圈又透出来了...<br><br>
                  下午还有个重要的客户提案，这脸怎么见人？<br><br>
                  <span style="color: #9C27B0; font-weight: bold;">'早知道买个遮瑕好的，现在手边这个根本盖不住...'</span>"
                </div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">📝 场景要素拆解</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                  <div style="padding: 8px; background: rgba(156,39,176,0.1); border-radius: 6px;">
                    <strong style="color: #9C27B0;">⏰ 时间</strong><br>
                    <span style="color: var(--text-secondary);">午休补妆时</span>
                  </div>
                  <div style="padding: 8px; background: rgba(156,39,176,0.1); border-radius: 6px;">
                    <strong style="color: #9C27B0;">📍 空间</strong><br>
                    <span style="color: var(--text-secondary);">公司卫生间</span>
                  </div>
                  <div style="padding: 8px; background: rgba(156,39,176,0.1); border-radius: 6px;">
                    <strong style="color: #9C27B0;">🎯 事件</strong><br>
                    <span style="color: var(--text-secondary);">发现脱妆/黑眼圈</span>
                  </div>
                  <div style="padding: 8px; background: rgba(156,39,176,0.1); border-radius: 6px;">
                    <strong style="color: #9C27B0;">💭 情绪</strong><br>
                    <span style="color: var(--text-secondary);">尴尬+紧迫感</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：分析 -->
            <div style="flex: 1;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; color: #9C27B0; margin-bottom: 12px;">🔍 为什么这个场景有效？</div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">1. 公司卫生间 = 职场女性高频场景</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    这个空间具有高度识别性，一提到"公司卫生间补妆"，职场女性立刻能代入。是彩妆品牌的黄金场景。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">2. 重要会议 = 外表紧迫感</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    "客户提案"不是普通场合，这个细节放大了用户对妆容的焦虑。场合越重要，对产品的需求越急迫。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">3. 现有产品不给力 = 换产品动机</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    "手边这个盖不住"是换品牌的核心触发点。用户不是没有遮瑕，而是现有的不够好——这正是你产品的机会。
                  </div>
                </div>

                <div class="tip-box" style="margin-top: auto; font-size: 12px;">
                  <strong>💡 应用：</strong>工作日中午12-2点发布，精准触达补妆场景
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>问学员："职场女性午休补妆是不是高频场景？"</li>
              <li>强调：彩妆类产品特别适合"急救""补救"场景</li>
              <li>指出：场景要包含"现有方案不满意"的暗示</li>
            </ul>
          </div>
        `,
        notes: '案例3：遮瑕产品，展示空间×事件的组合威力。'
      },

      // ========== 案例4：眼霜/眼膜「时间 × 空间」==========
      {
        id: 'M03-3-case4',
        section: '3️⃣ trigger_scenario',
        time: '14:44-14:46',
        type: 'content',
        title: '案例4：眼霜/眼膜「时间 × 空间」',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <!-- 左侧：场景描述 -->
            <div style="flex: 1.2;">
              <div style="background: linear-gradient(135deg, rgba(76,175,80,0.2) 0%, rgba(76,175,80,0.05) 100%); border-radius: 12px; padding: 16px; border-left: 4px solid #4CAF50; margin-bottom: 12px;">
                <div style="font-size: 11px; color: #4CAF50; margin-bottom: 8px;">🎬 场景还原</div>
                <div style="font-size: 15px; line-height: 1.7; color: #fff;">
                  "晚上11点，刷完最后一个短视频，终于舍得放下手机。<br><br>
                  去洗手间洗漱，开灯的一瞬间，镜子里的自己吓了一跳——<br><br>
                  眼睛又干又涩，眼周细纹清晰可见，眼袋也鼓起来了...<br><br>
                  <span style="color: #4CAF50; font-weight: bold;">'天天熬夜刷手机，眼睛迟早废掉。明天必须买个眼膜...'</span>"
                </div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">📝 场景要素拆解</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                  <div style="padding: 8px; background: rgba(76,175,80,0.1); border-radius: 6px;">
                    <strong style="color: #4CAF50;">⏰ 时间</strong><br>
                    <span style="color: var(--text-secondary);">深夜睡前</span>
                  </div>
                  <div style="padding: 8px; background: rgba(76,175,80,0.1); border-radius: 6px;">
                    <strong style="color: #4CAF50;">📍 空间</strong><br>
                    <span style="color: var(--text-secondary);">卫生间强光下</span>
                  </div>
                  <div style="padding: 8px; background: rgba(76,175,80,0.1); border-radius: 6px;">
                    <strong style="color: #4CAF50;">🎯 事件</strong><br>
                    <span style="color: var(--text-secondary);">熬夜后发现眼部问题</span>
                  </div>
                  <div style="padding: 8px; background: rgba(76,175,80,0.1); border-radius: 6px;">
                    <strong style="color: #4CAF50;">💭 情绪</strong><br>
                    <span style="color: var(--text-secondary);">惊吓+自责</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：分析 -->
            <div style="flex: 1;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; color: #4CAF50; margin-bottom: 12px;">🔍 为什么这个场景有效？</div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">1. 深夜11点 = 熬夜罪恶感高峰</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    深夜是自我反省的时刻，熬夜带来的罪恶感让用户更容易做出"补救"决定。眼部护理正好承接这种情绪。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">2. "开灯一瞬间" = 戏剧化冲击</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    从手机的暗光突然切换到卫生间的强光，肤质问题瞬间暴露。这个"开灯时刻"是眼部产品的经典触发场景。
                  </div>
                </div>

                <div style="margin-bottom: 16px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">3. 刷手机 = 当代人共同习惯</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    几乎所有人都有睡前刷手机的习惯。把熬夜和刷手机绑定，用户会想："这说的不就是我吗？"
                  </div>
                </div>

                <div class="tip-box" style="margin-top: auto; font-size: 12px;">
                  <strong>💡 应用：</strong>晚上9-11点发布，精准触达"熬夜党"
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>问学员："你们品牌有没有眼部护理产品？这个场景适合吗？"</li>
              <li>强调：眼部产品的核心场景是"熬夜+自责"</li>
              <li>指出：晚间是眼部护理内容的黄金发布时段</li>
            </ul>
          </div>
        `,
        notes: '案例4：眼霜/眼膜，展示时间×空间的组合威力。'
      },

      // ========== 案例5：祛痘产品「四维组合」==========
      {
        id: 'M03-3-case5',
        section: '3️⃣ trigger_scenario',
        time: '14:46-14:48',
        type: 'content',
        title: '案例5：祛痘产品「四维组合」',
        studentContent: `
          <div style="display: flex; gap: 16px;">
            <!-- 左侧：场景描述 -->
            <div style="flex: 1.2;">
              <div style="background: linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(255,193,7,0.05) 100%); border-radius: 12px; padding: 16px; border-left: 4px solid #FFC107; margin-bottom: 12px;">
                <div style="font-size: 11px; color: #FFC107; margin-bottom: 8px;">🎬 场景还原</div>
                <div style="font-size: 15px; line-height: 1.7; color: #fff;">
                  "约会前一晚，洗完脸对着镜子。<br><br>
                  额头上冒出一颗痘，红红的，特别明显。你忍不住挤了一下...<br><br>
                  越挤越红，越红越慌。明天怎么见他/她？<br><br>
                  <span style="color: #FFC107; font-weight: bold;">翻来覆去睡不着，打开小红书搜'约会前急救祛痘'...</span>"
                </div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">📝 场景要素拆解 <span style="background: #FFC107; color: #000; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px;">四维全满</span></div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                  <div style="padding: 8px; background: rgba(255,193,7,0.1); border-radius: 6px;">
                    <strong style="color: #FFC107;">⏰ 时间</strong><br>
                    <span style="color: var(--text-secondary);">约会/重要场合前夜</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,193,7,0.1); border-radius: 6px;">
                    <strong style="color: #FFC107;">📍 空间</strong><br>
                    <span style="color: var(--text-secondary);">卫生间镜子前</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,193,7,0.1); border-radius: 6px;">
                    <strong style="color: #FFC107;">🎯 事件</strong><br>
                    <span style="color: var(--text-secondary);">发现痘痘+忍不住挤</span>
                  </div>
                  <div style="padding: 8px; background: rgba(255,193,7,0.1); border-radius: 6px;">
                    <strong style="color: #FFC107;">💭 情绪</strong><br>
                    <span style="color: var(--text-secondary);">焦虑+后悔+失眠</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：分析 -->
            <div style="flex: 1;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; color: #FFC107; margin-bottom: 12px;">🔍 为什么这是"满分场景"？</div>

                <div style="margin-bottom: 14px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">1. 约会前夜 = 外表焦虑峰值</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    重要社交场合前，人对外表的敏感度×10。平时不在意的小瑕疵，这时会被无限放大。
                  </div>
                </div>

                <div style="margin-bottom: 14px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">2. 挤痘痘 = 普遍行为+后悔心理</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    明知不该挤但忍不住，挤完又后悔——这个心理过程太真实了，几乎每个人都经历过。
                  </div>
                </div>

                <div style="margin-bottom: 14px;">
                  <div style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">3. 失眠+搜索 = 高转化意图</div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
                    焦虑到失眠，主动搜索解决方案——这种用户已经在"购买漏斗"的底部，转化率极高。
                  </div>
                </div>

                <div class="highlight-box" style="margin-top: 8px; font-size: 12px; background: rgba(255,193,7,0.1); border-color: #FFC107;">
                  <strong>⭐ 满分要诀：</strong>四个维度都具体、都有痛感、都能共鸣 = 用户秒入戏
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>问学员："这个场景用了几个维度？"（答：四个全用了）</li>
              <li>强调：祛痘产品的"急救"场景是最高转化场景</li>
              <li>总结：周末前/节假日前发布"约会急救"内容</li>
            </ul>
          </div>
        `,
        notes: '案例5：祛痘产品，展示四维组合的满分场景。'
      },

      // ========== 场景总结 ==========
      {
        id: 'M03-3-summary',
        section: '3️⃣ trigger_scenario',
        time: '14:48-14:50',
        type: 'content',
        title: '场景设计：5个案例的规律总结',
        studentContent: `
          <div style="margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <thead>
                <tr style="background: rgba(156,39,176,0.2);">
                  <th style="padding: 10px; text-align: left; border-bottom: 2px solid var(--accent);">案例</th>
                  <th style="padding: 10px; text-align: center; border-bottom: 2px solid var(--accent);">主要维度</th>
                  <th style="padding: 10px; text-align: left; border-bottom: 2px solid var(--accent);">核心情绪</th>
                  <th style="padding: 10px; text-align: left; border-bottom: 2px solid var(--accent);">应用场景</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #333;">
                  <td style="padding: 10px;"><span style="color: #FF6B35;">早C晚A精华</span></td>
                  <td style="padding: 10px; text-align: center;">时间 × 情绪</td>
                  <td style="padding: 10px;">年龄焦虑 + 决心</td>
                  <td style="padding: 10px;">周一早晨发布</td>
                </tr>
                <tr style="border-bottom: 1px solid #333;">
                  <td style="padding: 10px;"><span style="color: #2196F3;">防晒霜</span></td>
                  <td style="padding: 10px; text-align: center;">事件 × 情绪</td>
                  <td style="padding: 10px;">后悔 + 焦虑</td>
                  <td style="padding: 10px;">假期后/出游前</td>
                </tr>
                <tr style="border-bottom: 1px solid #333;">
                  <td style="padding: 10px;"><span style="color: #9C27B0;">遮瑕产品</span></td>
                  <td style="padding: 10px; text-align: center;">空间 × 事件</td>
                  <td style="padding: 10px;">尴尬 + 紧迫</td>
                  <td style="padding: 10px;">工作日中午发布</td>
                </tr>
                <tr style="border-bottom: 1px solid #333;">
                  <td style="padding: 10px;"><span style="color: #4CAF50;">眼霜/眼膜</span></td>
                  <td style="padding: 10px; text-align: center;">时间 × 空间</td>
                  <td style="padding: 10px;">惊吓 + 自责</td>
                  <td style="padding: 10px;">晚9-11点发布</td>
                </tr>
                <tr>
                  <td style="padding: 10px;"><span style="color: #FFC107;">祛痘产品</span></td>
                  <td style="padding: 10px; text-align: center;">四维全满</td>
                  <td style="padding: 10px;">焦虑 + 后悔</td>
                  <td style="padding: 10px;">周末前/节假日前</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: rgba(156,39,176,0.1); border-radius: 12px; padding: 16px; border-left: 4px solid #9C27B0;">
              <div style="font-size: 14px; font-weight: bold; color: #9C27B0; margin-bottom: 10px;">📐 场景设计公式</div>
              <div style="font-size: 20px; text-align: center; padding: 12px; background: rgba(0,0,0,0.3); border-radius: 8px;">
                <span style="color: #FF6B35;">具体时间</span> +
                <span style="color: #2196F3;">熟悉空间</span> +
                <span style="color: #4CAF50;">触发事件</span> +
                <span style="color: #FFC107;">强烈情绪</span>
              </div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-top: 8px; text-align: center;">
                = 用户3秒代入的场景
              </div>
            </div>

            <div style="background: rgba(76,175,80,0.1); border-radius: 12px; padding: 16px; border-left: 4px solid #4CAF50;">
              <div style="font-size: 14px; font-weight: bold; color: #4CAF50; margin-bottom: 10px;">✅ 检验标准</div>
              <div style="font-size: 13px; line-height: 1.8;">
                <div>1. 用户听完会说"对对对，我就是这样"</div>
                <div>2. 场景里有<strong>动作细节</strong>（挤痘、凑近镜子、补妆）</div>
                <div>3. 有<strong>内心独白</strong>（那句关键的话）</div>
                <div>4. 能激发<strong>情绪共鸣</strong>（不是描述，是唤起）</div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>快速回顾5个案例的关键点</li>
              <li>强调：不用四维全满，但要足够具体</li>
              <li>给30秒让学员记录公式</li>
            </ul>
          </div>
        `,
        notes: '场景设计的规律总结，帮助学员形成方法论。'
      },

      // ========== Part 4: reward_type ==========
      {
        id: 'M03-part4-title',
        section: '4️⃣ reward_type',
        time: '14:40-14:55',
        type: 'title',
        title: 'Part 4',
        subtitle: 'reward_type 奖励类型',
        description: '⏱ 14:40 - 14:55 | 15分钟',
        notes: '第三个字段，关于"最深层想要什么"。'
      },
      {
        id: 'M03-4-definition',
        section: '4️⃣ reward_type',
        time: '14:40-14:45',
        type: 'content',
        title: 'reward_type 定义',
        studentContent: `
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1; padding: 20px; background: rgba(76,175,80,0.1); border-radius: 12px; border-left: 4px solid #4CAF50;">
              <div style="font-size: 18px; font-weight: bold; color: #4CAF50; margin-bottom: 12px;">reward_type</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>观众最深层想要什么？</strong></div>
              <div style="font-size: 14px; color: var(--text-secondary);">
                超越产品本身的心理需求
              </div>
            </div>
            <div style="flex: 1;">
              <div class="highlight-box" style="font-size: 14px;">
                买护肤品不是为了买护肤品<br>
                而是为了<strong>"变美"、"自信"、"被认可"</strong>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              第三个字段是reward_type，奖励类型。通俗来说就是"心理动机"。<br><br>
              注意，这里说的是"超越产品本身"的需求。买护肤品不是为了买护肤品，而是为了"变美"、"自信"或"被认可"。<br><br>
              理解这一点非常重要，因为内容如果只停留在产品层面，就会显得很"硬"。打到心理动机层面，才能引起共鸣。
            </div>
          </div>
        `,
        notes: '强调"超越产品"的深层需求。'
      },
      {
        id: 'M03-4-types',
        section: '4️⃣ reward_type',
        time: '14:45-14:50',
        type: 'content',
        title: '常见奖励类型',
        studentContent: `
          <table class="section-table" style="font-size: 13px;">
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="width: 100px;">动机</th>
              <th style="width: 80px;">中文</th>
              <th style="width: 180px;">观众内心OS</th>
              <th>内容表达示例</th>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">beauty</strong></td>
              <td>变美</td>
              <td>"我想好看"</td>
              <td>"用完同事问我换了什么护肤品"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">money</strong></td>
              <td>省钱/赚钱</td>
              <td>"我想划算"</td>
              <td>"别人花XX才能买到的效果"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">time</strong></td>
              <td>省时间</td>
              <td>"我想高效"</td>
              <td>"3分钟搞定出门妆"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">safety</strong></td>
              <td>安全感</td>
              <td>"我想放心"</td>
              <td>"孕妇也能用的安全配方"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">confidence</strong></td>
              <td>自信</td>
              <td>"我想被认可"</td>
              <td>"终于敢素颜出门了"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">control</strong></td>
              <td>掌控感</td>
              <td>"我想自己说了算"</td>
              <td>"我的皮肤我做主"</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">health</strong></td>
              <td>健康</td>
              <td>"我想身体好"</td>
              <td>"养好皮肤比化妆更重要"</td>
            </tr>
          </table>
        `,
        presenterContent: '',
        notes: '7种常见奖励类型。'
      },
      {
        id: 'M03-4-mapping',
        section: '4️⃣ reward_type',
        time: '14:50-14:55',
        type: 'content',
        title: '动机 × 内容角度',
        studentContent: `
          <div style="font-size: 14px; margin-bottom: 12px;">同一个产品，不同奖励类型决定不同的内容角度：</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(76,175,80,0.08); border-radius: 10px; border: 1px solid rgba(76,175,80,0.3);">
              <div style="font-weight: bold; color: #4CAF50; margin-bottom: 8px;">动机：beauty</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px;">内容角度：强调效果和变化</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 4px;">
                HOOK："用了两周，皮肤发光了"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(76,175,80,0.08); border-radius: 10px; border: 1px solid rgba(76,175,80,0.3);">
              <div style="font-weight: bold; color: #4CAF50; margin-bottom: 8px;">动机：money</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px;">内容角度：强调性价比</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 4px;">
                HOOK："大牌平替！效果一样价格1/5"
              </div>
            </div>
            <div style="padding: 14px; background: rgba(76,175,80,0.08); border-radius: 10px; border: 1px solid rgba(76,175,80,0.3);">
              <div style="font-weight: bold; color: #4CAF50; margin-bottom: 8px;">动机：confidence</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px;">内容角度：强调社交认可</div>
              <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 4px;">
                HOOK："被问'你皮肤怎么变这么好'的感觉"
              </div>
            </div>
          </div>
          <div class="tip-box" style="margin-top: 12px; font-size: 13px;">
            <strong>💡 关键洞察：</strong>找对奖励类型，内容就有了"灵魂"。产品层面是"硬广"，奖励层面是"共鸣"。
          </div>
        `,
        presenterContent: '',
        notes: '展示动机如何影响内容角度。'
      },

      // ========== Part 5: conflict_type ==========
      {
        id: 'M03-part5-title',
        section: '5️⃣ conflict_type',
        time: '14:55-15:10',
        type: 'title',
        title: 'Part 5',
        subtitle: 'conflict_type 冲突类型',
        description: '⏱ 14:55 - 15:10 | 15分钟',
        notes: '第四个字段，这是创造"张力"的关键。'
      },
      {
        id: 'M03-5-definition',
        section: '5️⃣ conflict_type',
        time: '14:55-15:00',
        type: 'content',
        title: 'conflict_type 定义',
        studentContent: `
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1; padding: 20px; background: rgba(244,67,54,0.1); border-radius: 12px; border-left: 4px solid #F44336;">
              <div style="font-size: 18px; font-weight: bold; color: #F44336; margin-bottom: 12px;">conflict_type</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>视频中要解决的"张力"或"矛盾"是什么？</strong></div>
              <div style="font-size: 14px; color: var(--text-secondary);">
                没有冲突就没有故事，没有故事就没有吸引力
              </div>
            </div>
            <div style="flex: 1;">
              <div class="highlight-box" style="font-size: 16px; text-align: center;">
                <strong>好的内容一定有"张力"</strong><br>
                <span style="font-size: 14px;">张力 = 吸引力</span>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              第四个字段是conflict_type，冲突类型。这个字段非常重要。<br><br>
              为什么？因为没有冲突就没有故事，没有故事就没有吸引力。<br><br>
              好的内容一定有"张力"。这个张力可以来自很多地方：内心的焦虑、外界的评价、使用前后的对比......
            </div>
          </div>
        `,
        notes: '强调"冲突=张力=吸引力"的逻辑。'
      },
      {
        id: 'M03-5-types',
        section: '5️⃣ conflict_type',
        time: '15:00-15:05',
        type: 'content',
        title: '5种冲突类型',
        studentContent: `
          <table class="section-table" style="font-size: 12px;">
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="width: 110px;">类型</th>
              <th style="width: 180px;">说明</th>
              <th>示例</th>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">internal</strong><br>内在冲突</td>
              <td>自己 vs 自己的焦虑</td>
              <td>"我知道熬夜不好，但还是控制不住"<br>"想变美但又懒得护肤"</td>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">external</strong><br>外在冲突</td>
              <td>自己 vs 外界评价</td>
              <td>"别人说我皮肤差"<br>"被问是不是没睡好"</td>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">comparison</strong><br>对比冲突</td>
              <td>使用前 vs 使用后</td>
              <td>"用之前 vs 用之后"<br>"别人的皮肤 vs 我的皮肤"</td>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">cost</strong><br>代价冲突</td>
              <td>想要 vs 付出</td>
              <td>"想要效果但觉得贵"<br>"想护肤但没时间"</td>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">misconception</strong><br>误解冲突</td>
              <td>错误认知 vs 真相</td>
              <td>"你以为的 vs 实际上"<br>"90%的人都搞错了"</td>
            </tr>
          </table>
        `,
        presenterContent: '',
        notes: '5种冲突类型详解。'
      },
      {
        id: 'M03-5-guide',
        section: '5️⃣ conflict_type',
        time: '15:05-15:10',
        type: 'content',
        title: '冲突类型选择指南',
        studentContent: `
          <div style="font-size: 14px; margin-bottom: 12px;">不同产品类型适合不同的冲突：</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="padding: 14px; background: rgba(244,67,54,0.08); border-radius: 10px; border: 1px solid rgba(244,67,54,0.3);">
              <div style="font-weight: bold; color: #F44336; margin-bottom: 8px;">护肤品/美妆</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                推荐：<strong>internal</strong>（内心焦虑）+ <strong>external</strong>（外界评价）<br>
                <span style="font-size: 12px;">"知道要护肤但总是拖延" + "被说皮肤差"</span>
              </div>
            </div>
            <div style="padding: 14px; background: rgba(244,67,54,0.08); border-radius: 10px; border: 1px solid rgba(244,67,54,0.3);">
              <div style="font-weight: bold; color: #F44336; margin-bottom: 8px;">工具类产品</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                推荐：<strong>cost</strong>（代价冲突）+ <strong>misconception</strong>（误解）<br>
                <span style="font-size: 12px;">"想高效但觉得工具贵" + "你以为很难其实很简单"</span>
              </div>
            </div>
            <div style="padding: 14px; background: rgba(244,67,54,0.08); border-radius: 10px; border: 1px solid rgba(244,67,54,0.3);">
              <div style="font-weight: bold; color: #F44336; margin-bottom: 8px;">食品/保健品</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                推荐：<strong>internal</strong>（健康焦虑）+ <strong>comparison</strong>（前后对比）<br>
                <span style="font-size: 12px;">"知道要养生但做不到" + "吃了一个月的变化"</span>
              </div>
            </div>
            <div style="padding: 14px; background: rgba(244,67,54,0.08); border-radius: 10px; border: 1px solid rgba(244,67,54,0.3);">
              <div style="font-weight: bold; color: #F44336; margin-bottom: 8px;">高客单价产品</div>
              <div style="font-size: 13px; color: var(--text-secondary);">
                推荐：<strong>cost</strong>（价格顾虑）+ <strong>misconception</strong>（价值认知）<br>
                <span style="font-size: 12px;">"觉得贵" + "其实算下来比XX便宜"</span>
              </div>
            </div>
          </div>
        `,
        presenterContent: '',
        notes: '帮助学员选择适合的冲突类型。'
      },

      // ========== Part 6: emotion_arc ==========
      {
        id: 'M03-part6-title',
        section: '6️⃣ emotion_arc',
        time: '15:10-15:20',
        type: 'title',
        title: 'Part 6',
        subtitle: 'emotion_arc 情感弧线',
        description: '⏱ 15:10 - 15:20 | 10分钟',
        notes: '最后一个字段，关于情绪的"设计"。'
      },
      {
        id: 'M03-6-definition',
        section: '6️⃣ emotion_arc',
        time: '15:10-15:15',
        type: 'content',
        title: 'emotion_arc 定义',
        studentContent: `
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1; padding: 20px; background: rgba(33,150,243,0.1); border-radius: 12px; border-left: 4px solid #2196F3;">
              <div style="font-size: 18px; font-weight: bold; color: #2196F3; margin-bottom: 12px;">emotion_arc</div>
              <div style="font-size: 16px; margin-bottom: 8px;"><strong>观众在观看过程中情绪如何变化？</strong></div>
              <div style="font-size: 14px; color: var(--text-secondary);">
                情绪变化是设计出来的，不是偶然的
              </div>
            </div>
            <div style="flex: 1;">
              <div class="highlight-box" style="font-size: 14px; text-align: center;">
                看视频时被"带着走"的感觉<br>
                从好奇到共鸣，再到期待，最后想购买<br>
                <strong>这不是偶然，是设计</strong>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="script-box presenter-only">
            <div class="script-label">📢 讲师话术</div>
            <div class="script-content">
              最后一个字段是emotion_arc，情感弧线。<br><br>
              大家有没有看过一些视频，看的时候情绪被带着走，从好奇到共鸣，再到期待，最后想立刻购买？<br><br>
              这不是偶然的，是设计出来的。每个段落都有它的情绪任务。
            </div>
          </div>
        `,
        notes: '强调情绪是"设计"出来的。'
      },
      {
        id: 'M03-6-structure',
        section: '6️⃣ emotion_arc',
        time: '15:15-15:20',
        type: 'content',
        title: 'Section × 情绪 对应',
        studentContent: `
          <table class="section-table" style="font-size: 13px;">
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="width: 100px;">Section</th>
              <th style="width: 150px;">典型情绪</th>
              <th>情绪任务</th>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">HOOK</strong></td>
              <td>好奇 / 惊讶 / 焦虑</td>
              <td>引发注意力的情绪起点——"咦？这是什么？"</td>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">BRIDGE</strong></td>
              <td>共鸣 / 认同</td>
              <td>建立连接——"你懂我"</td>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">PROBLEM</strong></td>
              <td>不安 / 焦虑</td>
              <td>制造张力——"怎么办？"</td>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">RESOLUTION</strong></td>
              <td>希望 / 期待</td>
              <td>释放张力——"有救了！"</td>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">VALUE</strong></td>
              <td>信任 / 安心</td>
              <td>稳定决策——"值得买"</td>
            </tr>
            <tr>
              <td><strong style="color: var(--accent);">CTA</strong></td>
              <td>紧迫 / 行动欲</td>
              <td>推动行动——"现在就要！"</td>
            </tr>
          </table>
          <div class="tip-box" style="margin-top: 12px; font-size: 13px;">
            <strong>💡 典型情绪轨迹：</strong>好奇 → 共鸣 → 不安 → 希望 → 信任 → 行动
          </div>
        `,
        presenterContent: '',
        notes: '展示Section和情绪的对应关系。'
      },

      // ========== Part 7: 综合案例 ==========
      {
        id: 'M03-part7-title',
        section: '7️⃣ 综合案例',
        time: '15:20-15:30',
        type: 'title',
        title: 'Part 7',
        subtitle: '综合案例分析',
        description: '⏱ 15:20 - 15:30 | 10分钟',
        notes: '用完整案例串联5个字段。'
      },
      {
        id: 'M03-7-template',
        section: '7️⃣ 综合案例',
        time: '15:20-15:22',
        type: 'content',
        title: 'SoulProfile 完整模板',
        studentContent: `
          <div style="font-size: 14px; margin-bottom: 12px;">一条爆款视频的Soul设计需要填写5个字段：</div>
          <table class="section-table" style="font-size: 13px;">
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="width: 150px;">SoulProfile字段</th>
              <th>核心问题</th>
            </tr>
            <tr>
              <td><strong style="color: #E91E63;">target_audience</strong></td>
              <td>打动谁？（具体人群画像，不是"所有女性"）</td>
            </tr>
            <tr>
              <td><strong style="color: #FF9800;">trigger_scenario</strong></td>
              <td>什么场景触发？（时间+空间+事件+情绪）</td>
            </tr>
            <tr>
              <td><strong style="color: #4CAF50;">reward_type</strong></td>
              <td>最深层想要什么？（超越产品功能的心理需求）</td>
            </tr>
            <tr>
              <td><strong style="color: #F44336;">conflict_type</strong></td>
              <td>冲突类型是什么？（内在/外在/对比/代价/误解）</td>
            </tr>
            <tr>
              <td><strong style="color: #2196F3;">emotion_arc</strong></td>
              <td>情感弧线怎么走？（开头→中间→结尾的情绪变化）</td>
            </tr>
          </table>
          <div class="tip-box" style="margin-top: 12px; font-size: 13px;">
            <strong>💡 接下来用5个美妆护肤案例，展示完整SoulProfile如何设计</strong>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>快速过一遍模板，告诉学员接下来会用5个案例详细讲解。
          </div>
        `,
        notes: '给出完整模板，为案例做铺垫。'
      },

      // ========== 综合案例1：抗老精华 ==========
      {
        id: 'M03-7-case1',
        section: '7️⃣ 综合案例',
        time: '15:22-15:24',
        type: 'content',
        title: '案例1：抗老精华｜完整SoulProfile',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- 左侧：5字段 -->
            <div>
              <div style="background: rgba(233,30,99,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #E91E63;">
                <div style="font-size: 12px; color: #E91E63; font-weight: bold;">target_audience 目标受众</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>28-35岁职场女性</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">收入中等偏上，开始关注抗老但还没形成固定护肤习惯，对"初老"有焦虑但还不愿承认</span>
                </div>
              </div>

              <div style="background: rgba(255,152,0,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #FF9800;">
                <div style="font-size: 12px; color: #FF9800; font-weight: bold;">trigger_scenario 触发场景</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>早起照镜子发现法令纹</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">时间：周一早晨｜空间：卫生间镜子前｜事件：熬夜后护肤｜情绪：年龄焦虑</span>
                </div>
              </div>

              <div style="background: rgba(76,175,80,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #4CAF50;">
                <div style="font-size: 12px; color: #4CAF50; font-weight: bold;">reward_type 奖励类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>CONTROL 掌控感</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"我可以延缓衰老，掌控自己的年龄感"——不是变美，是对抗时间的掌控欲</span>
                </div>
              </div>

              <div style="background: rgba(244,67,54,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #F44336;">
                <div style="font-size: 12px; color: #F44336; font-weight: bold;">conflict_type 冲突类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>内在冲突：想保持年轻 vs 不想承认在变老</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">用户不愿说"抗老"，更愿意说"维稳"——要呵护这种心理</span>
                </div>
              </div>

              <div style="background: rgba(33,150,243,0.1); border-radius: 10px; padding: 12px; border-left: 4px solid #2196F3;">
                <div style="font-size: 12px; color: #2196F3; font-weight: bold;">emotion_arc 情感弧线</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>焦虑😰 → 共鸣😢 → 希望✨ → 行动💪</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">HOOK引发焦虑 → PROBLEM共鸣痛点 → VALUE给出方案 → CTA鼓励行动</span>
                </div>
              </div>
            </div>

            <!-- 右侧：视频结构示意 -->
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">📹 视频内容示意</div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #E91E63;">HOOK 0-3秒</div>
                <div style="font-size: 13px;">"25岁的脸，35岁的法令纹？"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😰 焦虑</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #FF9800;">PROBLEM 3-15秒</div>
                <div style="font-size: 13px;">"每天照镜子都觉得老了一点，用了很多贵妇面霜都没用..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😢 共鸣</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #4CAF50;">VALUE 15-50秒</div>
                <div style="font-size: 13px;">"直到我发现抗老的关键不是贵，而是成分配比..."（展示产品）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：✨ 希望</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: #2196F3;">CTA 50-60秒</div>
                <div style="font-size: 13px;">"抗老要趁早，点击购物车，这个价格不会再有了"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：💪 行动</div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>逐个讲解5个字段如何相互配合</li>
              <li>强调：emotion_arc是贯穿始终的设计</li>
              <li>问学员："你们品牌的抗老产品可以怎么套用？"</li>
            </ul>
          </div>
        `,
        notes: '案例1：抗老精华，展示完整SoulProfile。'
      },

      // ========== 综合案例2：美白精华 ==========
      {
        id: 'M03-7-case2',
        section: '7️⃣ 综合案例',
        time: '15:24-15:26',
        type: 'content',
        title: '案例2：美白精华｜完整SoulProfile',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- 左侧：5字段 -->
            <div>
              <div style="background: rgba(233,30,99,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #E91E63;">
                <div style="font-size: 12px; color: #E91E63; font-weight: bold;">target_audience 目标受众</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>22-30岁学生/初入职场女性</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">肤色偏暗或不均匀，有美白需求但预算有限，容易被"见效快"吸引</span>
                </div>
              </div>

              <div style="background: rgba(255,152,0,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #FF9800;">
                <div style="font-size: 12px; color: #FF9800; font-weight: bold;">trigger_scenario 触发场景</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>和闺蜜合照发现肤色差异</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">时间：聚会后｜空间：看手机相册｜事件：发现自己最黑｜情绪：自卑+羡慕</span>
                </div>
              </div>

              <div style="background: rgba(76,175,80,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #4CAF50;">
                <div style="font-size: 12px; color: #4CAF50; font-weight: bold;">reward_type 奖励类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>confidence 自信</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"和闺蜜站一起不再是最黑的那个"——不只是白，是社交自信</span>
                </div>
              </div>

              <div style="background: rgba(244,67,54,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #F44336;">
                <div style="font-size: 12px; color: #F44336; font-weight: bold;">conflict_type 冲突类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>对比冲突：别人白 vs 我黑</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">用对比强化痛感："室友用了一个月，我们现在肤色差不多了"</span>
                </div>
              </div>

              <div style="background: rgba(33,150,243,0.1); border-radius: 10px; padding: 12px; border-left: 4px solid #2196F3;">
                <div style="font-size: 12px; color: #2196F3; font-weight: bold;">emotion_arc 情感弧线</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>自卑😔 → 羡慕😍 → 期待🌟 → 信心😊</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">从"我好黑"→"她怎么变白的"→"我也可以"→"买它！"</span>
                </div>
              </div>
            </div>

            <!-- 右侧：视频结构示意 -->
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">📹 视频内容示意</div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #E91E63;">HOOK 0-3秒</div>
                <div style="font-size: 13px;">"每次合照我都站最边上，因为..."（展示对比照）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😔 自卑</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #FF9800;">BRIDGE 3-10秒</div>
                <div style="font-size: 13px;">"直到室友问我：你最近用了什么？我发现她偷偷在用这个..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😍 羡慕+好奇</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #4CAF50;">VALUE 10-45秒</div>
                <div style="font-size: 13px;">"用了一个月，现在合照终于不用躲边上了"（展示前后对比）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🌟 期待</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: #2196F3;">CTA 45-60秒</div>
                <div style="font-size: 13px;">"想和我一样逆袭的姐妹，链接在这里，夏天前白回来！"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😊 信心</div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>强调：美白产品的reward不是"白"，是"社交自信"</li>
              <li>指出：对比冲突是美白品类最有效的冲突类型</li>
              <li>问学员："你们的美白产品怎么设计对比？"</li>
            </ul>
          </div>
        `,
        notes: '案例2：美白精华，展示完整SoulProfile。'
      },

      // ========== 综合案例3：祛痘产品 ==========
      {
        id: 'M03-7-case3',
        section: '7️⃣ 综合案例',
        time: '15:26-15:28',
        type: 'content',
        title: '案例3：祛痘产品｜完整SoulProfile',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- 左侧：5字段 -->
            <div>
              <div style="background: rgba(233,30,99,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #E91E63;">
                <div style="font-size: 12px; color: #E91E63; font-weight: bold;">target_audience 目标受众</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>18-28岁反复长痘人群</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">用过很多祛痘产品都没用，已经有些绝望，但又不甘心，对"烂脸"极度敏感</span>
                </div>
              </div>

              <div style="background: rgba(255,152,0,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #FF9800;">
                <div style="font-size: 12px; color: #FF9800; font-weight: bold;">trigger_scenario 触发场景</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>重要场合前突然爆痘</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">时间：约会/面试前夜｜空间：镜子前｜事件：发现新痘/挤痘｜情绪：焦虑+绝望</span>
                </div>
              </div>

              <div style="background: rgba(76,175,80,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #4CAF50;">
                <div style="font-size: 12px; color: #4CAF50; font-weight: bold;">reward_type 奖励类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>confidence 自信</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"不用再遮遮掩掩，可以自信地露脸"——从痘痘困扰中找回自信</span>
                </div>
              </div>

              <div style="background: rgba(244,67,54,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #F44336;">
                <div style="font-size: 12px; color: #F44336; font-weight: bold;">conflict_type 冲突类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>误解冲突：以为是皮肤问题，其实是方法问题</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"我以前也觉得是自己皮肤太差，后来才发现是用错了方法"</span>
                </div>
              </div>

              <div style="background: rgba(33,150,243,0.1); border-radius: 10px; padding: 12px; border-left: 4px solid #2196F3;">
                <div style="font-size: 12px; color: #2196F3; font-weight: bold;">emotion_arc 情感弧线</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>绝望😭 → 共鸣🥺 → 顿悟💡 → 重燃希望🔥</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">从"我是不是没救了"→"原来不是我的错"→"找到方法了"→"这次一定行"</span>
                </div>
              </div>
            </div>

            <!-- 右侧：视频结构示意 -->
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">📹 视频内容示意</div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #E91E63;">HOOK 0-3秒</div>
                <div style="font-size: 13px;">"烂脸5年，用过不下20款祛痘产品，我以为这辈子就这样了..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😭 绝望</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #FF9800;">PROBLEM 3-15秒</div>
                <div style="font-size: 13px;">"每次好不容易好一点，换季又爆发，反反复复真的太崩溃了..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🥺 共鸣</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #F44336;">REVERSAL 15-25秒</div>
                <div style="font-size: 13px;">"后来我才知道，反复长痘不是皮肤太差，是屏障一直没修复好..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：💡 顿悟</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #4CAF50;">VALUE 25-50秒</div>
                <div style="font-size: 13px;">"这款是祛痘+修复双管齐下..."（展示产品和效果）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🌟 希望</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: #2196F3;">CTA 50-60秒</div>
                <div style="font-size: 13px;">"姐妹们，战痘路上你不是一个人，链接给你们放这了"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🔥 行动</div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>强调：祛痘产品的用户已经很绝望，要先给情绪出口</li>
              <li>指出："误解冲突"可以卸下用户的自我责备</li>
              <li>问学员："你们的祛痘产品差异化在哪里？怎么设计REVERSAL？"</li>
            </ul>
          </div>
        `,
        notes: '案例3：祛痘产品，展示完整SoulProfile。'
      },

      // ========== 综合案例4：口红/唇釉 ==========
      {
        id: 'M03-7-case4',
        section: '7️⃣ 综合案例',
        time: '15:28-15:30',
        type: 'content',
        title: '案例4：口红/唇釉｜完整SoulProfile',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- 左侧：5字段 -->
            <div>
              <div style="background: rgba(233,30,99,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #E91E63;">
                <div style="font-size: 12px; color: #E91E63; font-weight: bold;">target_audience 目标受众</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>20-32岁职场/约会女性</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">追求"精致但不费力"，想要气色好但不想妆感重，对"显白""显气质"敏感</span>
                </div>
              </div>

              <div style="background: rgba(255,152,0,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #FF9800;">
                <div style="font-size: 12px; color: #FF9800; font-weight: bold;">trigger_scenario 触发场景</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>出门前快速补妆</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">时间：出门前5分钟｜空间：玄关/公司卫生间｜事件：照镜子发现气色差｜情绪：着急+不自信</span>
                </div>
              </div>

              <div style="background: rgba(76,175,80,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #4CAF50;">
                <div style="font-size: 12px; color: #4CAF50; font-weight: bold;">reward_type 奖励类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>beauty 变美</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"涂上口红，整个人都不一样了"——即刻变美的魔法感</span>
                </div>
              </div>

              <div style="background: rgba(244,67,54,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #F44336;">
                <div style="font-size: 12px; color: #F44336; font-weight: bold;">conflict_type 冲突类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>对比冲突：涂前 vs 涂后的巨大反差</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">素颜憔悴 vs 一秒提气色，视觉冲击力是口红类内容的核心</span>
                </div>
              </div>

              <div style="background: rgba(33,150,243,0.1); border-radius: 10px; padding: 12px; border-left: 4px solid #2196F3;">
                <div style="font-size: 12px; color: #2196F3; font-weight: bold;">emotion_arc 情感弧线</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>平淡😐 → 惊艳😍 → 心动💓 → 必买🛒</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">口红内容的核心是"惊艳时刻"，情绪要快速拉升</span>
                </div>
              </div>
            </div>

            <!-- 右侧：视频结构示意 -->
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">📹 视频内容示意</div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #E91E63;">HOOK 0-3秒</div>
                <div style="font-size: 13px;">（素颜出镜）"姐妹们，看我3秒变身！"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😐 平淡/好奇</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #FF9800;">BRIDGE 3-8秒</div>
                <div style="font-size: 13px;">（涂口红特写）"就这一支，什么妆都能救..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🤔 期待</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #4CAF50;">VALUE 8-40秒</div>
                <div style="font-size: 13px;">（展示效果）"黄皮显白、不挑肤色、不沾杯..."（各种场景展示）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😍 惊艳</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: #2196F3;">CTA 40-50秒</div>
                <div style="font-size: 13px;">"这个色号真的绝了，手慢无，姐妹们冲！"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🛒 必买</div>
              </div>

              <div class="tip-box" style="margin-top: 12px; font-size: 11px;">
                <strong>💄 口红内容特点：</strong>情感弧线短平快，核心是"惊艳时刻"的视觉冲击
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>强调：彩妆类内容情感弧线要"短平快"</li>
              <li>指出：口红的核心是"对比冲击"，涂前涂后反差越大越好</li>
              <li>问学员："你们的彩妆产品如何设计惊艳时刻？"</li>
            </ul>
          </div>
        `,
        notes: '案例4：口红/唇釉，展示完整SoulProfile。'
      },

      // ========== 综合案例5：面膜 ==========
      {
        id: 'M03-7-case5',
        section: '7️⃣ 综合案例',
        time: '15:30-15:32',
        type: 'content',
        title: '案例5：面膜｜完整SoulProfile',
        studentContent: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- 左侧：5字段 -->
            <div>
              <div style="background: rgba(233,30,99,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #E91E63;">
                <div style="font-size: 12px; color: #E91E63; font-weight: bold;">target_audience 目标受众</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>25-40岁忙碌女性</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">工作生活压力大，没时间精致护肤，皮肤干燥暗沉，想要"躺平式护肤"</span>
                </div>
              </div>

              <div style="background: rgba(255,152,0,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #FF9800;">
                <div style="font-size: 12px; color: #FF9800; font-weight: bold;">trigger_scenario 触发场景</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>加班后深夜护肤</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">时间：晚上10点后｜空间：卧室/沙发｜事件：终于有空躺下｜情绪：疲惫+想犒劳自己</span>
                </div>
              </div>

              <div style="background: rgba(76,175,80,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #4CAF50;">
                <div style="font-size: 12px; color: #4CAF50; font-weight: bold;">reward_type 奖励类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>health 健康</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"敷着面膜躺着，是一天中最放松的时刻"——不只是护肤，是身心健康的仪式</span>
                </div>
              </div>

              <div style="background: rgba(244,67,54,0.1); border-radius: 10px; padding: 12px; margin-bottom: 10px; border-left: 4px solid #F44336;">
                <div style="font-size: 12px; color: #F44336; font-weight: bold;">conflict_type 冲突类型</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>代价冲突：想精致护肤 vs 没时间没精力</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">"我知道应该好好护肤，但真的太累了"——面膜解决这个矛盾</span>
                </div>
              </div>

              <div style="background: rgba(33,150,243,0.1); border-radius: 10px; padding: 12px; border-left: 4px solid #2196F3;">
                <div style="font-size: 12px; color: #2196F3; font-weight: bold;">emotion_arc 情感弧线</div>
                <div style="font-size: 14px; margin-top: 6px;">
                  <strong>疲惫😫 → 共鸣🥹 → 放松😌 → 满足😊</strong><br>
                  <span style="font-size: 12px; color: var(--text-secondary);">面膜内容的情绪是"从紧绷到放松"，要营造治愈氛围</span>
                </div>
              </div>
            </div>

            <!-- 右侧：视频结构示意 -->
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 12px;">📹 视频内容示意</div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #E91E63;">HOOK 0-3秒</div>
                <div style="font-size: 13px;">"加班到10点，皮肤干得能起皮，但真的好累不想动..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😫 疲惫</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #FF9800;">PROBLEM 3-12秒</div>
                <div style="font-size: 13px;">"想好好护肤，但洗脸-水-精华-乳液-面霜，光想想就累了..."</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：🥹 共鸣</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
                <div style="font-size: 11px; color: #4CAF50;">VALUE 12-45秒</div>
                <div style="font-size: 13px;">"所以我现在就用这个，往脸上一贴，躺20分钟，刷刷手机，比做全套还管用..."（展示使用过程+效果）</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😌 放松</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: #2196F3;">CTA 45-55秒</div>
                <div style="font-size: 13px;">"累了一天，你也值得这20分钟的放松，链接放这儿了"</div>
                <div style="font-size: 11px; color: var(--text-secondary);">→ 情绪：😊 满足</div>
              </div>

              <div class="tip-box" style="margin-top: 12px; font-size: 11px;">
                <strong>🧖 面膜内容特点：</strong>情感弧线要"治愈系"，从紧绷到放松，营造仪式感
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>强调：面膜的reward不只是护肤效果，更是"犒赏自己"的仪式感</li>
              <li>指出：代价冲突适合所有"省时省力"定位的产品</li>
              <li>总结：5个案例展示了5种不同的SoulProfile设计思路</li>
            </ul>
          </div>
        `,
        notes: '案例5：面膜，展示完整SoulProfile。'
      },

      // ========== 案例对比总结 ==========
      {
        id: 'M03-7-comparison',
        section: '7️⃣ 综合案例',
        time: '15:32-15:35',
        type: 'content',
        title: '5个案例对比：不同产品的Soul设计',
        studentContent: `
          <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
            <thead>
              <tr style="background: rgba(156,39,176,0.2);">
                <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--accent);">产品</th>
                <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--accent);">target_audience</th>
                <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--accent);">reward_type</th>
                <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--accent);">conflict_type</th>
                <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--accent);">emotion_arc</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 8px;"><strong style="color: #FF6B35;">抗老精华</strong></td>
                <td style="padding: 8px;">28-35岁职场女性</td>
                <td style="padding: 8px;">CONTROL 掌控感</td>
                <td style="padding: 8px;">内在冲突</td>
                <td style="padding: 8px;">焦虑→共鸣→希望→行动</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 8px;"><strong style="color: #2196F3;">美白精华</strong></td>
                <td style="padding: 8px;">22-30岁学生/职场</td>
                <td style="padding: 8px;">confidence 自信</td>
                <td style="padding: 8px;">对比冲突</td>
                <td style="padding: 8px;">自卑→羡慕→期待→信心</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 8px;"><strong style="color: #9C27B0;">祛痘产品</strong></td>
                <td style="padding: 8px;">18-28岁反复长痘</td>
                <td style="padding: 8px;">confidence 自信</td>
                <td style="padding: 8px;">误解冲突</td>
                <td style="padding: 8px;">绝望→共鸣→顿悟→希望</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 8px;"><strong style="color: #4CAF50;">口红唇釉</strong></td>
                <td style="padding: 8px;">20-32岁职场/约会</td>
                <td style="padding: 8px;">beauty 变美</td>
                <td style="padding: 8px;">对比冲突</td>
                <td style="padding: 8px;">平淡→惊艳→心动→必买</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong style="color: #FFC107;">面膜</strong></td>
                <td style="padding: 8px;">25-40岁忙碌女性</td>
                <td style="padding: 8px;">health 健康</td>
                <td style="padding: 8px;">代价冲突</td>
                <td style="padding: 8px;">疲惫→共鸣→放松→满足</td>
              </tr>
            </tbody>
          </table>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
            <div style="background: rgba(156,39,176,0.1); border-radius: 12px; padding: 14px; border-left: 4px solid #9C27B0;">
              <div style="font-size: 13px; font-weight: bold; color: #9C27B0; margin-bottom: 8px;">💡 关键发现</div>
              <div style="font-size: 12px; line-height: 1.7;">
                <div>• 同是护肤品，<strong>reward_type完全不同</strong></div>
                <div>• 不同冲突类型带来<strong>不同的情感弧线</strong></div>
                <div>• emotion_arc要和<strong>视频结构（Bone）配合</strong></div>
              </div>
            </div>

            <div style="background: rgba(76,175,80,0.1); border-radius: 12px; padding: 14px; border-left: 4px solid #4CAF50;">
              <div style="font-size: 13px; font-weight: bold; color: #4CAF50; margin-bottom: 8px;">✅ 设计顺序</div>
              <div style="font-size: 12px; line-height: 1.7;">
                <div>1️⃣ 先定<strong>target_audience</strong>（打动谁）</div>
                <div>2️⃣ 再定<strong>trigger_scenario</strong>（什么场景）</div>
                <div>3️⃣ 然后<strong>reward + conflict</strong>（动力+张力）</div>
                <div>4️⃣ 最后设计<strong>emotion_arc</strong>（情绪走向）</div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>快速对比5个案例的差异</li>
              <li>强调：即使是同品类，Soul设计也可以完全不同</li>
              <li>给学员30秒思考自己产品的Soul设计</li>
            </ul>
          </div>
        `,
        notes: '5个案例对比总结，强化方法论。'
      },

      // ========== Section × Strategy × Soul 三位一体 ==========
      {
        id: 'M03-7-integration',
        section: '7️⃣ 综合案例',
        time: '15:35-15:38',
        type: 'content',
        title: 'Section × Strategy × Soul 三位一体',
        studentContent: `
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="font-size: 14px; color: var(--text-secondary);">三者的关系不是并列，而是<strong style="color: #9C27B0;">层层嵌套</strong></div>
          </div>

          <!-- 核心关系图 -->
          <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); border-radius: 50%; width: 120px; height: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 20px rgba(156,39,176,0.4);">
              <div style="font-size: 24px;">🎯</div>
              <div style="font-size: 14px; font-weight: bold;">Soul</div>
              <div style="font-size: 10px;">内核·打动谁</div>
            </div>
            <div style="font-size: 24px; color: #666;">→</div>
            <div style="background: linear-gradient(135deg, #FF6B35 0%, #E64A19 100%); border-radius: 12px; padding: 16px 20px; box-shadow: 0 4px 15px rgba(255,107,53,0.3);">
              <div style="font-size: 14px; font-weight: bold; text-align: center;">Section</div>
              <div style="font-size: 10px; text-align: center;">结构·先讲什么后讲什么</div>
            </div>
            <div style="font-size: 24px; color: #666;">→</div>
            <div style="background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%); border-radius: 8px; padding: 12px 16px; box-shadow: 0 4px 12px rgba(76,175,80,0.3);">
              <div style="font-size: 14px; font-weight: bold; text-align: center;">Strategy</div>
              <div style="font-size: 10px; text-align: center;">手法·怎么表达</div>
            </div>
            <div style="font-size: 24px; color: #666;">→</div>
            <div style="background: rgba(255,255,255,0.1); border: 2px dashed #666; border-radius: 8px; padding: 12px 16px;">
              <div style="font-size: 14px; font-weight: bold; text-align: center;">文案</div>
              <div style="font-size: 10px; text-align: center;">具体内容</div>
            </div>
          </div>

          <!-- 核心公式 -->
          <div style="background: rgba(156,39,176,0.15); border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 16px; border: 1px solid rgba(156,39,176,0.3);">
            <div style="font-size: 18px; font-weight: bold; color: #fff;">
              具体文案 = <span style="color: #9C27B0;">Soul（5字段整体）</span> × <span style="color: #FF6B35;">Section位置</span> × <span style="color: #4CAF50;">Strategy手法</span>
            </div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 8px;">
              Soul不是拆开对应到各个Section的，而是<strong>作为整体</strong>决定每个位置的具体内容
            </div>
          </div>

          <!-- 举例说明 -->
          <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px;">
            <div style="font-size: 13px; font-weight: bold; margin-bottom: 12px;">💡 举例：同样是 HOOK + PAIN策略，不同Soul写出完全不同的文案</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 12px; border-left: 3px solid #E91E63;">
                <div style="font-size: 11px; color: #E91E63; margin-bottom: 6px;">Soul A：28-35岁职场女性 + 年龄焦虑 + 掌控感</div>
                <div style="font-size: 13px; font-weight: bold;">"25岁的年龄，35岁的法令纹？"</div>
                <div style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">→ 痛点来自：target_audience的年龄焦虑 + conflict_type的内在挣扎</div>
              </div>
              <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 12px; border-left: 3px solid #2196F3;">
                <div style="font-size: 11px; color: #2196F3; margin-bottom: 6px;">Soul B：18-25岁学生党 + 社交自卑 + 归属感</div>
                <div style="font-size: 13px; font-weight: bold;">"每次合照我都站最边上..."</div>
                <div style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">→ 痛点来自：target_audience的社交场景 + reward_type的归属渴望</div>
              </div>
            </div>
            <div style="font-size: 12px; color: #FFC107; margin-top: 12px; text-align: center;">
              ⚡ 同样的Section（HOOK）+ 同样的Strategy（PAIN），但Soul不同 → 文案完全不同
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>重点强调：Soul是一个整体，不是拆开对应的</li>
              <li>用两个例子对比：同样的结构+策略，Soul不同→内容完全不同</li>
              <li>类比：Soul是"灵魂"，Section是"骨架"，Strategy是"招式"，文案是"最终呈现"</li>
            </ul>
          </div>
        `,
        notes: 'Section × Strategy × Soul 三位一体的正确理解。'
      },

      // ========== 实战案例：完整创作流程 ==========
      {
        id: 'M03-7-fullcase',
        section: '7️⃣ 综合案例',
        time: '15:38-15:42',
        type: 'content',
        title: '实战演示：祛痘精华完整创作流程',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(156,39,176,0.2) 0%, rgba(156,39,176,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(156,39,176,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #9C27B0; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 18-25岁反复长痘学生党</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 约会前夜发现爆痘</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> confidence 自信</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 误解冲突（方法非皮肤）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 绝望→共鸣→顿悟→希望→行动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HPRVRC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → PROBLEM → REVERSAL → VALUE → CTA</div>
              </div>

              <div style="margin-top: 10px; padding: 10px; background: rgba(255,193,7,0.1); border-radius: 8px; border-left: 3px solid #FFC107;">
                <div style="font-size: 10px; font-weight: bold; color: #FFC107; margin-bottom: 4px;">💡 关键理解</div>
                <div style="font-size: 10px; color: var(--text-secondary); line-height: 1.5;">
                  左边的Soul是<strong>一个整体</strong><br>
                  它影响右边<strong>每一条</strong>文案的内容
                </div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="font-size: 12px; font-weight: bold; margin-bottom: 8px;">📝 Soul整体 × Section × Strategy → 具体文案</div>

              <div style="display: grid; gap: 6px;">
                <!-- HOOK -->
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × PAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion_arc: 😭绝望</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"烂脸5年，我以为这辈子就这样了..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的年龄</span> + <span style="color: #FF9800;">场景的焦虑</span> + <span style="color: #F44336;">冲突的绝望感</span> 共同决定这句话
                  </div>
                </div>

                <!-- PROBLEM -->
                <div style="background: rgba(244,67,54,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #F44336;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #F44336;">PROBLEM × PAIN+STORY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion_arc: 🥺共鸣</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"用过不下20款祛痘产品，好了又复发..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA反复战痘的经历</span> + <span style="color: #F44336;">误解冲突的"走弯路"</span> 共同决定
                  </div>
                </div>

                <!-- REVERSAL -->
                <div style="background: rgba(0,188,212,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #00BCD4;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #00BCD4;">REVERSAL × EXPLAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion_arc: 💡顿悟</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"后来才知道，反复长痘不是皮肤太差，是屏障没修复！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #F44336;">误解冲突类型</span>直接决定了反转的内容是"纠正认知"
                  </div>
                </div>

                <!-- VALUE -->
                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO+PROOF</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion_arc: ✨希望</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"这款祛痘+修复双管齐下..."（展示效果）</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">confidence动机</span>决定要强调"不再被痘痘困扰"的自信
                  </div>
                </div>

                <!-- CTA -->
                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion_arc: 🔥行动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"战痘路上你不是一个人，库存不多！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的孤独感</span> + <span style="color: #4CAF50;">归属动机</span> → "你不是一个人"
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师动作：</strong>
            <ul>
              <li>重点讲解：每条文案下面的"Soul影响"说明</li>
              <li>强调：同一个Soul会影响所有Section的内容，不是一一对应</li>
              <li>问学员："如果Soul的conflict_type换成'对比冲突'，REVERSAL会怎么变？"</li>
            </ul>
          </div>
        `,
        notes: '完整创作流程演示，强调Soul整体如何影响每个Section的具体内容。'
      },

      // ========== 实战案例2：防晒霜 ==========
      {
        id: 'M03-7-fullcase2',
        section: '7️⃣ 综合案例',
        time: '15:42-15:44',
        type: 'content',
        title: '实战案例2：防晒霜｜外在冲突',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(33,150,243,0.2) 0%, rgba(33,150,243,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(33,150,243,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #2196F3; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 20-30岁爱出门但怕晒黑的女生</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 海边/户外回来发现晒黑了</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> safety 安全感（保护皮肤）</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 外在冲突（紫外线 vs 想出门玩）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 后悔→恐惧→安心→行动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HBVC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → BRIDGE → VALUE → CTA</div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="display: grid; gap: 6px;">
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × FEAR</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😱后悔</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"出去玩一趟，回来黑了两个色号..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #FF9800;">户外场景</span> + <span style="color: #F44336;">外在冲突的后果</span> + <span style="color: #E91E63;">TA怕晒黑的痛点</span>
                  </div>
                </div>

                <div style="background: rgba(255,152,0,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF9800;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #FF9800;">BRIDGE × STORY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😰恐惧→共鸣</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"以前我也觉得涂防晒麻烦，直到那次三亚回来..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的侥幸心理</span> + <span style="color: #FF9800;">真实场景经历</span> 建立信任
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO+PROOF</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😌安心</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"这款SPF50+，成膜快不搓泥，户外一整天都不用担心"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">safety动机</span>决定强调"保护力" + <span style="color: #F44336;">解决外在威胁</span>
                  </div>
                </div>

                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 💪行动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"五一出行前囤好，链接在这，别晒完再后悔！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #FF9800;">场景时机（假期前）</span> + <span style="color: #F44336;">唤起"后悔"恐惧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师要点：</strong>外在冲突的核心是"敌人在外面"（紫外线），所以HOOK用FEAR制造危机感，CTA用"别后悔"强化。
          </div>
        `,
        notes: '防晒霜案例，展示外在冲突类型的创作逻辑。'
      },

      // ========== 实战案例3：眼霜 ==========
      {
        id: 'M03-7-fullcase3',
        section: '7️⃣ 综合案例',
        time: '15:44-15:46',
        type: 'content',
        title: '实战案例3：眼霜｜代价冲突',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(156,39,176,0.2) 0%, rgba(156,39,176,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(156,39,176,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #9C27B0; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 25-35岁熬夜加班/追剧党</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 深夜刷手机后照镜子发现眼纹</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> CONTROL 掌控感（对抗熬夜代价）</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 代价冲突（想熬夜 vs 怕变老）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 惊吓→自责→释然→行动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HPRVC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → PROBLEM → RESOLUTION → VALUE → CTA</div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="display: grid; gap: 6px;">
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × PAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😨惊吓</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"熬夜一时爽，眼周细纹越来越长..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #F44336;">代价冲突的核心</span>——熬夜的"代价"是眼周老化
                  </div>
                </div>

                <div style="background: rgba(244,67,54,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #F44336;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #F44336;">PROBLEM × STORY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😔自责</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"明知道该早睡，但就是舍不得放下手机..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的真实状态</span> + <span style="color: #F44336;">代价冲突的"明知故犯"心理</span>
                  </div>
                </div>

                <div style="background: rgba(0,188,212,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #00BCD4;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #00BCD4;">RESOLUTION × EXPLAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😌释然</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"不是让你不熬夜，而是熬夜后要会补救"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #F44336;">代价冲突的解法</span>是"降低代价"而非"避免行为"
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: ✨希望</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"睡前涂一层，第二天眼周状态好很多..."（展示效果）</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">CONTROL动机</span>——让用户觉得"能掌控熬夜的代价"
                  </div>
                </div>

                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 💪行动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"熬夜党必备，早用早补救，链接给你们！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA身份认同（熬夜党）</span>呼应，强化归属感
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师要点：</strong>代价冲突的解法不是"别做这件事"，而是"做了也能补救"——给用户心理出口。
          </div>
        `,
        notes: '眼霜案例，展示代价冲突类型的创作逻辑。'
      },

      // ========== 实战案例4：粉底液/气垫 ==========
      {
        id: 'M03-7-fullcase4',
        section: '7️⃣ 综合案例',
        time: '15:46-15:48',
        type: 'content',
        title: '实战案例4：粉底液｜对比冲突',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(255,152,0,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #FF9800; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 22-32岁追求自然妆感的女生</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 出门前化妆，想要"伪素颜"</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> beauty 变美（变好看但不假）</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 对比冲突（素颜差 vs 上妆假）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 纠结→好奇→惊艳→心动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HVC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → VALUE → CTA（彩妆短平快）</div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="display: grid; gap: 6px;">
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × CONTRAST</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 🤔纠结→好奇</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"素颜出门没气色，上妆又怕太假？"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #F44336;">对比冲突直接做HOOK</span>——两难困境引发共鸣
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO+CONTRAST</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😍惊艳</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"看我只用这一个，皮肤好像自带滤镜..."（半脸对比）</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">beauty动机</span>通过<span style="color: #F44336;">视觉对比</span>呈现，半脸法是最佳策略
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.08); border-radius: 8px; padding: 10px; border-left: 3px solid #81C784;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #81C784;">VALUE续 × PROOF</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😍持续惊艳</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"养肤成分，越用皮肤越好，同事都问我是不是素颜"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA想要"伪素颜"</span>的核心诉求，用社交认证强化
                  </div>
                </div>

                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 💓心动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"想要这种'天生好皮'效果的姐妹，链接放这了！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">beauty动机</span>的最终承诺——"天生好皮"而非"化妆好看"
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师要点：</strong>对比冲突特别适合彩妆类，HOOK直接用两难困境，VALUE用视觉对比（半脸法）解决。
          </div>
        `,
        notes: '粉底液案例，展示对比冲突类型的创作逻辑。'
      },

      // ========== 实战案例5：卸妆产品 ==========
      {
        id: 'M03-7-fullcase5',
        section: '7️⃣ 综合案例',
        time: '15:48-15:50',
        type: 'content',
        title: '实战案例5：卸妆油｜内在冲突',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(244,67,54,0.2) 0%, rgba(244,67,54,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(244,67,54,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #F44336; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 20-30岁懒癌晚期但怕烂脸的女生</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 深夜回家累到不想卸妆</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> time 省时间（省事但安心）</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 内在冲突（想偷懒 vs 怕闷痘）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 纠结→共鸣→释然→行动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HBVC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → BRIDGE → VALUE → CTA</div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="display: grid; gap: 6px;">
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × PAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😩纠结</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"带妆一整天，回家只想躺平，但不卸又怕闷痘..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #F44336;">内在冲突的两难</span>——"想vs怕"的心理拉扯
                  </div>
                </div>

                <div style="background: rgba(255,152,0,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF9800;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #FF9800;">BRIDGE × STORY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 🥹共鸣</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"以前我也是这样，卸妆能拖就拖，直到有次闷出一脸闭口..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的真实状态</span> + <span style="color: #F44336;">内在冲突的"代价"</span>建立共鸣
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😌释然</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"这款按压两下，脸上一抹就乳化，30秒搞定！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">time动机</span>决定强调"省事快速" + <span style="color: #F44336;">解决内在冲突</span>
                  </div>
                </div>

                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 💪行动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"懒人必备，卸妆再也不是负担，链接给懒癌姐妹们！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA身份认同（懒癌）</span>强化归属 + <span style="color: #4CAF50;">"不是负担"</span>呼应time
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师要点：</strong>内在冲突的HOOK要把"两难"说出来，VALUE要同时解决两边——既省事，又不闷痘。
          </div>
        `,
        notes: '卸妆油案例，展示内在冲突类型的创作逻辑。'
      },

      // ========== 实战案例6：身体乳 ==========
      {
        id: 'M03-7-fullcase6',
        section: '7️⃣ 综合案例',
        time: '15:50-15:52',
        type: 'content',
        title: '实战案例6：身体乳｜外在冲突',
        studentContent: `
          <div style="display: grid; grid-template-columns: 260px 1fr; gap: 16px;">
            <!-- 左侧：Soul整体设定 -->
            <div>
              <div style="background: linear-gradient(135deg, rgba(76,175,80,0.2) 0%, rgba(76,175,80,0.05) 100%); border-radius: 12px; padding: 14px; border: 2px solid rgba(76,175,80,0.4); margin-bottom: 10px;">
                <div style="font-size: 13px; font-weight: bold; color: #4CAF50; margin-bottom: 10px; text-align: center;">🎯 Soul 内核（整体）</div>
                <div style="font-size: 10px; line-height: 1.6;">
                  <div style="margin-bottom: 4px;"><strong style="color: #E91E63;">TA:</strong> 20-35岁秋冬皮肤干燥的女生</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #FF9800;">场景:</strong> 穿黑丝/深色衣服发现起皮屑</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #4CAF50;">动机:</strong> CONFIDENCE 自信（肌肤光滑不尴尬）</div>
                  <div style="margin-bottom: 4px;"><strong style="color: #F44336;">冲突:</strong> 外在冲突（干燥季节 vs 想穿好看）</div>
                  <div><strong style="color: #2196F3;">曲线:</strong> 尴尬→共鸣→安心→行动</div>
                </div>
              </div>

              <div style="background: rgba(255,107,53,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF6B35;">
                <div style="font-size: 11px; font-weight: bold; color: #FF6B35; margin-bottom: 4px;">📐 选择骨架：HBVC</div>
                <div style="font-size: 10px; color: var(--text-secondary);">HOOK → BRIDGE → VALUE → CTA</div>
              </div>
            </div>

            <!-- 右侧：Section × Strategy → 文案 -->
            <div>
              <div style="display: grid; gap: 6px;">
                <div style="background: rgba(233,30,99,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #E91E63;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #E91E63;">HOOK × PAIN</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😳尴尬</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"穿黑丝出门，低头一看全是白色皮屑..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #FF9800;">具体尴尬场景</span> + <span style="color: #F44336;">外在冲突的"敌人"（干燥）</span>
                  </div>
                </div>

                <div style="background: rgba(255,152,0,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #FF9800;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #FF9800;">BRIDGE × STORY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 🥹共鸣</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"每年一到秋冬就这样，腿上像下雪一样..."</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #E91E63;">TA的季节性痛点</span> + 幽默比喻建立亲和力
                  </div>
                </div>

                <div style="background: rgba(76,175,80,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #4CAF50;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #4CAF50;">VALUE × DEMO+PROOF</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 😌安心</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"洗完澡涂一层，第二天腿滑得像剥了壳的鸡蛋"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #4CAF50;">CONFIDENCE动机</span>→强调"光滑"效果 + 生动比喻
                  </div>
                </div>

                <div style="background: rgba(33,150,243,0.1); border-radius: 8px; padding: 10px; border-left: 3px solid #2196F3;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: bold; color: #2196F3;">CTA × URGENCY</span>
                    <span style="font-size: 9px; color: #2196F3;">emotion: 💪行动</span>
                  </div>
                  <div style="font-size: 12px; font-weight: bold;">"秋冬必囤，告别'下雪腿'，链接放这了！"</div>
                  <div style="font-size: 9px; color: var(--text-secondary); margin-top: 4px; background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 4px;">
                    ← Soul影响：<span style="color: #FF9800;">季节时机</span> + <span style="color: #F44336;">用HOOK的痛点词"下雪腿"</span>首尾呼应
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        presenterContent: `
          <div class="action-box presenter-only">
            <strong>▶ 讲师要点：</strong>外在冲突适合季节性产品，HOOK点明"敌人"，VALUE要给出"武器"，CTA强调时机。
          </div>
        `,
        notes: '身体乳案例，展示季节性外在冲突的创作逻辑。'
      },

      {
        id: 'M03-7-summary',
        section: '7️⃣ 综合案例',
        time: '15:25-15:30',
        type: 'content',
        title: '模块总结',
        studentContent: `
          <div class="soul-grid">
            <div class="soul-card audience">
              <h4>字段1</h4>
              <div class="field-name">target_audience</div>
              <p>"打动谁？"<br>一条视频只打动一类人</p>
            </div>
            <div class="soul-card scenario">
              <h4>字段2</h4>
              <div class="field-name">trigger_scenario</div>
              <p>"什么时候触动？"<br>场景越具体越有共鸣</p>
            </div>
            <div class="soul-card reward">
              <h4>字段3</h4>
              <div class="field-name">reward_type</div>
              <p>"最深层想要什么？"<br>超越产品的心理需求</p>
            </div>
            <div class="soul-card conflict">
              <h4>字段4</h4>
              <div class="field-name">conflict_type</div>
              <p>"张力是什么？"<br>没有冲突就没有吸引力</p>
            </div>
            <div class="soul-card emotion">
              <h4>字段5</h4>
              <div class="field-name">emotion_arc</div>
              <p>"情绪如何变化？"<br>情绪是设计出来的</p>
            </div>
          </div>
          <div class="highlight-box" style="margin-top: 16px; text-align: center;">
            <strong>Bone层解决"怎么讲"，Soul层解决"为什么有效"</strong><br>
            <span style="font-size: 14px;">先设计Soul（知道要打动谁），再选择Bone（用什么方式讲）</span>
          </div>
        `,
        presenterContent: '',
        notes: '总结5个字段的核心要点。'
      },

      // ========== 结束页 ==========
      {
        id: 'M03-end',
        section: '结束',
        time: '',
        type: 'title',
        title: 'Module 03 完成',
        subtitle: '灵魂系统（Soul）',
        description: '下一模块：肉体系统（Meat）- 具体怎么呈现',
        notes: '模块结束，过渡到下一模块。'
      }
    ]
