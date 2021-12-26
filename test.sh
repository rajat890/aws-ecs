#!/bin/bash
tag=`git log -n 1 | head -n 1 | sed -e 's/^commit //' | head -c 8`
docker build -t rajat16/eks-demo:node-code-$tag .
