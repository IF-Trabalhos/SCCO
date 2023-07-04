export const formatarCPF = (value) => {
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 

    return value;
  };

  export const formatarCEP = (value) => {
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); 

    return value;
  };

  export const formataNumero = (value) =>{
    value = value.replace(/\D/g, '');

    return value;
  }

  export const formataUf = (value) => {
    value = value.replace(/[^A-Za-z]/g, '').toUpperCase();

    return value
  }

  export const formatarTelefone = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2'); 
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return value;
  };

  export const getListaMeses = () => {
    const lista = [];
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
  
    for (let i = 0; i < 6; i++) {
      const mes = (mesAtual - i + 12) % 12;
      lista.unshift(mes);
    }
  
    return lista;
  }
