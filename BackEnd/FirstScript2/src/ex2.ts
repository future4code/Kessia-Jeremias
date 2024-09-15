function equacao(){
    const operation: string = process.argv[2]
    const num1: number = Number(process.argv[3])
    const num2: number = Number(process.argv[4])
    
    switch (operation){
        case 'add' :
            return  num1 + num2
        break;
        case 'sub':
            return  num1 - num2 
        break;
        case 'div':
            return  num1 / num2
        break;
        case 'mult':
            return  num1 * num2   
        
    }
    
}
console.log(equacao())
 