export function getDappsTags(el) {
  const f = (term) => {
    if (el.Tags.includes(term)) {
      return el.tags
    }
  }
  let tagsElms = []
  switch (el.tags) {
    case f("DEX"):
      tagsElms.push(
        <span key="DEX" className="text-emerald-300">
          DEX
        </span>
      )
    case f("Farm"):
      tagsElms.push(
        <span key="Farm" className="text-yellow-300">
          Farm
        </span>
      )

    default:
      break
  }
  return tagsElms
}

export function createUrl(string) {
  // validate string as url
  let url
  if (string.match(/^(http|https):\/\//i) === null) {
    url = "http://" + string
  }

  return url
}
