window.tableAutoLayout = {};
window.tableAutoLayout.layoutTable = function( table, tableCellContentCallbackContext, tableCellContentCallback, numCells, blockWidth ){
	// Get the table width
	tableWidth = table.parent().width();

	// Get the number of cells per row
	numberOfCellsPerRow = Math.max( 1, Math.floor( tableWidth / blockWidth ) );
	
	// Get the number of rows
	numberOfRows = Math.ceil( numCells / numberOfCellsPerRow );

	// Clear current content
	table.html("<tbody></tbody>");
	tbody = table.find('tbody');

	// Start outputting!
	for( var rowIndex = 0; rowIndex < numberOfRows; rowIndex++ ){
			// Add a row to the table
			row = $('<tr class="auto-layout-table-row">');

			for( var colIndex = 0; colIndex < numberOfCellsPerRow; colIndex++ ){
				cellNumber = colIndex + rowIndex * numberOfCellsPerRow;

				if( cellNumber >= numCells ){
						break;
				}

				// Add a cell to the row
			  var cell = $('<td class="auto-layout-table-cell">');

				// Get the content for the cell
				cellContent = tableCellContentCallback( cellNumber, tableCellContentCallbackContext );

				// Add the content to the cell
				$( cellContent ).appendTo( cell ); //cell.append( cellContent );

				cell.appendTo( row );
			}

			row.appendTo( tbody );
	}
};

window.tableAutoLayout.tables = [];
window.tableAutoLayout.addTable = function( tableSelector, cellContentsList, cellTemplateSelector, cellWidth, cellContentsCallback ){

	var autoLayoutTable = {};

	autoLayoutTable.tableSelector = tableSelector;
	autoLayoutTable.cellContentsList = cellContentsList;
	autoLayoutTable.cellTemplateSelector = cellTemplateSelector;
	autoLayoutTable.cellWidth = cellWidth;
	autoLayoutTable.cellContentsCallback = cellContentsCallback;

	window.tableAutoLayout.tables.push( autoLayoutTable );
	window.tableAutoLayout.layout();
};

window.tableAutoLayout.layout = function(){
	var tables = window.tableAutoLayout.tables;

	for (var i = 0; i < tables.length; i++) {
		var table = tables[i];

		window.tableAutoLayout.layoutTable( $(table.tableSelector), table, function( cellNumber, table ){
			template = $( table.cellTemplateSelector ).clone();
			cellContent = table.cellContentsList[ cellNumber ];

			cell = table.cellContentsCallback( cellContent, template );
			return cell;
		}, table.cellContentsList.length, table.cellWidth );
	}
};

$( window ).resize(function(){
	window.tableAutoLayout.layout();
});
