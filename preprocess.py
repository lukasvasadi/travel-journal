from pathlib import Path
from PIL import Image

DATA_SRC_DIR = Path(__file__).parent / "static/images/raw"
DATA_DST_DIR = Path(__file__).parent / "static/images/processed"

def main() -> None:
    directories = [d for d in DATA_SRC_DIR.iterdir() if d.is_dir()]

    for directory in directories:
        dst = DATA_DST_DIR / directory.name
        dst.mkdir(parents=True, exist_ok=True)

        files = [file for file in directory.glob("*.jpg") if file.is_file()]

        for file in files:
            if (dst / file.name).exists():
                continue

            img = Image.open(file)
            w, h = img.size
            ar = w / h

            if ar > 1.0:
                h1 = 720
                w1 = int(w * h1 / h)
                size = (w1, h1)
            else:
                w1 = 720
                h1 = int(w1 * h / w)
                size = (w1, h1)

            img = img.resize(size)
            img.save(dst / file.name, format="JPEG", optimize=True, quality=80)  # Adjust quality as needed

            print(f"{file.name} -> {dst / file.name}")

if __name__ == "__main__":
    main()
