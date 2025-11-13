interface BackgroundProps {
  imageUrl: string
}

export function Background({ imageUrl }: BackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image escurecida */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: 'brightness(0.15) saturate(0.3) grayscale(0.8)',
        }}
      />

      {/* Overlay preto/cinza minimalista */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/80" />

      {/* Gradiente sutil para transição */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
    </div>
  )
}
