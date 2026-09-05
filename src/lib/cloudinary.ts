const CLOUD_NAME = "dnmn9nbil";
const AVATAR_PUBLIC_ID = "porfolio/avatar_fon6o8.jpg";

/**
 * The version segment from the original Cloudinary URL was malformed
 * (contained a stray non-ASCII character), so it's intentionally omitted here —
 * Cloudinary resolves the asset without it and always serves the latest version.
 */
export function cloudinaryUrl(publicId: string, transforms: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

export function avatarUrl(transforms: string) {
  return cloudinaryUrl(AVATAR_PUBLIC_ID, transforms);
}
