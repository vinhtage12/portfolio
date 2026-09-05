const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const AVATAR_PUBLIC_ID = "porfolio/avatar_fon6o8.jpg";
const EDUCATION_BACKGROUND_PUBLIC_ID =
  "porfolio/hoc-phi-bach-khoa-tphcm-thumb_jsgcah.jpg";

/**
 * The version segment from the original Cloudinary URLs is intentionally
 * omitted here — Cloudinary resolves the asset without it and always serves
 * the latest version (the avatar URL's version segment was malformed anyway,
 * containing a stray non-ASCII character).
 */
export function cloudinaryUrl(publicId: string, transforms: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

export function avatarUrl(transforms: string) {
  return cloudinaryUrl(AVATAR_PUBLIC_ID, transforms);
}

export function educationBackgroundUrl(transforms: string) {
  return cloudinaryUrl(EDUCATION_BACKGROUND_PUBLIC_ID, transforms);
}
