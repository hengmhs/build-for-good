import { useContext, useEffect } from "react";
import HintsContext from "../Context/hintsProvider";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function useHints() {
  const { hints, setHints } = useContext(HintsContext);

  useEffect(() => {
    if (Object.entries(hints).length === 0) {
      const hintsRef = ref(database, "hints");
      onValue(hintsRef, (snapshot) => {
        const data = snapshot.val();
        setHints(data);
      });
    }
  }, []);

  return useContext(HintsContext);
}
