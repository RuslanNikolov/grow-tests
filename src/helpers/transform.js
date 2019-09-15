export const transformData = items =>
  items
    .map(item => ({
      id: item.id,
      title: item.title,
      url: item.url,
      image: item.thumbnailUrl
    }))
    .slice(0, Math.floor(Math.random() * 10));
