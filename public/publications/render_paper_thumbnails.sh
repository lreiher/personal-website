#!/usr/bin/env bash

# brew install imagemagick gs

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input_file output_file"
    exit 1
fi

magick convert "$1" -background white -alpha remove -alpha off "${1%.*}".p%02d.png
magick convert +append "${1%.*}".p*.png "$2"
magick convert "$2" -resize x512 "$2"
rm "${1%.*}".p*.png
