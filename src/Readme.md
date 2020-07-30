---
layout: readme.njk
title: readme
---

# 介绍
- 介绍个人网站历史。原先是纯html 然后今年用react graphql，现在用11th
- 因为看了2020 google web大会 推荐11th，体验之后感觉比nextjs 更友好，我看中的是编译好的代码可以 很容易用任何发布工具发布，而nextjs 还是用node发布最友好
- 11th 可以使用 numjucks模板 类似jinja2，虽然我也没用过jinja，但是很容易掌握 

# 11th blog steps:
## step 1:
```
mkdir project name
cd project name
npm init
npm install --save-dev @11ty/eleventy
```
## step 2:
```
official web tutorial 
echo '# Page header' > README.md
npx @11ty/eleventy
npx @11th/eleventy --serve
```
## step 3:
```
touch .eleventy.js config file ,then edit it
mkdir ./src
mkdir ./src/index.md
npx @11th/eleventy --serve
```
## step 4:
```
mkdir ./src/_includes
touch ./src/_includes/base.njk
edit index.md 传参数
```
## step 5
```
mkdir ./src/assets
edit .eleventy.js add passthroughCopy
touch ./src/assets/base.css
edit ./src/index.md add link css reference
```