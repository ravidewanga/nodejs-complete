const excelJS = require("exceljs");
const {getUsers} = require('./controller/ctrl');

const get = async () => {
    const workbook = new excelJS.Workbook(); 
    const worksheet = workbook.addWorksheet("My Users");
    const path = "./files";

    var User = await getUsers();
    
    var columns = [];
    x="data1"
    y="data2"
    z="data3"
    columns.push({ header: x, key: x })
    columns.push({ header: y, key: y})
    columns.push({ header: z, key: z})
    

    let counter = 1;
    User.forEach((user) => {
        worksheet.addRow([counter,user.firstName,user.lastName]); // Add data in worksheet
        counter++;
    });
    
    worksheet.columns = columns

    // Making first line in excel bold
    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });

    try {
        const data = await workbook.xlsx.writeFile(`${path}/users.xlsx`)
         .then(() => {
           console.log({
             status: "success",
             message: "file successfully downloaded",
             path: `${path}/users.xlsx`,
            });
         });
      } catch (err) {
        console.log({
          status: "error",
          message: "Something went wrong",
        });
    }
    
}

get();