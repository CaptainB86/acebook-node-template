#!/usr/bin/env bash
set -euxo pipefail
mkdir -p /opt/acebook
chown -R ec2-user:ec2-user /opt/acebook
# Ensure Node is available on Amazon Linux 2023
dnf -y module enable nodejs:20 || true
dnf -y install nodejs