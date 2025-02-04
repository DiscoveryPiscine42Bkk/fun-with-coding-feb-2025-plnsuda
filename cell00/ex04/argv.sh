#!/bin/bash

# เช็คว่ามี arguments หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # แสดงผล arguments สูงสุด 3 ค่า
    for arg in "$1" "$2" "$3"; do
        # ถ้า argument เป็นค่าว่างให้ข้ามไป
        if [ -n "$arg" ]; then
            echo "$arg"
        fi
    done
fi

chmod +x argv.sh

