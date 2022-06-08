import React, { useContext,useState } from "react";

import { getDatabase, ref, onValue } from "firebase/database";
import Selector from "./selector";


const Selector2 = ({alumno}) => {
  let foto;

  // const dbRef = ref(getDatabase());
  const db = getDatabase();

  let data;
   const starCountRef = ref(db, "alumnos/" +  `${alumno.uid}` + "/foto");
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();

    console.log(snapshot.val());
  });



  foto=data;
 
  return (
    <div>


      <Selector foto={foto} />
    </div>
  );
};


export default Selector2;