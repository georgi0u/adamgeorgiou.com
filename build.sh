#!/bin/bash

# Typescript to Javascript
echo "Typescript compiler."
npx tsc -p ./ts/
echo "Done."

# Javascript Compiled and Minified
echo "Closure compiler."
npx google-closure-compiler --externs="node_modules/google-closure-compiler/contrib/externs/jquery-3.2.js" --compilation_level=ADVANCED --js="./js/**.js" --js_output_file="./compiled/compiled.js"
echo "Done."

# Less to CSS
echo "Less compiler."
npx lessc --clean-css="--s1 --advanced --compatibility=ie8" ./style/style.less > ./compiled/compiled.css
echo "Done."

# HTML
echo "HTML minifier."
for file in `ls html`;
do cat "html/$file" | npx html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true > $file;
done;
echo "Done."

echo -e "\nAll Done.\n"


