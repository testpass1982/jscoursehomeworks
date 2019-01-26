function chessFieldGenerate() {
    let field = document.getElementById("chess_field");
    console.log('hi');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 8; i++) {
        field.innerHTML+=`<div class="chess_field_row_number">${i+1}</div>`;
        for (let j = 0; j < 8; j++) {
            if (i%2 == j%2) {
                field.innerHTML+='<div class="chess_field_cell"></div>'
            } else {
                field.innerHTML+='<div class="dark_chess_field_cell"></div>'
            }
        }
    }
    letters.forEach(function(letter){
        field.innerHTML+=`<div class="chess_field_letter">${letter}</div>`
    })
}

window.onload = chessFieldGenerate;