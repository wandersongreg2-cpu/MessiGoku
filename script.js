// Carrinho de compras
document.addEventListener("DOMContentLoaded", function () {
  const cartBtns = document.querySelectorAll(".btn-add");
  const cartCount = document.querySelector(".btn-primary span");

  let cart = [];

  // Adicionar ao carrinho
  cartBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));

      const item = cart.find(item => item.id === id);

      if (item) {
        alert(`${name} já está no carrinho!`);
      } else {
        cart.push({ id, name, price });
        updateCart();
        alert(`${name} adicionado ao carrinho!`);
      }
    });
  });

  // Atualizar contador do carrinho
  function updateCart() {
    const count = cart.length;
    cartCount.textContent = count;
  }

  // Enviar formulário de contato
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
    form.reset();
  });
});
