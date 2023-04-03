// O campo Fabricante só fica habilitado quando o campo anotação de saúde tiver os valores Vacina Covid 1° Dose, Vacina Covid 2° Dose e Vacina Covid Dose Reforço.
toogleManufacturer() {
  this.fields.manufacturer.disabled = ![53, 54, 63].includes(this.fields.healthNote.value);
}

// O campo Comprovante vacina só fica habilitado quando o campo anotação de saúde tiver os valores Vacina Covid 1° Dose, Vacina Covid 2° Dose e Vacina Covid Dose Reforço.
toogleProofOfVaccination() {
  this.fields.proofOfVaccination.disabled = ![53, 54, 63].includes(this.fields.healthNote.value);
}

// O campo Comprovante vacina / Fabricante só fica habilitado quando o campo anotação de saúde tiver os valores Vacina Covid 1° Dose, Vacina Covid 2° Dose e Vacina Covid Dose Reforço.
toogleFields() {
  // Reduz o acesso às propriedades de um objeto e aplica extract variable.
  const selectedHealthNote = this.fields.healthNote.value;
  // Agrega as duas lógicas em um único método.
  this.fields.manufacturer.disabled = ![53, 54, 63].includes(selectedHealthNote);
  this.fields.proofOfVaccination.disabled = ![53, 54, 63].includes(selectedHealthNote);
}