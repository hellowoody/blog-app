---
layout: list.njk
title: woody个人主页
pathprefix: /
permalink: "{% if pagination.pageNumber == 0 %}/{% else %}pages/{{pagination.pageNumber}}/index.html{% endif %}"
tags: "bloglist"
pagination: 
  data: collections.blog
  size: 12
  alias: blogs
---

## 文章列表
{% for blog in blogs reversed %}
  - [{{ blog.data.title }} {{ blog.data.postdate }}]({% if pagination.pageNumber == 0 %}.{% else %}../..{% endif %}{{blog.url}}index.html)
{% endfor %}


