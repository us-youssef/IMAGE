// script.js
const images = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});


document.getElementById("next-btn").addEventListener("click", nextImage);
document.getElementById("prev-btn").addEventListener("click", prevImage);

showImage(currentIndex);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function autoPlay() {
    autoPlayInterval = setInterval(() => {
        nextImage();
    }, 2000); // تغيير الصور كل 3 ثواني (يمكنك تعديل هذا الوقت حسب الحاجة)
}

document.getElementById("prev-btn").addEventListener("click", prevImage);
document.getElementById("next-btn").addEventListener("click", nextImage);

showImage(currentIndex);
autoPlay(); // بدء التشغيل التلقائي عند تحميل الصفحة

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});

// توقف التشغيل التلقائي عند تحريك الماوس فوق الصورة
images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        clearInterval(autoPlayInterval);
    });

    image.addEventListener("mouseout", () => {
        autoPlay();
    });
});

