import presentation from "../../data/presentation.json";
import { MainTextHigh, MainTextMedium, MainTextSm } from "./Card.main.text";
import { CardMainDownload } from "./Card.main.button";
import ArrowBack from "../ui/Arrow.back";
import useElementOnScreen from "../../hooks/useElements";

export default function SectionMain() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const [containerRef, visible] = useElementOnScreen(options, true);
  return (
    <section
      className="h-[50vh] md:h-[100vh] relative w-full"
      id="top"
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute top-0 h-full w-full">
        <img
          src="/bg.jpg"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className=" bg-gray-800 bg-opacity-30 absolute top-0 z-10 w-full h-full font-fira font-semibold text-white">
          <div className=" container px-4 pt-2.5 pb-4 lg:py-10 flex flex-col items-start justify-end h-full mx-auto">
            {presentation.presentationText.map((item, index) =>
              item.importance === "high" ? (
                <MainTextHigh key={index} text={item.text[0].value} />
              ) : item.importance === "medium" ? (
                <MainTextMedium key={index} text={item.text[0].value} />
              ) : (
                <MainTextSm key={index}>
                  {item.text.map((text, i) =>
                    text.type === "normal" ? (
                      text.value
                    ) : text.type === "strong" ? (
                      <strong key={i} className="font-bold">
                        {text.value}
                      </strong>
                    ) : text.type === "italic" ? (
                      <em key={i} className="italic">
                        {text.value}
                      </em>
                    ) : (
                      <span key={i} className="text-xs lg:text-base italic">
                        {text.value}
                      </span>
                    )
                  )}
                </MainTextSm>
              )
            )}
            {/* download CV */}
            <CardMainDownload />
          </div>
        </div>
      </div>
      <ArrowBack visible={!visible} />
    </section>
  );
}
