import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "自动搭建指南",
      icon: "laptop-code",
      prefix: "docs1/",
      link: "docs1/",
      children: "structure",
    },
    {
      text: "手动搭建指南",
      icon: "laptop-code",
      prefix: "docs2/",
      link: "docs2/",
      children: "structure",
    },
  ],
});
