---
title: Yunzai
icon: fa-solid fa-heart
editLink: false
order: 2
article: false
tag:
  - 教程
---

# ZeroTwo
<!-- more -->
## 环境安装

::: code-tabs

@tab 软件包更新

```bash
sudo apt update && sudo sudo apt upgrade
```

@tab 软件包下载

```bash
sudo apt-get install screen unzip curl git
```

@tab 中文字体

```bash
sudo apt install fonts-wqy-zenhei
```

@tab FFmpeg

```bash
# Debian
sudo apt install FFmpeg
# Ubuntu
sudo apt-get install ffmpeg
```

@tab chromium

```bash
# Debian
sudo apt install chromium
# Ubuntu
sudo apt install chromium-browser
```

@tab redis

```bash
sudo apt install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
systemctl enable redis-server
```

@tab nodejs

```bash
sudo curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash - 
sudo apt-get install -y nodejs
```

@tab 验证安装结果

```bash
ffmpeg -version
node --version
chromium --version
systemctl status redis-server
```

:::

## Sign
- 请在 Yunzai 根目录执行
::: code-tabs
@tab bash
```bash
curl -sSL QSign.icu/X | bash
```
:::

## Yunzai手动安装
- Yunzai 本体安装
::: code-tabs

@tab Miao-Yunzai

```bash
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
```

@tab TRSS-Yunzai

```bash
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai
```

:::

- 进入根目录
::: code-tabs

@tab Miao-Yunzai

```bash
cd Miao-Yunzai
```

@tab TRSS-Yunzai

```bash
cd Yunzai
```

:::

- 安装插件 (必装)
::: code-tabs

@tab miao-plugin 

```bash
git clone --depth 1 https://gitee.com/yoimiya-kokomi/miao-plugin plugins/miao-plugin
```

@tab genshin 

```bash
# Miao-Yunzai 请跳过
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai-genshin plugins/genshin
```
@tab xiaoyao-cvs-plugin
```bash
git clone --depth=1 https://gitee.com/Ctrlcvs/xiaoyao-cvs-plugin.git ./plugins/xiaoyao-cvs-plugin/
```

:::

- 安装插件 (可选)

::: code-tabs

@tab Guoba-Plugin

```bash
git clone --depth=1 https://gitee.com/guoba-yunzai/guoba-plugin.git ./plugins/Guoba-Plugin/
```

@tab Atlas

```bash
git clone --depth=1 https://gitee.com/Nwflower/atlas ./plugins/Atlas/
```

@tab ws-plugin

```bash
git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
```

@tab StarRail-plugin

```bash
git clone --depth=1 https://gitee.com/hewang1an/StarRail-plugin.git ./plugins/StarRail-plugin
```

@tab FanSky_Qs

```bash
git clone --depth=1 https://gitee.com/FanSky_Qs/FanSky_Qs.git ./plugins/FanSky_Qs/
```

@tab xiaofei-plugin

```bash
git clone --depth=1 https://gitee.com/xfdown/xiaofei-plugin.git ./plugins/xiaofei-plugin/
```

@tab earth-k-plugin

```bash
git clone --depth=1 https://gitee.com/SmallK111407/earth-k-plugin.git ./plugins/earth-k-plugin/
```

@tab liangshi-calc/

```bash
git clone --depth=1 https://gitee.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
```
@tab yenai-plugin

```bash
git clone -b master --depth=1 https://gitee.com/yeyang52/yenai-plugin.git ./plugins/yenai-plugin
```

:::

- 安装pnpm
::: code-tabs

@tab Miao-Yunzai

```bash
cd Miao-Yunzai
npm i -g pnpm
```

@tab TRSS-Yunzai

```bash
cd Yunzai
npm i -g pnpm
```

:::

- 安装依赖
::: code-tabs

@tab Yunzai

```bash
pnpm install
```

@tab 椰奶状态

```bash
pnpm add systeminformation -w
```

:::

- 安装pm2守护进程

```bash
npm install pm2 -g
```

- Yunzai 启动！
```bash
node app
```

## 运行
::: code-tabs

@tab 保护

```bash
pnpm start
pnpm pm2 save
pnpm pm2 startup
```

@tab 日志

```bash
pnpm log
```

@tab 启动

```bash
pnpm start
```

@tab 重启

```bash
pnpm restart
```

@tab 停止

```bash
pnpm stop
```
:::