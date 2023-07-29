from PIL import Image
import os

def compress_image(image_path, quality=85):
    try:
        with Image.open(image_path) as img:
            img.save(image_path, quality=quality)
            print(f"Compressed {image_path}")
    except Exception as e:
        print(f"Could not compress {image_path}. Error: {str(e)}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file_name in files:
            if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file_name)
                compress_image(file_path)

directory = "assets/images"
process_directory(directory)
