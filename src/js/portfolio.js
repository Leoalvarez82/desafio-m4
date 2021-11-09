function addCard(card) {
  const templateEl = document.querySelector("#section-portfolio__template");

  const containerCards = document.querySelector(
    ".section-portfolio__container-card"
  );

  templateEl.content.querySelector(
    ".section-portfolio__card-title"
  ).textContent = card.title;

  templateEl.content.querySelector(
    ".section-portfolio__card-description"
  ).textContent = card.description;

  templateEl.content.querySelector(".section-portfolio__card-img").src =
    card.image;

  templateEl.content.querySelector(".section-portfolio__card-link").href =
    card.url;

  const clone = document.importNode(templateEl.content, true);
  containerCards.appendChild(clone);
}

function getPortfolioData() {
  return fetch(
    "https://cdn.contentful.com/spaces/b1w7x8zyuhhe/environments/master/entries?access_token=UWnwgQ2hkMVLisFc7Rwfooy6-ltvGIpPK0tDgOtPnbY&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsColl = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description.content["0"].content["0"].value,
          url: item.fields.url,
          imageID: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });

      fieldsColl.forEach((item) => {
        const id = searchAsset(item.imageID, item.includes);
        item.image = "https:" + id.fields.file.url;
      });

      return fieldsColl;
    });
}

function searchAsset(imageID, includes) {
  const located = includes.find((x) => {
    return x.sys.id == imageID;
  });

  return located;
}

function main() {
  headerComponent(document.querySelector(".section-header"));
  headerMobile();
  //   activo los componentes del header y del footer

  footerComponent(document.querySelector(".section-footer"));

  getPortfolioData().then((cards) => {
    for (const card of cards) {
      addCard(card);
    }
  });
}

main();
