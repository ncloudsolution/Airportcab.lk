import seodata from "@/data/seo.json";

export function SeoGetter(cityHandle) {
  const seoMetadata = [...seodata].find((data) => data.city === cityHandle);
  return seoMetadata;
}
