// object assign url: https://discourse.wicg.io/t/passing-an-object-of-attributes-to-document-createelement-as-the-second-argument/809/21?page=2
let counter = 0;
const pageTitle = _ => "text file demo using Async";
const btnTextFile = document.querySelector("#button");
const handleClick = _ => btnTextFile.addEventListener("click", _ => showContent());

const showContent = _ => {
  counter++;
  if (counter === 1) {
    loadTextFile();
    btnTextFile.disabled = true;
  }
};

const renderUI = data => {
  let contentParagraph = createParagraph(data);
  let contentDiv = document.querySelector("#content");
  contentDiv.insertAdjacentElement("beforeend", contentParagraph);
};

const createParagraph = data => Object.assign(document.createElement("p"), {
    className: "pt-2",
    textContent: data,
  });


const loadTextFile = async () => {
  try {
    const url = "sample.txt";
    let data = await(await (fetch(url))).text();
    renderUI(data);
  } catch (e) {
    console.error(`There was an error fetching text file ${e.message}`);
  }
};

export { loadTextFile, handleClick, pageTitle };
