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
shell_files=$(git ls-files -- *.sh)

for path in $shell_files
do
    chmod 755 $path
    cecho "Set executable permissions on $path" green
done
