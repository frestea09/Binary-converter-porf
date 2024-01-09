export type InputState = {
    inputFrom : number,
    outputTo : string, 
    typeFrom : {
        Decimal :  'Decimal', Octal : 'Octal', Hexadecimal:  'Hexadecimal', Text :  'Text'
    }
    typeTo : {
        Decimal :  'Decimal', Octal : 'Octal', Hexadecimal:  'Hexadecimal', Text :  'Text'
    }
}