module.exports = function feedConverter(feed) {
  const { description, entries, itunes, link, pubDate, title } = feed
  return {
    about: {
      title,
      description,
      pubDate,
      link,
      image: itunes.image,
      explicit: itunes.explicit,
      author: itunes.author,
      owner: itunes.owner.name,
      email: itunes.owner.email
    },
    episodes: entries.map(entry => episodeConverter(entry))
  }
}

function episodeConverter(entry) {
  const { contentSnippet, enclosure, itunes, link, pubDate, title } = entry
  return {
    description: contentSnippet,
    audio: enclosure,
    duration: itunes.duration,
    author: itunes.author,
    image: itunes.image,
    link,
    pubDate,
    title
  }
}
