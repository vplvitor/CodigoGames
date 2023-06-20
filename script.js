// post
function createDeleteButton(idRegister) {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteRegister(idRegister);
    };
    return deleteButton;
  }
  function deleteRegister(idRegister) {
    let url = "https://localhost:5500/register/" + idRegister;
    fetch(url, {
      method: "DELETE",
    })
      .then(function (response) {
        if (response.ok) {
          console.log("Registro deletado com sucesso");
        } else {
          throw new Error("Ocorreu um erro ao deletar o registro");
        }
      })
      .catch(function (error) {
        console.error("Erro de conexão com a API:", error);
      });
  }
document.getElementById('formRegister').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birth = document.getElementById('birth').value;
  
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, birth }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Cadastro realizado.');
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Erro durante cadastro.');
      });
  });

// put
document.getElementById('formRegister').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const id = 1; // Substitua pelo ID do usuário que você deseja atualizar
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birth = document.getElementById('birth').value;
  
    fetch(`/register/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, birth }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Cadastro atualizado.');
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Erro durante a atualização de cadastro.');
      });
  });

// select account
window.addEventListener('load', function () {
    var tAccount = document.getElementById('tabelaAccount');
    var tbody = tAccount.querySelector('tbody');
function fetchIdRegister(idRegister) {
        fetch('https://localhost:5500/register/' + idRegister)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Ocorreu um erro ao obter os dados da API.');
                }
            })
            .then(function (data) {
                console.log(data);
                var newRow = tbody.insertRow();
                newRow.insertCell().textContent = data.idRegister;
                newRow.insertCell().textContent = data.name;
                newRow.insertCell().textContent = data.email;
                newRow.insertCell().textContent = data.password;
                newRow.insertCell().textContent = data.birth;
            })
            .catch(function (error) {
                console.error('Erro de conexão com a API:', error);
            });
    }
    function getURLParameter(name) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    var idRegister = getURLParameter('idRegister');
    if (idRegister) {
        fetchIdRegister(idRegister);
    }
});
// select buy
window.addEventListener("load", function () {
    var tGames = document.getElementById("tabelaBuy");
    var tbody = tGames.querySelector("tbody");
    fetch("https://localhost:5500/buys")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Ocorreu um erro ao obter os dados da API.");
            }
        })
        .then(function (data) {
            // Preencher a tabela com os dados obtidos
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var newRow = tbody.insertRow();
                newRow.insertCell().textContent = data[i].name;
                newRow.insertCell().textContent = data[i].price;
                var buyButtonCell = newRow.insertCell();
                var buyButton = document.createElement("button");
                buyButton.className = "btn btn-success btn-outline-dark btn-sm";
                var cartImage = document.createElement("img");
                cartImage.src = "cart.png";
                cartImage.alt = "cart.png";
                buyButton.appendChild(cartImage);
                buyButtonCell.appendChild(buyButton);
            }
        })
        .catch(function (error) {
            console.error("Erro de conexão com a API:", error);
        });
});
// select all account and buy

  

// faz post antigo
function insertRegister(register) {
    console.log(register);
    fetch("http://localhost:5500/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
    
      .then(function (response) {
        if (response.ok) {
            console.log(register);
            console.log(body);
          console.log("Registro inserido com sucesso");
          return response.json();
        } else {
          throw new Error("Ocorreu um erro ao inserir o registro");
        }
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error("Erro de conexão com a API:", error);
      });
  }
  function fazPost(url, body){
//---------------------------------------------------------------------------
let req = new XMLHttpRequest()
req.open("POST", url, true)
req.setRequestHeader("Content-type", "application/json")
req.send(JSON.stringify(body))
req.onload = function(){
console.log(this.responseText)
}
return req.responseText
}


function cadastrarUsuario(){
let url = "http://localhost:5500/register"
let name = document.getElementById('name').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
let birth = document.getElementById('birth').value
body = {
'name': name,
'email': email,
'password': password,
'birth': birth
}
console.log(body);
fazPost(url, body)
}