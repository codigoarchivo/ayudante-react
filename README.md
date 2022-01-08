# ayudante-react
Este es un repositorio que su objetivo es guardar partes de código que podemos reutilizar 

## Carpeta hooks
comprende pequeñas lineas de codigo que podemos utilizar para ser hooks

# Carpeta useCounter
Esta carpeta comprende un archivo llamado useCounter.js que contiene:
- React.useState
- (fn) Increment
- (fn) reset
- (fn) decrement
## Ejemplo
```sh
   const {counter, increment, decrement, reset} = useCounter(value initial);
```
> Note: `useCounter() Recibe un valor por defecto`

# Carpeta useFetch
Esta carpeta comprende un archivo llamado useFetch.js que contiene:
- React.useState
- React.useRef
- React.useEffect
- fetch(url)
## Ejemplo
```sh
   const {data: null, loading: true, error: null} = useFetch(url);
```
> Note: `useFetch() Recibe un URL`
