export const formatarCPF = (value) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço

    return value;
  };

  export const formatarCEP = (value) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no final

    return value;
  };

  export const formatarTelefone = (value) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Adiciona os parênteses para o DDD
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Adiciona os parênteses para o DDD e o traço
    }

    return value;
  };
