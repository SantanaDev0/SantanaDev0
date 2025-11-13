import { useLanyard } from "@/hooks/use-lanyard";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RiZzzFill } from "react-icons/ri";

const colors: Record<string, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-600",
  offline: "bg-gray-500",
};

export function User() {
  const presence = useLanyard();
  // Usar imagem do Gojo ao invés do Discord
  const avatar = "/gojo.jpg";
  const user = presence?.discord_user;

  if (!presence) {
    return <Skeleton className="h-11 w-11 rounded-full mr-2" />;
  }

  const status = presence.discord_status || "offline";
  const color = colors[status];
  const offline = status === "offline";

  // Link para o Discord usando o ID do usuário
  const discordLink = user?.id
    ? `https://discord.com/users/${user.id}`
    : "https://discord.com";

  return (
    <a
      href={discordLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center mr-2 cursor-pointer"
    >
      {!offline && (
        <div
          className={cn(
            "absolute h-8 w-8 rounded-full animate-ping",
            color
          )}
        />
      )}

      <div className="relative z-10">
        <Avatar
          className={cn(
            "h-12 w-12 border-2 border-border transition-opacity duration-300 hover:opacity-80",
            offline ? "opacity-40" : "opacity-100"
          )}
        >
          {avatar ? (
            <AvatarImage src={avatar} loading="lazy" />
          ) : (
            <AvatarFallback className="bg-foreground/10" />
          )}
        </Avatar>

        {offline && (
          <RiZzzFill
            size={22}
            className="absolute inset-0 ml-10 mb-7 m-auto animate-pulse"
          />
        )}
      </div>
    </a>
  );
}
