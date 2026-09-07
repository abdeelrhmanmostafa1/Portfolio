const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // إذا أصبح العنصر ظاهراً في الشاشة
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 }); // يظهر التأثير عند رؤية 10% من العنصر

// تطبيق المراقبة على كل العناصر التي تحمل كلاس reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));