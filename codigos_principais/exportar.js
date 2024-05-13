
const XLSX = require('xlsx'); //Esta linha importa a biblioteca xlsx, que permite ler, escrever e manipular arquivos do Excel.


/*   Aqui definimos uma variável jsons que contém um array de objetos JSON. 
Cada objeto representa um registro com informações como cnpj, razão social, endereço, etc. */
const jsons = [];

const workbook = XLSX.utils.book_new(); //Criamos uma nova pasta de trabalho (workbook) do Excel vazia usando o método book_new() da biblioteca xlsx.

const sheet = XLSX.utils.json_to_sheet(jsons); /* O array jsons é convertido em uma planilha usando o método json_to_sheet(). 
                                                  Cada objeto do array se torna uma linha na planilha, com as propriedades do objeto como colunas. */

workbook.SheetNames.push('Informações'); /* Adicionamos a planilha à pasta de trabalho com o nome "Informações".  
                                          Definimos a propriedade SheetNames da pasta de trabalho com o nome da planilha */ 
                                         
workbook.Sheets['Informações'] = sheet; //E atribuímos a planilha à propriedade Sheets da pasta de trabalho com o mesmo nome.

XLSX.writeFile(workbook, '2024-05-13 Quimicos CE.xlsx'); /* Finalmente, salvamos a pasta de trabalho 
                                                          do Excel criada em um arquivo chamado "2024-04-29 Quimicos GO.xlsx" 
                                                          usando o método writeFile() da biblioteca xlsx. */