gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%", // 80% 畫面進入時觸發
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from(".restaurant-features", {
        scrollTrigger: {
            trigger: ".restaurant-features",
            start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.9
    });

    gsap.from(".chef-section", {
        scrollTrigger: {
            trigger: ".chef-section",
            start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.9
    });

    gsap.from(".gallery", {
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 90%",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.9
    });
