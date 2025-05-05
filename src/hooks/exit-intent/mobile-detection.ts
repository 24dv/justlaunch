
/**
 * Sets up mobile-specific exit intent detection
 */
export const setupMobileDetection = (
  isMobile: boolean,
  cooldownTime: number,
  lastDetection: number,
  showExitIntentPopup: () => void
) => {
  if (!isMobile) return () => {};

  // For mobile: track scroll direction with enhanced sensitivity
  let lastScrollY = 0;
  let lastScrollTime = Date.now();
  
  const handleScroll = () => {
    const currentTime = Date.now();
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    
    // Calculate scroll velocity
    const deltaY = currentScrollY - lastScrollY;
    const deltaTime = currentTime - lastScrollTime;
    const scrollVelocity = deltaTime > 0 ? deltaY / deltaTime : 0;
    
    // If scrolling up rapidly OR near top of page while scrolling up
    if (
      isMobile &&
      ((scrollingUp && Math.abs(scrollVelocity) > 0.3) || // More sensitive to scroll velocity
       (scrollingUp && window.scrollY < 150)) && // Detect when user scrolls near top
      Date.now() - lastDetection > cooldownTime // Cooldown expired
    ) {
      console.log("Mobile exit intent detected: Rapid scroll up");
      showExitIntentPopup();
    }
    
    lastScrollY = currentScrollY;
    lastScrollTime = currentTime;
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
