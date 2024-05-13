  const fs = require('fs'); // Importar o módulo fs
const { link } = require('fs/promises');


  function extrairInformacoes(texto, cnae) {
  const padroes = {
    CNPJ: /CNPJ\s+(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})/,
    RazaoSocial: /Razão Social\s+(.+)/,
    NomeFantasia: /Nome Fantasia\s+(.+)/,
    Tipo: /Tipo\s+(.+)/,
    DataAbertura: /Data Abertura\s+(\d{2}\/\d{2}\/\d{4})/,
    SituacaoCadastral: /Situação Cadastral\s+(.+)/,
    DataSituacaoCadastral: /Data da Situação Cadastral\s+(\d{2}\/\d{2}\/\d{4})/,
    CapitalSocial: /Capital Social\s+(.+)/,
    NaturezaJuridica: /Natureza Jurídica\s+(.+)/,
    empresaMEI: /Empresa MEI\s+(.+)/,
    Logradouro: /Logradouro\s+(.+)/,
    Numero: /Número\s+(.+)/,
    Complemento: /Complemento\s+(.+)/,
    CEP: /CEP\s+(\d{5}-\d{3})/,
    Bairro: /Bairro\s+(.+)/,
    Municipio: /Município\s+(.+)/,
    UF: /UF\s+(.+)/,
    Telefone: /Telefone\s+([\d\s-]+)/,
    Email: /E-MAIL\s+(.+)/,
  };
  const informacoes = {};

  // Simplificar o loop
  for (const chave in padroes) {
    const correspondencia = texto.match(padroes[chave]);
    informacoes[chave] = correspondencia ? correspondencia[1].trim(1) : null;
  }

  // Incluir CNAE
  informacoes.cnae = cnae; 
  return informacoes;
}

// JSON de entrada (fora da função)
const jsonInput = [];

// Processar cada objeto do JSON
const informacoesSeparadas = jsonInput.map(item => {
  return extrairInformacoes(item.Informações, item.CNAE); // Remover ";" extra
});

// Exibir resultados
console.log("Lista de Empresas:", informacoesSeparadas);  // Vai organizar todos os jasons especificados anteriormente especificado

// Converter a lista de objetos em texto
const textoParaSalvar = JSON.stringify(informacoesSeparadas, null, 2); // Indentação para melhor legibilidade

// Salvar o texto no arquivo 'informacoes.txt'
fs.writeFile('informacoes para Quimicos CE exportar.txt', textoParaSalvar, (err) => {
  if (err) throw err;
  console.log('Informações salvas com sucesso no arquivo informacoes.txt!');
});