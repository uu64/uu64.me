#!/bin/sh

if [ $# -ne 1 ]; then
    echo "usage ${0} post_title"
    exit 1
fi

year=$(date "+%Y")
month=$(date "+%m")

post_path="$(dirname "${0}")/posts/${year}/${month}"
image_path="$(dirname "${0}")/public/${year}/${month}"
title="${1}"

mkdir -p "${post_path}"
mkdir -p "${image_path}"

cat << EOF > "${post_path}/${title}.mdx"
---
title: "${title}"
date: "$(date "+%Y-%m-%d")"
description: ""
cover: "/icon.jpg"
---

## ${title}

Hello, world!

EOF
