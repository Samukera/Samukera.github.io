import LineAvatars from "./LineAvatars";
import CenteredImage from "./CenteredImage";
import CardDescription from "./CardDescription";
import Info from "./info";
import { useState } from "react";
import CardProgress from "./CardProgress";

export default function Content() {
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="hidden lg:flex justify-between p-4">
        <div>
          <LineAvatars
            img1="assets/html-1.svg"
            img2="assets/css-3.svg"
            img3="assets/logo-javascript.svg"
            onHover={setDescription}
            descriptions={["square1", "square2", "square3"]}
          />
          <LineAvatars
            img1="assets/react-2.svg"
            img2="assets/typescript.svg"
            img3="assets/nodejs-1.svg"
            onHover={setDescription}
            descriptions={["square4", "square5", "square6"]}
          />
          <LineAvatars
            img1="assets/php-1.svg"
            img2="assets/mysql-6.svg"
            img3="assets/postgresql.svg"
            onHover={setDescription}
            descriptions={["square7", "square8", "square9"]}
          />
          <CardDescription description={description} />
        </div>
        <div>
          <CenteredImage
            src="assets/samuel.jpg"
            alt="Samuel Rech Cassanego foto de perfil"
          />
          <Info />
        </div>
        <div>
          <LineAvatars
            img1="assets/laravel-2.svg"
            img2="assets/vue-9.svg"
            img3="assets/tailwindcss.svg"
            onHover={setDescription}
            descriptions={["square10", "square11", "square12"]}
          />
          <CardProgress
            label={[
              "Lógica de programação",
              "Dedicação",
              "Timidez",
              "Ansiedade em reuniões",
            ]}
            progress={["100", "100", "45", "30"]}
          />
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <div className="mt-4">
          <CenteredImage
            className="justify-center items-center"
            src="assets/samuel.jpg"
            alt="Samuel Rech Cassanego foto de perfil"
          />
          <Info />
        </div>
        <div>
          <CardProgress
            label={[
              "Lógica de programação",
              "Dedicação",
              "Timidez",
              "Ansiedade em reuniões",
            ]}
            progress={["100", "100", "45", "30"]}
          />
          <div>
            <div className="navbar btn btn-ghost text-2xl text-white font-fortnite">
              Tecnologias
            </div>
            <div>
              <LineAvatars
                img1="assets/html-1.svg"
                img2="assets/css-3.svg"
                img3="assets/logo-javascript.svg"
                onHover={setDescription}
                descriptions={["square1", "square2", "square3"]}
              />
              <LineAvatars
                img1="assets/react-2.svg"
                img2="assets/typescript.svg"
                img3="assets/nodejs-1.svg"
                onHover={setDescription}
                descriptions={["square4", "square5", "square6"]}
              />
              <LineAvatars
                img1="assets/php-1.svg"
                img2="assets/mysql-6.svg"
                img3="assets/postgresql.svg"
                onHover={setDescription}
                descriptions={["square7", "square8", "square9"]}
              />
            </div>
          </div>
          <div>
            <div className="navbar btn btn-ghost text-2xl text-white font-fortnite">
              Frameworks
            </div>
            <div>
              <LineAvatars
                img1="assets/laravel-2.svg"
                img2="assets/vue-9.svg"
                img3="assets/tailwindcss.svg"
                onHover={setDescription}
                descriptions={["square10", "square11", "square12"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
