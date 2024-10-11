"use client";

import SldierComponent from "@/components/Slider/SldierComponent";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeId, setActiveId] = useState("films");

  return (
    <>
      <main>
        <section className="container pb-[230px] pt-[190px]">
          <h2 className="font-unbounded text-fz74 font-semibold">
            Откройте новое в кино
          </h2>
          <p className="mt-9 font-nunito text-2xl">
            Индивидуальные рекомендации от Кинонавигатора. Найдите идеальный
            фильм
            <br />
            на основе ваших отзывов и предпочтений
          </p>
        </section>
        <section className="pb-[100px]">
          <SldierComponent />
        </section>
        <section className="container py-[100px] font-nunito">
          <div className="gray-bottom-line relative grid w-full grid-cols-3 gap-x-[117px]">
            <h2 className="pb-[10px] font-unbounded text-[32px]">Категории</h2>
            <ul className="col-span-1 mx-auto flex space-x-[40px]">
              {[
                ["Фильмы", "films"],
                ["Сериалы", "series"],
                ["Мультфильмы", "cartoons"],
                ["Новое", "new"],
                ["Популярное", "popular"],
                ["Все", "all"],
              ].map(([title, id]) => (
                <li
                  onClick={() => setActiveId(id)}
                  id={id}
                  className={`${activeId === id ? "white-bottom-line" : ""} relative flex h-full items-center pb-[10px]`}
                  key={id}
                >
                  <h3
                    className={`cursor-pointer font-nunito text-[18px] font-semibold text-white/80`}
                  >
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 grid w-full grid-cols-3 gap-x-[117px] text-[22px] font-semibold">
            <div>
              <h3>Жанры</h3>
              <div className="mt-[30px] grid grid-flow-row grid-cols-2 grid-rows-1 gap-x-[105px] gap-y-[18px]">
                {[
                  ["Биография", "#"],
                  ["Комедии", "#"],
                  ["Боевики", "#"],
                  ["Криминал", "#"],
                  ["Военные", "#"],
                  ["Мелодрамы", "#"],
                  ["Детективы", "#"],
                  ["Приключения", "#"],
                  ["Документальные", "#"],
                  ["Семейные", "#"],
                  ["Драмы", "#"],
                  ["Триллеры", "#"],
                  ["Исторические", "#"],
                  ["Ужасы", "#"],
                ].map(([title, url]) => (
                  <Link
                    className="text-[18px] font-normal leading-normal text-white/80"
                    key={title}
                    href={url}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>Страны</h3>
              <div className="mt-[30px] grid grid-flow-row grid-cols-2 grid-rows-1 gap-x-[105px] gap-y-[18px]">
                {[
                  ["Австралия", "#"],
                  ["Испания", "#"],
                  ["Беларусь", "#"],
                  ["Италия", "#"],
                  ["Бельгия", "#"],
                  ["Россия", "#"],
                  ["Бразилия", "#"],
                  ["США", "#"],
                  ["Великобритания", "#"],
                  ["Франция", "#"],
                  ["Германия", "#"],
                  ["Южная Корея", "#"],
                  ["Дания", "#"],
                  ["Япония", "#"],
                ].map(([title, url]) => (
                  <Link
                    className="text-[18px] font-normal leading-normal text-white/80"
                    key={title}
                    href={url}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>Годы</h3>
              <div className="custom-scrollbar mt-[30px] h-[297px] overflow-x-hidden overflow-y-scroll">
                <div className="grid grid-flow-col grid-cols-6 grid-rows-11 gap-x-[105px] gap-y-[18px]">
                  {Array.from({ length: 51 }, (_, i) => 2024 - i).map(
                    (number) => (
                      <Link
                        className="text-[18px] font-normal leading-normal text-white/80"
                        key={number}
                        href={`${number}`}
                      >
                        {number}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container pb-[120px] pt-[100px] font-unbounded text-[32px] font-semibold leading-normal">
          <h2>Часто задаваемые вопросы</h2>
          <div className="mt-20 space-y-[30px]">
            {[
              [
                "Как работает Кинонавигатор?",
                `Кинонавигатор — это ваш персональный помощник в мире кино! Кинонавигатор анализирует ваши предпочтения и отзывы о фильмах и сериалах, чтобы предложить персонализированные рекомендации, основанные на вашем вкусе и интересах.
Когда вы оставляете отзывы о фильмах, Кинонавигатор собирает данные о ваших предпочтениях. Например, если вы любите комедии или триллеры, система запоминает это. Далее, система анализирует ваши оценки и комментарии, чтобы выявить общие черты ваших вкусов. Это позволяет понять, какие жанры, актёры и темы вам нравятся больше всего.
На основе всех собранных данных, Кинонавигатор формирует список фильмов и сериалов, которые, вероятно, вам понравятся. Эти рекомендации обновляются каждый раз, когда вы оставляете новый отзыв или меняете свои предпочтения.`,
              ],
              [
                "Как я могу оставить отзыв?",
                `Вы можете оставить отзыв, выбрав фильм, сериал или мультфильм на нашем сайте и перейдя в раздел отзывов. Просто оцените фильм, сериал или мультфильм и напишите свой комментарий.
Вам будет предложено оценить фильм, сериал или мультфильм по шкале, от 1 до 5 звёзд. Выберите ту оценку, которая соответствует вашим впечатлениям. После выбора оценки вы можете выразить свои мысли о фильме. Опишите, что вам понравилось или не понравилось, и дайте советы другим зрителям. Далее, нажмите кнопку «Отправить» или «Опубликовать», чтобы ваш отзыв был добавлен к фильму, сериалу или мультфильму. Вы получите уведомление о том, что ваш отзыв успешно отправлен.
Если вы хотите изменить свой отзыв позже, вы можете сделать это в своём профиле, где будут отображаться все ваши оставленные отзывы.`,
              ],
              [
                "Нужно ли создавать учетную запись для использования сервиса?",
                `Нужно ли создавать учетную запись для использования сервиса?
Создание учетной записи необязательно, но оно позволит вам сохранять ваши предпочтения и оставлять отзывы, а также получать более точные рекомендации.`,
              ],
              [
                "Как я могу изменить свои предпочтения?",
                `Вы можете обновить свои предпочтения в личном профиле на сайте, где можете указать любимые жанры, актеров и другие интересы.`,
              ],
              [
                "Как часто обновляются рекомендации?",
                `Рекомендации обновляются регулярно, в зависимости от ваших новых отзывов и изменений в вашей активности на платформе.`,
              ],
            ].map(([summary, text], index) => (
              <details
                key={index}
                className="gray-bottom-line relative pb-[30px] font-nunito"
              >
                <summary className="relative text-[32px] leading-normal">
                  {summary}
                </summary>
                <div className="mt-5 space-y-5 text-[22px] font-normal leading-normal text-white/80">
                  {text
                    .split(/\n+/)
                    .map((paragraph) => paragraph.trim())
                    .filter((paragraph) => paragraph.length > 0)
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-footer container py-[100px]">
        <div className="max-w-[600px]">
          <h2 className="font-unbounded text-[40px] font-semibold leading-normal">
            Кинонавигатор
          </h2>
          <div className="mt-20 grid grid-flow-row grid-cols-3 gap-x-[105px] gap-y-[18px]">
            {[
              ["Биография", "#"],
              ["Комедии", "#"],
              ["Боевики", "#"],
              ["Криминал", "#"],
              ["Военные", "#"],
              ["Мелодрамы", "#"],
              ["Детективы", "#"],
              ["Приключения", "#"],
              ["Документальные", "#"],
              ["Семейные", "#"],
              ["Драмы", "#"],
              ["Триллеры", "#"],
              ["Исторические", "#"],
              ["Ужасы", "#"],
              ["Фильмы", "#films"],
              ["Сериалы", "#series"],
              ["Мультфильмы", "#cartoons"],
              ["Отзывы", "#reviews"],
            ].map(([title, url]) => (
              <Link
                className="font-nunito text-[18px] font-normal leading-normal text-white/80"
                key={title}
                href={url}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[90px] space-y-[10px]">
          {[
            "Политика конфиденциальности",
            "Согласие на обработку персональных данных",
          ].map((title) => (
            <Link
              className="block font-nunito text-[18px] font-normal leading-normal text-white/30"
              key={title}
              href={"#"}
            >
              {title}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
