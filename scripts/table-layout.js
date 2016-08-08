window.tableLayout = function( table, tableCellContentCallback, numCells, blockWidth ){
	// Get the table width
	tableWidth = table.parent().width();
	
	// Get the number of cells per row
	numberOfCellsPerRow = Math.max( 1, Math.floor( tableWidth / blockWidth ) );
		
	// Get the number of rows
	numberOfRows = Math.ceil( numCells / numberOfCellsPerRow );
	
	// Clear current content
	table.html("");
		
	// Start outputting!
	for( var rowIndex = 0; rowIndex < numberOfRows; rowIndex++ ){
			// Add a row to the table
			row = $('<tr>');
		
			for( var colIndex = 0; colIndex < numberOfCellsPerRow; colIndex++ ){
				cellNumber = colIndex + rowIndex * numberOfCellsPerRow;
				
				if( cellNumber >= numCells ){
						break;
				}
				
				// Add a cell to the row
				cell = $('<td>') ;
								
				// Get the content for the cell
				cellContent = tableCellContentCallback( cellNumber );
				
				// Add the content to the cell
				cell.append( cellContent );
				
				cell.appendTo( row );
			}
			
			row.appendTo( table );
	}
};
