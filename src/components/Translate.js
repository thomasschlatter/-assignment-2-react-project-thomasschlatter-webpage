import axios from "axios";

function handleTranslateClick() {
  const text = document.querySelector("#input").value;
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  const options = {
    method: "POST",
    url: "https://translate-plus.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "8429ffb024mshb843440bea95b67p15bdedjsn1b0644b480fa",
      "X-RapidAPI-Host": "translate-plus.p.rapidapi.com",
    },
    data: `{"text":"${text}","source":"${from}","target":"${to}"}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const translatedText = response.data.translations.translation;
      document.querySelector("#output").value = translatedText;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function Translate() {
  return (
    <section>
      <h1>Translate</h1>
      <div>
        <textarea id="input"></textarea>
        <div>
          From:{" "}
          <select id="from" defaultValue={"en"}>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sv">Swedish</option>
            <option value="zh-Hans">Chinese</option>
          </select>
        </div>
        <div>
          To:{" "}
          <select id="to" defaultValue={"de"}>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sv">Swedish</option>
            <option value="zh-Hans">Chinese</option>
          </select>
        </div>
        <button onClick={handleTranslateClick}>Translate!</button>
        <div>
          <textarea id="output"></textarea>
        </div>
      </div>
    </section>
  );
}
