const formatCategory = (category: string) => {
  if (category === 'event') return '이벤트'
  if (category === 'notification') return '공지'
  return category
}

export default formatCategory
