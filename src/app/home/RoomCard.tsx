import Image from "next/image";

interface RoomCardProps {
  imageUrl: string,
  title: string,
  description: string,
  rent: number
}

export default function RoomCard({ imageUrl, title, description, rent }: RoomCardProps) {
  return (
    <div className="card card-bordered shadow-2xl">
      <div>
        <Image src={imageUrl} width={800} height={450} alt={title} priority />
      </div>
      <div className="p-5">
        <div>
          <h2 className="text-2xl mb-2">{title}</h2>
        </div>
        <div className="mb-2">
          <p>{description}</p>
        </div>
        <div className="flex gap-5 items-center">
          <button className="btn btn-accent btn-sm">Book now</button>
          <div className="badge badge-outline badge-md">Rent: {rent}/-</div>
        </div>
      </div>
    </div>
  )
}
