window.focus = () => {}
window.MutationObserver = function() {
  return { disconnect: () => {}, observe: () => {}, takeRecords: () => {} }
}
