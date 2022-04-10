function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
        console.log(primitiveMultiply(a, b))
    } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) {
            console.log("Ошибка. Попробуйте ещё раз.");   
            reliableMultiply(a, b);        
        }            
    }   
}

reliableMultiply(8, 8);
// → 64