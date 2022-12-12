// Squares animation
gsap.from(".chucked",{
    duration: 4.5,
    rotation: 360,
    ease: "bounce",
    stagger: 0.8,
    x:-800,
    y:-800,
    
});





// Text Animation

gsap.from(".headline",{
    duration: 3.5,
    stagger: 0.5,
    opacity:0.5,
    y:300

   


});

// Paragraph Animation

gsap.from(".paragraph",{
    rotation: 90,
    duration: 2.5,
    stagger: 0.5,
    opacity: 0
});
