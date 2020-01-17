$(document).ready(function() {
    appeler()
})



var afficher = $("#aff")
$(afficher).on('click', appeler)



//! Afficher la liste dans un tableau Bootstrap.



function appeler() {
    $.post({
        url: "http://jihane.fr/dwmg2/api/biere/bieres.php",
        success: function(bieres) {
            $("#tab tr").remove()

            for (i = 0; i < bieres.length; i++) {
                var id = bieres[i].id
                var nom = bieres[i].nom
                var tr = $("<tr></tr>")
                $("#tab").append($(tr))
                var td = $("<td></td>").text(id)
                $(tr).append($(td))
                var td = $("<td></td>").text(nom)
                $(tr).append($(td))
                var td = $("<td></td>").html('<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="un(' + id + ')">+ d\'info</button>')
                $(tr).append($(td))
            }
        },
        dataType: "json"
    });
}



//! Affiche une seule bière.



function un(ligne) {
    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/unebiere.php",
        data: {
            id: ligne
        },
        success: function appeldeux(unebiere) {

            var didi = unebiere.id
            $("#id2").val(didi)
            var n = unebiere.nom
            $("#name").val(n)
            var p = unebiere.pays
            $("#country").val(p)
            var d = unebiere.degres
            $("#degrees").val(d)
            var a = unebiere.amertume
            $("#bitterness").val(a)
            var c = unebiere.couleur
            $("#color").val(c)
            var pr = unebiere.prix
            $("#price").val(pr)
        },
        dataType: "json"
    })
}



//! Supprimer les bières via le bouton modal en Bootstrap.



var supprim = $("#sup")
$(supprim).on('click', supp)

function supp(corbeille) {
    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/deletebiere.php",
        data: {
            id: $("#id2").val()
        },
        success: function(deletebiere) {
            appeler()
        },
        dataType: "text"
    });
}



//! Modifier les bières via le bouton modal en Bootstrap.



var modificate = $("#modif")
$(modificate).on('click', modification)

function modification() {
    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/update.php",
        data: {
            id: $("#id2").val(),
            nom: $("#name").val(),
            pays: $("#country").val(),
            degres: $("#degrees").val(),
            amertume: $("#bitterness").val(),
            couleur: $("#color").val(),
            prix: $("#price").val(),
        },
        success: function(update) {
            appeler()
        },
        dataType: "text"
    });
}



//! Créer les bières via le bouton modal en Bootstrap.



var creer = $("#plus")
$(creer).on('click', creation)

function creation() {
    $.post({
        url: "http://jihane.fr/dwmg2/api/biere/newbeer.php",
        data: {
            id: $("#id22").val(),
            nom: $("#name2").val(),
            pays: $("#country2").val(),
            degres: $("#degrees2").val(),
            amertume: $("#bitterness2").val(),
            couleur: $("#color2").val(),
            prix: $("#price2").val(),
        },
        success: function(newbeer) {
            appeler()
        },
        dataType: "json"
    });
}



//! Trier les bières via le bouton modal en Bootstrap.



var trier = $("#triage")
$(trier).on('click', trie)

function trie() {
    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/tri.php",
        data: {
            pays: $("#country3").val(),
            degres: $("#degrees3").val(),
            couleur: $("#color3").val(),
        },
        success: function(tri) {
            $("#tab tr").remove()

            for (i = 0; i < tri.length; i++) {
                var id = tri[i].id
                var nom = tri[i].nom
                var tr = $("<tr></tr>")
                $("#tab").append($(tr))
                var td = $("<td></td>").text(id)
                $(tr).append($(td))
                var td = $("<td></td>").text(nom)
                $(tr).append($(td))
                var td = $("<td></td>").html('<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="un(' + id + ')">+ d\'info</button>')
                $(tr).append($(td))
            }
        },
        dataType: "json"
    })
}