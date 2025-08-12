#!/usr/bin/env bash
set -euxo pipefail
cat >/etc/systemd/system/acebook.service <<'UNIT'
[Unit]
Description=Acebook App
After=network.target
[Service]
WorkingDirectory=/opt/acebook
ExecStart=/usr/bin/node app.js
Restart=always
Environment=PORT=80 NODE_ENV=production
[Install]
WantedBy=multi-user.target
UNIT
systemctl daemon-reload
systemctl enable acebook
systemctl restart acebook
