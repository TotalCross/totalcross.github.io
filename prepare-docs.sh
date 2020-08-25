#!/bin/bash
BASEDIR=$(dirname $0)
WORKDIR=$(cd $BASEDIR; pwd)
#wipe src/docs/md
rm -rf "${WORKDIR}/src/docs/md"
# update t
git clone https://github.com/TotalCross/docs --depth=1 --branch=master "${WORKDIR}/src/docs/md"
