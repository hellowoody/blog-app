---
layout: base.njk
title: woody个人主页
pathprefix: ./
permalink: /
tags: "bloglist"
---

## 文章列表
{% for blog in collections.blog reversed %}
  - [{{ blog.data.title }} {{ blog.data.postdate }}](.{{blog.url}})
{% endfor %}


