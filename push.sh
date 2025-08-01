docker cp doduocc-server:/usr/share/nginx/html/ .

cp -r html/* .

rm -rf html

git add .

git commit -m "update"

git push
