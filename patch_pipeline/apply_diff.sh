#!/bin/bash

# 1) Get hash of pdf.py file in the state I expect it
# 2) Match hash to current version of pdf.py
# Must match for us to apply diff.

# Creating patch file, order matters, file with new stuff goes second
# `diff pdf_backup.py pdf.py > Py2PDF_pdf.py.patch`

# Created hash of pdf.py at expected state
# `sha1sum pdf.py`

# Set stop on exceptions
set -e

# if called like ./scripts/apply_diff.sh, will change directory to just
# name of directory aka. scripts
pushd $(dirname $0) > /dev/null
SCRIPT_PATH=$(pwd -P)
popd > /dev/null

#pypdf_path=/home/christian/bin/opg-venv/lib/python3.8/site-packages/PyPDF2
#path=/home/christian/bin/opg-venv/lib/python3.8/site-packages/PyPDF2/pdf.py
#diff=/home/christian/bin/opg-venv/one-percent-growth/Py2PDF_pdf.py.patch

#PROJECT_ROOT=../

# This is the hash at the start, right after installed via
# a virtual environment, after applying to patch, pdf.py will be different
hash_expected="../hashes/PyPDF2_pdf.py.sha1"
pypdf_path="../../lib/python3.8/site-packages/PyPDF2/"
filepath="../../lib/python3.8/site-packages/PyPDF2/pdf.py"
diff="../patches/PyPDF2_pdf.py.patch"

sha1sum -c $hash_expected
if [ $? -ne 0 ]; then
    # sha1 passed
    patch $filepath $diff
fi

# Could also check hash after it changes, but would need hash of changed pdf.py
