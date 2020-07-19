#!/bin/sh

if [ $# -ne 1 ]; then
    echo "usage ${0} post_title"
    exit 1
fi

dirname ${0}

year=$(date "+%Y")
month=$(date "+%m")

post_path="$(dirname "${0}")/posts/${year}/${month}"
image_path="/${year}/${month}"
title="${1}"

mkdir -p "${post_path}"
mkdir -p "${image_path}"

cat << EOF > "${post_path}/${title}.mdx"
---
title: "${title}"
date: "$(date "+%Y-%m-%d")"
description: ""
cover: "${image_path}/"
---

## ${title}

Hello, world!

EOF
