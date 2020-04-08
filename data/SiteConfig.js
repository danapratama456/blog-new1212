const config = {
  siteTitle: "Dana BLOG", // Site title.
  siteTitleShort: "Dana BLOG", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Dana BLOG", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://blog-danapratama.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "A Gatsby Markdown Blog stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-161211056-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Dana Pratama", // Username to display in the author segment.
  userEmail: "dana.pratama456@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "gatsbyjs", // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: "danapratama456",
  userInsta: "dana.pratama456", // Optionally renders "Follow Me" in the Bio segment.
  // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s150x150/14583352_731604846992952_8457167630938144768_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_ohc=x9nFu8OKHe0AX_0U-Wt&oh=f7745a07d665d3b28150828dfeeb9e27&oe=5EB5DF2C", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  copyright: "Copyright © 2020. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#4287f5", // Used for setting manifest and progress theme colors.
  backgroundColor: "blue", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
