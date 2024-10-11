import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex h-[104px] flex-wrap items-center justify-between pt-[50px]">
        <h1 className="font-unbounded text-[40px] font-semibold">
          Кинонавигатор
        </h1>
        <nav className="space-x-10">
          {[
            ["Фильмы", "#films"],
            ["Сериалы", "#series"],
            ["Мультфильмы", "#cartoons"],
            ["Отзывы", "#reviews"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className={`font-nunito text-[18px] font-semibold text-white`}
            >
              {title}
            </a>
          ))}
        </nav>
        <form className="relative" action="#">
          <input
            className="w-[450px] rounded-full border-2 border-solid border-primary bg-btn-gray p-[16px] ps-[55px] font-nunito text-[18px] font-semibold text-secondary"
            type="text"
            placeholder="Поиск"
          />
          <Image
            className="absolute left-[25px] top-1/2 -translate-y-1/2 transform"
            src="/images/iconSearch.svg"
            width={20}
            height={20}
            alt="Search"
          />
        </form>
        <div className="flex space-x-[25px]">
          {[
            ["/images/iconWrite.svg", "#", "write"],
            ["/images/iconHeartWhite.svg", "#", "heart"],
            ["/images/iconUser.svg", "#", "user"],
          ].map(([url, href, alt]) => (
            <Link href={href} key={alt}>
              <Image src={url} width={28} height={28} alt={alt} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
