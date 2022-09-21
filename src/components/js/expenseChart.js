import React from "react";
import Chart from "./chart/Chart";

function expenseChart(props) {
    const barData=[
        {label:'Jan' , value : 0},
        {label:'Feb' , value : 0},
        {label:'Mar' , value : 0},
        {label:'Apr' , value : 0},
        {label:'May' , value : 0},
        {label:'Jun' , value : 0},
        {label:'JuL' , value : 0},
        {label:'Aug' , value : 0},
        {label:'Sep' , value : 0},
        {label:'Oct' , value : 0},
        {label:'Nov' , value : 0},
        {label:'Dec' , value : 0},
    ];
    let maxBar=0;
    for (let expense of props.expenses) {
        const expenseMonth=expense.date.getMonth();
        barData[expenseMonth].value += parseInt(expense.amount);
        maxBar+= parseInt(expense.amount)
    }
    // let maxBar=0;

    // barData.map((content) => (maxBar += content.value));

    // props.expenses.map((exp)=>(
    //     maxBar+= parseInt(exp.amount)
    //     ))
        // console.log(maxBar);

  return <Chart dataPoints={barData}  totalMaximum={maxBar} />;
}

export default expenseChart;
 