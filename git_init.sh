#!/usr/bin/env sh

# 删除历史发布数据
rm -rf docs

# 确保脚本抛出遇到的错误
set -e

# npm install

# 生成静态文件
npm run build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'init'
# git remote add origin https://github.com/karqical/karqical.github.io.git
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/karqical/karqical.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd - 