#!/usr/bin/env bash
set -euxo pipefail
curl -fsS http://localhost:${PORT:-80}/ >/dev/null
