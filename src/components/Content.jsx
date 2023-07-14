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
      <div className="flex justify-between p-4">
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
          <CenteredImage src="assets/teste.png" alt="homem aranha" />
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
              "Vontade de desistir",
              "Vontede de chorar",
            ]}
            progress={["100", "100", "25", "20"]}
          />
        </div>
      </div>
    </>
  );
}
