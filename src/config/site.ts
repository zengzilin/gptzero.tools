type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Jitsu Blog",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://gptzero.tools/",
  ogImage: "https://gptzero.tools/og",
  links: {
    twitter: "https://twitter.com/dy69",
    github: "https://github.com/dy69",
  },
};
