#!/usr/bin/env bash

# brew install imagemagick

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input_file output_file"
    exit 1
fi

convert "$1" -background white -alpha remove -alpha off "${1%.*}".p%02d.png
convert +append "${1%.*}".p*.png "$2"
convert "$2" -resize x512 "$2"
rm "${1%.*}".p*.png
