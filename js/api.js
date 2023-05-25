
// console.log("hi"); pour vérifier si le js script fonctionne

    // Récupération des éléments DOM
    let generateBtn = document.getElementById("generateBtn");
    let copyBtn = document.getElementById("copyBtn");
    let clearBtn = document.getElementById("clearBtn");

    let paraDisplay = document.getElementById("paraDisplay");
    
    // options pour appeler un serveur
    // GET - récupérer les données d'un serveur
    // headers - infos trouvées sur le site de l'api

    let options = {
        method: "GET",
        headers: { 'X-Api-Key': 'zHlo+7DWsQKpMjq3lS/x0A==nEUh6wxZpkNaCrYt' },
    };

    // X-Api-Key - API Key associé à mon compte (créé sur api-ninjas.com)

    let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

    // nouvelle variable d'une fonction pour récupérer les données de l'api
    let generatePara = () => {
        console.log("generate button works!");
        let paragraphs = document.getElementById("numParagraphs").value;
        let genURL = url + paragraphs;
        fetch(genURL, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            paraGen.innerText = data.text;
        })
        .catch(error => {
            alert("Désolé! Il y a eu un problème : erreur/serveur ne répond pas");
        });
    };

    // 3 FUNCTIONS addEventListener()

    // pour ajouter du texte de l'API à div en html en cliquant sur le bouton
    generateBtn.addEventListener("click", generatePara);

    // pour copier le texte Lorem Ipsum div paragraphe

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(paraGen.innerText);
        console.log("text was copied");
        alert("Le texte a été copié dans le clipboard");
    });

    // pour effacer Lorem Ipsum div paragraphe

    let clearPara = () => {
        document.getElementById("paraGen").innerHTML = "";
    };
    
    clearBtn.addEventListener("click", clearPara);

    
    // window.addEventListener("load", generatePara); // pour afficher 1 paragraphe sur une page chargée


    