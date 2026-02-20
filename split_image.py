#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from PIL import Image
import os

# hana.pngを読み込む
image_path = os.path.join(os.path.dirname(__file__), 'images', 'hana.png')
img = Image.open(image_path)

# 画像サイズを取得
width, height = img.size
print(f"元の画像サイズ: {width}x{height}")

# 3等分する幅を計算
third_width = width // 3

# A: 左側 (0 ~ width/3)
img_a = img.crop((0, 0, third_width, height))
img_a.save(os.path.join(os.path.dirname(__file__), 'images', 'hana_a.png'))
print("hana_a.png を保存しました")

# B: 中央 (width/3 ~ 2*width/3)
img_b = img.crop((third_width, 0, 2*third_width, height))
img_b.save(os.path.join(os.path.dirname(__file__), 'images', 'hana_b.png'))
print("hana_b.png を保存しました")

# C: 右側 (2*width/3 ~ width)
img_c = img.crop((2*third_width, 0, width, height))
img_c.save(os.path.join(os.path.dirname(__file__), 'images', 'hana_c.png'))
print("hana_c.png を保存しました")

print("3分割完了！")
