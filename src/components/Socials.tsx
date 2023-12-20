import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex gap-3 pt-2">
      <Link href="https://www.linkedin.com/in/matheoc/" target="_blank" id="linkedin">
        <Image src="svgs/linkedin.svg" alt="res" width={20} height={20} />
      </Link>

      <Link href="https://github.com/TekMath" target="_blank" id="github">
        <Image src="svgs/github.svg" alt="res" width={20} height={20} />
      </Link>

      <Link href="https://twitter.com/TekMath" target="_blank" id="twitter">
        <Image src="svgs/x.svg" alt="res" width={20} height={20} />
      </Link>

      <Link href="https://www.instagram.com/this.mathh/" target="_blank" id="instagram">
        <Image src="svgs/instagram.svg" alt="res" width={20} height={20} />
      </Link>

      <Link href="https://www.threads.net/@this.mathh" target="_blank" id="threads">
        <Image src="svgs/threads.svg" alt="res" width={20} height={20} />
      </Link>
    </div>
  );
}
