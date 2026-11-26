(() => {
  'use strict';
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
  const examples = [
    { title: '文字整理小幫手', description: '貼上零散筆記，快速整理成清楚的重點與待辦。', tags: ['AI', '文字處理', '效率工具'], demo: 'text', demoLinks: ['service', 'source'] },
    { title: '日常資料看板', description: '將常用資料放在同一個畫面，省下反覆查找的時間。', tags: ['資料視覺化', '工作應用'], demo: 'dashboard', demoLinks: ['service'] },
    { title: '流程圖小畫室', description: '用簡單操作畫出工作流程，方便討論與分享。', tags: ['圖表', '文件', '開源'], demo: 'flow', demoLinks: ['source'] }
  ];
  const projects = isPreview ? examples : (Array.isArray(window.ZAOYONG_PROJECTS) ? window.ZAOYONG_PROJECTS.filter(p => p && typeof p.title === 'string') : []);
  const text = value => typeof value === 'string' ? value : '';
  const tagsFor = project => Array.isArray(project.tags) ? project.tags.filter(tag => typeof tag === 'string' && tag.trim()) : [];
  const make = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  };
  function webUrl(value) {
    if (!text(value).trim()) return '';
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : '';
    } catch { return ''; }
  }
  function imageUrl(value) {
    if (!text(value).trim()) return '';
    try {
      const url = new URL(value, window.location.href);
      // 相對圖片在 GitHub Pages 子目錄與本機預覽均可使用。
      return ['https:', 'http:'].includes(url.protocol) || (url.protocol === 'file:' && window.location.protocol === 'file:') ? url.href : '';
    } catch { return ''; }
  }
  function demoCover(kind) {
    const cover = make('div', 'cover' + (kind === 'dashboard' ? ' blue' : kind === 'flow' ? ' sand' : ''));
    cover.setAttribute('aria-hidden', 'true');
    cover.append(make('span', 'sample-badge', '範例・非實際作品'));
    const mini = make('div', 'mini');
    // 此處只有內建的固定版式；外部作品資料一律以 textContent 寫入。
    const templates = {
      text: '<div class="dots"><b></b><b></b><b></b></div><h4>把散亂的文字，整理成重點。</h4><div class="line"></div><div class="line short"></div><span class="mini-pill">開始整理 ↗</span>',
      dashboard: '<div class="dots"><b></b><b></b><b></b></div><h4>讓資料變得一目了然。</h4><div class="blocks"><div>本月紀錄<br><strong>128</strong></div><div>完成進度<br><strong>86%</strong></div></div><div class="line"></div>',
      flow: '<div class="dots"><b></b><b></b><b></b></div><h4>想清楚，也畫清楚。</h4><div class="flow"><span>輸入想法</span>→<span>整理流程</span>→<span>匯出圖片</span></div><div class="line short"></div>'
    };
    mini.innerHTML = templates[kind];
    cover.append(mini);
    return cover;
  }
  function projectCover(project) {
    const cover = make('div', 'cover');
    const fallback = make('div', 'cover-placeholder');
    fallback.setAttribute('aria-hidden', 'true');
    fallback.append(make('strong', '', '造'), make('span', '', 'SMALL TOOLS, REAL USE.'));
    cover.append(fallback);
    const source = imageUrl(project.image);
    if (source) {
      const image = make('img');
      image.alt = text(project.imageAlt) || project.title + '操作畫面';
      image.loading = 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => image.remove(), { once: true });
      image.src = source;
      cover.append(image);
    }
    return cover;
  }
  function addLink(actions, label, value, secondary, title) {
    const url = webUrl(value);
    if (!url) return;
    const link = make('a', secondary ? 'secondary' : '', label + ' ↗');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', title + '：' + label + '（另開視窗）');
    actions.append(link);
  }
  function render(query = '') {
    const normalized = query.trim().toLocaleLowerCase();
    const filtered = projects.filter(project => [project.title, text(project.description), ...tagsFor(project)].join(' ').toLocaleLowerCase().includes(normalized));
    grid.replaceChildren();
    for (const project of filtered) {
      const card = make('article', 'card');
      card.append(isPreview ? demoCover(project.demo) : projectCover(project));
      const info = make('div', 'info');
      info.append(make('h3', '', project.title), make('p', 'description', text(project.description)));
      const tags = make('div', 'tags');
      for (const value of tagsFor(project)) {
        const tag = make('button', 'tag', value);
        tag.type = 'button';
        tag.setAttribute('aria-label', '搜尋標籤：' + value);
        tag.addEventListener('click', () => { search.value = value; render(value); search.focus(); });
        tags.append(tag);
      }
      info.append(tags);
      const actions = make('div', 'actions');
      if (isPreview) {
        for (const type of project.demoLinks) {
          const label = make('span', 'demo-action' + (type === 'source' ? ' secondary' : ''), (type === 'source' ? 'GitHub' : '開啟工具') + ' ↗');
          label.title = '僅示範連結配置，非實際服務';
          actions.append(label);
        }
      } else {
        addLink(actions, '開啟工具', project.serviceUrl, false, project.title);
        addLink(actions, 'GitHub', project.sourceUrl, true, project.title);
      }
      if (actions.childElementCount) info.append(actions);
      card.append(info);
      grid.append(card);
    }
    document.getElementById('empty').hidden = projects.length > 0;
    document.getElementById('no-results').hidden = projects.length === 0 || filtered.length > 0;
    document.getElementById('results-status').textContent = projects.length ? '顯示 ' + filtered.length + ' 件作品' : '';
    document.getElementById('count').textContent = projects.length ? String(projects.length).padStart(2, '0') : '';
  }
  document.getElementById('search-wrap').hidden = projects.length === 0;
  document.getElementById('demo-note').hidden = !isPreview;
  document.getElementById('year').textContent = new Date().getFullYear();
  search.addEventListener('input', () => render(search.value));
  render();
})();
