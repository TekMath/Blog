import Image from "next/image";

interface NoPostInterface {
  enable: false;
  id: number;
}

interface PostInterface {
  enable: true;
  title: string;
  teaser: string;
  emoji: string;
  id: number;
}

type PinnedPostType = PostInterface | NoPostInterface;

export default function PinnedPost(data: PinnedPostType) {
  if (data.enable) {
    return (
      <div
        className="flex flex-col gap-2 border-2 border-dashed border-[#5f5f5f] py-3 px-5"
        key={data.id}
      >
        <div className="flex gap-2">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <Image
            src={data.emoji}
            alt="shooting_star"
            width={0}
            height={0}
            className="h-auto w-7"
            priority
          />
        </div>

        <div className="bg-gradient-to-b from-white from-65% text-transparent bg-clip-text">
          <p>{data.teaser}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex align-middle justify-center border-2 border-dashed border-[#5f5f5f] py-16 px-5"
      key={data.id}
    >
      <h2 className="flex text-lg font-semibold">NO PINNED POST</h2>
    </div>
  );
}
