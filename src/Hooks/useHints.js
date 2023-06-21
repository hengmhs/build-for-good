import { useContext, useEffect } from "react";
import HintsContext from "../Context/hintsProvider";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function useHints() {
  const { hints, setHints } = useContext(HintsContext);

  useEffect(() => {
    console.log("Object.entries(hints): ", Object.entries(hints));
    if (Object.entries(hints).length === 0) {
      const hintsRef = ref(database, "hints");
      onValue(hintsRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setHints(data);
      });
    }
  }, []);

  return useContext(HintsContext);
}
