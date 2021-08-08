#!/bin/bash

npx tsc -p ./ts/ && \
    npx google-closure-compiler --externs="node_modules/google-closure-compiler/contrib/externs/jquery-3.2.js" --compilation_level=ADVANCED --js="./js/**.js" --js_output_file="./compiled/compiled.js" && \
    npx lessc --clean-css="--s1 --advanced --compatibility=ie8" ./style/style.less > ./compiled/compiled.css

