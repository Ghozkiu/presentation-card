import Button from "./Button";
import BottomText from "./BottomText";

export default function Card() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-zinc-700 to-gray-900">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900">
        <img className="w-full " src="./img/profile.png" alt="Profile"></img>
        <div>
          <h1 className="text-center text-zinc-50 font-bold text-2xl mt-2">
            Joseph Garcia
          </h1>
          <h2 className="text-center text-fuchsia-600 text-base">
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
            color="bg-gradient-to-r from-yellow-200 to-purple-600"
            hoverColor="hover:bg-white"
            image="./img/instagram.png"
          />
          <Button
            text="LinkedIn"
            link="https://www.linkedin.com/in/joseph-garcia-barrantes/"
            color="bg-blue-700"
            hoverColor="hover:bg-blue-600"
            image="./img/linkedin.png"
          />
        </div>
        <div className="px-6 py-4">
          <BottomText
            title="About"
            text="I'm Software and Web Developer with knowledge in multiple programming
            languages like Java, JavaScript, C#, VB.net and experience with frameworks like Express.js Reactjs, Tailwind CSS, and Bootstrap"
          />
        </div>
        <div className="px-6 pb-4">
          <BottomText
            title="Interests"
            text="I 💗 🍜 and technology, I'm always looking to improve my knowledge and professional skills"
          />
        </div>
      </div>
    </div>
  );
}
