const watchData = [
  {
    images: [
      "assets/images/F-91W-1_04.avif",
      "assets/images/F-91W-1_02.avif",
      "assets/images/F-91W-1_03.avif",
      "assets/images/F-91W-1_05.avif",
      "assets/images/F-91W-1_06.avif"
    ]
  },
  {
    images: [
      "assets/images/F-91WB-7A_1.avif",
      "assets/images/F-91WB-7A_2.avif",
      "assets/images/F-91WB-7A_3.avif"
    ]
  },
  {
    images: [
      "assets/images/A-158WA-1Q_01.jpg",
      "assets/images/A-158WA-1Q_02.avif",
      "assets/images/A-158WA-1Q_03.jpg",
      "assets/images/A-158WA-1Q_04.avif"
    ]
  },
{
    images: [
      "assets/images/MRW-200H-1BV_01.avif"]    
  }
,
{
    images: [
      "assets/images/GM-2100N-2A_01.avif",
	"assets/images/GM-2100N-2A_02.avif",
	"assets/images/GM-2100N-2A_03.avif"
]    
  }
,
{
    images: [
      "assets/images/AE-1200WHD-1AV_01.avif",
	"assets/images/AE-1200WHD-1AV_02.avif",
	"assets/images/AE-1200WHD-1AV_03.avif"
]    
  }
,
{
    images: [
      "assets/images/DW-5600UE-1_1.avif",
	"assets/images/DW-5600UE-1_2.avif",
	"assets/images/DW-5600UE-1_3.avif"
]    
  }

,
{
    images: [
      "assets/images/A168WA-1_1.avif",
	"assets/images/A168WA-1_2.avif",
	"assets/images/A168WA-1_3.avif"
]    
  }


];

const wishlist = JSON.parse(sessionStorage.getItem('wishlist') || '[]');

document.querySelectorAll('.watch-card').forEach((card, index) => {
  const imageElement = card.querySelector('.carousel-image');
  const prevBtn = card.querySelector('.prev-btn');
  const nextBtn = card.querySelector('.next-btn');
  const wishlistBtn = card.querySelector('.wishlist-btn');
  const watchTitle = card.querySelector('.watch-title').innerText;
  const images = watchData[index]?.images || [];
  let currentIndex = 0;

  function updateImage() {
    imageElement.src = images[currentIndex];
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  updateImage();

  // Wishlist logic
  if (wishlist.includes(watchTitle)) {
    wishlistBtn.classList.add('liked');
    wishlistBtn.innerHTML = "&#10084;";
  }

  wishlistBtn.addEventListener('click', () => {
    const idx = wishlist.indexOf(watchTitle);
    if (idx > -1) {
      wishlist.splice(idx, 1);
    } else {
      wishlist.push(watchTitle);
    }
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    wishlistBtn.classList.toggle('liked');
    wishlistBtn.innerHTML = wishlistBtn.classList.contains('liked') ? "&#10084;" : "&#9825;";
  });
});
