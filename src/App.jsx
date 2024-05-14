import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQ = window.matchMedia("(prefers-color-scheme: dark)");

  // console.log(darkQ, "darkQ");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        onWindowMatch();
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  darkQ.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQ.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  return (
    <section className="min-h-screen pt-16 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        {options?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center font-bold">
          <h2 className="text-5xl">Code A Program</h2>
          <br />
          <h5 className="text-3xl">Welcome to the Project</h5>
          <br />
        </div>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          officiis quidem amet blanditiis omnis consequuntur, officia enim
          doloribus sit et eos numquam accusamus asperiores quos eum molestiae!
          Suscipit minima cumque, quisquam quam maxime facere blanditiis soluta
          vitae perspiciatis accusantium alias ipsam nobis, vel, iure fugit
          explicabo eius dolor illum ea.
        </p>
        <br></br>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolorum reprehenderit quidem vero unde, omnis quasi odio sit, vitae
          laboriosam incidunt earum, aspernatur provident! Saepe, fugiat?
          Adipisci veniam minima quae tenetur numquam nam nihil amet, id
          aperiam, nulla similique vel.
        </p>
        <br></br>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum magni commodi aut deleniti molestiae dolorem facilis, ullam
          eligendi consequuntur iste non autem dolor vitae tempore reprehenderit
          dolore accusamus blanditiis consequatur deserunt voluptate! Temporibus
          quo aspernatur consequatur totam magnam provident illo dolore velit,
          eligendi laborum explicabo nihil! Obcaecati amet incidunt saepe animi
          consequuntur, debitis at iure nostrum quod qui autem deleniti,
          consequatur quae sit veniam doloremque excepturi ad officiis
          temporibus velit quasi? Minus itaque temporibus ullam ad officia ea
          eligendi veritatis corrupti natus ratione doloribus nemo obcaecati
          debitis odio eaque qui at, sed dicta. Voluptatum vitae illo repellat
          iste impedit.
        </p>
      </div>
    </section>
  );
}

export default App;
