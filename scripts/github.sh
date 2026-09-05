#!/usr/bin/env bash
set -euo pipefail
exec env -u GH_TOKEN -u GITHUB_TOKEN GH_CONFIG_DIR=/Users/stefanolaptop/.config/gh-teamricercatvg gh "$@"
