// Sidebar Toggle
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

container.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Like Button Functionality
const likeBtn = document.querySelector('.like-btn');
const likeCount = document.querySelector('.like-count');
let liked = false;

likeBtn.addEventListener('click', () => {
    if (!liked) {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        liked = true;
        likeBtn.disabled = true;
    }
});

// Comment Functionality (Temporary Front-End)
const commentInput = document.querySelector('#comment-input');
const commentBtn = document.querySelector('#comment-btn');
const commentList = document.querySelector('.comment-list');

commentBtn.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText) {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
    }
});

// Image Upload Preview (Admin Only)
const imageUpload = document.querySelector('#image-upload');
const blogImage = document.querySelector('.blog-image');
const isAdmin = true; // Temporary admin check, baad me login system se replace karna

if (isAdmin) {
    imageUpload.style.display = 'block';
}

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            blogImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Premium Unlock (Temporary)
const unlockBtn = document.querySelector('.unlock-btn');
unlockBtn.addEventListener('click', () => {
    alert('Payment gateway jaldi connect hoga! Tab tak wait karo.');
    // Baad me Razorpay yaha add karna
});