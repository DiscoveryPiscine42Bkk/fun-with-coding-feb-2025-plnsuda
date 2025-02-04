#!/bin/bash

# เช็คว่ามี arguments หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # วนลูปสร้างโฟลเดอร์โดยเติม "ex" ด้านหน้า
    for arg in "$@"; do
        mkdir -p "ex$arg"
    done
fi
