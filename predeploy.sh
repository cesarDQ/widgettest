# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build/static/js -name "main.*.js" -exec mv '{}' build/static/js/main.js \;

# Update index.html to reflect the new stable filename
sed -i 's|/static/js/main.*.js|/static/js/main.js|' build/index.html
