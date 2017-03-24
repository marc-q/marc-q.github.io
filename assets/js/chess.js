/* Chess.js - Coypright 2017 Marc Volker Dickmann */
function log_print (msg)
{
	if (msg === "")
	{
		return null;
	}
	var logbox = document.getElementById ('cjs_log');
	
	logbox.value = logbox.value + msg + '\n';
}

function board_piece_place (f, piece, color)
{
	switch (piece)
	{
		case 'P':
			f.textContent = '\u265F';
			break;
		case 'N':
			f.textContent = '\u265E';
			break;
		case 'B':
			f.textContent = '\u265D';
			break;
		case 'R':
			f.textContent = '\u265C';
			break;
		case 'Q':
			f.textContent = '\u265B';
			break;
		case 'K':
			f.textContent = '\u265A';
			break;
		default:
			break
	}
	f.style.color = color;
	f.draggable = true;
}

function board_piece_get_symbol (symbol)
{
	switch (symbol)
	{
		case '\u265F':
			return 'P';
		case '\u265E':
			return 'N';
		case '\u265D':
			return 'B';
		case '\u265C':
			return 'R';
		case '\u265B':
			return 'Q';
		case '\u265A':
			return 'K';
		default:
			break
	}
	return null;
}

function board_get_field (b, notation)
{
	var y = parseInt(notation[1]) - 1;
	switch (notation[0])
	{
		case 'a':
			return b[y][7];
		case 'b':
			return b[y][6];
		case 'c':
			return b[y][5];
		case 'd':
			return b[y][4];
		case 'e':
			return b[y][3];
		case 'f':
			return b[y][2];
		case 'g':
			return b[y][1];
		case 'h':
			return b[y][0];
		default:
			break;
	}
	return null;
}

function board_piece_move_n (b, src, dest)
{
	if (src === dest || src === "" || dest === "")
	{
		return null;
	}
	var f_src = board_get_field (b, src);
	var f_dest = board_get_field (b, dest);
	var symbol = board_piece_get_symbol (f_src.textContent);
	console.log (src + " " + dest);
	log_print (symbol + dest);
	board_piece_place (f_dest, symbol, f_src.style.color);
	
	f_src.textContent = "";
	f_src.draggable = false;
}

function board_init(b)
{
	// Pawns
	for (var i = 0; i < 8; i++)
	{
		board_piece_place (b[1][i], "P", "black");
		board_piece_place (b[6][i], "P", "white");
	}
	
	// Rooks
	board_piece_place (b[0][0], "R", "black");
	board_piece_place (b[0][7], "R", "black");
	
	board_piece_place (b[7][0], "R", "white");
	board_piece_place (b[7][7], "R", "white");
	
	// Knights
	board_piece_place (b[0][1], "N", "black");
	board_piece_place (b[0][6], "N", "black");
	
	board_piece_place (b[7][1], "N", "white");
	board_piece_place (b[7][6], "N", "white");
	
	// Bishops
	board_piece_place (b[0][2], "B", "black");
	board_piece_place (b[0][5], "B", "black");
	
	board_piece_place (b[7][2], "B", "white");
	board_piece_place (b[7][5], "B", "white");
	
	// Queens
	board_piece_place (b[0][3], "Q", "black");
	board_piece_place (b[7][3], "Q", "white");
	
	// Kings
	board_piece_place (b[0][4], "K", "black");
	board_piece_place (b[7][4], "K", "white");
}
	
window.onload = function()
{
	var b = [];
	
	b[0] = [];
	b[0] = document.querySelectorAll("tr#cjs_board_1 td div");
	
	b[1] = [];
	b[1] = document.querySelectorAll("tr#cjs_board_2 td div");
	
	b[2] = [];
	b[2] = document.querySelectorAll("tr#cjs_board_3 td div");
	
	b[3] = [];
	b[3] = document.querySelectorAll("tr#cjs_board_4 td div");
	
	b[4] = [];
	b[4] = document.querySelectorAll("tr#cjs_board_5 td div");
	
	b[5] = [];
	b[5] = document.querySelectorAll("tr#cjs_board_6 td div");
	
	b[6] = [];
	b[6] = document.querySelectorAll("tr#cjs_board_7 td div");
	
	b[7] = [];
	b[7] = document.querySelectorAll("tr#cjs_board_8 td div");
	
	for (var y = 0; y < 8; y++)
	{
		for (var x = 0; x < 8; x++)
		{
			b[y][x].draggable = false;
		}
	}
	board_init (b);
	
	document.addEventListener("dragstart", function(event) {
		event.dataTransfer.setData("text/plain", event.target.id);
	}, false);
	
	document.addEventListener("dragover", function(event) {
		event.preventDefault();
	}, false);
	
	document.addEventListener("drop", function(event) {
		event.preventDefault();
		board_piece_move_n (b, event.dataTransfer.getData("text/plain"), event.target.id);
	}, false);
}
