export function getUrl(input: string, source: string, target: string) {
  const url = new URL(window.location.href)
  url.searchParams.set("source", source)
  url.searchParams.set("target", target)
  url.searchParams.set("input", encodeURIComponent(input))
  return url.toString()
}

export function getImportUrlScheme(target: string, url: string) {
  switch (target) {
    case "egern":
      return "egern:///modules/new?url=" + encodeURIComponent(url)
    case "loon":
      return "loon://import?plugin=" + encodeURIComponent(url)
    case "qx":
      return (
        "quantumult-x:///add-resource?remote-resource=" +
        encodeURIComponent(
          JSON.stringify({
            rewrite_remote: [url],
          })
        )
      )
    case "shadowrocket":
      return "shadowrocket://install?module=" + encodeURIComponent(url)
    case "stash":
      return "stash://install-override?url=" + encodeURIComponent(url)
    case "surge":
      return "surge:///install-module?url=" + encodeURIComponent(url)
    default:
      return ""
  }
}
