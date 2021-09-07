#!/bin/bash

# Turn on exceptions
set -e

script_base=$(dirname $0)
project_root="$script_base/.."



#detach=
#
#POSITIONAL=()
#while [[ $# -gt 0 ]]; do
#    key="$1"
#    case $key in
#        -h|--help|?)
#            echo "Rebuild, create, run and attach all or specfic Docker services."
#            echo
#            cecho "Usage: $(basename $0) <options> [SERVICE...]" default bold
#            echo
#            echo "Options:"
#            echo "  -d                  Detached mode: Run containers in background."
#            echo "  -h  --help          This help message"
#            echo
#            echo "Run 'docker-compose up --help' to see more options"
#            exit 0
#            ;;
#        -d|--detach)
#            detach=1
#            ;;
#        *)
#            POSITIONAL+=("$key")
#            ;;
#    esac
#    shift
#done
#set -- "${POSITIONAL[@]}"


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
