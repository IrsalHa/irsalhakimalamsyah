import fs from "fs";
export default function handler(req, res)  {
    const baseUrl = "https://www.irsalhakimalamsyah.com";
  
    const staticPages = fs
      .readdirSync({
        development: 'pages',
        production: './',
      }[process.env.NODE_ENV])
      .filter((staticPage) => {
        return ![
          "_app.js",
          "_document.js",
          "_error.js",
          "sitemap.xml.js",
          "api"
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${baseUrl}/${staticPagePath}`;
      });
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
              <url>
                <loc>${url.search("index.js") != -1 ? baseUrl : url }</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
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