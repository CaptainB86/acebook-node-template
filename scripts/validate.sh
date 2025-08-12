#!/usr/bin/env bash
set -euxo pipefail

# Wait up to 30 seconds for the app to be ready
for i in {1..30}; do
  if curl -fsS http://localhost:80/; then
    echo "Service is up!"
    exit 0
  fi
  echo "Service not ready yet... retrying ($i)"
  sleep 1
done

echo "ERROR: Service failed to start within 30 seconds."
exit 1
