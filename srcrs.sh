str="update title"
uri="https://github.com/srcrs/srcrs.github.io vue"
set -e
git add .
git commit -m "$str"
git push -f $uri