# Aprendizado

- Uso de função com retorno para renderizar imagens de diferentes resoluções dentro de um objeto no loop map.

```const getDeviceSize = () => {
    if (isSmallDevice) return 'mobile';
    if (isMediumDevice) return 'tablet';
    if (isLargeDevice) return 'desktop';
    return 'mobile';
  };

```

```<div>
    <img
        src={`${product.image[getDeviceSize()].replace('./assets', '')}`}
        alt={product.name}
        className="rounded-lg w-full h-full object-contain"
    />
</div>
```
