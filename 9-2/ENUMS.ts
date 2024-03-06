// ENUMS    ----->      enumerations

/*
Enums (short for enumerations) in TypeScript are a feature that allows  you to define a set of named constants. The concept behind an enumeration 
is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
*/
// to understand  use this question
/* 
Let’s say you have a game where you have to perform an action based on weather
the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?
*/
// function doSomething(keyPressed) {}   // ts complains
//now introduce certain value in code & if values is not recognised in code then trigger warning

type keyStrock = "up" | "down" | "left" | "right";

function pressMe(but: keyStrock) {
  // your logic
}

pressMe("up"); // this is ok
pressMe("left"); // this is ok
pressMe("upf"); // this is not ok
pressMe("sarigama"); // this is not ok

//---------- This way is good  But we can do better -----------------------------------------------------------

enum Direction {
  Up,
  Down,
  left,
  right,
}
function pressIt(but:Direction) {
    // your logic
}
pressIt('Down')  // wrong
pressIt(Direction.Down)  // right
pressIt(Direction.mango)  // wrong

// -------------- another example ------------------------------------------------
// from express 
const app =express()
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get('/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({}) // rather than using 404
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
