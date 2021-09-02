#!/bin/bash

# For every file of specified extension, add vim filetype tag to end of file.
# (If it isn't already there.)

set -e

pushd $(dirname $0) > /dev/null
SCRIPT_PATH=$(pwd -P)
popd > /dev/null

vim_tag='# vim: set filetype=python :' # string literal
ext='.pyi' # string literal
for path in $(git ls-files -- "*.$ext")
do
    last_line=$(tail -1 $path)

    if [ "$last_line" != "$vim_tag" ]; then
        echo Added tag. $path
        echo -e "\n${vim_tag}" >> $path
    else
        echo "Tag already exists: ${path}"
    fi
done
