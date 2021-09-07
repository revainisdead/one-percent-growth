#!/bin/bash

$script_base=$(dirname $0)
$project_root=$(cd $script_base/../../; pwd)

cd $project_root

# Create requirements.txt
pip freeze > server/requirements.txt

# Create requirements-dev.txt
cp requirements.txt requirements-dev.txt

pip freeze | grep black >> requirements-dev.txt
pip freeze | grep flake >> requirements-dev.txt
# also matches flake8
# also matches pyflakes
