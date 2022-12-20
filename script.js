let row;
const formEl = document.querySelector("form");
        const tbodyEl = document.querySelector("tbody");
        const tableEl = document.querySelector("table");
        var editRowId = "";

        showDataFromLocalStrorage();

        /* add new item on local storage */

            function addNewProduct(nom, marque, prix, date, type, promo) {
                var productList = [];
            
                var product = {
                nom: nom,
                marque: marque,
                prix: prix,
                date: date,
                type: type,
                promo: promo
                };
                productList.push(product);
                productList = productList.concat(JSON.parse(localStorage.getItem('productList')||'[]'));
                console.log(productList);
            
            
                localStorage.setItem("productList", JSON.stringify(productList));
            };

        /* End */

        /* Enregistreent des données */

        function onAddtable(e) {
            e.preventDefault();
            const prix = document.getElementById("prix").value;
            const nom = document.getElementById("nom").value;
            const selec = document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;
            const date = document.getElementById("date").value;
            const sele = document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text;

            let promo = "";

            if (document.getElementById("fam").checked)
            {
                promo = "oui"
            }
            if (document.getElementById("mas").checked)
            {
                promo = "non"
            }

            addNewProduct(nom, selec, prix, date, sele, promo);
            showDataFromLocalStrorage();

            document.getElementById("form").reset();
            
        }

        /* End */

        /* Suppresion de la ligne du tableau + du local storage */

        function onDeleteRow(e) {
            if (!e.target.classList.contains("deleteBtn")) {
            return;
            }
            const btn = e.target;

            /* Récuperation de l'index du local storage */
            var index = btn.getAttribute("id");
            
            /* Récupérer les entrées du local storage */
            var productList = JSON.parse(window.localStorage.getItem('productList'));

            /* Suppression de la données depuis le tableau que on a récuperer depuis notre variable qui contient les données du local storage */
            productList.splice(index, 1);

            /* La mise à jour du local storage par notre nouvelle variable mise à jour */
            localStorage.setItem('productList',JSON.stringify(productList));

            /* Actualisation du tableau */
            showDataFromLocalStrorage();
        }

        /* End */

        /* Afficher des entrées */

        function showDataFromLocalStrorage(){

            /* Vider le tableau */
            tbodyEl.innerHTML = "";

            /* Récupérer les entrées du local storage */
            var LocalStorage = JSON.parse(window.localStorage.getItem('productList'));

            /* Affichage des données dans le tableau */
            for(let i=0; i<LocalStorage.length; i++) {
                tbodyEl.innerHTML += `
                <tr>
                    <td>${LocalStorage[i].nom}</td>
                    <td>${LocalStorage[i].marque}</td>
                    <td>${LocalStorage[i].prix}</td>
                    <td>${LocalStorage[i].date}</td>
                    <td>${LocalStorage[i].type}</td>
                    <td>${LocalStorage[i].promo}</td>
                    <td><button class="deleteBtn" id="${i}">Delete</button></td>
                    <td><button class="edit" id="${i}">Edit</button></td>
                </tr>
            `;
            }
        }
    
        /* End */
        
        function editRow(e) {
            e.preventDefault();            
            if (!e.target.classList.contains("edit")) {
                return;
                }
    
                else 
                {
                    const btn = e.target;
                    editRowId = btn.getAttribute("id");
                    row = e.target.parentElement.parentElement
                btn.closest("tr")
                
            document.getElementById("prix").value = btn.closest("tr").cells[2].innerHTML;
            document.getElementById("nom").value = btn.closest("tr").cells[0].innerHTML;
            document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text = btn.closest("tr").cells[1].innerHTML;
            document.getElementById("date").value =  btn.closest("tr").cells[3].innerHTML;
            document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text = btn.closest("tr").cells[4].innerHTML;

            var ouiOuNon =  btn.closest("tr").cells[5].innerHTML;
            if(ouiOuNon == "oui")
                    document.getElementById("fam").checked = true;
            else if(ouiOuNon == "non")
            document.getElementById("mas").checked = true;
                }
                
        }

        /* Modification des entrées */

        function modifier(){

            /* Récuperation de l'index du local storage */
            var index = editRowId;

            /* Récupérer les entrées du local storage */
            var productList = JSON.parse(window.localStorage.getItem('productList'));

            /* Modification de la données depuis le tableau que on a récuperer depuis notre variable qui contient les données du local storage */
            productList[index].nom = document.getElementById("nom").value;
            productList[index].marque = document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;
            productList[index].prix = document.getElementById("prix").value;
            productList[index].date = document.getElementById("date").value;
            productList[index].type = document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text;
            productList[index].promo = document.querySelector("[type=radio]:checked").value;

            /* La mise à jour du local storage par notre nouvelle variable mise à jour */
            localStorage.setItem('productList',JSON.stringify(productList));

            /* Actualisation du tableau */
            showDataFromLocalStrorage();

        }

        /* end */

        /* Les actions */

        formEl.addEventListener("submit", onAddtable);
        tableEl.addEventListener("click", onDeleteRow);
        tableEl.addEventListener("click", editRow);