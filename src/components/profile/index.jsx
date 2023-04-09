import React, { useEffect } from "react";
import { Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import ProfileArea from "./profile-area";

const Profile = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      {/* <Header /> */}
      {/* <Breadcrumb title={"Registro"} /> */}
      <ProfileArea />
      {/* <FooterThree /> */}
    </Wrapper>
  );
};

export default Profile;
