function addWelcomeData(params = {}) {
  document.querySelector(".section-welcome__title").textContent = params.title;

  document.querySelector(".subtitle").textContent = params.subtitle;
}

function getWelcomeData() {
  fetch(
    "https://cdn.contentful.com/spaces/b1w7x8zyuhhe/environments/master/entries?access_token=UWnwgQ2hkMVLisFc7Rwfooy6-ltvGIpPK0tDgOtPnbY&content_type=homeWelcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const item = json.items["0"].fields;
      const params = {
        title: item.title,
        subtitle: item.subtitle,
      };
      addWelcomeData(params);
    });
}

function addAboutMe(params = {}) {
  document.querySelector(".section-about-me__title").textContent = params.title;
  document.querySelector(".section-about-me__paragraph").textContent =
    params.description;
  document.querySelector(".section-about-me__img").src = params.img;
}
function getAboutMe() {
  fetch(
    "https://cdn.contentful.com/spaces/b1w7x8zyuhhe/environments/master/entries?access_token=UWnwgQ2hkMVLisFc7Rwfooy6-ltvGIpPK0tDgOtPnbY&content_type=aboutMe"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const item = json.items["0"].fields.title;
      const description =
        json.items["0"].fields.description.content["0"].content["0"].value;
      const imagen = json.includes.Asset["0"].fields.file.url;
      const params = {
        title: item,
        description: description,
        img: imagen,
      };
      // console.log(json.includes.Asset["0"].fields.file.url);
      addAboutMe(params);
    });
}
function addServiceCard(params = {}) {
  const templateEl = document.querySelector("#section-services__template");

  const containerCards = document.querySelector(
    ".section-services__container-card"
  );

  templateEl.content.querySelector(
    ".section-services__card-title"
  ).textContent = params.title;

  templateEl.content.querySelector(
    ".section-services__card-description"
  ).textContent = params.description;

  templateEl.content.querySelector(".section-services__card-img").src =
    params.image;

  const clone = document.importNode(templateEl.content, true);
  containerCards.appendChild(clone);
}
function getServiceData() {
  return fetch(
    "https://cdn.contentful.com/spaces/b1w7x8zyuhhe/environments/master/entries?access_token=UWnwgQ2hkMVLisFc7Rwfooy6-ltvGIpPK0tDgOtPnbY&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const fieldsColl = json.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description.content["0"].content["0"].value,
          imageID: item.fields.imagen.sys.id,
          includes: json.includes.Asset,
        };
      });
      fieldsColl.forEach((item) => {
        const id = searchAsset(item.imageID, item.includes);

        item.image = "https:" + id.fields.file.url;
      });

      return fieldsColl;
    });
}
function searchAsset(assetID, includes) {
  const located = includes.find((i) => {
    return i.sys.id == assetID;
  });

  return located;
}

function main() {
  headerComponent(document.querySelector(".section-header"));
  headerMobile();
  getWelcomeData();
  getAboutMe();
  getServiceData().then((cards) => {
    for (const card of cards) {
      addServiceCard(card);
    }
  });
  contactComponent(document.querySelector(".section-contact"));
  footerComponent(document.querySelector(".section-footer"));
}
main();
