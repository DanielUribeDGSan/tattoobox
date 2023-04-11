import React from "react";
import Link from "next/link";

export const BtnAcheduleAppointment = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <Link href="#">
        <a className="btn-small-black">Agendar</a>
      </Link>
    </div>
  );
};
