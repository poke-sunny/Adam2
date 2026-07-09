import type { MetadataRoute } from "next";

const routes = ["", "#journey", "#sponsors", "#mission-control", "#media", "#contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://adamellahi.com/${route}`,
    lastModified: new Date("2026-07-08"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

