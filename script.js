// GNews API Token
const apiKey = '1a8807d525c9812518ee895d374f2d14';

// ट्रेंडिंग डेटा फेच करने के लिए फंक्शन
function fetchTrendingData() {
    const contentDiv = document.getElementById('trendingContent');
    contentDiv.innerHTML = '<p>Loading trending news...</p>';

    // JSONP स्क्रिप्ट क्रिएट करें
    const script = document.createElement('script');
    // भारत और अमेरिका दोनों के लिए न्यूज़ (ग्लोबल न्यूज़)
    script.src = https://gnews.io/api/v4/top-headlines?token=${apiKey}&max=5&callback=handleNewsResponse;
    document.head.appendChild(script);

    script.onload = () => script.remove();
    script.onerror = () => {
        contentDiv.innerHTML = '<p>Error loading trending news. Please try again later.</p>';
    };
}

// JSONP कॉलबैक फंक्शन
function handleNewsResponse(data) {
    const contentDiv = document.getElementById('trendingContent');
    contentDiv.innerHTML = '';
    if (data.articles && data.articles.length > 0) {
        data.articles.slice(0, 5).forEach(article => {
            const item = document.createElement('div');
            item.classList.add('trending-item');
            item.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            contentDiv.appendChild(item);
        });
    } else {
        contentDiv.innerHTML = '<p>No trending news available right now.</p>';
    }
}

// बटन पर क्लिक करने से सेक्शन खुलेगा/छुपेगा
function toggleTrendingSection() {
    const section = document.getElementById('trendingSection');
    section.classList.toggle('active');
    if (section.classList.contains('active')) {
        fetchTrendingData();
    }
}

// पेज लोड होने पर ट्रेंडिंग सेक्शन दिखाएं
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('trendingSection');
    section.classList.add('active');
});