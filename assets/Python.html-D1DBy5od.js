import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as d,d as p,b as i,w as s,a as n,e as m,f as e}from"./app-CZPCBqRd.js";const u={},b=n("h1",{id:"zerotwo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#zerotwo"},[n("span",null,"ZeroTwo")])],-1),v=m(`<h2 id="更新包" tabindex="-1"><a class="header-anchor" href="#更新包"><span>更新包</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#刷新软件包目录</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token comment"># 列出当前可用的更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list <span class="token parameter variable">--upgradable</span>
<span class="token comment"># 如上一步提示有可以更新的项目，则执行更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span>  upgrade <span class="token parameter variable">-y</span>
<span class="token comment"># 安装 GCC 编译器</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gcc <span class="token parameter variable">-y</span>
<span class="token comment"># 刷新软件包目录</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libbz2-dev liblzma-dev sqlite3 libsqlite3-dev tk-dev uuid-dev libgdbm-compat-dev <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载python" tabindex="-1"><a class="header-anchor" href="#下载python"><span>下载Python</span></a></h2>`,5),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#下载"),e(`
`),n("span",{class:"token function"},"wget"),e(` https://www.521002.xyz/Python/Python-3.9.16.tgz
`),n("span",{class:"token comment"},"#解压"),e(`
`),n("span",{class:"token function"},"tar"),e(),n("span",{class:"token parameter variable"},"-xf"),e(` Python-3.9.16.tgz
`),n("span",{class:"token comment"},"# 进入该目录"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` Python-3.9.16/
`),n("span",{class:"token comment"},"# 检查依赖与配置编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(` ./configure --enable-optimizations --with-lto --enable-shared
`),n("span",{class:"token comment"},"# 编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(),n("span",{class:"token parameter variable"},"-j"),e(),n("span",{class:"token number"},"2"),e(`
`),n("span",{class:"token comment"},"#安装"),e(`
`),n("span",{class:"token function"},"make"),e(` altinstall
`),n("span",{class:"token comment"},"#链接"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"ln"),e(),n("span",{class:"token parameter variable"},"-s"),e(` /usr/local/lib/libpython3.9.so.1.0 /usr/lib/
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#下载"),e(`
`),n("span",{class:"token function"},"wget"),e(` https://www.521002.xyz/Python/Python-3.10.14.tgz
`),n("span",{class:"token comment"},"#解压"),e(`
`),n("span",{class:"token function"},"tar"),e(),n("span",{class:"token parameter variable"},"-xf"),e(` Python-3.10.14.tgz
`),n("span",{class:"token comment"},"# 进入该目录"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` Python-3.10.14/
`),n("span",{class:"token comment"},"# 检查依赖与配置编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(` ./configure --enable-optimizations --with-lto --enable-shared
`),n("span",{class:"token comment"},"# 编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(),n("span",{class:"token parameter variable"},"-j"),e(),n("span",{class:"token number"},"2"),e(`
`),n("span",{class:"token comment"},"#安装"),e(`
`),n("span",{class:"token function"},"make"),e(` altinstall
`),n("span",{class:"token comment"},"#链接"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"ln"),e(),n("span",{class:"token parameter variable"},"-s"),e(` /usr/local/lib/libpython3.10.so.1.0 /usr/lib/
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#下载"),e(`
`),n("span",{class:"token function"},"wget"),e(` https://www.521002.xyz/Python/Python-3.11.9.tgz
`),n("span",{class:"token comment"},"#解压"),e(`
`),n("span",{class:"token function"},"tar"),e(),n("span",{class:"token parameter variable"},"-xf"),e(` Python-3.11.9.tgz
`),n("span",{class:"token comment"},"# 进入该目录"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` Python-3.11.9/
`),n("span",{class:"token comment"},"# 检查依赖与配置编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(` ./configure --enable-optimizations --with-lto --enable-shared
`),n("span",{class:"token comment"},"# 编译"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(),n("span",{class:"token parameter variable"},"-j"),e(),n("span",{class:"token number"},"2"),e(`
`),n("span",{class:"token comment"},"#安装"),e(`
`),n("span",{class:"token function"},"make"),e(` altinstall
`),n("span",{class:"token comment"},"#链接"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"ln"),e(),n("span",{class:"token parameter variable"},"-s"),e(` /usr/local/lib/libpython3.11.so.1.0 /usr/lib/
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"验证安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#验证安装"},[n("span",null,"验证安装")])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("python3.9 "),n("span",{class:"token parameter variable"},"--version"),e(`
pip3.9 `),n("span",{class:"token parameter variable"},"--version"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("python3.10 "),n("span",{class:"token parameter variable"},"--version"),e(`
pip3.10 `),n("span",{class:"token parameter variable"},"--version"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("python3.11 "),n("span",{class:"token parameter variable"},"--version"),e(`
pip3.11 `),n("span",{class:"token parameter variable"},"--version"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(x,z){const l=c("CodeTabs");return r(),d("div",null,[b,p(" more "),v,i(l,{id:"15",data:[{id:"Python3.9"},{id:"Python3.10"},{id:"Python3.11"}]},{title0:s(({value:a,isActive:t})=>[e("Python3.9")]),title1:s(({value:a,isActive:t})=>[e("Python3.10")]),title2:s(({value:a,isActive:t})=>[e("Python3.11")]),tab0:s(({value:a,isActive:t})=>[h]),tab1:s(({value:a,isActive:t})=>[k]),tab2:s(({value:a,isActive:t})=>[g]),_:1}),f,i(l,{id:"29",data:[{id:"Python3.9"},{id:"Python3.10"},{id:"Python3.10"}]},{title0:s(({value:a,isActive:t})=>[e("Python3.9")]),title1:s(({value:a,isActive:t})=>[e("Python3.10")]),title2:s(({value:a,isActive:t})=>[e("Python3.10")]),tab0:s(({value:a,isActive:t})=>[y]),tab1:s(({value:a,isActive:t})=>[P]),tab2:s(({value:a,isActive:t})=>[_]),_:1})])}const C=o(u,[["render",w],["__file","Python.html.vue"]]),N=JSON.parse('{"path":"/docs2/Python.html","title":"Python","lang":"zh-CN","frontmatter":{"title":"Python","icon":"fa-solid fa-heart","editLink":false,"order":2,"article":false,"tag":["教程"],"head":[["meta",{"property":"og:url","content":"https://www.521002.xyz/docs2/Python.html"}],["meta",{"property":"og:site_name","content":"ZeroTwo"}],["meta",{"property":"og:title","content":"Python"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T11:51:59.000Z"}],["meta",{"property":"article:author","content":"ZeroTwo"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:modified_time","content":"2024-07-27T11:51:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Python\\"}"]]},"headers":[{"level":2,"title":"更新包","slug":"更新包","link":"#更新包","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"下载Python","slug":"下载python","link":"#下载python","children":[]},{"level":2,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]}],"git":{"createdTime":1715908296000,"updatedTime":1722081119000,"contributors":[{"name":"Loovely-02","email":"HenTai02Y@gmail.com","commits":1}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"docs2/Python.md","localizedDate":"2024年5月17日","excerpt":"\\n"}');export{C as comp,N as data};
