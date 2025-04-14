
const handleSavePreferences = (preferences: CookiePreferences) => {
  // Save preferences to local storage
  localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  
  // Set cookie consent based on whether any tracking is enabled
  localStorage.setItem("cookieConsent", 
    preferences.analytics || preferences.marketing ? "accepted" : "declined");
  
  // Update state
  setCookiePreferences(preferences);
  setCookiesAccepted(true);
  setShowCookieDialog(false);
  
  // Log the saved preferences
  console.log("Cookie preferences saved:", preferences);
  
  // Initialize tracking based on new preferences
  initializeTracking(preferences);
};
