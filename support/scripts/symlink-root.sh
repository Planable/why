#!/usr/bin/env bash

ROOTDIR="$(pwd)/support/root"
REPODIR="$(pwd)"

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
PURPLE="\033[0;35m"
DEFAULT_COLOR="\033[0m"

for file in "$ROOTDIR"/* "$ROOTDIR"/.[^.]*; do
  fileName=${file##*/}
  echo -e "${YELLOW}linking ${GREEN}$file ${YELLOW}to ${PURPLE}${REPODIR}/${fileName}${DEFAULT_COLOR}"
  if [ -d "${REPODIR}/${fileName}" ]; then
    rm -rf "${REPODIR}/${fileName}"
  fi
  ln -sf $file "${REPODIR}/${fileName}"
done
