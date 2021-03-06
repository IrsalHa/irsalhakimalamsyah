import fs from "fs";

export default function sitemap(){

};

export async function getServerSideProps({res}) {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.irsalhakimalamsyah.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync({
        development: 'pages',
        production: './.next/server/pages',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "api",
        "404.html",
        "500.html"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });
    staticPages.push(baseUrl+"/")
    console.log(staticPages)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url.search("index") != -1 ? baseUrl : url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>NEVER</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}

    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};