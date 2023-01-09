const json = require('./db.json')

export const colunaPessoa =[
    {
        nome: "Nome", classe:"borda-lateral", sort: true
    },
    {   
        nome: "E-mail", classe:"borda-lateral", sort: true
    },
    {
        nome: "Telefone", classe:"", sort: true
    },
]

export const colunaEspecialidade =[
    {
        nome: "Nome", classe:"borda-lateral", sort: true
    },
    {
        nome: "Especialidade", classe:"borda-lateral", sort: true
    },
    {
        nome: "Status", classe:"", sort: true
    },
]

export const linhaPaciente =[
    {
        coluna1: "Paciente Sobrenome 1", coluna2: "p1@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Paciente Sobrenome 2", coluna2: "p2@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Paciente Sobrenome 3", coluna2: "p3@gmail.com", coluna3: "32991608320"  
    },
]

export const linhaDentista =[
    {
        coluna1: "Dentista Sobrenome 1", coluna2: "d1@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Dentista Sobrenome 2", coluna2: "d2@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Dentista Sobrenome 3", coluna2: "d3@gmail.com", coluna3: "32991608320"  
    },
]

export const linhaRecepcionista =[
    {
        coluna1: "Recepcionista 1", coluna2: "rp1@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Recepcionista 2", coluna2: "rp2@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Recepcionista 3", coluna2: "rp3@gmail.com", coluna3: "32991608320"  
    },
]

export const linhaConvenio =[
    {
        coluna1: "Convenio 1", coluna2: "c1@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Convenio 2", coluna2: "c2@gmail.com", coluna3: "32991608320"  
    },
    {
        coluna1: "Convenio 3", coluna2: "c3@gmail.com", coluna3: "32991608320"  
    },
]

export const linhaProcedimento =[
    {
        coluna1: "Procedimento  1", coluna2: "Especialidade 1", coluna3: "Ativo"  
    },
    {
        coluna1: "Procedimento 2", coluna2: "Especialidade 2", coluna3: "Ativo"  
    },
    {
        coluna1: "Procedimento 3", coluna2: "Especialidade 3", coluna3: "Inativo"  
    },
]

export const linhaEspecialidade =[
    {
        coluna1: "Procedimento  1", coluna2: "Especialidade 1", coluna3: "Ativo"  
    },
    {
        coluna1: "Procedimento 2", coluna2: "Especialidade 2", coluna3: "Ativo"  
    },
    {
        coluna1: "Procedimento 3", coluna2: "Especialidade 3", coluna3: "Inativo"  
    },
]