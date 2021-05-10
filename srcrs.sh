str="update title"
set -e
git pull
git add .
git commit -m "$str"
git push