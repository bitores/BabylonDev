var Maze = function(width, height, depth, startingPoint) {

	// PROPERTIES
	this.width = width;
	this.height = height;
	this.depth = depth;
	this.startingPoint = startingPoint;

	this.numberOfRooms = width * height * depth;
	this.map = [];

	// METHODS
	/**
	 * carves a path to a neighbor cell
	 * @param cell
	 * @param maze
	 */
	this.carvePassageFrom = function(cell, maze) {
		var directions = shuffleArray(cell.directions);

		for(var i=0; i<directions.length; i++){
			cell.hasBeenVisited = true;
			var direction = directions[i];
			var directionVector;
			switch (direction){
				case 'N':
					directionVector = new BABYLON.Vector3(0, 0, -1);
					break;
				case 'S':
					directionVector = new BABYLON.Vector3(0, 0, 1);
					break;
				case 'E':
					directionVector = new BABYLON.Vector3(1, 0, 0);
					break;
				case 'W':
					directionVector = new BABYLON.Vector3(-1, 0, 0);
					break;
				case 'UP':
					directionVector = new BABYLON.Vector3(0, 1, 0);
					break;
				case 'DOWN':
					directionVector = new BABYLON.Vector3(0, -1, 0);
					break;
			}
			var neighborPosition = cell.position.add(directionVector);
			// check if neighbor would be in map boundaries
			if (
				neighborPosition.x >= 0 && neighborPosition.x < maze.width &&
				neighborPosition.y >= 0 && neighborPosition.y < maze.height &&
				neighborPosition.z >= 0 && neighborPosition.z < maze.depth
			) {
				// check if already visited
				var neighbor = maze.map[neighborPosition.y][neighborPosition.x][neighborPosition.z];
				if(!neighbor.hasBeenVisited) {
					// carve path
					this.removeWalls(cell, direction, neighbor);
					this.carvePassageFrom(neighbor, maze);
				}
			}
		}

	};

	/**
	 * @param cell
	 * @param direction
	 * @param neighbor
	 */
	this.removeWalls = function(cell, direction, neighbor){
		var oppositeDirection;
		switch (direction){
			case 'N':
				oppositeDirection = 'S';
				break;
			case 'S':
				oppositeDirection = 'N';
				break;
			case 'E':
				oppositeDirection = 'W';
				break;
			case 'W':
				oppositeDirection = 'E';
				break;
			case 'UP':
				oppositeDirection = 'DOWN';
				break;
			case 'DOWN':
				oppositeDirection = 'UP';
				break;
		}
		cell.walls[direction] = false;
		neighbor.walls[oppositeDirection] = false;
	};

	// CONSTRUCTOR
	for (var y = 0; y < height; y++) {
		this.map[y] = [];
		for (var x = 0; x < width; x++) {
			this.map[y][x] = [];
			for (var z = 0; z < depth; z++) {
				this.map[y][x][z] = new Cell(new BABYLON.Vector3(x, y, z));
			}
		}
	}
	// carve paths
	this.carvePassageFrom(this.map[startingPoint.y][startingPoint.x][startingPoint.z], this);

	return this;
};