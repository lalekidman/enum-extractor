# Enum-extractor
Enum-extractor is a javascript module that extract either values or keys of the enum variables on typescript.

> enum DIRECTION = {
>   LEFT: 1,
>   RIGHT: 2,
>   UP: 3,
>   DOWN: 4
> }
> 
> // to get the keys of the enums
> 
> console.log(enumExtractor.keys(enum))
> 
> // to get the values of the enums
> 
> console.log(enumExtractor.values(enum))