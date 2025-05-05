
/**
 * Sets up visibility change and inactivity detection
 */
export const setupVisibilityAndInactivityDetection = (
  cooldownTime: number,
  lastDetection: number,
  showExitIntentPopup: () => void
) => {
  // Detect tab switching or browser minimizing
  const handleVisibilityChange = () => {
    if (
      document.visibilityState === 'visible' && 
      Date.now() - lastDetection > cooldownTime // Cooldown expired
    ) {
      console.log("Exit intent detected: Tab focus regained");
      showExitIntentPopup();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Inactivity detection
  let inactivityTimer: number | null = null;
  
  const handleUserActivity = () => {
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }
    // If user is inactive for 30 seconds and hasn't seen popup yet
    inactivityTimer = window.setTimeout(() => {
      if (Date.now() - lastDetection > cooldownTime) {
        console.log("Exit intent detected: User inactivity");
        showExitIntentPopup();
      }
    }, 30000); // 30 seconds of inactivity
  };

  document.addEventListener('mousedown', handleUserActivity);
  document.addEventListener('keydown', handleUserActivity);
  handleUserActivity(); // Start the inactivity timer right away
  
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    document.removeEventListener('mousedown', handleUserActivity);
    document.removeEventListener('keydown', handleUserActivity);
    
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }
  };
};
