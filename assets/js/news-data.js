const newsItems = [
  {
    date: "Apr. 5, 2026",
    datetime: "2026-04-05",
    text: `My paper <em>Firms Under Water: Floods, Adaptation and Performance</em> was selected by IAERE among the top four contributions in Environmental Economics by young economists. I will present the paper at the Annual Meeting of the Italian Economic Society in Cagliari in October 2026, where the final recipient of the Young Economist Award will be announced.`
  },

  {
    date: "Feb. 22, 2026",
    datetime: "2026-02-22",
    text: `I arrived in Los Angeles to begin my visiting period at Caltech, where I will be advised by Hannah Druckenmiller until July 2026.`
  },

  {
    date: "Feb. 12, 2026",
    datetime: "2026-02-12",
    text: `I presented my paper <em>Firms Under Water: Floods, Adaptation and Performance</em> at the IAERE Annual Conference in Trento.`
  },

  {
    date: "Sept. 15, 2025",
    datetime: "2025-09-15",
    text: `I presented the working paper <em>Classifying Hydrological Risk Adaptation Policies with Large Language Models: The HYDROADAPT Dataset</em> at the workshop <em>Mapping Environmental Vulnerabilities: Data, Space and Risk</em> at the University of Roma Tre.`
  },

  {
    date: "Jun. 26, 2025",
    datetime: "2025-06-26",
    text: `My paper <a href="https://link.springer.com/article/10.1007/s10640-025-01013-w" target="_blank" rel="noopener"><em>Firms Under Water: Floods, Adaptation and Performance</em></a> was published in <em>Environmental and Resource Economics</em>.`
  }
];

function renderNews(containerId, limit) {
  const container = document.getElementById(containerId);
  const items = limit ? newsItems.slice(0, limit) : newsItems;

  container.innerHTML = items.map(item => `
    <article class="news-card">
      <time datetime="${item.datetime}">${item.date}</time>
      <p>${item.text}</p>
    </article>
  `).join("");
}
