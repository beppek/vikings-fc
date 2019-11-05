const linkResolver = doc => {
  switch (doc.type) {
    case "article":
      return `/news/${doc.uid}`
    case "articles":
      return `/news`
    case "page":
      return `/${doc.uid}`
    default:
      return "/"
  }
}

module.exports = {
  linkResolver,
}
