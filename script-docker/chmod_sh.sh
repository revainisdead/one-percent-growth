#!/bin/bash

set -e

script_base=$(dirname $0)
pushd $script_base > /dev/null
SCRIPT_PATH=$(pwd -P)
popd > /dev/null

source $script_base/utils.sh

shell_files=$(git ls-files -- .sh)

for path in $shell_files
do
    chmod 755 $path
    cecho "Set executable permissions on $path" green
done
