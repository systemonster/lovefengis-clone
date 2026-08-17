import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://lovefengis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/hizmetler", "/suite", "/blog", "/araclar", "/iletisim"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
