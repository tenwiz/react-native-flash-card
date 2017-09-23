export function closeSwipeable(currentlyOpenSwipeable) {
  if (currentlyOpenSwipeable) {
    currentlyOpenSwipeable.recenter()
  }
}
