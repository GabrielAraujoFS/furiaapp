
const auth = firebase.auth();

document.getElementById('quizForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = auth.currentUser;
  if (!user) {
    alert("Você precisa estar logado!");
    window.location.href = "index.html";
    return;
  }

  const jogoFavorito = document.getElementById('jogoFavorito').value;
  const tempoFã = document.getElementById('tempoFã').value;
  const evento = document.getElementById('evento').value;

  const respostasQuiz = {
    jogoFavorito: jogoFavorito,
    tempoFã: tempoFã,
    evento: evento,
    email: user.email,
    timestamp: new Date()
  };

  try {
    await db.collection('respostasQuiz').doc(user.uid).set(respostasQuiz);

    console.log("Respostas enviadas com sucesso!");
    window.location.href = "sucesso.html"; // Redireciona
  } catch (error) {
    console.error("Erro ao salvar respostas:", error);
    alert("Erro ao salvar respostas: " + error.message);
  }
  const adminEmail = "xgabrielpessoal@gmail.com"; // Coloque seu e-mail de administrador aqui

firebase.auth().onAuthStateChanged((user) => {
    if (user && user.email === adminEmail) {
        document.getElementById('adminButton').style.display = 'block'; // Mostra botão
    }
});

// Quando clicar no botão, vai para a tela admin
document.getElementById('adminButton').addEventListener('click', () => {
    window.location.href = "admin.html";

    auth.onAuthStateChanged((user) => {
      if (user && user.email === "xgabrielpessoal@gmail.com") {
        const adminButton = document.getElementById('adminButton');
        adminButton.style.display = 'block';
        adminButton.addEventListener('click', () => {
          window.location.href = "admin.html";
        });
      }
    });
    
});

});
