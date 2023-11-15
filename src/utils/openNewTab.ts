const openNewTab = (url: string | URL | undefined) => {
  window.open(url, '_blank', 'noopener, noreferrer')
}

export default openNewTab
