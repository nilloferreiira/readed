import Image from "next/image"
import Link from "next/link"

export default function User() {
    return (
        <Link href={""}>
          <Image
            src={"https://github.com/nilloferreiira.png"}
            alt={"User iamge"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
    )
}