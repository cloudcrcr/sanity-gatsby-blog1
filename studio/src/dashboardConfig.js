export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "613b141aaa9b0786672a1dc7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-1-studio-q26anpk4",
                  apiId: "4f10e49a-97bb-4037-9da2-d55f49ab6c45",
                },
                {
                  buildHookId: "613b141a8ffb928656649597",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-1-web-5xipg61f",
                  apiId: "22bd83bf-5275-4686-80c6-3f3b8b73c2ac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cloudcrcr/sanity-gatsby-blog1",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-1-web-5xipg61f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
