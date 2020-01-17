var btn = document.getElementById("aff");
btn.addEventListener("click", function() { affiche() });


//todo Afficher tous les éléments dans le tableau.


function affiche() {
    fetch('http://jihane.fr/dwmg2/api/voiture/liste.php')
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(voitures) {
                console.log(voitures)
                for (i = 0; i < voitures.length; i++) {
                    var tr = document.createElement("tr");
                    document.getElementById("tab").appendChild(tr)
                    tr.innerHTML += "<td>" + voitures[i].id + "</td>"
                    tr.innerHTML += "<td>" + voitures[i].marque + "</td>"
                    tr.innerHTML += "<td>" + voitures[i].prix + "</td>"
                    tr.innerHTML += "<td><button type='button' class='btn btn-info' data-toggle='modal' data-target='#exampleModal' onclick='un(" + voitures[i].id + ")'>+ Info</button></td>"
                }
            }
        )
}


//todo Afficher un seul élément dans le modal "Info" du tableau.


function un() {
    fetch('http://jihane.fr/dwmg2/api/voiture/read.php?id=id')
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(voitures) {
                for (i = 0; i < voitures.length; i++) {
                    var f = document.getElementById("formul")
                    document.getElementById("id2").appendChild(f).id
                    document.getElementById("brand").appendChild(f).marque
                    document.getElementById("model").appendChild(f).model
                    document.getElementById("range").appendChild(f).gamme
                    document.getElementById("price").appendChild(f).prix
                }
            }
        )
}


//todo Créer un élément dans le tableau.











// $(document).ready(function() {
//     appeler()
// })



// var afficher = $("#aff")
// $(afficher).on('click', appeler)



// //! Afficher la liste dans un tableau Bootstrap.



// function appeler() {
//     $.post({
//         url: "http://jihane.fr/dwmg2/api/voiture/liste.php",
//         success: function(voitures) {
//             console.log(voitures)
//             $("#tab tr").remove()

//             for (i = 0; i < voitures.length; i++) {
//                 var id = voitures[i].id
//                 var marque = voitures[i].marque
//                 var prix = voitures[i].prix
//                 var tr = $("<tr></tr>")
//                 $("#tab").append($(tr))
//                 var td = $("<td></td>").text(id)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").text(marque)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").text(prix)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").html('<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="un(' + id + ')">+ d\'info</button>')
//                 $(tr).append($(td))
//             }
//         },
//         dataType: "json"
//     });
// }



// //! Affiche une seule bière.



// function un(ligne) {
//     $.get({
//         url: "http://jihane.fr/dwmg2/api/voiture/read.php",
//         data: {
//             id: ligne
//         },
//         success: function appeldeux(read) {

//             var didi = read.id
//             $("#id2").val(didi)
//             var ma = read.marque
//             $("#brand").val(ma)
//             var mo = read.model
//             $("#model").val(mo)
//             var g = read.gamme
//             $("#range").val(g)
//             var p = read.prix
//             $("#price").val(p)
//         },
//         dataType: "json"
//     })
// }



// //! Supprimer les voitures via le bouton modal en Bootstrap.



// var supprim = $("#sup")
// $(supprim).on('click', supp)

// function supp(corbeille) {
//     $.get({
//         url: "http://jihane.fr/dwmg2/api/voiture/delete.php",
//         data: {
//             id: $("#id2").val()
//         },
//         success: function(corbeille) {
//             appeler()
//         },
//         dataType: "text"
//     });
// }



// //! Modifier les voitures via le bouton modal en Bootstrap.



// var modificate = $("#modif")
// $(modificate).on('click', modification)

// function modification() {
//     $.get({
//         url: "http://jihane.fr/dwmg2/api/voiture/update.php",
//         data: {
//             id: $("#id2").val(),
//             marque: $("#brand").val(),
//             model: $("#model").val(),
//             gamme: $("#range").val(),
//             prix: $("#price").val(),
//         },
//         success: function(update) {
//             appeler()
//         },
//         dataType: "text"
//     });
// }



// //! Créer les voitures via le bouton modal en Bootstrap.



// var creer = $("#plus")
// $(creer).on('click', creation)

// function creation() {
//     $.post({
//         url: "http://jihane.fr/dwmg2/api/voiture/create.php",
//         data: {
//             id: $("#id22").val(),
//             marque: $("#brand2").val(),
//             model: $("#model2").val(),
//             gamme: $("#range2").val(),
//             prix: $("#price2").val(),
//         },
//         success: function(create) {
//             appeler()
//         },
//         dataType: "json"
//     });
// }



// //! Trier les voitures via le bouton modal en Bootstrap.



// var trier = $("#triage")
// $(trier).on('click', trie)

// function trie() {
//     $.get({
//         url: "http://jihane.fr/dwmg2/api/voiture/tri.php",
//         data: {
//             marque: $("#brand3").val(),
//             gamme: $("#range3").val(),
//         },
//         success: function(tri) {
//             $("#tab tr").remove()

//             for (i = 0; i < tri.length; i++) {
//                 var id = tri[i].id
//                 var marque = tri[i].marque
//                 var prix = tri[i].prix
//                 var tr = $("<tr></tr>")
//                 $("#tab").append($(tr))
//                 var td = $("<td></td>").text(id)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").text(marque)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").text(prix)
//                 $(tr).append($(td))
//                 var td = $("<td></td>").html('<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="un(' + id + ')">+ d\'info</button>')
//                 $(tr).append($(td))
//             }
//         },
//         dataType: "json"
//     })
// }