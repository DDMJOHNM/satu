#!/usr/bin/env bash
set -euo pipefail

version="${HUGO_VERSION:-0.91.2}"
tmpdir="$(mktemp -d)"

curl -fsSL -o "${tmpdir}/hugo.tar.gz" \
  "https://github.com/gohugoio/hugo/releases/download/v${version}/hugo_extended_${version}_Linux-64bit.tar.gz"
tar -xzf "${tmpdir}/hugo.tar.gz" -C "${tmpdir}"

"${tmpdir}/hugo" version
"${tmpdir}/hugo" --gc --minify
