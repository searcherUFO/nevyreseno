// document.addEventListener("DOMContentLoaded", () => {
//   // Register GSAP plugins
//   gsap.registerPlugin(ScrollTrigger);

//   const preloaderTimeline = gsap.timeline();

//   if (!Cookies.get("preloaderShown-eng")) {

  
//     // Preloader animations
//     preloaderTimeline
//       .fromTo(
//         ".preloader-olab-logo-couple",
//         {
//           opacity: 0,
//           x: "-70%",
//           rotationY: -180,
//           transform: "translate(-50%, -50%)",
//         },
//         {
//           opacity: 1,
//           x: "0%",
//           rotationY: 0,
//           duration: 2.5,
//           ease: "power2.out",
//         }
//       )
//       .to([".preloader-cartImg1", ".preloader-cartImg2"], {
//         duration: 1.5,
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         stagger: 0,
//       })
//       .to(".preloader-paris", {
//         duration: 2,
//         x: 0,
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//       })
//       .to(".preloader-louvre-paris", {
//         duration: 2,
//         x: 0,
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//       })
//       .to(".preloader-bg", {
//         y: "-100%", // Slide the preloader upwards
//         opacity: 0, // Fade out while sliding
//         duration: 1.5,
//         ease: "power2.inOut",
//         onComplete: () => {
//           // Remove the preloader from the view
//           document.querySelector(".preloader-bg").style.display = "none";
//         },
//       })
//       // Add content animations directly to the timeline
//       .fromTo(
//         "#zoomFadeInImageLeft",
//         {
//           x: +100,
//           scale: 0.4,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 2,
//           ease: "power2.out",
//         }
//       )
//       .fromTo(
//         "#zoomFadeInImageRight",
//         {
//           x: -100,
//           scale: 0.4,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 2,
//           ease: "power2.out",
//         },
//         "<" // Overlap this animation with the previous one
//       )
//       .fromTo(
//         "#zoomFadeInHeadingLeft",
//         {
//           x: +100,
//           scale: 0.4,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 2,
//           ease: "power2.out",
//         },
//         "<" // Overlap this animation with the previous one
//       )
//       .fromTo(
//         "#zoomFadeInHeadingRight",
//         {
//           x: -100,
//           scale: 0.4,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 2,
//           ease: "power2.out",
//         },
//         "<" // Overlap this animation with the previous one
//       )
//       .fromTo(
//         "#rotatingLogo",
//         {
//           opacity: 0, // Start fully transparent
//           x: "-100%", // Start far left
//           rotationY: -180, // Start with a full flip (backward facing)
//         },
//         {
//           opacity: 1, // Fade to visible
//           x: "0%", // Move to the original position
//           rotationY: 0, // Complete the flip to face forward
//           duration: 4, // Animation duration
//           ease: "power2.out", // Smooth easing
//           onComplete: () => {
//             // Ensure the element stays centered
//             const element = document.querySelector("#rotatingLogo");
//             element.style.transform = "translate(-50%, -50%)"; // Reset for consistency
//           },
//         }
//       );

//     Cookies.set("preloaderShown-eng", "true");


//   } else {
//     document.querySelector("#preloader").remove(); // Corrected DOM manipulation
//   }
// });














document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  const preloaderTimeline = gsap.timeline();

  if (!Cookies.get("preloaderShown-eng")) {


      preloaderTimeline
      
      .to([".preloader-cartImg1", ".preloader-cartImg2"], {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: 0,
      })
      .to(".preloader-paris", {
        duration: 2,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      })
      .to(".preloader-louvre-paris", {
        duration: 2,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      })


      .fromTo(
        ".preloader-olab-logo-couple",
        {
          opacity: 0,
          x: "-70%",
          rotationY: -180,
          transform: "translate(-50%, -50%)",
        },
        {
          opacity: 1,
          x: "0%",
          rotationY: 0,
          duration: 2.5,
          ease: "power2.out",
        }
      )


      .to(".preloader-bg", {
        y: "-100%", // Slide the preloader upwards
        opacity: 0, // Fade out while sliding
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Remove the preloader from the view
          document.querySelector(".preloader-bg").style.display = "none";
        },
      })
      // Add content animations directly to the timeline
      .fromTo(
        "#zoomFadeInImageLeft",
        {
          x: +100,
          scale: 0.4,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      )
      .fromTo(
        "#zoomFadeInImageRight",
        {
          x: -100,
          scale: 0.4,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        "<" // Overlap this animation with the previous one
      )
      .fromTo(
        "#zoomFadeInHeadingLeft",
        {
          x: +100,
          scale: 0.4,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        "<" // Overlap this animation with the previous one
      )
      .fromTo(
        "#zoomFadeInHeadingRight",
        {
          x: -100,
          scale: 0.4,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        "<" // Overlap this animation with the previous one
      )
      .fromTo(
        "#rotatingLogo",
        {
          opacity: 0, // Start fully transparent
          x: "-100%", // Start far left
          rotationY: -180, // Start with a full flip (backward facing)
        },
        {
          opacity: 1, // Fade to visible
          x: "0%", // Move to the original position
          rotationY: 0, // Complete the flip to face forward
          duration: 4, // Animation duration
          ease: "power2.out", // Smooth easing
          
          onComplete: () => {
            // Ensure the element stays centered
            const element = document.querySelector("#rotatingLogo");
            element.style.transform = "translate(-50%, -50%)"; // Reset for consistency
          },
        }
      );





      Cookies.set("preloaderShown-eng", "true");


    } else {
      document.querySelector("#preloader").remove(); // Corrected DOM manipulation
    }

    
});
