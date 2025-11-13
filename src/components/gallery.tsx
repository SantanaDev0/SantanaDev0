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

const imageUrl: ImageItem[] | undefined = undefined;

export default function Gallery() {
  const images =
    imageUrl ??
    [
      {
        imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        name: "Naruto",
        description: "Um dos animes mais icônicos de todos os tempos.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
        name: "One Piece",
        description: "A jornada épica pelo Grand Line em busca do tesouro.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
        name: "Attack on Titan",
        description: "A batalha da humanidade pela sobrevivência.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80",
        name: "Demon Slayer",
        description: "A luta contra os demônios em um Japão feudal.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
        name: "My Hero Academia",
        description: "Heróis em treinamento na UA High School.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&q=80",
        name: "Death Note",
        description: "O caderno que pode matar qualquer pessoa.",
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
