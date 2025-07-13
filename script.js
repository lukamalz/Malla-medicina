function cambiarColor(select) {
  const estado = select.value.toLowerCase().replace(" ", "");
  const row = select.parentElement.parentElement;

  row.className = "";
  row.classList.add(estado);
}
