type VideoType = "youtube" | "gdrive" | "unknown";

export const getVideoType = (url: string): VideoType => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("drive.google.com")) return "gdrive";
  return "unknown";
};

export const getYouTubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
    : null;
};

export const getGoogleDriveEmbedUrl = (url: string) => {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : null;
};

export const getEmbedUrl = (url: string) => {
  const type = getVideoType(url);

  if (type === "youtube") return getYouTubeEmbedUrl(url);
  if (type === "gdrive") return getGoogleDriveEmbedUrl(url);

  return null;
};
