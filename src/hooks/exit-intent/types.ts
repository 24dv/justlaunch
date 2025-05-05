
/**
 * Options for configuring the exit intent behavior
 */
export interface UseExitIntentOptions {
  /** Time in milliseconds for which the detection will be disabled after a successful detection */
  cooldownTime?: number;
  /** Whether to use a cookie to track if the user has already seen the popup */
  useCookie?: boolean;
  /** Cookie expiration time in days */
  cookieExpiry?: number;
  /** Cookie name */
  cookieName?: string;
  /** Distance from top of the page to trigger exit intent (in pixels) */
  topThreshold?: number;
  /** Delay before showing popup for first-time visitors (in milliseconds, 0 for immediate) */
  initialDelay?: number;
}

/**
 * Return type for the useExitIntent hook
 */
export interface UseExitIntentReturn {
  /** Whether the exit intent popup should be shown */
  showExitIntent: boolean;
  /** Function to hide the exit intent popup */
  hideExitIntent: () => void;
  /** Whether this is a first-time visitor */
  isFirstTimeVisitor: boolean;
  /** Function to mark the popup as seen to prevent it from showing again */
  markPopupAsSeen: () => void;
}
