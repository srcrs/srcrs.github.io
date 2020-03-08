str="update title"
uri="git push https://d5a7f6a2bab36e6ba73bc8be62b867d86e274604@github.com/srcrs/srcrs.github.io.git"
set -e
git add .
git commit -m "$str"
git push  $uri