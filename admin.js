const auth = firebase.auth();


auth.onAuthStateChanged((user) => {
  // Verifica se o usuário está logado e é o admin
  if (!user || user.email !== "xgabrielpessoal@gmail.com") {
    alert("Acesso não autorizado.");
    window.location.href = "index.html";
    return;
  }

  // Se for admin, carrega os dados dos fãs
  db.collection("respostasQuiz").get().then((querySnapshot) => {
    const container = document.getElementById("listaFans");
    container.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${data.email}</td>
        <td>${data.jogoFavorito}</td>
        <td>${data.tempoFã}</td>
        <td>${data.evento}</td>
      `;

      container.appendChild(linha);
    });
  }).catch((error) => {
    console.error("Erro ao carregar respostas:", error);
  });
});
