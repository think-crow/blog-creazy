<template>
  <!-- 轮播图 -->
  <div>
    <div class="article-content">
      <div class="header-section">
        <h2 class="main-title">文章主标题</h2>
        <p class="meta-info">作者：某某 | 发布日期：2024年3月1日</p>
      </div>
      <div class="content-body">
        <p class="description">描述文字...</p>
        <h1>
          其实每个人都一样，唯一是我们不同的是：思想和思维
          <br />
          假设思想可以复制、传承，我们是否保留不同派别的顶级维思：以供人们学习！
        </h1>
        人生寥寥不足百年，八十七岁已过三分之一！做我们没做过的事，去没去过的地方！
        <h3 class="sub-title">三级标题</h3>

        <p>
          如果你喜欢第五型，请记住他们需要几天的时间才能从逻辑上理解他们自己和你的感受，他们不想要也可能无法执行与你相同水平的社交。然而，也要记住他们的爱是深沉的，你会发现他们在细心的、深思熟虑的行为中想着你，这占用了他们很多的时间和精力。另一半通常选择第五型是因为第五型对他们的关注、他们悠闲的态度、他们的智慧和稳定。因此，如果不去要求第五型没有天赋的东西，比如成为聚会的核心人物、有自发性等，就会很有帮助。为第五型建立信心也非常重要的，因为他们需要你的鼓励，才能度过那些经常令人精疲力竭的，需要分析处理的日子。同时，也建议鼓励他们照顾好自己，尤其是多参加体育活动。
        </p>
        <p>
          因此，他们的大部分时间都花在“收集”和发展他们认为会让他们感到自信和准备好的想法和技能上。他们想保留所学的一切，并“将其记在脑海中”。问题是，虽然他们全神贯注于这个过程，但他们并没有与他人互动，甚至没有增加许多其他实践和社交技能。他们将越来越多的时间用于收集和处理他们的“收藏”，而不是与他们的实际需求相关的任何事情。
        </p>
        <p>
          因此，第五型人面临的挑战是要明白：自己需要多一点去追求任何激发他们想象力的问题或活动，维持人际关系，妥善照顾自己，做那些健康生活的标志性事情。避免完全沉浸在自我世界中。
        </p>
      </div>
      <div class="footer-section">
        <div class="highlighted-article">
          <h4>重点文章</h4>
          <ul>
            <li>文章1</li>
            <li>文章2</li>
            <li>文章3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 文章主体 -->
</template>

<script setup></script>

<style scoped>
/* 文章主体 */
.article-content {
  padding: 20px;
  background-color: var(--article-background-color);

  border-radius: 8px;
  margin: 0 auto;
  max-width: 1024px;
}

.header-section {
  margin-bottom: 20px;
}

.main-title {
  font-size: 36px;
  color: var(--main-title-color);
  margin-bottom: 10px;
}

.meta-info {
  font-size: 14px;
  color: var(--meta-info-color);
}

.content-body {
  font-size: 18px;
  color: var(--article-body-color);
  letter-spacing: 0.05em;
  line-height: 1.8em;
}

.description {
  font-style: italic;
}

.sub-title {
  font-size: 24px;
  color: var(--main-title-color);
  margin-top: 30px;
}

.footer-section {
  margin-top: 40px;
}

.highlighted-article h4 {
  font-size: 20px;
  color: var(--main-title-color);
  margin-bottom: 10px;
}

.highlighted-article ul {
  list-style: disc;
  padding-left: 20px;
}
</style>
