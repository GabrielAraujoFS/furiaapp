const auth = firebase.auth();

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "quiz.html";
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
}

function cadastrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Cadastro realizado! Agora faça o login.");
    })
    .catch(error => {
      alert("Erro ao cadastrar: " + error.message);
    });
}

// Agora sim, fora da função cadastrar
function loginAdmin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  auth.signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      
      if (user.email === "xgabrielpessoal@gmail.com") {
        alert("Bem-vindo, administrador!");
        window.location.href = "admin.html";
      } else {
        alert("Você não tem permissão de administrador.");
        auth.signOut();
      }
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error.message);
      alert("Email ou senha incorretos.");
    });
}
