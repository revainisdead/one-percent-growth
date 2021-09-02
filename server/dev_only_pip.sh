#!/bin/bash

cp requirements.txt requirements-dev.txt

pip freeze | grep black >> requirements-dev.txt
pip freeze | grep flake8 >> requirements-dev.txt
