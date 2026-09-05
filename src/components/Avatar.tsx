import { avatarUrl } from "@lib/cloudinary";
import { cn } from "@lib/cn";
import Image from "next/image";

export function Avatar({
  alt,
  className,
  priority = false,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-3xl bg-brand-100 dark:bg-brand-900/30",
        className,
      )}
    >
      <Image
        src={avatarUrl("f_auto,q_auto,c_fill,g_face,w_800,h_800")}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 384px, 320px"
        className="object-cover"
      />
    </div>
  );
}
