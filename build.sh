#!/usr/bin/env bash

ME=`basename "$0"`

abort()
{
  echo "An error occurred. Exiting..." >&2
  exit 1
}

usage()
{
  echo "Usage: $ME [build number]" >&2
  exit 1
}

trap 'abort' 0

set -e

RepositoryName='tbenade/hello-world-api'

BUILD_NUMBER=$1
if [ -z "$BUILD_NUMBER" ]; then usage; fi

echo "Building $RepositoryName:$BUILD_NUMBER"
docker build -t "$RepositoryName:$BUILD_NUMBER" \
              -t "$RepositoryName:latest" .
docker push $RepositoryName

trap : 0
