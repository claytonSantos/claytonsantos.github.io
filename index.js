
const AnimeSectionSkills = {
    constructor() {
        this.images = gsap.utils.toArray('.panel:not(.html)');
        this.texts = gsap.utils.toArray('.panel-text');
        this.sectionSkill = gsap.utils.toArray(".section-skill-js");
        this.zIndexSetter = (i, target, targets) => targets.length - i
    },
    animateImages() {
        this.images.forEach((image, i) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: this.sectionSkill,
                    start: () => `top -${window.innerHeight * (i + 0.5)}`,
                    end: () => `+=${window.innerHeight}`,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true
                }
            });

            timeline.to(image, { height: 0 });
        });
    },
    animateTexts() {
        this.texts.forEach((text, i) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: this.sectionSkill,
                    start: () => `top -${window.innerHeight * i}`,
                    end: () => `+=${window.innerHeight}`,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true
                }
            });

            timeline
                .to(text, { duration: 0.33, opacity: 1, y: "50%" })
                .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
        });
    },
    init() {
        this.constructor();
        this.animateImages();
        this.animateTexts();
        gsap.set(this.images, { zIndex: this.zIndexSetter });
        gsap.set(this.texts, { zIndex: this.zIndexSetter });

        ScrollTrigger.create({
            trigger: this.sectionSkill,
            scrub: true,
            markers: true,
            pin: true,
            start: "top top",
            end: () => `+=${(this.images.length + 1) * window.innerHeight}`,
            invalidateOnRefresh: true
        });
    }
}

function disableScroll() {
    return gsap.set(document.body, { overflow: 'hidden' });
}

function enableScroll() {
    return gsap.set(document.body, { overflow: '' });
};

const AnimateSectionIntro = {
    constructor() { },
    listeners() { },
    animateProfileImg() {
        const profileImg = document.querySelector('.profile-img-js');

        gsap.fromTo(profileImg,
            { scale: 2, opacity: 0 },
            { scale: 1, opacity: 1, delay: 1, duration: 0.8, ease: "ease-out" }
        );
    },
    animateProfileTitle() {
        const profileTitle = document.querySelector('.profile-title-js');

        gsap.fromTo(profileTitle,
            { opacity: 0 },
            { opacity: 1, delay: 1.3, duration: 0.6, ease: "linear", onComplete: enableScroll }
        );
    },
    init() {
        disableScroll();
        this.animateProfileImg();
        this.animateProfileTitle();
    },
}

const AnimateMissionSection = {
    constructor() {
        this.section = document.querySelector('.mission-section-js');
        this.title = document.querySelector('.mission-section-title-js');
    },
    createTimeliine() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.mission-section-js`,
                start: `top top`,
                scrub: 1,
                pin: true,
                endTrigger: ".mission-section-title-js",
                end: "top top"
            }
        })

        tl.to(".mission-section-title-js", {
            top: `-50%`
        })
    },
    init() {
        this.constructor();
        this.createTimeliine();
    }
}

const AnimateTextOnScroll = {
    constructor(){
        this.animeTxts = gsap.utils.toArray('.anime-txt');
        
    },
    createTimeliine(){
        this.animeTxts.forEach(txt => {
            gsap.to(txt,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.02,
                    scrollTrigger: {
                        trigger: txt,
                        start: "bottom bottom",
                        end: "bottom bottom",
                        toggleActions: "play none none reset",
                        scrub: false,
                    }
                }
            );
        });
    },
    init(){
        this.constructor();
        this.createTimeliine();
    },
}


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    AnimateMissionSection.init();
    AnimateTextOnScroll.init();

    if (window.matchMedia("(min-width: 768px)").matches) {
        AnimateSectionIntro.init();
        AnimeSectionSkills.init();
    }
});


