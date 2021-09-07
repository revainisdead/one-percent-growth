#!/bin/bash

#set -e

relative_dir=$(dirname $0)          # relative base: scripts
pushd $relative_dir > /dev/null     # go to scripts location
absolute_dir=$(pwd -P)              # save full path for script
popd > /dev/null                    # go back to dir that called script

project_dir="$absolute_dir/.."

source $relative_dir/utils.sh

#shell_files=$(pushd $project_dir > /dev/null && git ls-files -- *.sh && popd > /dev/null)
cd $project_dir
#shell_files=$(git ls-files --full-name -- *.sh)
#shell_files=$(find . -type f -print | grep ".sh" | sed "/node_modules/d" | sed "/.mypy_cache/d" | sed "/.sha1/d" | sed "/.git/d")

shell_files=$(git ls-files | grep ".sh" | sed "/.sha1/d")

for path in $shell_files
do
    chmod 755 $path
    cecho "Set executable permissions on $path" green
done
