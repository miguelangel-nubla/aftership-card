import { fireEvent } from "./fire-event";

/**
 * Utility function that enables haptic feedback
 */


// Allowed types are from iOS HIG.
// https://developer.apple.com/design/human-interface-guidelines/ios/user-interaction/feedback/#haptics
// Implementors on platforms other than iOS should attempt to match the patterns (shown in HIG) as closely as possible.
export type HapticType =
  | "success"
  | "warning"
  | "failure"
  | "light"
  | "medium"
  | "heavy"
  | "selection";

declare global {
  // for fire event
  interface HASSDomEvents {
    haptic: HapticType;
  }
}

export const forwardHaptic = (el: HTMLElement, hapticType: HapticType) => {
  fireEvent(el, "haptic", hapticType);
};