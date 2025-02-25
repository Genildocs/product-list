# Aprendizado

- Uso de função com retorno para renderizar imagens de diferentes resoluções dentro de um objeto no loop map.

```
const getDeviceSize = () => {
    if (isSmallDevice) return 'mobile';
    if (isMediumDevice) return 'tablet';
    if (isLargeDevice) return 'desktop';
    return 'mobile';
  };

```

```
<div>
    <img
        src={`${product.image[getDeviceSize()].replace('./assets', '')}`}
        alt={product.name}
        className="rounded-lg w-full h-full object-contain"
    />
</div>
```

- Chamar setCount dentro do loop no useEffect causa renderizações desnecessarias. O ideal é criar um objeto inicial de uma vez só e chamá-lo apenas uma vez, reduzindo re-renders.

```
useEffect(() => {
  data.forEach((item, index) => {
    setCount((prevCount) => ({
      ...prevCount,
      [index]: 0, // Define o valor inicial de cada item como 0
    }));
  });
  setProduct(data);
}, []);
```

```
useEffect(() => {
  const initialCount = data.reduce((acc, _, index) => {
    acc[index] = 0;
    return acc;
  }, {});

  setCount(initialCount); // Atualiza o estado apenas uma vez
  setProduct(data);
}, []);
```
