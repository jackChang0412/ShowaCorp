// GSAP 動畫
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".dish").forEach((dish, index) => {
    gsap.fromTo(dish, 
        { 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100  // 偶數往左滑入，奇數往右滑入
        },  
        { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out", 
            scrollTrigger: {
                trigger: dish,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 標題滑入效果
gsap.from("header", { opacity: 0, y: -50, duration: 1.5, ease: "power3.out" });