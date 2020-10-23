# ts-enum-extractor
ts-enum-extractor is a typescript module that extract either values or keys of the enum variables.

> enum DIRECTION = {
>   LEFT: 1,
>   RIGHT: 2,
>   UP: 3,
>   DOWN: 4
> }
> 
> // to get the keys of the enums
> 
> console.log(enumExtractor.keys(DIRECTION))
> 
> // to get the values of the enums
> 
> console.log(enumExtractor.values(DIRECTION))