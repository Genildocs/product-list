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

- Uso do contextApi para evitar prop drilling. Uso do reduce para evitar loops desnecessarios. Uso do filter em conjunto com o map para filtragem eficiente de itens no carrinho.

```
 // const totalCart = Object.entries(count).reduce(
  //   (acc, [_, value]) => acc + value.count,
  //   0
  // );

  // const totalPrice = Object.entries(count).reduce(
  //   (acc, [_, value]) => acc + value.price * value.count,
  //   0
  // );
```

- Uso mais eficiente do reduce

```
  const { totalCart, totalPrice } = Object.values(count).reduce(
    (acc, product) => {
      if (product.count > 0) {
        acc.totalCart += product.count;
        acc.totalPrice += product.price * product.count;
      }
      return acc;
    },
    { totalCart: 0, totalPrice: 0 }
  );
```
