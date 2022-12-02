let row;
const formEl = document.querySelector("form");
        const tbodyEl = document.querySelector("tbody");
        const tableEl = document.querySelector("table");
        function onAddtable(e) {
            e.preventDefault();
            console.log("test");
            const prix = document.getElementById("prix").value;
            const nom = document.getElementById("nom").value;
            const selec = document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;
            const date = document.getElementById("date").value;
            const sele = document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text;
            let fam = ""
            let mas = ""

            if (document.getElementById("fam").checked)
            {
                fam = "oui"
            }
            if (document.getElementById("mas").checked)
            {
                mas = "non"
            }
            tbodyEl.innerHTML += `
                <tr>
                    <td>${nom}</td>
                    <td>${selec}</td>
                    <td>${prix}</td>
                    <td>${date}</td>
                    <td>${sele}</td>
                    <td>${fam}${mas}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                    <td><button class="edit">Edit</button></td>
                    </tr>
            `;
            document.getElementById("form").reset();
            
        }
        function onDeleteRow(e) {
            if (!e.target.classList.contains("deleteBtn")) {
            return;
            }

            const btn = e.target;
            btn.closest("tr").remove();
            
        }

        // LES BUTTON
        formEl.addEventListener("submit", onAddtable);
        tableEl.addEventListener("click", onDeleteRow);
        tableEl.addEventListener("click", editRow);
        
        function editRow(e) {
            e.preventDefault();
            console.log("test");
            let prix = document.getElementById("prix").value;
            let nom = document.getElementById("nom").value;
            let selec = document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;
            let date = document.getElementById("date").value;
            let sele = document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text;
            let fam = ""
            let mas = ""

            if (document.getElementById("fam").checked)
            {
                fam = "oui"
            }
            if (document.getElementById("mas").checked)
            {
                mas = "non"
            }
            
            if (!e.target.classList.contains("edit")) {
                return;
                }
    
                else 
                {
                    const btn = e.target;
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
        let table = document.getElementById("table"),rIndex;
        function modifier(){
            row.children[2].innerHTML=document.getElementById("prix").value;
            row.children[0].innerHTML=document.getElementById("nom").value;
            row.children[1]. innerHTML= document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text ;
            row.children[3].innerHTML=document.getElementById("date").value;
            row.children[4].innerHTML=document.getElementById("sele").options[document.getElementById("sele").selectedIndex].text;
            row.children[5].innerHTML= document.querySelector("[type=radio]:checked").value;


        }

//    VALIDATIO
            // document.getElementById('nom').onkeyup=function(){

            //     var nom = document.getElementById('nom').value;
            //     var regex = /^[a-z]{1,30}$/ig;
            //     if(nom === '') {
            //     document.getElementById('Name').innerHTML = 'Nom is required.';
            //         document.getElementById('nom').style.borderColor="red";
        
            // } else if (regex.test(nom)) {
            //     document.getElementById('Name').innerHTML = '';
            //     document.getElementById('nom').style.borderColor="#09c372";
        
        
            // } else if (nom.length>30){
            //     document.getElementById('Name').innerHTML = 'where are u going';
            //     document.getElementById('nom').style.borderColor= "red";
        
            // } else {
            //     document.getElementById('Name').innerHTML = 'dont use numbers or chifre';
            //     document.getElementById('nom').style.borderColor="red";
        
        
            // }
            // }