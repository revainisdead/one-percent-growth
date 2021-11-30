#!/bin/bash

# Generate python requirements files with pip3
# ---
# tl;dr Call this script using `./scripts/gen_py_regs.sh`
#
# ---
# This is to get the directory being used in the script's
# path inside of the call used to call this script.
#
# If the script is called directly, then dirname returns
# a dot (.) for the current directory. This doesn't function
# correctly, so use this when called from project directory.
#
# ie. Call like this:
#
#   `./scripts/gen_py_regs.sh`

EXPECTNAME="gen_py_reqs.sh"
SCRIPTNAME=$0

if [[ $EXPECTNAME = $SCRIPTNAME ]]; then
    echo "Please call script from root project folder."
    exit 0
fi

# Don't know why pwd when calling script is "/home/christian/bin/opg-venv"...
# Fix by pushd as first thing

SCRIPT_PATH=$(dirname $0)
pushd $SCRIPT_PATH > /dev/null

PROJECT_ROOT=".." # only for cd/pushd
SERVER_PROJECT_ROOT=server

# Artifact but informative: since cd doesn't return dir, use pwd
#project_root=$(cd $script_base/../../; pwd)

echo -e "Project Root is: \t$PROJECT_ROOT"
echo -e "Server Root is: \t$SERVER_PROJECT_ROOT"

# Go to project root
pushd $PROJECT_ROOT > /dev/null

# Create requirements.txt
# TODO: Does this fail? succeed? Check exit status / output / output file?
pip3 freeze > $SERVER_PROJECT_ROOT/requirements.txt

# Create requirements-dev.txt
# TODO: Does this fail? succeed? Check exit status / output / output file?
#cp $SERVER_PROJECT_ROOT/requirements.txt $SERVER_PROJECT_ROOT/requirements-dev.txt

# TODO: Does this fail? succeed? Check exit status / output / output file?
pip3 freeze | grep black >> $SERVER_PROJECT_ROOT/requirements-dev.txt
pip3 freeze | grep flake >> $SERVER_PROJECT_ROOT/requirements-dev.txt
# also matches flake8
# also matches pyflakes

# Finish by popd back to original location (scripts folder)
popd > /dev/null    # from PROJECT_ROOT to SCRIPT_PATH
popd > /dev/null    # from SCRIPT_PATH to original call location

