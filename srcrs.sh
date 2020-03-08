str="update title"
uri="git push https://8d2b4c67b9f34c2d69ee0281efe296b74f6ec861@github.com/srcrs/srcrs.github.io.git"
set -e
git add .
git commit -m "$str"
git push  $uri