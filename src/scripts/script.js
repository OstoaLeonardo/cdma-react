import React from 'react';
import ReactDOM from 'react-dom';
import {TableUsers} from '../components/TableUsers.jsx';
import {TableCombinedSignals} from '../components/TableCombinedSignals.jsx';
import {Chart} from '../components/Chart.jsx';
import {TableGetData} from '../components/TableGetData.jsx';
import { data } from 'autoprefixer';

// Obtener el botón por su ID
var btnAnalyze = document.getElementById("btn-analyze");

// Agregar un evento de escucha al botón
btnAnalyze.addEventListener("click", function () { // Obtener los valores de los inputs
    deleteContaines();

    var inputData1 = document.getElementById("input-data-1").value;
    var inputCode1 = document.getElementById("input-code-1").value;
    var inputData2 = document.getElementById("input-data-2").value;
    var inputCode2 = document.getElementById("input-code-2").value;
    var inputData3 = document.getElementById("input-data-3").value;
    var inputCode3 = document.getElementById("input-code-3").value;

    // Calcular el XOR para cada usuario
    var xor1 = calculateXOR(inputData1, inputCode1);
    var xor2 = calculateXOR(inputData2, inputCode2);
    var xor3 = calculateXOR(inputData3, inputCode3);

    // Función para calcular el XOR entre dos cadenas de bits
    function calculateXOR(data, code) {
        var result = "";

        for (var j = 0; j < data.length; j++) {
            for (var i = 0; i < code.length; i++) {
                var dataBit = data.charAt(j);
                var codeBit = code.charAt(i);
                var xorBit = (dataBit === codeBit) ? "0" : "1";
                result += xorBit;
            }
        }
        return result;
    }

    // Mostrar los resultados en la consola
    console.log("XOR 1:", xor1);
    console.log("XOR 2:", xor2);
    console.log("XOR 3:", xor3);

    // Evaluar las señales
    var signal1 = evaluateSignals(xor1);
    var signal2 = evaluateSignals(xor2);
    var signal3 = evaluateSignals(xor3);

    // Función para evaluar cada XOR y asignar voltaje segun el bit
    function evaluateSignals(xor) {
        var result = [];

        for (var i = 0; i < xor.length; i++) {
            var xorBit = xor.charAt(i);
            var xorBit = (xorBit === "0") ? "1" : "-1";
            result.push(xorBit);
        }

        return result;
    }

    // Mostrar los resultados en la consola
    console.log("Signal 1: " + signal1);
    console.log("Signal 2: " + signal2);
    console.log("Signal 3: " + signal3);

    // Llamar a la función para renderizar la tabla
    renderTableUser(inputCode1, inputData1, xor1, signal1);
    renderTableUser(inputCode2, inputData2, xor2, signal2);
    renderTableUser(inputCode3, inputData3, xor3, signal3);

    renderGraph(xor1, signal1);
    renderGraph(xor2, signal2);
    renderGraph(xor3, signal3);

    // Combinar señales
    var combinedSignal = combinateSignals(signal1, signal2, signal3);

    // Función para combinar las señales
    function combinateSignals(signal1, signal2, signal3) {
        var result = [];

        for (var i = 0; i < signal1.length; i++) {
            var signalBit = parseInt(signal1[i]) + parseInt(signal2[i]) + parseInt(signal3[i]);
            result.push(signalBit);
        }

        return result;
    }

    // Mostrar los resultados en la consola
    console.log("Señal combinada: " + combinedSignal);

    renderTableCombinedSignals(signal1, signal2, signal3, combinedSignal);
    renderGraphCombined(combinedSignal);

    // Multiplicar las señales por la señal combinada
    var productSignal1 = multiplySignals(inputCode1);
    var productSignal2 = multiplySignals(inputCode2);
    var productSignal3 = multiplySignals(inputCode3);

    // Función para obtener la información
    function multiplySignals(code) {
        var result = [];
        var codeGraph = [];
        var count = 0;

        for (var i = 0; i < combinedSignal.length; i++) {
            (code.charAt(count) === "0") ? codeGraph.push(1) : codeGraph.push(-1);
            var productBit = codeGraph[i] * combinedSignal[i];
            result.push(productBit);
            count++;
            (count === code.length) ? count = 0 : count;
        }

        console.log("codeGraphComplete:" + codeGraph);
        renderGetDataGraph(codeGraph);
        return result;
    }

    // Mostrar los resultados en la consola
    console.log("Product Signal 1: " + productSignal1);
    console.log("Product Signal 2: " + productSignal2);
    console.log("Product Signal 3: " + productSignal3);

    // Promediar productos
    var averageProduct1 = averageProduct(productSignal1);
    var averageProduct2 = averageProduct(productSignal2);
    var averageProduct3 = averageProduct(productSignal3);

    // Función para obtener la información
    function averageProduct(productSignal) {
        var result = [];
        var sumProduct = 0;
        var count = 0;

        for (var i = 0; i < productSignal.length; i++) {
            sumProduct += productSignal[i];
            count++;

            if (count === inputCode1.length) {
                var averageBit = sumProduct / inputCode1.length;
                result.push(averageBit);
                sumProduct = 0;
                count = 0;
            }
        }

        return result;
    }

    // Mostrar los resultados en la consola
    console.log("Promedio 1: " + averageProduct1);
    console.log("Promedio 2: " + averageProduct2);
    console.log("Promedio 3: " + averageProduct3);

    var recoverData1 = recoverData(averageProduct1);
    var recoverData2 = recoverData(averageProduct2);
    var recoverData3 = recoverData(averageProduct3);

    // Función para recuperar data
    function recoverData(averageProduct) {
        var result = [];

        // for (var i = 0; i < averageProduct.length; i++) {
        //     var dataBit = averageProduct[i];
        //     var dataBit = (dataBit === 1) ? "0" : "1";
        //     result.push(dataBit);
        // }

        for (var i = 0; i < averageProduct.length; i++) {
            var dataBit = averageProduct[i];
            dataBit = (dataBit >= 0) ? "0" : "1";
            result.push(dataBit);
        }

        return result;
    }

    // Mostrar los resultados en la consola
    console.log("Recover 1: " + recoverData1);
    console.log("Recover 2: " + recoverData2);
    console.log("Recover 3: " + recoverData3);

    renderTableGetData(productSignal1, averageProduct1, recoverData1);
    renderTableGetData(productSignal2, averageProduct2, recoverData2);
    renderTableGetData(productSignal3, averageProduct3, recoverData3);
});

var tablesContainer = document.getElementById("tables-container");

// Función para crear una tabla y renderizarla en el contenedor
function renderTableUser(code, data, xor, signal) { // Crear un elemento Table y pasarle las propiedades
    var tableComponent = React.createElement(TableUsers, {
        code: code,
        data: data,
        xor: xor,
        signal: signal.join(' ')
    });

    // Crear un contenedor para la tabla
    var tableContainer = document.createElement("div");

    // Renderizar el componente Table en el contenedor de la tabla
    ReactDOM.render(tableComponent, tableContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    tablesContainer.appendChild(tableContainer);
}

var combinedSignalsContainer = document.getElementById("combined-signals-container");

function renderTableCombinedSignals(signal1, signal2, signal3, combinedSignals) { // Crear un elemento Table y pasarle las propiedades
    var tableComponent = React.createElement(TableCombinedSignals, {
        signal1: signal1.join(' '),
        signal2: signal2.join(' '),
        signal3: signal3.join(' '),
        combinedSignals: combinedSignals.join(' ')
    });

    // Crear un contenedor para la tabla
    var tableContainer = document.createElement("div");

    // Renderizar el componente Table en el contenedor de la tabla
    ReactDOM.render(tableComponent, tableContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    combinedSignalsContainer.appendChild(tableContainer);
}

var graphsContainer = document.getElementById("graphs-container");

function renderGraph(xor, signal) { // Renderizar el componente Chart y pasarle la lista signal1 como una propiedad
    var chartComponent = React.createElement(Chart, {
        title: xor,
        data: signal
    });

    // Crear un contenedor para la tabla
    var graphContainer = document.createElement("div");

    // Renderizar el componente Chart en el contenedor de gráficos
    ReactDOM.render(chartComponent, graphContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    graphsContainer.appendChild(graphContainer);
}

function renderGraphCombined(combinedSignal) { // Renderizar el componente Chart y pasarle la lista signal1 como una propiedad
    var chartComponent = React.createElement(Chart, {
        title: combinedSignal.join(' '),
        data: combinedSignal
    });

    // Crear un contenedor para la tabla
    var graphContainer = document.createElement("div");

    // Renderizar el componente Chart en el contenedor de gráficos
    ReactDOM.render(chartComponent, graphContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    combinedSignalsContainer.appendChild(graphContainer);
}

var getDataContainer = document.getElementById("get-data-container");

function renderTableGetData(product, average, data) { // Crear un elemento Table y pasarle las propiedades
    var tableComponent = React.createElement(TableGetData, {
        product: product.join(' '),
        average: average.join(' '),
        data: data
    });

    // Crear un contenedor para la tabla
    var tableContainer = document.createElement("div");

    // Renderizar el componente Table en el contenedor de la tabla
    ReactDOM.render(tableComponent, tableContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    getDataContainer.appendChild(tableContainer);
}

var getDataGraphContainer = document.getElementById("get-data-graphs-container");

function renderGetDataGraph(codeGraph) { // Renderizar el componente Chart y pasarle la lista signal1 como una propiedad
    var chartComponent = React.createElement(Chart, {
        title: codeGraph.join(' '),
        data: codeGraph
    });

    // Crear un contenedor para la tabla
    var graphContainer = document.createElement("div");

    // Renderizar el componente Chart en el contenedor de gráficos
    ReactDOM.render(chartComponent, graphContainer);

    // Agregar el contenedor de la tabla al contenedor principal
    getDataGraphContainer.appendChild(graphContainer);
}

function deleteContaines() {
    document.getElementById("tables-container").innerHTML = "";
    document.getElementById("graphs-container").innerHTML = "";
    document.getElementById("combined-signals-container").innerHTML = "";
    document.getElementById("get-data-graphs-container").innerHTML = "";
    document.getElementById("get-data-container").innerHTML = "";
}