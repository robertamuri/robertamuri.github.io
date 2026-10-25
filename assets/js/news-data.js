const newsItems = [

    {
    date: "Oct. 23, 2026",
    datetime: "2026-10-23",
    text: `I am delighted to have won the Young Best Economist Award for my paper <em>Firms Under Water: Floods, Adaptation and Performance from the Italian Society of Economics (SIE)</em>.`
  },

  {
    date: "Oct. 10, 2026",
    datetime: "2026-10-10",
    text: `The past few weeks have been full of presentations: first at LSE Environment Week in London (September 21–25), then in Bologna (September 30), and finally at AECCE in Urbino (October 7–8). Many thanks to the organisers and participants for the stimulating discussions and valuable feedback!`
  },

  {
    date: "Jun. 1, 2026",
    datetime: "2026-06-01",
    text: `I started the one-week bootcamp <em>AI in Research</em>, organized by the Engineering and Applied Science Division at Caltech.`

  },
  
  {
    date: "Apr. 5, 2026",
    datetime: "2026-04-05",
    text: `My paper <em>Firms Under Water: Floods, Adaptation and Performance</em> was selected by IAERE among the top four contributions in Environmental Economics by young economists. I will present the paper at the Annual Meeting of the Italian Economic Society in Cagliari in October 2026, where the final recipient of the Young Economist Award will be announced.`
  },

  {
    date: "Feb. 22, 2026",
    datetime: "2026-02-22",
    text: `I have just landed in Los Angeles. I will be visiting Caltech, advised by Hannah Druckenmiller, until July 2026.`
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
    text: `The paper <a href="https://link.springer.com/article/10.1007/s10640-025-01013-w" target="_blank" rel="noopener"><em>Municipal Waste Policies and Spill Over Effects</em></a> was published in <em>Environmental and Resource Economics</em>.`
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
