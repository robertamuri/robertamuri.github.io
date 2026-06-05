const newsItems = [
  {
    date: "Apr. 5",
    datetime: "2026-04-05",
    text: `The paper <em>Firms Under Water: Floods, Adaptation and Performance</em> has been selected by IAERE among the top four contributions in Environmental Economics by young economists. I will present it at the Annual Meeting of the Italian Economic Society in Cagliari in October 2026, where the final decision for the Young Economist Award will be made.`
  },
  {
    date: "Feb. 22",
    datetime: "2026-02-22",
    text: `I have just landed in Los Angeles. I will be visiting Caltech, advised by Hannah Druckenmiller, until July 2026.`
  },
  {
    date: "Feb. 12–13",
    datetime: "2026-02-12",
    text: `I will present the paper <em>Firms Under Water: Floods, Adaptation and Performance</em> at the IAERE Annual Conference in Trento.`
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
