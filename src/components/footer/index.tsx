export const Footer = () => {
  return (
    <footer className="bg-[#0A1A2D] mt-10 w-full bottom-0 absolute">
      <div className="mx-10 max-w-screen px-4 py-6 lg:py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="mb-8 md:mb-0 gap-2">
          <img
            src="/logo_ibec.png"
            alt="Logo Entrada Certa"
            className=" h-16 object-fill"
          ></img>
          <p>
            “Se és teólogo, tu rezarás de verdade, e se tu rezas de verdade, tu
            serás teólogo”
            <br />- Evágrio
          </p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-sm font-semibold uppercase dark:text-white mb-4 text-2xl">
            Contribua
          </h2>
          <ul className="">
            <li className="mb-2">
              Banco Itaú S.A. (341) <br/> Agência: 0155 <br/>C/C: 10.855-8 <br/>Favorecido:
              Sociedade Missionária Defesa do Evangelho <br/>CNPJ / PIX:
              11.998.005/0001-71
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-sm font-semibold uppercase dark:text-white mb-4 text-2xl">
            Contato
          </h2>
          <ul className="">
            <li className="mb-2">
              Estrada dos Orquidófilos, 386, Embu das Artes, São Paulo.
              <br/>CEP 06833-380
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};