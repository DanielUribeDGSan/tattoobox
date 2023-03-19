import Link from "next/link";

const IconTatto = () => {
  return (
    <div>
      <img src="/assets/img/svg/tattoo-machine.svg" alt="svg tattoo" />
    </div>
  );
};

const IconInfinity = () => {
  return (
    <div>
      <img src="/assets/img/svg/infinity-svgrepo-com.svg" alt="svg tattoo" />
    </div>
  );
};

const IconPerson = () => {
  return (
    <div>
      <img src="/assets/img/svg/person-svgrepo-com.svg" alt="svg tattoo" />
    </div>
  );
};

const IconSearch = () => {
  return (
    <div>
      <img src="/assets/img/svg/search-svgrepo-com.svg" alt="svg tattoo" />
    </div>
  );
};

const IconAdd = () => {
  return (
    <div>
      <img src="/assets/img/svg/add-svgrepo-com.svg" alt="svg tattoo" />
    </div>
  );
};

export const HeaderBottomMovil = ({ setSidebarOpen }) => {
  return (
    <div className="header-movil-bottom row">
      <div className="col-auto">
        <Link href="/">
          <a>
            <IconInfinity />
            <span>Inicio</span>
          </a>
        </Link>
      </div>
      <div className="col-auto">
        <Link href="/tatuajes">
          <a>
            <IconTatto />
            <span>Tatuajes</span>
          </a>
        </Link>
      </div>
      <div className="col-auto add">
        <IconAdd />
      </div>
      <div className="col-auto">
        <Link href="/tatuajes">
          <a>
            <IconSearch />
            <span>Buscar</span>
          </a>
        </Link>
      </div>
      <div className="col-auto">
        <button
          type="button"
          title="Perfil"
          aria-label="Perfil"
          onClick={() => setSidebarOpen(true)}
        >
          <IconPerson />
          <span>Perfil</span>
        </button>
      </div>
    </div>
  );
};
