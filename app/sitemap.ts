import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://faisal-faizypk.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: "https://faisal-faizypk.vercel.app/#about",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://faisal-faizypk.vercel.app/#projects",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://faisal-faizypk.vercel.app/#contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];
}
