import * as XLSX from  'xlsx';
import * as path from 'path';
export function getDataFromExcel(sheetname: string, testCaseName:string){
    const filePath=path.join(process.cwd(),'testdata','testdata.xlsx')
    const workbook=XLSX.readFile(filePath);
    const worksheet=workbook.Sheets[sheetname]
    const data=XLSX.utils.sheet_to_json(worksheet)
    return data.filter((row:any)=>row.testCaseName === testCaseName)
}
