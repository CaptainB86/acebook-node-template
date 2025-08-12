#!/usr/bin/env bash
set -euxo pipefail
cd /opt/acebook
npm ci --omit=dev || npm install --omit=dev
