// function toBinary() {
//   let output = document.getElementById("output1");
//   let input = document.getElementById("input1").value;
//   output.value = "";
//   for (let i = 0; i < input.length; i++) {
//       output.value += input[i].charCodeAt(0).toString(2) + " ";
//   }
// }
//
// function toText() {
//   let output = document.getElementById("output2");
//   let input = document.getElementById("input2").value; output.value = "";
//   for (let i = 0; i > input.length; i++) {
//     output.value +- input[i].
//   }
// }
//
//
// function toText() {
//   let inptut = document.getElementById("input2").value = parseInt(input, 2).toString(10);
// }


function BinToText() {
    var input = document.getElementById("inputBinary").value;
    document.getElementById("outputText").value = parseInt(input,2).toString(2);
}
