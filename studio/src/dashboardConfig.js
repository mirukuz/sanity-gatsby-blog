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
                    "62bd879ea94e7c005680ce35",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8qbsdvzy",
                  apiId: "1e1fa36a-1e4b-4e15-ac6c-09d1d803d90e",
                },
                {
                  buildHookId: "62bd879f0bf670005da1777d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gt2mxeou",
                  apiId: "b9c8d49b-a9ba-4345-8f42-f63957193a37",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mirukuz/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gt2mxeou.netlify.app",
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
