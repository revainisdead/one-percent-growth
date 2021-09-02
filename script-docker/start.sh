#!/bin/bash

# Turn on exceptions
set -e

script_base=$(dirname $0)
project_root="$script_base/.."

cd $project_root
echo "Moved to project root: $project_root"
source $script_base/utils.sh

# Collect all the arguments passed to this function
args=$@

teardown() {
    $script_base/stop $args
}

# On Ctrl-C (interrupt) stop docker containers
trap "teardown" INT

# Execute command on the right only if the command on the left returns an error
#docker-compose logs -f $args || teardown
