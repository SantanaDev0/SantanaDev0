import { TooltipProvider } from "./ui/tooltip";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FaImage } from "react-icons/fa";
import { ImageDialog } from "./ui/image-dialog";

type ImageItem = {
  imageUrl: string;
  name: string;
  description: string;
};

// INSTRUÇÕES: Para adicionar suas próprias imagens de anime:
// 1. Coloque as imagens na pasta: public/gallery/
// 2. Descomente o array abaixo e adicione suas imagens
// 3. Exemplo: { imageUrl: "/gallery/naruto.jpg", name: "Naruto", description: "Descrição" }

const imageUrl: ImageItem[] | undefined = undefined;
// const imageUrl: ImageItem[] = [
//   {
//     imageUrl: "/gallery/seu-anime-1.jpg",
//     name: "Nome do Anime",
//     description: "Descrição do anime ou personagem",
//   },
//   // Adicione mais imagens aqui...
// ];

export default function Gallery() {
  const images =
    imageUrl ??
    [
      {
        imageUrl: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRYf6IvKVY0iGFpx9RgmC24X3PDSW-bsviX88kw399-dBksHtFrFWui4VvJQpoayiLzhr1MxP3EXSLA5e3o2uTyiZrmXngw_mT8P.jpg?r=2fe",
        name: "Shield Hero",
        description: "",
      },
      {
        imageUrl: "https://dimensaosete.com.br/static/40ca036275c1f7777955d570dc73c82d/2493a/hunter-x-hunter.webp",
        name: "Hunter x Hunter",
        description: "A jornada épica pelo Grand Line em busca do tesouro.",
      },
      {
        imageUrl: "https://wallpapers.com/images/hd/attack-on-titan-pictures-uk5xzd7go5nb00sj.jpg",
        name: "Attack on Titan",
        description: "A batalha da humanidade pela sobrevivência.",
      },
      {
        imageUrl: "https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2021/09/10/demon-slayer-capa.png",
        name: "Demon Slayer",
        description: "",
      },
      {
        imageUrl: "https://preview.redd.it/who-is-your-personal-favorite-black-clover-character-v0-a74bro3ymj1d1.jpeg?width=640&crop=smart&auto=webp&s=4b54903090aabadb26ecb4e2ba8271d3b4ad43d9",
        name: "Black Clover",
        description: "",
      },
      {
        imageUrl: "https://s2-techtudo.glbimg.com/1Q76caEdN3BriFZ_l61VD5MJkYs=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/g/0/s4BJiLQGSb9USN3vTvAg/death-note-netflix.jpg",
        name: "Death Note",
        description: "",
      }
    ];

  const loading = false;

  return (
    <div>
      <TooltipProvider delayDuration={200}>
        {loading ? null : images.length === 0 ? (
          <div className="flex justify-center py-60">
            <Empty className="max-w-lg">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FaImage />
                </EmptyMedia>
                <EmptyTitle>No Images Yet</EmptyTitle>
                <EmptyDescription>
                  I haven&apos;t added any gallery images yet.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[70rem] w-full">
            {images.map((item) => (
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer border border-border/30 hover:shadow-lg transition-all duration-300">
                <div className="w-full overflow-hidden">
                  <ImageDialog imageUrl={item.imageUrl} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-foreground bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </TooltipProvider>
    </div>
  );
}
