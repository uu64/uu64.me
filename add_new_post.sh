#!/bin/sh

if [ $# -ne 1 ]; then
    echo "usage ${0} post_title"
    exit 1
fi

dirname ${0}

year=$(date "+%Y")
month=$(date "+%m")

path="$(dirname "${0}")/posts/${year}/${month}"
title="${1}"

mkdir -p "${path}"

cat << EOF > "${path}/${title}.mdx"
---
title: "${title}"
date: "$(date "+%Y-%m-%d")"
description: ""
---

## ${title}

Hello, world!

EOF
