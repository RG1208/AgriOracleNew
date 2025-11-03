#!/usr/bin/env bash
set -o errexit

# Explicitly install Python 3.9
pyenv install 3.9.18 -s
pyenv global 3.9.18

pip install --upgrade pip
pip install -r requirements.txt