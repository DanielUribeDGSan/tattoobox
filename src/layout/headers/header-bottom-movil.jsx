import Image from "next/image";
import Link from "next/link";

const IconTatto = () => {
  return (
    <div style={{ height: "23px" }}>
      <Image
        src="/assets/img/svg/tattoo-machine.svg"
        alt="svg tattoo"
        priority
        width={23}
        height={23}
      />
    </div>
  );
};

const IconInfinity = () => {
  return (
    <div style={{ height: "23px" }}>
      <Image
        src="/assets/img/svg/infinity-svgrepo-com.svg"
        alt="svg tattoo"
        priority
        width={23}
        height={23}
      />
    </div>
  );
};

const IconPerson = () => {
  return (
    <div style={{ height: "23px" }}>
      <Image
        src="/assets/img/svg/person-svgrepo-com.svg"
        alt="svg tattoo"
        priority
        width={23}
        height={23}
      />
    </div>
  );
};

const IconSearch = () => {
  return (
    <div style={{ height: "23px" }}>
      <Image
        src="/assets/img/svg/search-svgrepo-com.svg"
        alt="svg tattoo"
        priority
        width={23}
        height={23}
      />
    </div>
  );
};

const IconAdd = () => {
  return (
    <div style={{ height: "23px" }}>
      <Image
        src="/assets/img/svg/add-svgrepo-com.svg"
        alt="svg tattoo"
        priority
        width={23}
        height={23}
      />
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
      {/* <div className="col-auto add">
        <IconAdd />
      </div> */}
      <div className="col-auto">
        <Link href="/tatuajes">
          <a>
            <IconSearch />
            <span>Artistas</span>
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
