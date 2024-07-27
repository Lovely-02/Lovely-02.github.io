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
## 安装

::: code-tabs

@tab Yunzai环境

```bash
bash <(curl -L www.521002.xyz/Yunzai/Yunzai.sh)
```

@tab Miao-Yunzai

```bash
bash <(curl -L www.521002.xyz/Yunzai/Miao-Yunzai.sh)
```

@tab TRSS-Yunzai

```bash
bash <(curl -L www.521002.xyz/Yunzai/TRSS-Yunzai.sh)
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