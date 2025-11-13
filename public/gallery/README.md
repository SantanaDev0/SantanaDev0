# Galeria de Imagens

Adicione suas imagens de anime favoritas nesta pasta!

## Como usar:

1. Coloque suas imagens nesta pasta (`public/gallery/`)
2. As imagens podem estar em qualquer formato: `.jpg`, `.png`, `.webp`, `.gif`
3. Edite o arquivo `src/components/gallery.tsx` e atualize o array `imageUrl` com suas imagens

### Exemplo:

```typescript
const imageUrl: ImageItem[] = [
  {
    imageUrl: "/gallery/naruto.jpg",
    name: "Naruto Uzumaki",
    description: "O ninja que nunca desiste!"
  },
  {
    imageUrl: "/gallery/goku.png",
    name: "Son Goku",
    description: "O Sayajin mais poderoso"
  }
];
```

## Dicas:

- Use nomes descritivos para suas imagens (ex: `naruto-hokage.jpg`)
- Mantenha tamanhos de imagem razoáveis (recomendado: até 2MB cada)
- Formatos recomendados: `.webp` para melhor performance, `.jpg` ou `.png`
- As imagens aparecerão em uma grade responsiva na página de galeria

## Estrutura de pastas:

```
public/
└── gallery/
    ├── README.md (este arquivo)
    ├── naruto.jpg (suas imagens aqui)
    ├── onepiece.jpg
    └── ... (adicione quantas quiser)
```
