import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TRIGGERTIMING, DURATIONVAL, EASEVAL, STAGGERTIMING } from "@/utils/global";

/********************
変数
********************/
const transitionY = "4rem";

export const intersectionAnimation = () => {
   /*===============================================
   fadeInUp
   ===============================================*/
   {
      const fadeInUp = document.querySelectorAll(".js_fadeInUp");
      if (fadeInUp.length) {
         //初期値
         gsap.set(fadeInUp, {
            y: transitionY,
            autoAlpha: 0,
         });
         //フェードイン
         ScrollTrigger.batch(fadeInUp, {
            batchMax: 5,
            start: TRIGGERTIMING,
            onEnter: (batch) =>
               gsap.to(batch, {
                  y: 0,
                  autoAlpha: 1,
                  ease: `${EASEVAL}.out`,
                  duration: DURATIONVAL,
                  stagger: STAGGERTIMING,
               }),
            once: true,
         });
      }
   }
   /*===============================================
    fadeInUpBlock
   ===============================================*/
   {
      const fadeInUpBlock = document.querySelectorAll(".js_fadeInUpBlock");
      const fadeInUpBlockLine = document.querySelectorAll(
         ".js_fadeInUpBlock .line"
      );
      const fadeInUpBlockStagger = STAGGERTIMING * 1000;

      if (fadeInUpBlock.length) {
         gsap.set(fadeInUpBlockLine, {
            y: transitionY,
            autoAlpha: 0,
         });
         const fadeInUpBlockAnim = (target:HTMLElement) => {
            gsap.to(target, {
               y: 0,
               autoAlpha: 1,
               ease: `${EASEVAL}.out`,
               duration: DURATIONVAL,
            });
         };
         ScrollTrigger.batch(fadeInUpBlock, {
            start: TRIGGERTIMING,
            onEnter: (batch) => {
               batch.forEach((element, index) => {
                  setTimeout(() => {
                     const span = Array.from(element.querySelectorAll(".line")) as HTMLElement[];
                     span.forEach((element, index) => {
                        setTimeout(() => {
                           fadeInUpBlockAnim(element);
                        }, index * fadeInUpBlockStagger);
                     });
                  }, index * fadeInUpBlockStagger);
               });
            },
            once: true,
         });
      }
   }
   /*===============================================
    marker animation
    ===============================================*/
   {
      const marker = document.querySelectorAll(".js_marker");
      if (marker.length) {
         //フェードイン
         ScrollTrigger.batch(marker, {
            batchMax: 5,
            start: TRIGGERTIMING,
            toggleClass: "is_active",
            once: true,
         });
      }
   }
};
