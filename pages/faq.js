import Link from "next/link";
import { useEffect, useState } from "react"


export default function FaqPage() {
  const [faq, setFaq] = useState([]);
  useEffect(()=>{
    const faq_api_url = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    fetch(faq_api_url)
    .then((serverResponse)=>{
      return serverResponse.json()
    })
    .then((jsonResponse)=>(
      setFaq(jsonResponse),
      console.log(jsonResponse)
      ));
  }, []);
  return (
    <div>
      <Link href="/">
        <a>Back </a>
      </Link>
    <ul>
      {faq.map(({answer, question})=>(
      <li key={question}> 
      <article>
        <h2> {question}</h2>
        <p>{answer}</p>
        </article>
      </li>
    ))}
    </ul>
    </div>
  );
}
