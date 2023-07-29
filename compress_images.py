from PIL import Image
import os
import tempfile

def compress_image(image_path, quality=60):
    try:
        with Image.open(image_path) as img:
            # Create a temporary file to hold the compressed image
            with tempfile.NamedTemporaryFile(suffix='.jpg', delete=False) as temp_file:
                temp_path = temp_file.name
                img.save(temp_path, quality=quality)

            original_size = os.path.getsize(image_path)
            compressed_size = os.path.getsize(temp_path)

            if compressed_size < original_size:
                os.replace(temp_path, image_path)
                print(f"Compressed {image_path}")
            else:
                os.remove(temp_path)
                print(f"Skipped {image_path}, compressed image is larger.")
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
