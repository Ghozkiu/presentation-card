import Button from "./Button";
import BottomText from "./BottomText";

export default function Card() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-zinc-700 to-gray-900">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900">
        <img className="w-full " src="../img/profile.png" alt="Profile"></img>
        <div>
          <h1 className="text-center text-zinc-50 font-bold text-2xl mt-2">
            Joseph Garcia
          </h1>
          <h2 className="text-center text-rose-500 text-base">
            Software Dev / Web Dev
          </h2>
          <h3 className="text-center text-zinc-400 text-xs">
            garciabarrantesjoseph@gmail.com
          </h3>
        </div>
        <div className="flex justify-evenly mt-4">
          <Button
            text="Instagram"
            link="https://www.instagram.com/andres.gbs/"
            color="red"
            colorRange="300"
            image="../img/instagram.png"
          />
          <Button
            text="LinkedIn"
            link="https://www.linkedin.com/in/joseph-garcia-barrantes/"
            color="blue"
            colorRange="500"
            image="../img/linkedin.png"
          />
        </div>
        <div className="px-6 py-4">
          <BottomText
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil."
          />
        </div>
        <div className="px-6 pb-4">
          <BottomText
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil."
          />
        </div>
      </div>
    </div>
  );
}
